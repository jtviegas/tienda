// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import {DataStore} from '@aws-amplify/datastore';
import {Group, Entity, TrxItem, Payment, Transaction, Adress, Item} from './models';

let createData = async () => {

    await DataStore.save(
        new Group({
            "name": "Lorem ipsum dolor sit amet",
            "tags": "Lorem ipsum dolor sit amet"
        })
    );

    await DataStore.save(
        new Entity({
            "name": "Lorem ipsum dolor sit amet",
            "dob": 1020,
            "phone": "Lorem ipsum dolor sit amet",
            "email": "Lorem ipsum dolor sit amet",
            "fiscal_id": "Lorem ipsum dolor sit amet",
            "tags": "Lorem ipsum dolor sit amet",
            "inserted": 1020,
            "updated": 1020,
            "group": ""/* Provide a Group instance here */,
            "transactions": [],
            "adresses": []
        })
    );

    await DataStore.save(
        new TrxItem({
            "quantity": 1020,
            "value_eur": 123.45,
            "tax": 123.45,
            "inserted": 1020,
            "item": ""/* Provide a Item instance here */,
            "updated": 1020,
            "transactionID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
        })
    );

    await DataStore.save(
        new Payment({
            "id2": "Lorem ipsum dolor sit amet",
            "inserted": 1020,
            "updated": 1020
        })
    );

    await DataStore.save(
        new Transaction({
            "inserted": 1020,
            "updated": 1020,
            "payment": ""/* Provide a Payment instance here */,
            "trxItems": [],
            "entityID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
        })
    );

    await DataStore.save(
        new Adress({
            "part_1": "Lorem ipsum dolor sit amet",
            "part_2": "Lorem ipsum dolor sit amet",
            "postal_code": "Lorem ipsum dolor sit amet",
            "country": "Lorem ipsum dolor sit amet",
            "tags": "Lorem ipsum dolor sit amet",
            "entityID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
        })
    );

    await DataStore.save(
        new Item({
            "name": "Lorem ipsum dolor sit amet",
            "notes": "Lorem ipsum dolor sit amet",
            "current_value_eur": 123.45,
            "images": "Lorem ipsum dolor sit amet",
            "tags": "Lorem ipsum dolor sit amet",
            "dimension_wdh": "Lorem ipsum dolor sit amet",
            "weight_kg": 123.45,
            "dob": 1020,
            "inserted": 1020,
            "updated": 1020
        })
    );


    let updateData = async () => {

        /* Models in DataStore are immutable. To update a record you must use the copyOf function
        to apply updates to the item’s fields rather than mutating the instance directly */
        await DataStore.save(Item.copyOf(CURRENT_ITEM, item => {
            // Update the values on {item} variable to update DataStore entry
        }));

        /* Models in DataStore are immutable. To update a record you must use the copyOf function
        to apply updates to the item’s fields rather than mutating the instance directly */
        await DataStore.save(Adress.copyOf(CURRENT_ITEM, item => {
            // Update the values on {item} variable to update DataStore entry
        }));

        /* Models in DataStore are immutable. To update a record you must use the copyOf function
         to apply updates to the item’s fields rather than mutating the instance directly */
        await DataStore.save(Transaction.copyOf(CURRENT_ITEM, item => {
            // Update the values on {item} variable to update DataStore entry
        }));

        /* Models in DataStore are immutable. To update a record you must use the copyOf function
         to apply updates to the item’s fields rather than mutating the instance directly */
        await DataStore.save(Payment.copyOf(CURRENT_ITEM, item => {
            // Update the values on {item} variable to update DataStore entry
        }));


        /* Models in DataStore are immutable. To update a record you must use the copyOf function
         to apply updates to the item’s fields rather than mutating the instance directly */
        await DataStore.save(TrxItem.copyOf(CURRENT_ITEM, item => {
            // Update the values on {item} variable to update DataStore entry
        }));

        /* Models in DataStore are immutable. To update a record you must use the copyOf function
         to apply updates to the item’s fields rather than mutating the instance directly */
        await DataStore.save(Entity.copyOf(CURRENT_ITEM, item => {
            // Update the values on {item} variable to update DataStore entry
        }));

        /* Models in DataStore are immutable. To update a record you must use the copyOf function
         to apply updates to the item’s fields rather than mutating the instance directly */
        await DataStore.save(Group.copyOf(CURRENT_ITEM, item => {
            // Update the values on {item} variable to update DataStore entry
        }));

    }

    let deleteData = async () => {
        let modelToDelete = await DataStore.query(Group, 123456789);
        DataStore.delete(modelToDelete);

        modelToDelete = await DataStore.query(Entity, 123456789);
        DataStore.delete(modelToDelete);

        modelToDelete = await DataStore.query(TrxItem, 123456789);
        DataStore.delete(modelToDelete);

        modelToDelete = await DataStore.query(Payment, 123456789);
        DataStore.delete(modelToDelete);

        modelToDelete = await DataStore.query(Transaction, 123456789);
        DataStore.delete(modelToDelete);

        modelToDelete = await DataStore.query(Adress, 123456789);
        DataStore.delete(modelToDelete);

        modelToDelete = await DataStore.query(Item, 123456789);
        DataStore.delete(modelToDelete);


    }

    let queryData = async () => {

        let models = await DataStore.query(Item);
        console.log(models);

        models = await DataStore.query(Adress);
        console.log(models);

        models = await DataStore.query(Transaction);
        console.log(models);

        models = await DataStore.query(Payment);
        console.log(models);

        models = await DataStore.query(TrxItem);
        console.log(models);

        models = await DataStore.query(Entity);
        console.log(models);

        models = await DataStore.query(Group);
        console.log(models);


    }


}

