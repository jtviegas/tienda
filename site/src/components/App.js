import React, { useReducer, useEffect} from 'react';
import './App.css';
import logger from "../common/logger";
import stateManager from "../services/state_manager";
import eventListener from "../services/event_listener";
import Home from "./Home"
import stateReducer from "../services/app_state_reducer"
import { Hub } from 'aws-amplify';

const initial_state = { items: [], session: null, admin: false}

export default function App() {
  logger.debug('[App|in]')

  const [ state, reducer ] = useReducer(stateReducer, initial_state);
  const dispatcher = stateManager(reducer);
  
  Hub.listen('auth', eventListener(dispatcher));

  useEffect(() => { dispatcher( {type:'session.find'} ); }, []);

  const admin = state.session && Array.isArray(state.session.groups) && ( state.session.groups.includes('dev') || state.session.groups.includes('admin') )
  const result = (
      <Home {...state} dispatcher={dispatcher} admin={admin} />
  );
  
  logger.debug('[App|out]')
  return result;
}
