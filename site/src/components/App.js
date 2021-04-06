import React, { useReducer, useEffect} from 'react';
import './App.css';
import logger from "../common/logger";
import stateManager from "../services/state_manager";
import Home from "./Home"
import { Hub } from 'aws-amplify';

const initial_state = {items: [], session: null, admin: false }

export default function App() {
  logger.info('[App|in]')

  const [ state, dispatch ] = useReducer(stateManager.reducer, initial_state);
  const dispatcher = stateManager.getDispatcher(dispatch);
  Hub.listen('auth', stateManager.hubListener(dispatcher));

  useEffect(() => { dispatcher( {type:'session.find'} ); }, []);

  const admin = state.session && Array.isArray(state.session.groups) && ( state.session.groups.includes('dev') || state.session.groups.includes('admin') )
  const result = (
      <Home {...state} dispatcher={dispatcher} admin={admin} />
  );
  
  logger.debug('[App|out]')
  return result;
}
