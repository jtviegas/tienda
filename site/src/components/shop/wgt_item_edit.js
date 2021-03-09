import React, { useReducer } from 'react';
import logger from "../../common/logger";
import Form from 'react-bootstrap/Form';
import {NumericInput} from "../common/numeric_input"
import {StockUnit} from "../../models/index"

function whatever2bool(s){

    if( s && typeof(s) === 'boolean')
        return s
    else 
        if (s && typeof(s) === 'string')
            return s.toLowerCase() === "true" || s.toLowerCase() === "on";
        else 
            return true;
    
}

function createImage(){
    return {id:"ab67ba43-1e5d-4502-9b45-a68bd7b3b3f4", itemID:"1e33a623-fdc8-42c0-8f99-32bd5da7964a", src:"http://tmp.tgedr.com.s3-website-us-east-1.amazonaws.com/images/images5.jpeg",index:0}
}



function reducer(state, action) { 
    logger.info('[reducer] (%s, %s)', JSON.stringify(state), JSON.stringify(action))
    switch (action.type) {
        case 'changeName':
            return { ...state, name: action.value };
        case 'changeDescription':
            return { ...state, description: action.value };
        case 'changeEur':
            return { ...state, eur: action.value };
        case 'changeDob':
            return { ...state, dob: action.value };
        case 'changeDimWdh':
            return { ...state, dim_wdh: action.value };
        case 'changeWeightKg':
            return { ...state, weight_kg: action.value };   
        case 'changeActive':
            return { ...state, active: action.value };
        case 'changeStockQty':
            return { ...state, stock_qty: action.value };
        case 'changeStockMeasure':
            return { ...state, stock_measure: action.value };
        case 'changeImages':
            return { ...state, images: action.value }; 
        default:
            throw new Error(`${action.type} is not a valid action`);
    } 
}

let WdgItemEdit = ({item, user}) =>  {
    logger.debug('[WdgItemEdit|in] (%s, %s)', JSON.stringify(item), JSON.stringify(user))

    const [{ name, description, eur, dob, dim_wdh, weight_kg, active, stock_qty, 
        stock_measure, images }, dispatch] = useReducer(reducer, {...item}); 

    logger.info('[WdgItemEdit] state: (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)', 
        JSON.stringify(name), JSON.stringify(description), JSON.stringify(eur), JSON.stringify(dob)
        , JSON.stringify(dim_wdh), JSON.stringify(weight_kg), JSON.stringify(active), JSON.stringify(stock_qty)
        , JSON.stringify(stock_measure), JSON.stringify(images))

    return (
        <div className="container">
            <form> 
            <div className="row">
                <div className="col-12 col-md-6 mb-3">
                    <label htmlFor="name">name</label>
                    <input type="text" className="form-control" id="name" value={name} 
                    onChange={e => dispatch({ type: 'changeName', value: e.target.value})} />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label htmlFor="description">description</label>
                    <textarea className="form-control" rows="3" id="description" value={description} 
                    onChange={e => dispatch({ type: 'changeDescription', value: e.target.value})}/>
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label htmlFor="price">price</label>
                    <div className="input-group">
                        <div className="input-group-prepend"><span className="input-group-text">€</span></div>
                        <NumericInput className="form-control" id="price" value={eur} 
                        dispatcher={e => dispatch({ type: 'changeEur', value: e.target.value})} />
                    </div>
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label htmlFor="date">date</label>
                    <input type="date" className="form-control" id="date" value={new Date(dob).toISOString().split("T")[0]} 
                    onChange={e => dispatch({ type: 'changeDob', value: new Date(e.target.value).getTime()})} />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label htmlFor="dim_wdh">dimension - width x depth x height</label>
                    <input type="text" className="form-control" id="dim_wdh" value={dim_wdh} 
                    onChange={e => dispatch({ type: 'changeDimWdh', value: e.target.value})} />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label htmlFor="weight_kg">weight</label>
                    <div className="input-group">
                        <div className="input-group-prepend"><span className="input-group-text">kg</span></div>
                        <NumericInput className="form-control" id="weight_kg" value={weight_kg} 
                        dispatcher={e => dispatch({ type: 'changeWeightKg', value: e.target.value})} />
                    </div>
                </div>

                <div className="col-12 col-md-6 mb-3">
                    <div className="custom-control custom-checkbox">                  
                        <input type="checkbox" className="custom-control-input" id="itemActive" checked={active} 
                        onChange={e => dispatch({ type: 'changeActive', value: e.target.checked})} />
                        <label className="custom-control-label" htmlFor="itemActive">active</label>
                    </div>
                </div>

                <div className="col-12 col-md-6 mb-3">
                    <label htmlFor="stock_qty">stock quantity</label>
                    <NumericInput className="form-control" id="stock_qty" value={stock_qty} step="1" 
                    dispatcher={e => dispatch({ type: 'changeStockQty', value: e.target.value})} />
                </div>

                <div className="col-12 col-md-6 mb-3">
                    <label htmlFor="stock_measure">stock measure</label>
                    <select className="form-control" id="stock_measure" value={stock_measure} onChange={e => dispatch({ type: 'changeStockMeasure', value: e.target.value})} >
    { Object.values(StockUnit).map((o, index) => <option key={index}>{o}</option>) }
                    </select>
                </div>
                
                <div>
                    <label>{name} </label><br/>
                    <label>{description} </label><br/>
                    <label>{eur} </label><br/>
                    <label>{dob} </label><br/>
                    <label>{dim_wdh} </label><br/>
                    <label>{weight_kg} </label><br/>
                    <label>{active} </label><br/>
                    <label>{stock_qty} </label><br/>
                    <label>{stock_measure} </label><br/>
                </div>

          </div>

          <input className="btn btn-primary" type="button" value="add image" onClick={e => dispatch({ type: 'changeImages', value: [...images, createImage()]})} />
                {/*
                <div className="col-6 col-md-3 mb-3">
                    <label htmlFor="price">price</label>
                    <div className="input-group">   
                        <input type="text" id="price" className="form-control" aria-label="Euro amount (with dot and two decimal places)" value={item.eur}></input>
                        <div className="input-group-append">
                            <span className="input-group-text">€</span>
                            <span className="input-group-text">0.00</span>
                        </div>
                    </div>
                </div>
                 <div className="col-12 col-md-6 mb-3">
                    <label htmlFor="creation">creation</label>
                    <input type="date" className="form-control" id="creation" value={ instance.dob ? instance.dob : null}></input>
                </div> 



                
                */}


                
            </form>
        </div>
    ); 
};

export default WdgItemEdit;
