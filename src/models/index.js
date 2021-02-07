// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Group, Entity, Transaction, Payment, TrxItem, Item, Adress } = initSchema(schema);

export {
  Group,
  Entity,
  Transaction,
  Payment,
  TrxItem,
  Item,
  Adress
};