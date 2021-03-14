import React, { Fragment } from 'react';
import { useParams, useRouteMatch, useLocation } from "react-router-dom";
import logger from "../../common/logger";
import WdgItem from "./wgt_item"



let VwItem = ({items, user, admin, dispatcher}) =>  {
    logger.info('[VwItem] (items length:%s, %s, %s, %s)', 
        JSON.stringify(Array.isArray(items) ? items.length : 0), 
        JSON.stringify(user), JSON.stringify(admin), JSON.stringify(dispatcher))
    const { itemid } = useParams()
    const edit = new URLSearchParams(useLocation().search).get('edit');
    logger.info('[VwItem] going to render item id: %s and edit is: %s', itemid, JSON.stringify(edit))
    const item = items.filter(o => o.id === itemid)[0]

    if( item ){
        logger.info('[VwItem] item found: %s', JSON.stringify(item.id))
        let itemWidget;
        /*
        if (edit){
            itemWidget = <WdgItemEdit item={item} user={user}/>
        }
        else */ 
            itemWidget = <WdgItem {... {item, user, admin, dispatcher}} />
        
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
