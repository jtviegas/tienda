import React, { useReducer} from 'react';
import './App.css';
import logger from "../common/logger";
import stateManager from "../services/state_manager";
import Home from "./Home"
import { Hub, Logger } from 'aws-amplify';

const initial_state = {items: [], session: null }

export default function App() {
  logger.info('[App|in]')

  const [ state, dispatch ] = useReducer(stateManager.reducer, initial_state);
  const dispatcher = stateManager.getDispatcher(dispatch);
  Hub.listen('auth', stateManager.hubListener(dispatcher));

  const result = (
      <Home {...state} dispatcher={dispatcher} />
  );
  
  logger.debug('[App|out]')
  return result;
}
