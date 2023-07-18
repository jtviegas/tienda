// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Warehouse = {
  "ONE": "ONE",
  "TWO": "TWO"
};

const Unit = {
  "KG": "KG",
  "LTR": "LTR",
  "COUNT": "COUNT",
  "METER": "METER"
};

const AssetType = {
  "IMAGE": "IMAGE",
  "VIDEO": "VIDEO"
};

const { Stock, Address, Entity, Item, Asset } = initSchema(schema);

export {
  Stock,
  Address,
  Entity,
  Item,
  Asset,
  Warehouse,
  Unit,
  AssetType
};