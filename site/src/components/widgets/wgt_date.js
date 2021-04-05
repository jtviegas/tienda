import React, { Fragment } from 'react';
import logger from "../../common/logger";

let WgtDate = ({name, value, edit, dispatcher, label=null, extraclasses=null}) =>  {
    logger.info(`[WgtDate|in] (${name}, ${value}, ${edit}, <dispatcher>, ${label}, ${extraclasses})`)
    logger.info('[WgtDate|out')
    return (
        <Fragment>                  

            <label htmlFor={name}>{ label ? label :  name }</label>
            <div className="input-group" >   
                <div>
                    <input type="date" id={name} className={`form-control ${extraclasses}`} 
                        value={new Date(value).toISOString().split("T")[0]} readOnly={!edit}
                        onChange={e => dispatcher({type: {name}, value: new Date(e.target.value).getTime()})}  />
                </div>

            </div>
        </Fragment>
    ); 
};

export default WgtDate;