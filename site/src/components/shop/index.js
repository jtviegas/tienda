import React, { Fragment } from 'react';
import { Route, useRouteMatch, useLocation} from "react-router-dom";
import logger from "../../common/logger";
import VwItem from './vw_item';
import VwItems from "./vw_items"
import ShopHeader from "../shop/header"

const Shop = ( {items, session, dispatcher, admin} ) =>  {
    logger.debug(`[Shop|in] (items size: ${items.length} , ${JSON.stringify(session)}, dispatcher, ${admin})`) 
    
    const pageParam = new URLSearchParams(useLocation().search).get('page');
    const { url, path } = useRouteMatch()
    const page = null !== pageParam ? parseInt(pageParam) : 0;
    logger.debug(`[Shop] (url: ${url} | path: ${path} | pageParam: ${pageParam})`)

    const result = (
            <Fragment>
                <ShopHeader admin={admin}/>
                <Route path={"/shop/:itemid"} render={() => <VwItem {...{items, session, dispatcher, admin} }/>} />
                <Route exact path={"/shop"} render={() => <VwItems {...{items, session,dispatcher, page, admin} } />} />       
            </Fragment>
    ); 

    logger.debug('[Shop|out]')
    return result;
};

export default Shop;
