import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';
import Shop from "./shop/index"
import Header from "./Header"
import Footer from "./Footer"
import logger from "../common/logger";


export default function Home({items, user, dispatcher}) {
  logger.info('[Home|in] (items.length: %d, user: %s, dispatcher: %s)', 
    Array.isArray(items) ? items.length: 0, JSON.stringify(user), typeof(dispatcher))
  logger.debug('[Home] items: %s', Array.isArray(items) ? JSON.stringify(items): "")
  const result = (
      <Router>
          <Header { ...{dispatcher, user} } />
          <Route path={"/shop"} render={() => <Shop { ...{ items, user, dispatcher } } />} />
          <Route exact path={"/"} render={() => <Redirect to={"/shop"} />} />
          <Footer/>
      </Router>
  );
  logger.info('[Home|out]')
  return result;
}
