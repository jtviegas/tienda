import React, { useReducer, Fragment } from 'react';
import logger from "../../common/logger";
import Form from 'react-bootstrap/Form';
import ImageCarousel from "./wgt_image_carousel"
import {StockUnit} from "../../models/index"
import {Item} from "../../models/index"
import WgtCheckbox from "../widgets/wgt_checkbox"
import WgtString from "../widgets/wgt_string"
import WgtFile from "../widgets/wgt_file"
import WgtNumber from "../widgets/wgt_number"
import WgtDate from "../widgets/wgt_date"
import WgtSelect from "../widgets/wgt_select"
import WgtText from "../widgets/wgt_text"


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


function removeImage(images, id){
    logger.info('[removeImage|in] (%s, %s)', JSON.stringify(images), JSON.stringify(id))
    const sameId = (img) => img.id === id;
    const idx = images.findIndex(sameId)
    let result = images
    if (-1 < idx){
        logger.info('[removeImage] removing index %d', idx)
        result = images.slice()
        result.splice(idx,1)
    }
    logger.info('[removeImage|out] => %s', JSON.stringify(result))
    return result
}

function reducer(state, action) { 
    logger.info('[reducer] (%s, %s)', JSON.stringify(state), JSON.stringify(action))
    switch (action.type) {
        case 'name':
            return { ...state, name: action.value };
        case 'description':
            return { ...state, description: action.value };
        case 'eur':
            return { ...state, eur: parseFloat(action.value) };
        case 'dob':
            return { ...state, dob: action.value };
        case 'dim_wdh':
            return { ...state, dim_wdh: action.value };
        case 'weight_kg':
            return { ...state, weight_kg: parseInt(action.value) };   
        case 'active':
            return { ...state, active: action.value };
        case 'stock_qty':
            return { ...state, stock_qty: parseFloat(action.value) };
        case 'stock_measure':
            return { ...state, stock_measure: action.value };
        case 'image':
            return { ...state, images: state.images.push(action.value) }; 
        case 'removeImage':
            return { ...state, images: removeImage(state.images, action.value) };  
        case 'changeEdit':
            return { ...state, edit: action.value }; 
        default:
            throw new Error(`${action.type} is not a valid action`);
    } 
}

let WdgItem = ({item, admin, dispatcher}) =>  {
    logger.info(`[WdgItem|in] (${JSON.stringify(item)}, ${JSON.stringify(admin)}, <dispatcher>)`)

    const [{ id, name, description, eur, dob, dim_wdh, weight_kg, active, stock_qty, 
        stock_measure, images, edit, new_image }, local_dispatch] = useReducer(reducer, {...item, edit: false, new_image: null}); 

    logger.info(`[WdgItem] admin: ${admin}`)
    logger.info(`[WdgItem] edit: ${edit}`)

    return (
        <div className="container">
            <ImageCarousel images={images} admin={admin} edit={edit} dispatcher={local_dispatch}/>
            <form> 
                <div className="row mt-5 mb-5">
                    <div className="col-12 col-md-6 mb-3"> <WgtCheckbox name='active' value={active} edit={edit} dispatcher={local_dispatch}/></div>
                    <div className="col-12 col-md-6 mb-3"> <WgtFile name='image' dispatcher={local_dispatch} label='add image' extraclasses='float-right'/></div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6 mb-3"> <WgtString name='name' value={name} edit={edit} dispatcher={local_dispatch}/></div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3"><WgtNumber name='eur' value={eur} edit={edit} dispatcher={local_dispatch} label='price' symbol='€'/></div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3"><WgtDate name='dob' value={dob} edit={edit} dispatcher={local_dispatch} label='date'/></div>
                    <div className="col-12 mb-3"><WgtText name='description' value={description} edit={edit} dispatcher={local_dispatch}/></div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3"><WgtNumber name='weight_kg' value={weight_kg} edit={edit} dispatcher={local_dispatch} label='weight' symbol='kg'/></div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3"><WgtString name='dim_wdh' value={dim_wdh} edit={edit} dispatcher={local_dispatch} label='dimension: width x depth x height'/></div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3"><WgtNumber name='stock_qty' value={stock_qty} edit={edit} dispatcher={local_dispatch} label='stock quantity' step="1"/></div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3"><WgtSelect name='stock_measure' value={stock_measure} options={Object.values(StockUnit)} edit={edit} dispatcher={local_dispatch} label='stock measure'/></div>
                </div>

                

                <div className="row mt-5 mb-5">

                    {edit === false && admin && 
                    <Fragment>
                        <div className="col-12 mb-3">
                            <button type="button" className="btn btn-primary float-right" type="button" value="edit" onClick={e => local_dispatch({ type: 'changeEdit', value: true})}>edit</button> 
                        </div>
                    </Fragment>
                        
                    }
                    {edit === true && admin && 
                        <Fragment>
                            <div className="col-12 col-sm-6 col-md-8 col-lg-10"></div>
                            <div className="col-12 col-sm-3 col-md-2 col-lg-1">
                                <button className="btn btn-primary float-right" type="button" value="cancel" onClick={e => local_dispatch({ type: 'changeEdit', value: false})}>cancel</button> 
                            </div>
                            <div className="col-12 col-sm-3 col-md-2 col-lg-1">
                                <button className="btn btn-primary float-right" type="button" value="save" 
                                onClick={e => dispatcher({ type: 'item.save', value: updateItem(item, {id, name, description, eur, dob, dim_wdh, weight_kg, active, stock_qty, 
                                stock_measure, images }) })}>save</button> 
                            </div> 
                            
                        </Fragment>
                    }

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
