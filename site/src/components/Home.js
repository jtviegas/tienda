import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import Shop from "./shop/index"
import Header from "./Header"
import Footer from "./Footer"
import logger from "../common/logger";
import Auth from "./auth/index";

export default function Home({items, session, dispatcher, admin}) {
  logger.info(`[Home|in] (items.length: ${items.length}, session: ${session}, <dispatcher>, ${admin})`);

  const result = (
      <Router>
          <div className="container-fluid">
            <Header { ...{session, dispatcher, admin} } />
            <Switch>
              <Route path={"/shop"} render={() => <Shop { ...{ items, session, dispatcher, admin } } />} />
              <Route exact={true} path="/auth" render={() => <Auth />}  />
              <Route exact={true} path={"/"} render={() => <Redirect to={"/shop"} />} />
            </Switch>
            <Footer/>
          </div>
      </Router>
  );
  logger.debug('[Home|out]')
  return result;
}
