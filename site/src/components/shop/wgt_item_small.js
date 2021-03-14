import React from 'react';
import { Link } from "react-router-dom";

const getItemImageSrc = (item) => {
    let result = null
    if (null !== item && item.images && Array.isArray(item.images)){
         let filter = item.images.filter(o => o.index === 0)
        if ( 0 < filter.length )
            result = filter[0].src
    }
    return result
}



const ItemSmallWidget = ({ item, admin, dispatcher }) => {

    if (null !== item)
        return (
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                    <img src={getItemImageSrc(item)} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h4 className="card-title">{item.name}</h4>
                        <h6 className="card-title">{item.id}</h6>
                        <p className="card-text">{item.description}</p>
                        {admin && <Link to={"shop/" + item.id +  "?edit=true" } className="btn btn-outline-dark btn-sm m-1 float-right">edit it</Link>}
                        <Link to={"shop/" + item.id } className="btn btn-outline-dark btn-sm m-1 float-right">check it</Link>
                        <button onClick={dispatcher.bind(null,{type:'basket.add.item', value: item.id})} type="button" className="btn btn-outline-dark btn-sm m-1 float-right">add to basket</button>
                    </div>
                </div>
            </div> 
        )
    else
        return null
};

export default ItemSmallWidget;