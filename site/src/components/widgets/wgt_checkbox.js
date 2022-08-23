import React from 'react';
import logger from "../../common/logger";

let WgtCheckbox = ({name, value, edit, dispatcher, label=null}) =>  {
    logger.debug(`[WdgCheckbox|in] (${name}, ${value}, ${edit}, <dispatcher>, ${label})`)
    logger.debug('[WdgCheckbox|out')
    return (
        <div className="custom-control custom-checkbox">                  
            <input type="checkbox" className="custom-control-input" id="itemActive" checked={value} 
            onChange={e => {e.preventDefault(); dispatcher({ type: name, value: e.target.checked})}} disabled={!edit}/>
            <label className="custom-control-label" htmlFor="itemActive"> { label ? label :  name } </label>
        </div>
    ); 
};

export default WgtCheckbox;