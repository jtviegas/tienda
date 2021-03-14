import React, { useReducer } from 'react';
import logger from "../../common/logger";
import Form from 'react-bootstrap/Form';
import ImageCarousel from "./wgt_image_carousel"
import {NumericInput} from "../common/numeric_input"
import {StockUnit} from "../../models/index"
import {Item} from "../../models/index"


{/* <input className="btn btn-primary" type="button" value="add image" onClick={e => local_dispatch({ type: 'changeImages', value: [...images, createImage()]})} />
function createImage(){
    return {id:"ab67ba43-1e5d-4502-9b45-a68bd7b3b3f4", itemID:"1e33a623-fdc8-42c0-8f99-32bd5da7964a", src:"http://tmp.tgedr.com.s3-website-us-east-1.amazonaws.com/images/images5.jpeg",index:0}
} */}

function updateItem(item, properties){
    return Item.copyOf(item, updated => {
        updated.name = properties.name;
        updated.description = properties.description;
        updated.eur = properties.eur;
        updated.dob = properties.dob;
        updated.dim_wdh = properties.dim_wdh;
        updated.weight_kg = properties.weight_kg;
        updated.active = properties.active;
        updated.stock_qty = properties.stock_qty;
        updated.stock_measure = properties.stock_measure;
        updated.images = properties.images;
      })
}

function reducer(state, action) { 
    logger.info('[reducer] (%s, %s)', JSON.stringify(state), JSON.stringify(action))
    switch (action.type) {
        case 'changeName':
            return { ...state, name: action.value };
        case 'changeDescription':
            return { ...state, description: action.value };
        case 'changeEur':
            return { ...state, eur: parseFloat(action.value) };
        case 'changeDob':
            return { ...state, dob: action.value };
        case 'changeDimWdh':
            return { ...state, dim_wdh: action.value };
        case 'changeWeightKg':
            return { ...state, weight_kg: parseInt(action.value) };   
        case 'changeActive':
            return { ...state, active: action.value };
        case 'changeStockQty':
            return { ...state, stock_qty: parseFloat(action.value) };
        case 'changeStockMeasure':
            return { ...state, stock_measure: action.value };
        case 'changeImages':
            return { ...state, images: action.value }; 
        default:
            throw new Error(`${action.type} is not a valid action`);
    } 
}

let WdgItem = ({item, session, admin, dispatcher}) =>  {
    logger.info('[WdgItem] (%s, %s, %s, %s)', JSON.stringify(item), JSON.stringify(session), JSON.stringify(admin), JSON.stringify(dispatcher))

    const [{ id, name, description, eur, dob, dim_wdh, weight_kg, active, stock_qty, 
        stock_measure, images }, local_dispatch] = useReducer(reducer, {...item}); 

    logger.info('[WdgItem] state: (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)', 
        JSON.stringify(name), JSON.stringify(description), JSON.stringify(eur), JSON.stringify(dob)
        , JSON.stringify(dim_wdh), JSON.stringify(weight_kg), JSON.stringify(active), JSON.stringify(stock_qty)
        , JSON.stringify(stock_measure), JSON.stringify(images), JSON.stringify(id))

    return (
        <div className="container">
            <ImageCarousel images={images} />
            <form> 
                <div className="row">

                    <div className="col-12 col-lg-6 mb-3">
                        <label htmlFor="name">name</label>
                        <input type="text" className="form-control" id="name" value={name} 
                        onChange={e => local_dispatch({ type: 'changeName', value: e.target.value})} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <label htmlFor="price">price</label>
                        <div className="input-group" > 
                            <div className="input-group-prepend"><span className="input-group-text">€</span></div>                          
                            <NumericInput className="form-control" id="price" value={eur} 
                            dispatcher={e => local_dispatch({ type: 'changeEur', value: e.target.value})} />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <label htmlFor="date">date</label>
                        <input type="date" className="form-control" id="date" value={new Date(dob).toISOString().split("T")[0]} 
                        onChange={e => local_dispatch({ type: 'changeDob', value: new Date(e.target.value).getTime()})} />
                    </div>
                    
                    <div className="col-12 mb-3">
                        <label htmlFor="description">description</label>
                        <textarea className="form-control" rows="3" id="description" value={description} 
                        onChange={e => local_dispatch({ type: 'changeDescription', value: e.target.value})}/>
                    </div>
                    
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <label htmlFor="weight_kg">weight</label>
                        <div className="input-group">
                            <div className="input-group-prepend"><span className="input-group-text">kg</span></div>
                            <NumericInput className="form-control" id="weight_kg" value={weight_kg} 
                            dispatcher={e => local_dispatch({ type: 'changeWeightKg', value: e.target.value})} />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <label htmlFor="dim_wdh">dimension: width x depth x height</label>
                        <input type="text" className="form-control" id="dim_wdh" value={dim_wdh} 
                        onChange={e => local_dispatch({ type: 'changeDimWdh', value: e.target.value})} />
                    </div>
                    

                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <label htmlFor="stock_qty">stock quantity</label>
                        <NumericInput className="form-control" id="stock_qty" value={stock_qty} step="1" 
                        dispatcher={e => local_dispatch({ type: 'changeStockQty', value: e.target.value})} />
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <label htmlFor="stock_measure">stock measure</label>
                        <select className="form-control" id="stock_measure" value={stock_measure} onChange={e => local_dispatch({ type: 'changeStockMeasure', value: e.target.value})} >
                            { Object.values(StockUnit).map((o, index) => <option key={index}>{o}</option>) }
                        </select>
                    </div>
                    
                </div>

                <div className="row mt-5 mb-5">
                    <div className="col-12 col-md-6 mb-3">
                            <div className="custom-control custom-checkbox">                  
                                <input type="checkbox" className="custom-control-input" id="itemActive" checked={active} 
                                onChange={e => local_dispatch({ type: 'changeActive', value: e.target.checked})} />
                                <label className="custom-control-label" htmlFor="itemActive">active</label>
                            </div>
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                        <input className="btn btn-primary float-right" type="button" value="save" 
                        onClick={e => dispatcher({ type: 'item.save', value: updateItem(item, {id, name, description, eur, dob, dim_wdh, weight_kg, active, stock_qty, 
                            stock_measure, images }) })} />

                    </div>
                </div>

                {/* <div>
                    <label>id: {id} </label><br/>
                    <label>{name} </label><br/>
                    <label>{description} </label><br/>
                    <label>{eur} </label><br/>
                    <label>{dob} </label><br/>
                    <label>{dim_wdh} </label><br/>
                    <label>{weight_kg} </label><br/>
                    <label>{active.toString()}</label><br/>
                    <label>{stock_qty} </label><br/>
                    <label>{stock_measure} </label><br/>
                </div> */}

            </form>
        </div>
    ); 
};

export default WdgItem;
