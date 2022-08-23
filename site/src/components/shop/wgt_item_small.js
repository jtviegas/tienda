import React from 'react';
import { Fragment } from 'react';
import { Link } from "react-router-dom";
import ImageCarousel from "../widgets/wgt_image_carousel"


const ItemSmallWidget = ({ item, dispatcher, session }) => {
    
    if (null !== item)
        return (
            <Fragment>
                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        <ImageCarousel id={item.id} imageKeys={item.images} edit={false} dispatcher={dispatcher}/>
                        <div className="card-body">
                            <h4 className="card-title">{item.name}</h4>
                            <h6 className="card-title">{item.id}</h6>
                            <p className="card-text">{item.description}</p>  
                            <Link to={"shop/" + item.id } className="btn btn-outline-dark btn-sm m-1 float-right">check it</Link>
                            <button onClick={dispatcher.bind(null,{type:'basket.add.item', value: item.id})} type="button" className="btn btn-outline-dark btn-sm m-1 float-right">add to basket</button>
                        </div>
                    </div>
                </div> 
            </Fragment>
            
        )
    else
        return null
};

export default ItemSmallWidget;