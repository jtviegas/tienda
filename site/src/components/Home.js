import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import Shop from "./shop/index"
import Header from "./Header"
import Footer from "./Footer"
import logger from "../common/logger";
import Auth from "./auth/index";

export default function Home({items, session, dispatcher}) {
  logger.info('[Home|in]');
  logger.debug('[Home] (items.length: %d, session: %s, dispatcher: %s)', 
    Array.isArray(items) ? items.length: 0, JSON.stringify(session), typeof(dispatcher));

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
  logger.debug('[Home|out]')
  return result;
}
