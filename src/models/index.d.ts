import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Group {
  readonly id: string;
  readonly name?: string;
  readonly tags?: string;
  constructor(init: ModelInit<Group>);
  static copyOf(source: Group, mutator: (draft: MutableModel<Group>) => MutableModel<Group> | void): Group;
}

export declare class Entity {
  readonly id: string;
  readonly name?: string;
  readonly dob?: number;
  readonly phone?: string;
  readonly email?: string;
  readonly fiscal_id?: string;
  readonly tags?: string;
  readonly inserted?: number;
  readonly updated?: number;
  readonly group?: Group;
  readonly transactions?: (Transaction | null)[];
  readonly adresses?: (Adress | null)[];
  constructor(init: ModelInit<Entity>);
  static copyOf(source: Entity, mutator: (draft: MutableModel<Entity>) => MutableModel<Entity> | void): Entity;
}

export declare class Transaction {
  readonly id: string;
  readonly inserted?: number;
  readonly updated?: number;
  readonly payment?: Payment;
  readonly trxItems?: (TrxItem | null)[];
  readonly entityID: string;
  constructor(init: ModelInit<Transaction>);
  static copyOf(source: Transaction, mutator: (draft: MutableModel<Transaction>) => MutableModel<Transaction> | void): Transaction;
}

export declare class Payment {
  readonly id: string;
  readonly id2?: string;
  readonly inserted?: number;
  readonly updated?: number;
  constructor(init: ModelInit<Payment>);
  static copyOf(source: Payment, mutator: (draft: MutableModel<Payment>) => MutableModel<Payment> | void): Payment;
}

export declare class TrxItem {
  readonly id: string;
  readonly quantity?: number;
  readonly value_eur?: number;
  readonly tax?: number;
  readonly inserted?: number;
  readonly item?: Item;
  readonly updated?: number;
  readonly transactionID: string;
  constructor(init: ModelInit<TrxItem>);
  static copyOf(source: TrxItem, mutator: (draft: MutableModel<TrxItem>) => MutableModel<TrxItem> | void): TrxItem;
}

export declare class Item {
  readonly id: string;
  readonly name: string;
  readonly notes?: string;
  readonly current_value_eur?: number;
  readonly images?: string;
  readonly tags?: string;
  readonly dimension_wdh?: string;
  readonly weight_kg?: number;
  readonly dob?: number;
  readonly inserted?: number;
  readonly updated?: number;
  constructor(init: ModelInit<Item>);
  static copyOf(source: Item, mutator: (draft: MutableModel<Item>) => MutableModel<Item> | void): Item;
}

export declare class Adress {
  readonly id: string;
  readonly part_1?: string;
  readonly part_2?: string;
  readonly postal_code?: string;
  readonly country?: string;
  readonly tags?: string;
  readonly entityID: string;
  constructor(init: ModelInit<Adress>);
  static copyOf(source: Adress, mutator: (draft: MutableModel<Adress>) => MutableModel<Adress> | void): Adress;
}