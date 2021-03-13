import React, { Fragment, useReducer, useEffect } from 'react';
import React, { Fragment, useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, useLocation, useRouteMatch } from "react-router-dom";
import './App.css';
import Shop from "./shop/index"
import Header from "./Header"
import Footer from "./Footer"
import logger from "../common/logger";
import stateManager from "../services/state_manager";

const initial_state = {items: [], user: null}

export default function App() {
  logger.info('[App|in]')
  const [ state, dispatch ] = useReducer(stateManager.reducer, initial_state);
  logger.debug('[App]: going to render state: %s', JSON.stringify(state))
  const dispatcher = stateManager.dispatcher(dispatch);
  const result = (
      <Router>
        <Fragment>
          <Header {...state} dispatch={dispatcher} />
          <Route path={"/shop"} render={() => <Shop {...state} dispatch={dispatcher} />} />
          <Route exact path={"/"} render={() => <Redirect to={"/shop"} />} />
          <Footer/>
        </Fragment>
      </Router>
  );
  logger.info('[App|out]')
  return result;
}
