import { ModelInit, MutableModel, PersistentModelConstructor } from "../services/store/@aws-amplify/datastore";

export enum StockUnit {
  G = "G",
  ML = "ML",
  COUNT = "COUNT"
}

export enum TrxStatus {
  STARTED = "STARTED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED"
}

export enum PaymentStatus {
  STARTED = "STARTED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED"
}

export enum EntityType {
  ADMIN = "ADMIN",
  PRIVATE = "PRIVATE",
  ORGANIZATION = "ORGANIZATION"
}

export enum AddressType {
  FISCAL = "FISCAL",
  DELIVER = "DELIVER"
}



export declare class Image {
  readonly id: string;
  readonly itemID: string;
  readonly src: string;
  readonly index?: number;
  constructor(init: ModelInit<Image>);
  static copyOf(source: Image, mutator: (draft: MutableModel<Image>) => MutableModel<Image> | void): Image;
}

export declare class Item {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly eur: number;
  readonly dob?: number;
  readonly dim_wdh?: string;
  readonly weight_kg?: number;
  readonly active: boolean;
  readonly stock_qty?: number;
  readonly stock_measure?: StockUnit | keyof typeof StockUnit;
  readonly images?: (Image | null)[];
  readonly index?: number;
  readonly trxItems?: (TrxItem | null)[];
  readonly basketID?: string;
  constructor(init: ModelInit<Item>);
  static copyOf(source: Item, mutator: (draft: MutableModel<Item>) => MutableModel<Item> | void): Item;
}

export declare class TrxItem {
  readonly id: string;
  readonly qty: number;
  readonly eur: number;
  readonly tax: number;
  readonly item?: Item;
  readonly trxID: string;
  constructor(init: ModelInit<TrxItem>);
  static copyOf(source: TrxItem, mutator: (draft: MutableModel<TrxItem>) => MutableModel<TrxItem> | void): TrxItem;
}

export declare class Trx {
  readonly id: string;
  readonly buyer_id: string;
  readonly buyer_name?: string;
  readonly buyer_phone?: string;
  readonly buyer_email?: string;
  readonly buyer_fiscal_id?: string;
  readonly deliver_address_id: string;
  readonly deliver_address_house?: string;
  readonly deliver_address_road?: string;
  readonly deliver_address_city?: string;
  readonly deliver_address_postalcode?: string;
  readonly deliver_address_country?: string;
  readonly fiscal_address_id: string;
  readonly fiscal_address_house?: string;
  readonly fiscal_address_road?: string;
  readonly fiscal_address_city?: string;
  readonly fiscal_address_postal_code?: string;
  readonly fiscal_address_country?: string;
  readonly status?: TrxStatus | keyof typeof TrxStatus;
  readonly items?: (TrxItem | null)[];
  readonly payments?: (Payment | null)[];
  readonly entityID: string;
  constructor(init: ModelInit<Trx>);
  static copyOf(source: Trx, mutator: (draft: MutableModel<Trx>) => MutableModel<Trx> | void): Trx;
}

export declare class Payment {
  readonly id: string;
  readonly id_external?: string;
  readonly source?: string;
  readonly value: number;
  readonly currency: string;
  readonly status: PaymentStatus | keyof typeof PaymentStatus;
  readonly trxID: string;
  constructor(init: ModelInit<Payment>);
  static copyOf(source: Payment, mutator: (draft: MutableModel<Payment>) => MutableModel<Payment> | void): Payment;
}

export declare class Entity {
  readonly id: string;
  readonly first_name?: string;
  readonly last_name?: string;
  readonly dob?: number;
  readonly phone?: string;
  readonly email?: string;
  readonly fiscal_id?: string;
  readonly adresses?: (Adress | null)[];
  readonly transactions?: (Trx | null)[];
  readonly active?: boolean;
  readonly type: EntityType | keyof typeof EntityType;
  constructor(init: ModelInit<Entity>);
  static copyOf(source: Entity, mutator: (draft: MutableModel<Entity>) => MutableModel<Entity> | void): Entity;
}

export declare class Adress {
  readonly id: string;
  readonly house: string;
  readonly road?: string;
  readonly city: string;
  readonly postal_code: string;
  readonly country: string;
  readonly type: AddressType | keyof typeof AddressType;
  readonly entityID: string;
  readonly active?: boolean;
  constructor(init: ModelInit<Adress>);
  static copyOf(source: Adress, mutator: (draft: MutableModel<Adress>) => MutableModel<Adress> | void): Adress;
}

export declare class Basket {
  readonly id: string;
  readonly items?: (Item | null)[];
  readonly entity?: Entity;
  constructor(init: ModelInit<Basket>);
  static copyOf(source: Basket, mutator: (draft: MutableModel<Basket>) => MutableModel<Basket> | void): Basket;
}