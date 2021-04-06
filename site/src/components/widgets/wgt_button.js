import React, { Fragment } from 'react';
import logger from "../../common/logger";

let WgtButton = ({name, value, dispatcher, enabled=true, label=null, extraclasses=null, onclick=null}) =>  {
    logger.info(`[WgtButton|in] (${name}, ${value}, <dispatcher>, ${enabled}, ${label})`)
    logger.info('[WgtButton|out')
    return (
        <Fragment>                  
            <button type="button" className={`btn btn-primary ml-1 mr-1 ${extraclasses}`} disabled={!enabled} 
            onClick={onclick !== null ? ( e => onclick(e) ) : ( e => dispatcher({ type: {name}, value: {value}}) ) }>{ label ? label :  name }</button>
        </Fragment>

    ); 
};

export default WgtButton;