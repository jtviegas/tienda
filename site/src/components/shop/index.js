import React, { Fragment, useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, useRouteMatch, useLocation } from "react-router-dom";
import VwItem from './vw_item';
import logger from "../../common/logger";
import ItemsView from "./vw_items"
import { EntityType } from "../../models/index"

const Shop = ({items, user, dispatch}) =>  {

    logger.debug('[Shop|in] (items: %s | user: %s)', JSON.stringify(items), JSON.stringify(user))
    const pageParam = new URLSearchParams(useLocation().search).get('page');
    const { url, path } = useRouteMatch()
    logger.info('[Shop] (url: %s | path: %s | pageParam: %s)', JSON.stringify(url), JSON.stringify(path), JSON.stringify(pageParam))
    let isAdmin = false
    if( user && user.type && EntityType.ADMIN === user.type )
        isAdmin = true

    const currentPage = null !== pageParam ? parseInt(pageParam) : 0;

    logger.debug('[Shop] path: %s', `${path}/:itemid`)
    logger.debug('[Shop|in]')
    const result = (

            <Fragment>
                <Route path={"/shop/:itemid"} render={() => <VwItem items={items} user={user} admin={isAdmin} dispatch={dispatch}/>} />
                <Route exact path={"/shop"} render={() => <ItemsView items={items} user={user} admin={isAdmin} dispatch={dispatch} page={currentPage}/>} />       
            </Fragment>
    ); 
    logger.debug('[Shop|out]')
    return result;
};

export default Shop;
