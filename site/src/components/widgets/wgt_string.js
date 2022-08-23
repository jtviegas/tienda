import React, { Fragment } from 'react';
import logger from "../../common/logger";

let WgtString = ({name, value, edit, dispatcher, label=null}) =>  {
    logger.debug(`[WdgString|in] (${name}, ${value}, ${edit}, <dispatcher>, ${label})`)
    logger.debug('[WdgString|out')
    return (
        <Fragment>                  
            <label htmlFor={name}>{ label ? label :  name } </label>
            <input type="text" className="form-control" id={name} value={value} 
            onChange={e => {e.preventDefault(); dispatcher({ type: name, value: e.target.value})}} readOnly={!edit} />
        </Fragment>


    ); 
};

export default WgtString;