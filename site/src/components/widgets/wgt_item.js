import React, { useReducer, Fragment } from 'react';

import PropTypes from "prop-types";
import {Link, useHistory} from "react-router-dom";
import logger from "../../common/logger";
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
import utils from "../../common/utils_func"
import WgtButton from "../widgets/wgt_button"

function updateItem(item, properties, mode){
    logger.info(`[updateItem|in] (${JSON.stringify(item)}, ${JSON.stringify(properties)}, ${mode})`)
    let result = null;
    try {
        if ( mode === 'create' )
            result = new Item(properties)
        else
            result = Item.copyOf(item, updated => {
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
    catch(err){
        logger.error(err)
    }
    logger.info(`[updateItem|out] => ${JSON.stringify(result)}`)
    return result;
}

function submitFunction(general_dispatcher, history){

    const f = (event, mode, oldItem, newItem) => {
        event.preventDefault();
        logger.info(`[submit_dispatcher.f|in] (${event}, ${mode}, ${oldItem}, ${newItem})`)
        general_dispatcher({type: 'item.save', value: updateItem(oldItem, newItem, mode)})

        logger.info(`[submit_dispatcher.f|out])`)
    }

    return f;
}

const validate = (state) => {

    let validation = { ...state.validation }
    
    for (const [key, value] of Object.entries(state)) {
        switch (key) {
            case 'name':
                validation.name = value.length === 0 ? "please provide a name" : "";
                break;
            case 'eur':
                validation.eur = value > 0.0 ? "" : "price should be higher than 0";
                break;
            default:
                break;
        } 
    }

    let valid = true
    for (const [key, value] of Object.entries(validation)) 
            valid = valid && 0 === value.length
    
    return { ...state, validationObject: validation, valid: valid };
}

function reducer (state, action){ 
        logger.info('[wgt_item.reducer|in] (%s, %s)', JSON.stringify(state), JSON.stringify(action))

        let result = state

        switch (action.type) {
            case 'name':
                result = { ...state, name: action.value };
                break;
            case 'description':
                result = { ...state, description: action.value };
                break;
            case 'eur':
                result = { ...state, eur: parseFloat(action.value)};
                break;
            case 'dob':
                result = { ...state, dob: action.value };
                break;
            case 'dim_wdh':
                result = { ...state, dim_wdh: action.value };
                break;
            case 'weight_kg':
                result = { ...state, weight_kg: parseInt(action.value) };
                break;   
            case 'active':
                result = { ...state, active: action.value };
                break;
            case 'stock_qty':
                result = { ...state, stock_qty: parseFloat(action.value) };
                break;
            case 'stock_measure':
                result = { ...state, stock_measure: action.value };
                break;
            case 'image':
                state.images.push(action.value)
                result = { ...state, images: state.images }; 
                break;
            case 'removeImage':
                result = { ...state, images: utils.removeFromArray(state.images, action.value) }; 
                break;
            case 'mode':
                result = { ...state, mode: action.value }; 
                break;
            case 'validation' :
                result = { ...state, validationObject: action.value }; 
                break;
            case 'valid' :
                result = { ...state, valid: action.value };
                break;
            default:
                throw new Error(`${action.type} is not a valid action`);
        } 
        
        validate(result)
        result = validate(result);
        logger.info(`[wgt_item.reducer|out] => ${JSON.stringify(result)}`)

        return result
}

function image_dispatcher(general_dispatcher, local_dispatcher){
    const f = (payload) => {
        logger.info(`[image_dispatcher.f|in] ${JSON.stringify(payload)}`)
        const file = payload.value
        // logger.info(`image - type:${payload.value.type} name:${payload.value.name}`)
        const callback = { then: (o) => local_dispatcher({type: 'image', value: o.key}), catch: (err) => {logger.err(err)}}
        return general_dispatcher({type: 'image.save', value: file, callback: callback})
    }
    return f;
}

let WgtItem = ({item, dispatcher, admin}) =>  {
    logger.info(`[WgtItem|in] (${JSON.stringify(item)}, <dispatcher>, ${admin})`)

    const initial_mode = ( admin && ( -1 === Object.keys(item).indexOf('id') ) ? 'create' : 'view' )
    const [{ id, name, description, eur, dob, dim_wdh, weight_kg, active, stock_qty, 
        stock_measure, images, mode, validationObject, valid}, local_dispatch] = useReducer(reducer, {...item, 
            mode: initial_mode, 
            validationObject: {
                name: ""
                , eur: ""
            }, valid: false}); 
        const edit = admin && (mode === 'edit' || mode === 'create')
        logger.info(`[WgtItem] (${JSON.stringify({ id, name, description, eur, dob, dim_wdh, weight_kg, active, stock_qty, 
            stock_measure, images, mode, validationObject, edit, valid})})`)
        const history = useHistory();
        const submit = submitFunction(dispatcher, history);

    return (
        <form noValidate>
            <ImageCarousel id={id} imageKeys={images} edit={edit} dispatcher={local_dispatch}/>

            <div className="row mt-5 mb-5">
                <div className="col-12 col-md-6 mb-3"> <WgtCheckbox name='active' value={active} edit={edit} dispatcher={local_dispatch} /></div>
                { edit &&
                    <div className="col-12 col-md-6 mb-3"> <WgtFile name='image' dispatcher={image_dispatcher(dispatcher, local_dispatch)} label='add image' extraclasses='float-right'/></div>
                }
            </div>
            <div className="row">
                <div className="col-12 col-lg-6 mb-3"> <WgtString name='name' value={name} edit={edit} dispatcher={local_dispatch} /></div>
                <div className="col-12 col-md-6 col-lg-3 mb-3"><WgtNumber name='eur' value={eur} edit={edit} dispatcher={local_dispatch} label='price' symbol='€' /></div>
                <div className="col-12 col-md-6 col-lg-3 mb-3"><WgtDate name='dob' value={dob} edit={edit} dispatcher={local_dispatch} label='date'/></div>
                <div className="col-12 mb-3"><WgtText name='description' value={description} edit={edit} dispatcher={local_dispatch}/></div>
                <div className="col-12 col-md-6 col-lg-3 mb-3"><WgtNumber name='weight_kg' value={weight_kg} edit={edit} dispatcher={local_dispatch} label='weight' symbol='kg'/></div>
                <div className="col-12 col-md-6 col-lg-3 mb-3"><WgtString name='dim_wdh' value={dim_wdh} edit={edit} dispatcher={local_dispatch} label='dimension: width x depth x height'/></div>
                <div className="col-12 col-md-6 col-lg-3 mb-3"><WgtNumber name='stock_qty' value={stock_qty} edit={edit} dispatcher={local_dispatch} label='stock quantity' step="1"/></div>
                <div className="col-12 col-md-6 col-lg-3 mb-3"><WgtSelect name='stock_measure' value={stock_measure} options={Object.values(StockUnit)} edit={edit} dispatcher={local_dispatch} label='stock measure'/></div>
            </div>
            <div className="row mt-5 mb-5">
                {!edit && admin &&
                    <div className="col-12 mb-3">
                        <WgtButton name={'mode'} value={'edit'} dispatcher={local_dispatch} label={'edit'} extraclasses={'float-right'}/> 
                    </div>
                }
                <div className="col-12 col-sm-6 col-md-8 col-lg-10"></div>
                
                { admin && (mode === 'edit') &&  // allow to cancel edition mode
                    <div className="col-12 col-sm-3 col-md-2 col-lg-1">
                        <WgtButton name={'mode'} value={'view'} dispatcher={local_dispatch} label={'cancel'} extraclasses={'float-right'}/> 
                    </div>
                }
                { admin && (mode === 'create') &&  // allow to cancel edition mode
                    <div className="col-12 col-sm-3 col-md-2 col-lg-1">
                        <Link to="/shop">
                            <WgtButton name={'mode'} value={'view'} dispatcher={null} label={'cancel'} extraclasses={'float-right'}/> 
                        </Link>
                    </div>
                }
                { admin && edit &&  
                
                // dispatcher( { type: 'item.save', value: updateItem(item, {name, description, eur, dob, dim_wdh, weight_kg, active, stock_qty, stock_measure, images }, mode)
                    <div className="col-12 col-sm-3 col-md-2 col-lg-1">
                        <WgtButton name={'save'} value={'item'} dispatcher={null} label={'save'} extraclasses={'float-right'} onclick={
                            e => submit(e, mode, item,  {name, description, eur, dob, dim_wdh, weight_kg, active, stock_qty, stock_measure, images }) } 
                            enabled={valid}/> 
                    </div> 
                }
            </div>
            </form>
    ); 
};

export default WgtItem;

WgtItem.propTypes = {
    name: PropTypes.string.isRequired, 
    description: PropTypes.string, 
    eur: PropTypes.number.isRequired, 
    dob: PropTypes.number, 
    dim_wdh: PropTypes.string, 
    weight_kg: PropTypes.string, 
    active: PropTypes.bool.isRequired, 
    stock_qty: PropTypes.number, 
    stock_measure: PropTypes.string, 
    images: PropTypes.arrayOf(PropTypes.string)
}