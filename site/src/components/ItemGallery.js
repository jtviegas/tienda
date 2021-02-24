import React, { useContext } from 'react';
import ItemWidget from '../components/ItemWidget';
import {ItemsContext} from "../state/context";

let ItemGallery = () =>  {
    const items = useContext(ItemsContext);
    if ( null !== items && Array.isArray(items) && (0 < items.length) ){
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
