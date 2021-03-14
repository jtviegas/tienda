import React, { useReducer} from 'react';
import './App.css';
import logger from "../common/logger";
import stateManager from "../services/state_manager";
import Home from "./Home"

const initial_state = {items: [], user: null}

export default function App() {
  logger.info('[App|in]')

  const [ state, dispatch ] = useReducer(stateManager.reducer, initial_state);
  const dispatcher = stateManager.getDispatcher(dispatch);

  const result = (
      <Home {...state } dispatcher={dispatcher}  />
  );
  
  logger.info('[App|out]')
  return result;
}
