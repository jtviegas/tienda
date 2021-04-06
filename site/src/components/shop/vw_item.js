import React, { useReducer, Fragment } from 'react';
import { useParams, useRouteMatch, useLocation } from "react-router-dom";
import Feedback from '../../../node_modules/react-bootstrap/esm/Feedback';
import logger from "../../common/logger";
import WgtItem from "../widgets/wgt_item"
import WgtButton from "../widgets/wgt_button"


let VwItem = ({items, session, dispatcher, admin}) =>  {
    const { itemid } = useParams()
    logger.info(`[VwItem|in] (items length: ${items.length}, ${session}, <dispatcher>, ${admin}, itemid: ${itemid})`)

    const item = ("0" === itemid ? {} : items.filter(o => o.id === itemid)[0])

    if( item ){
        logger.debug(`[VwItem] item found: ${item}`)
        return  (
            <div className="container">
                <form> 
                <WgtItem {... {item, dispatcher, admin}} />
                
                </form>
            </div>
            );
    }
    else
        return null;

};

export default VwItem;
