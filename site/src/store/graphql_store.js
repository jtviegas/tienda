const { DataStore, Predicates, SortDirection } = require('@aws-amplify/datastore');
const { Image, Item, Basket, TrxItem, Trx, Entity, Payment, Address } = require('../models');

class Store {

    saveImage(image){
        return DataStore.save(new Image(image));
    }

    getImage(id){
        return DataStore.query(Image, id);
    }
    // https://docs.amplify.aws/lib/datastore/data-access/q/platform/js#predicates
    getImages(itemId){
        if ( null !== itemId )
            return DataStore.query(Image, o => o.itemID("eq", itemId), {sort: o => o.index(SortDirection.ASCENDING)});
        else
            return DataStore.query(Image, Predicates.ALL, {sort: o => o.index(SortDirection.ASCENDING)});
    }

    deleteImage(ids){
        if( Array.isArray(ids) && 0 < ids.length )
            return DataStore.delete(Image, o => o.id("contains", ids));
        else
            return DataStore.delete(Image, Predicates.ALL);
    }

    saveItem(item){
        return DataStore.save(new Item(item));
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
        return DataStore.save(new Basket(basket));
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
        return DataStore.save(new TrxItem(trxItem));
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
        return DataStore.save(new Trx(trx));
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
        return DataStore.save(new Entity(entity));
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
        return DataStore.save(new Payment(payment));
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
        return DataStore.save(new Address(address));
    }

    getAddress(id){
        return DataStore.query(Address, id);
    }

    getAddresses(filter, pagination){
        if ( null !== filter )
            return DataStore.query(Address, filter, pagination);
        else
            return DataStore.query(Address, Predicates.ALL, pagination);
    }

    deleteAddresses(ids){
        if( Array.isArray(ids) && 0 < ids.length )
            return DataStore.delete(Address, o => o.id("contains", ids));
        else
            return DataStore.delete(Address, Predicates.ALL);
    }

}

export default Store;