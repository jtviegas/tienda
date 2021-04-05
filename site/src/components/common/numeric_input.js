import React from 'react';


let NumericInput = ({ value, dispatcher, className, step="0.01" , readOnly=false}) => {

    if (null !== value)
        return (
        <div>
            <input type="number" className={className} value={value} onChange={dispatcher} step={step} readOnly={readOnly}/>
        </div>
        )
    else
        return null
};

let Functions = {
    whatever2bool: (s) => {
        if( s && typeof(s) === 'boolean')
            return s
        else 
            if (s && typeof(s) === 'string')
                return s.toLowerCase() === "true" || s.toLowerCase() === "on";
            else 
                return true;
    }
}

export {NumericInput, Functions};





