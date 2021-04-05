import React, { useReducer, Fragment } from 'react';
import logger from "../../common/logger";
import WgtButton from "./wgt_button";

function reducer(state, action) { 
    logger.info('[wgt_file.reducer|in] (%s, %s)', JSON.stringify(state), JSON.stringify(action))
    let result = state;
    switch (action.type) {
        case 'new_file':
            result = { ...state, new_file: action.value }; 
            break;
        default:
            throw new Error(`${action.type} is not a valid action`);
    } 
    logger.info(`[wgt_file.reducer|out] => ${result}`)
    return result;
}

let WgtFile = ({name, dispatcher, label=null, extraclasses=null}) =>  {
    logger.info(`[WgtFile|in] (${name}, <dispatcher>, ${label}, ${extraclasses})`)

    const [{ new_file }, local_dispatch] = useReducer(reducer, {new_file: null}); 

    return (
        <Fragment>                  
            <WgtButton name={name} enabled={null !== new_file} value={new_file} extraclasses={extraclasses} label="add" dispatcher={dispatcher}/>
            <input type="file" className={`btn btn-primary ${extraclasses}`} name={ label ? label :  name } 
                onChange={e => local_dispatch({ type: 'new_file', value: e.target.files[0]})} />
        </Fragment>
    ); 
};

export default WgtFile;