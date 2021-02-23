import React, { useEffect, useState } from 'react';
import Store from "../store/graphql_store"
import utilsStore from "../store/utils_store"
import ItemWidget from '../components/ItemWidget';

let store = new Store()



function fetchItems() {
    return utilsStore.createItems(3, 2)
        .then(store.getItems(null,null))
}

export default function ItemGallery() {
    let imgs = []
    const [items, setItems] = useState(imgs); 

    useEffect(() => {  
        fetchItems().then(o => {
            console.log("items:", o)
            setItems(o);
        });
    });

    return (
        <div>
        { items.map(o => <ItemWidget item={o} />) }
        </div>
    ); 
}