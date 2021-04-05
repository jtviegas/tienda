import React, { Fragment } from 'react';
import logger from "../../common/logger";

let WgtSelect = ({name, value, options, edit, dispatcher, label=null, extraclasses=null}) =>  {
    logger.info(`[WgtSelect|in] (${name}, ${value}, ${options}, ${edit}, <dispatcher>, ${label}, ${extraclasses})`)
    logger.info('[WgtSelect|out')
    return (
        <Fragment>                  
            <label htmlFor={name}>{ label ? label :  name }</label>
            <select className={`form-control ${extraclasses}`} id={name} value={value} onChange={e => dispatcher({ type: {name}, value: e.target.value})} disabled={!edit}>
                            { options.map((o, index) => <option key={index}>{o}</option>) }
            </select>
        </Fragment>
    ); 
};

export default WgtSelect;