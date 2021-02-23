import React, { useEffect, useState } from 'react';
import Store from "../store/graphql_store"
import utilsStore from "../store/utils_store"
import ItemWidget from '../components/ItemWidget';

let store = new Store()


function makeItems() {
    return utilsStore.createItems(3, 2);
}

function fetchItems() {
    return store.getItems(null,{page: 0, limit: 16});
}

export default function ItemGallery() {
    const [items, setItems] = useState([]); 

    useEffect(() => {  
        //makeItems().then(() => 
        fetchItems().then(o => {
            console.log("items:", o);
            setItems(o);
        });
    }, []);

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

