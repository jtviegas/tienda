
// @ts-ignore
// import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore';
// @ts-ignore
// import { Item, Basket, TrxItem, Trx, Entity, Payment, Adress } from '../../models/index';

import { DataStore } from '@aws-amplify/datastore';
import {Item, Entity} from "./models";
import {Predicates, SortDirection} from "aws-amplify";

class Store {

    async saveItem(item){
        return await DataStore.save(item);
    }

    async getItem(id){
        return await DataStore.query(Item, id);
    }

    async getItems(filter, pagination){
        pagination['sort'] = (s => s.index(SortDirection.ASCENDING))
        if ( null !== filter )
            return await DataStore.query(Item, filter, pagination);
        else
            return await DataStore.query(Item, Predicates.ALL, pagination);
    }

    async deleteItems(ids){
        if( Array.isArray(ids) && 0 < ids.length )
            return await DataStore.delete(Item, o => ids.includes(o.id));
        else
            return await DataStore.delete(Item, Predicates.ALL);
    }

    saveEntity(entity){
        return DataStore.save(entity);
    }

    getEntity(id){
        return DataStore.query(Entity, id);
    }

    getEntities(filter, pagination){
        if ( null !== filter )
            return DataStore.query(Entity, filter, pagination);
        else
            return DataStore.query(Entity, Predicates.ALL, pagination);
    }

    deleteEntities(ids){
        if( Array.isArray(ids) && 0 < ids.length )
            return DataStore.delete(Entity, o => o.id("contains", ids));
        else
            return DataStore.delete(Entity, Predicates.ALL);
    }


    saveAddress(address){
        return DataStore.save(address);
    }

    getAddress(id){
        return DataStore.query(Adress, id);
    }

    getAddresses(filter, pagination){
        if ( null !== filter )
            return DataStore.query(Adress, filter, pagination);
        else
            return DataStore.query(Adress, Predicates.ALL, pagination);
    }

    deleteAddresses(ids){
        if( Array.isArray(ids) && 0 < ids.length )
            return DataStore.delete(Adress, o => o.id("contains", ids));
        else
            return DataStore.delete(Adress, Predicates.ALL);
    }

}

export default Store;