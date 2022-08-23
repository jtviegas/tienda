import React, { Fragment } from 'react';
import logger from "../../common/logger";

let WgtSelect = ({name, value, options, edit, dispatcher, label=null, extraclasses=null}) =>  {
    logger.debug(`[WgtSelect|in] (${name}, ${value}, ${options}, ${edit}, <dispatcher>, ${label}, ${extraclasses})`)
    logger.debug('[WgtSelect|out')
    return (
        <Fragment>                  
            <label htmlFor={name}>{ label ? label :  name }</label>
            <select className={`form-control ${extraclasses}`} id={name} value={value} onChange={e => {e.preventDefault(); dispatcher({ type: name, value: e.target.value})}} disabled={!edit} >
                            { options.map((o, index) => <option key={index}>{o}</option>) }
            </select>
        </Fragment>
    ); 
};

export default WgtSelect;