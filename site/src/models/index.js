// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const StockUnit = {
  "G": "G",
  "ML": "ML",
  "COUNT": "COUNT"
};

const TrxStatus = {
  "STARTED": "STARTED",
  "COMPLETED": "COMPLETED",
  "CANCELLED": "CANCELLED"
};

const PaymentStatus = {
  "STARTED": "STARTED",
  "COMPLETED": "COMPLETED",
  "FAILED": "FAILED"
};

const EntityType = {
  "ADMIN": "ADMIN",
  "PRIVATE": "PRIVATE",
  "ORGANIZATION": "ORGANIZATION"
};

const AddressType = {
  "FISCAL": "FISCAL",
  "DELIVER": "DELIVER"
};

const { Item, TrxItem, Trx, Payment, Entity, Adress, Basket } = initSchema(schema);

export {
  Item,
  TrxItem,
  Trx,
  Payment,
  Entity,
  Adress,
  Basket,
  StockUnit,
  TrxStatus,
  PaymentStatus,
  EntityType,
  AddressType
};