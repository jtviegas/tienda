import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import Shop from "./shop/index"
import Header from "./Header"
import Footer from "./Footer"
import logger from "../common/logger";
import Auth from "./auth/index";

export default function Home(props) {
  logger.info(`[Home|in] props: ${JSON.stringify(props)}`)
  const {items, session, dispatcher} = props
  logger.info('[Home|in] (items.length: %d, session: %s, dispatcher: %s)', 
    Array.isArray(items) ? items.length: 0, JSON.stringify(session), typeof(dispatcher));
  logger.debug('[Home] items: %s', Array.isArray(items) ? JSON.stringify(items): "")

  useEffect(() => { dispatcher( {type:'session.find'} ); }, []);

  const result = (
      <Router>
          <Header { ...{session, dispatcher} } />
          <Switch>
            <Route path={"/shop"} render={() => <Shop { ...{ items, session, dispatcher } } />} />
            <Route exact={true} path="/auth" render={() => <Auth />}  />
            <Route exact={true} path={"/"} render={() => <Redirect to={"/shop"} />} />
          </Switch>
          <Footer/>
      </Router>
  );
  logger.info('[Home|out]')
  return result;
}
