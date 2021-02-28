import React from 'react';
import { isTaggedTemplateExpression } from '../../../node_modules/typescript/lib/typescript';

const getItemImageSrc = (item) => {
    let result = null
    if (null !== item && item.images && Array.isArray(item.images)){
         let filter = item.images.filter(o => o.index === 0)
        if ( 0 < filter.length )
            result = filter[0].src
    }
    return result
}



let WindowWidget = ({ item, dispatch }) => {

    if (null !== item)
        return (
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                    <img src={getItemImageSrc(item)} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.description}</p>
                        <a href={"shop/" + item.id} className="btn btn-outline-dark btn-sm m-1 float-right">check it</a>
                        <button onClick={dispatch.bind(null,{type:'basket.add.item', value: item.id})} type="button" className="btn btn-outline-dark btn-sm m-1 float-right">add to basket</button>
                    </div>
                </div>
            </div> 
        )
    else
        return null
};

export default WindowWidget;