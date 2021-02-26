import React from 'react';
import ItemWidget from '../components/ItemWidget';
import logger from "../common/logger";

let ItemGallery = ({items, user}) =>  {

    logger.info('[ItemGallery|in]: going to render %s user', JSON.stringify(user))
    logger.info('[ItemGallery|in]: going to render %s items', JSON.stringify(items))
    if ( null !== items && Array.isArray(items) && (0 < items.length) ){
        logger.info('[ItemGallery|in]: going to render %d items', items.length)
        return (
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        { items.map((o,index) => <ItemWidget key={index} item={o} />) }
                    </div>
                </div>
            </div>
        ); 
    }
    else {
        return null;
    }
};

export default ItemGallery;
