import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Link, useHistory, useLocation } from "react-router-dom";
import { AmplifySignOut } from '@aws-amplify/ui-react';
import logger from "../common/logger";
import { withRouter} from "react-router";

let Header = ({session, dispatcher}) => {
    logger.debug(`[Header|in] (${session}, ${dispatcher})`);
    const goAuth = function(history) {
        return () => {
            logger.debug("[goAuth|in]")
            const path = `${history.location.pathname}${history.location.search}`
            logger.debug("[goAuth] path: %s", path)
            history.push({
                pathname: '/auth',
                state: { 
                    from: path
                }
              });
            logger.debug("[goAuth|out]")
        }
    }(useHistory());

    let authButton = null;
    let sessionLabel = null;
    if( null !== session ){
       //authButton = <AmplifySignOut className="btn btn-outline-dark btn-sm m-1" />
        authButton = <div className="btn btn-sm m-1" onClick={dispatcher.bind(null,{type:'session.end', value: null})}>sign out</div>
        sessionLabel = <div className="sm m-1">session: {session.email}</div>
    }
    else{
        authButton = <div className="btn btn-sm m-1" onClick={goAuth}>sign in/up</div>
    }
        

    return (
        
        <div className="container">
            <header className="blog-header py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4 pt-1">
                    {sessionLabel}
                </div>
                <div className="col-4 text-center">
                    <a className="blog-header-logo text-dark" href="/">title</a>
                </div>
                <div className="col-4 d-flex justify-content-end align-items-center">
                    <a className="text-muted" href="#" aria-label="Search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" 
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="mx-3" role="img" viewBox="0 0 24 24" focusable="false">
                        <title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
                    </a>
                    {authButton}
                </div>
                </div>
            </header>

            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                <NavLink to="/shop" style={{ padding: "0 10px" }} activeStyle={{ fontWeight: "bold" }} className="p-2 text-muted"> Shop </NavLink>
                <NavLink exact to="/about" style={{ padding: "0 10px" }} activeStyle={{ fontWeight: "bold" }} className="p-2 text-muted"> About </NavLink>
                </nav>
            </div>

        </div>
        
    )

};

export default Header;


