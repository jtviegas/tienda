
// @ts-ignore
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore';
// @ts-ignore
import { Item, Basket, TrxItem, Trx, Entity, Payment, Adress } from '../../models';

class Store {

    saveItem(item){
        return DataStore.save(item);
    }

    getItem(id){
        return DataStore.query(Item, id);
    }

    getItems(filter, pagination){
        if ( null !== filter )
            return DataStore.query(Item, filter, pagination, {sort: s => s.index(SortDirection.ASCENDING)});
        else
            return DataStore.query(Item, Predicates.ALL, pagination, {sort: s => s.index(SortDirection.ASCENDING)});
    }

    deleteItems(ids){
        if( Array.isArray(ids) && 0 < ids.length )
            return DataStore.delete(Item, o => o.id("contains", ids));
        else
            return DataStore.delete(Item, Predicates.ALL);
    }

    saveBasket(basket){
        return DataStore.save(basket);
    }

    getBasket(id){
        return DataStore.query(Basket, id);
    }

    deleteBaskets(ids){
        if( Array.isArray(ids) && 0 < ids.length )
            return DataStore.delete(Basket, o => o.id("contains", ids));
        else
            return DataStore.delete(Basket, Predicates.ALL);
    }

    saveTrxItem(trxItem){
        return DataStore.save(trxItem);
    }

    getTrxItems(trxId){
        return DataStore.query(TrxItem, o => o.trxID("eq", trxId));
    }

    deleteTrxItems(ids){
        if( Array.isArray(ids) && 0 < ids.length )
            return DataStore.delete(TrxItem, o => o.id("contains", ids));
        else
            return DataStore.delete(TrxItem, Predicates.ALL);
    }

    saveTrx(trx){
        return DataStore.save(trx);
    }

    getTrxs(entityId){
        return DataStore.query(Trx, o => o.entityID("eq", entityId));
    }

    deleteTrxs(ids){
        if( Array.isArray(ids) && 0 < ids.length )
            return DataStore.delete(Trx, o => o.id("contains", ids));
        else
            return DataStore.delete(Trx, Predicates.ALL);
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

    savePayment(payment){
        return DataStore.save(payment);
    }

    getPayments(filter, pagination){
        if ( null !== filter )
            return DataStore.query(Payment, filter, pagination);
        else
            return DataStore.query(Payment, Predicates.ALL, pagination);
    }

    deletePayments(ids){
        if( Array.isArray(ids) && 0 < ids.length )
            return DataStore.delete(Payment, o => o.id("contains", ids));
        else
            return DataStore.delete(Payment, Predicates.ALL);
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