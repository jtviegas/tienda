import React, { Fragment } from 'react';
import logger from "../../common/logger";

let WgtSelect = ({name, value, edit, dispatcher, label=null, symbol=null, extraclasses=null, step="0.01"}) =>  {
    logger.info(`[WgtSelect|in] (${name}, ${value}, ${edit}, <dispatcher>, ${label}, ${symbol}, ${extraclasses}, ${step})`)
    logger.info('[WgtSelect|out')
    return (
        <Fragment>                  

            <label htmlFor={name}>{ label ? label :  name }</label>
            <div className="input-group" > 
                { symbol && <div className="input-group-prepend"><span className="input-group-text">{symbol}</span></div> }  
                <div>
                    <input type="number" className={`form-control ${extraclasses}`} value={value} step={step} readOnly={!edit}
                        onChange={e => dispatcher({type: {name}, value: e.target.value})}  />
                </div>

            </div>
        </Fragment>
    ); 
};

export default WgtSelect;