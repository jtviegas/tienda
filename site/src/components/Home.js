import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import Shop from "./shop/index"
import Header from "./Header"
import Footer from "./Footer"
import logger from "../common/logger";
import Auth from "./auth/index";

export default function Home({items, session, dispatcher, admin}) {
  logger.debug(`[Home|in] (items.length: ${items.length}, session: ${session}, <dispatcher>, ${admin})`);

  const result = (
      <Router>
          <Header { ...{session, dispatcher, admin} } />
          <Switch>
            <Route path={"/shop"} render={() => <Shop { ...{ items, session, dispatcher, admin } } />} />
            <Route exact={true} path="/auth" render={() => <Auth />}  />
            <Route exact={true} path={"/"} render={() => <Redirect to={"/shop"} />} />
          </Switch>
          <Footer/>
      </Router>
  );
  logger.debug('[Home|out]')
  return result;
}
