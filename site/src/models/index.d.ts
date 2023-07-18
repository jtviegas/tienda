import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Warehouse {
  ONE = "ONE",
  TWO = "TWO"
}

export enum Unit {
  KG = "KG",
  LTR = "LTR",
  COUNT = "COUNT",
  METER = "METER"
}

export enum AssetType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO"
}



type StockMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AddressMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EntityMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AssetMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Stock {
  readonly id: string;
  readonly warehouse?: Warehouse | keyof typeof Warehouse | null;
  readonly unit?: Unit | keyof typeof Unit | null;
  readonly value?: number | null;
  readonly itemID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Stock, StockMetaData>);
  static copyOf(source: Stock, mutator: (draft: MutableModel<Stock, StockMetaData>) => MutableModel<Stock, StockMetaData> | void): Stock;
}

export declare class Address {
  readonly id: string;
  readonly street_number_door?: string | null;
  readonly local?: string | null;
  readonly postal_code?: string | null;
  readonly country?: string | null;
  readonly entityID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Address, AddressMetaData>);
  static copyOf(source: Address, mutator: (draft: MutableModel<Address, AddressMetaData>) => MutableModel<Address, AddressMetaData> | void): Address;
}

export declare class Entity {
  readonly id: string;
  readonly name?: string | null;
  readonly is_public?: boolean | null;
  readonly addresses?: (Address | null)[] | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly tax_id?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Entity, EntityMetaData>);
  static copyOf(source: Entity, mutator: (draft: MutableModel<Entity, EntityMetaData>) => MutableModel<Entity, EntityMetaData> | void): Entity;
}

export declare class Item {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly date?: string | null;
  readonly assets?: (Asset | null)[] | null;
  readonly active?: boolean | null;
  readonly dim_width_m?: number | null;
  readonly dim_height_m?: number | null;
  readonly dim_depth_m?: number | null;
  readonly weight_kg?: number | null;
  readonly tags?: string | null;
  readonly tax?: number | null;
  readonly net_price?: string | null;
  readonly stocks?: (Stock | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Item, ItemMetaData>);
  static copyOf(source: Item, mutator: (draft: MutableModel<Item, ItemMetaData>) => MutableModel<Item, ItemMetaData> | void): Item;
}

export declare class Asset {
  readonly id: string;
  readonly src?: string | null;
  readonly index?: number | null;
  readonly tags?: string | null;
  readonly typ?: AssetType | keyof typeof AssetType | null;
  readonly description?: string | null;
  readonly itemID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Asset, AssetMetaData>);
  static copyOf(source: Asset, mutator: (draft: MutableModel<Asset, AssetMetaData>) => MutableModel<Asset, AssetMetaData> | void): Asset;
}