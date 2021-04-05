import React, { Fragment, useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, useRouteMatch, useLocation, useHistory } from "react-router-dom";
import VwItem from './vw_item';
import logger from "../../common/logger";
import VwItems from "./vw_items"
import { EntityType } from "../../models/index"

const Shop = ( {items, session, dispatcher} ) =>  {
    logger.info('[Shop|in])')
    logger.debug('[Shop] (items size: %s , session: %s, dispatcher: %s)', 
    JSON.stringify(Array.isArray(items) ? items.length : 0), JSON.stringify(session), 
    JSON.stringify(dispatcher))
    
    const pageParam = new URLSearchParams(useLocation().search).get('page');
    const { url, path } = useRouteMatch()
    const page = null !== pageParam ? parseInt(pageParam) : 0;

    logger.debug('[Shop] (url: %s | path: %s | pageParam: %s)', JSON.stringify(url), JSON.stringify(path), JSON.stringify(pageParam))

    logger.debug('[Shop] path: %s', `${path}/:itemid`)
    const result = (
            <Fragment>
                <Route path={"/shop/:itemid"} render={() => <VwItem {...{items, session, dispatcher} }/>} />
                <Route exact path={"/shop"} render={() => <VwItems {...{items, session,dispatcher, page} } />} />       
            </Fragment>
    ); 
    logger.debug('[Shop|out]')
    return result;
};

export default Shop;
