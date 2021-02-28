import React, { Fragment, useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, useRouteMatch } from "react-router-dom";
import ItemView from './itemview';
import logger from "../../common/logger";
import Window from "./window"

const Shop = ({items, user, dispatch}) =>  {
    logger.debug('[Shop|in] (items: %s | user: %s)', JSON.stringify(items), JSON.stringify(user))
    const { url, path } = useRouteMatch()
    //  <Route exact path="/shop/:id" render={() => <ShopItem {...state} dispatch={wrapper}/>} />
    logger.info('[App|in]')
    const result = (
        <Router>
            <Fragment>
                <Route path={`${path}/:itemid`} render={() => <ItemView items={items} user={user} dispatch={dispatch}/>} />
                <Route exact path={`${path}`} render={() => <Window items={items} user={user} dispatch={dispatch}/>} />       
            </Fragment>
        </Router>
        
        ); 

    logger.debug('[Shop|out]')
    return result;
};

export default Shop;
