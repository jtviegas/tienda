import React, { Fragment } from 'react';
import logger from "../../common/logger";

let WgtButton = ({name, value, dispatcher=null, enabled=true, label=null, extraclasses=null, onclick=null}) =>  {
    logger.debug(`[WgtButton|in] (${name}, ${value}, <dispatcher>, ${enabled}, ${label})`)
    logger.debug('[WgtButton|out')
    
    const func = onclick ? onclick : ( dispatcher ? ( e => {e.preventDefault(); dispatcher({ type: name, value: value})} ) : null )
    
    return (
        <Fragment>                  
            <button type="button" className={`btn btn-primary ml-1 mr-1 ${extraclasses}`} disabled={!enabled} onClick={func}>{ label ? label :  name }</button>
        </Fragment>

    ); 
};

export default WgtButton;