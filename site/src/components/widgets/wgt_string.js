import React, { Fragment } from 'react';
import logger from "../../common/logger";

let WgtString = ({name, value, edit, dispatcher, label=null}) =>  {
    logger.info(`[WdgString|in] (${name}, ${value}, ${edit}, <dispatcher>, ${label})`)
    logger.info('[WdgString|out')
    return (
        <Fragment>                  
            <label htmlFor={name}>{ label ? label :  name } </label>
            <input type="text" className="form-control" id={name} value={value} 
            onChange={e => dispatcher({ type: {name}, value: e.target.value})} readOnly={!edit} />
        </Fragment>


    ); 
};

export default WgtString;