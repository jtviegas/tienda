import React, { Fragment } from 'react';
import logger from "../../common/logger";

let WgtDate = ({name, value, edit, dispatcher, label=null, extraclasses=null}) =>  {
    logger.debug(`[WgtDate|in] (${name}, ${value}, ${edit}, <dispatcher>, ${label}, ${extraclasses})`)
    logger.debug('[WgtDate|out')
    return (
        <Fragment>                  

            <label htmlFor={name}>{ label ? label :  name }</label>
            <div className="input-group" >   
                <div>
                    <input type="date" id={name} className={`form-control ${extraclasses}`} 
                        value={value ? new Date(value).toISOString().split("T")[0] : ""} readOnly={!edit}
                        onChange={e => {e.preventDefault(); dispatcher({type: name, value: new Date(e.target.value).getTime()})}} />
                </div>

            </div>
        </Fragment>
    ); 
};

export default WgtDate;