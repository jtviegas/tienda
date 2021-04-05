import React, { Fragment } from 'react';
import { useParams, useRouteMatch, useLocation } from "react-router-dom";
import logger from "../../common/logger";
import WdgItem from "./wgt_item"



let VwItem = ({items, session, dispatcher}) =>  {
    logger.info('[VwItem|in] (items length: %s, %s, <dispatcher>)', JSON.stringify(Array.isArray(items) ? items.length : 0), JSON.stringify(Array.isArray(items)))
    const { itemid } = useParams()
    logger.info(`[VwItem] going to render item id: ${itemid}`)

    const item = items.filter(o => o.id === itemid)[0]

    if( item ){
        logger.debug('[VwItem] item found: %s', JSON.stringify(item.id))
        let itemWidget;
        /*
        if (edit){
            itemWidget = <WdgItemEdit item={item} user={user}/>
        }
        else */ 
            itemWidget = <WdgItem {... {item, session, dispatcher}} />
        
        return (
            <Fragment>
            {itemWidget}
            </Fragment>
        ); 
    }
    else
        return null;

};

export default VwItem;
