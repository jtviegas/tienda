export const schema = {
    "models": {
        "Image": {
            "name": "Image",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "itemID": {
                    "name": "itemID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "src": {
                    "name": "src",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "index": {
                    "name": "index",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Images",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "subscriptions": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byItem",
                        "fields": [
                            "itemID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "delete",
                                    "update"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Item": {
            "name": "Item",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "eur": {
                    "name": "eur",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "dob": {
                    "name": "dob",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "dim_wdh": {
                    "name": "dim_wdh",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "weight_kg": {
                    "name": "weight_kg",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "active": {
                    "name": "active",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "stock_qty": {
                    "name": "stock_qty",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "stock_measure": {
                    "name": "stock_measure",
                    "isArray": false,
                    "type": {
                        "enum": "StockUnit"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "images": {
                    "name": "images",
                    "isArray": true,
                    "type": {
                        "model": "Image"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "itemID"
                    }
                },
                "index": {
                    "name": "index",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "trxItems": {
                    "name": "trxItems",
                    "isArray": true,
                    "type": {
                        "model": "TrxItem"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "item"
                    }
                },
                "basketID": {
                    "name": "basketID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Items",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byBasket",
                        "fields": [
                            "basketID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "delete",
                                    "update"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "TrxItem": {
            "name": "TrxItem",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "qty": {
                    "name": "qty",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "eur": {
                    "name": "eur",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "tax": {
                    "name": "tax",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "item": {
                    "name": "item",
                    "isArray": false,
                    "type": {
                        "model": "Item"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "itemID"
                    }
                },
                "trxID": {
                    "name": "trxID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "TrxItems",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "subscriptions": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byItem",
                        "fields": [
                            "itemID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byTrx",
                        "fields": [
                            "trxID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "delete",
                                    "update"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Trx": {
            "name": "Trx",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "buyer_id": {
                    "name": "buyer_id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "buyer_name": {
                    "name": "buyer_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "buyer_phone": {
                    "name": "buyer_phone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "buyer_email": {
                    "name": "buyer_email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "buyer_fiscal_id": {
                    "name": "buyer_fiscal_id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "deliver_address_id": {
                    "name": "deliver_address_id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "deliver_address_house": {
                    "name": "deliver_address_house",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "deliver_address_road": {
                    "name": "deliver_address_road",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "deliver_address_city": {
                    "name": "deliver_address_city",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "deliver_address_postalcode": {
                    "name": "deliver_address_postalcode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "deliver_address_country": {
                    "name": "deliver_address_country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "fiscal_address_id": {
                    "name": "fiscal_address_id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "fiscal_address_house": {
                    "name": "fiscal_address_house",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "fiscal_address_road": {
                    "name": "fiscal_address_road",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "fiscal_address_city": {
                    "name": "fiscal_address_city",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "fiscal_address_postal_code": {
                    "name": "fiscal_address_postal_code",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "fiscal_address_country": {
                    "name": "fiscal_address_country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "TrxStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "model": "TrxItem"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "trxID"
                    }
                },
                "payments": {
                    "name": "payments",
                    "isArray": true,
                    "type": {
                        "model": "Payment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "trxID"
                    }
                },
                "entityID": {
                    "name": "entityID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Trxes",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "subscriptions": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEntity",
                        "fields": [
                            "entityID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "delete",
                                    "update"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Payment": {
            "name": "Payment",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "id_external": {
                    "name": "id_external",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "source": {
                    "name": "source",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "currency": {
                    "name": "currency",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "PaymentStatus"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "trxID": {
                    "name": "trxID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Payments",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byTrx",
                        "fields": [
                            "trxID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "delete",
                                    "update"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Entity": {
            "name": "Entity",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "first_name": {
                    "name": "first_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "last_name": {
                    "name": "last_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "dob": {
                    "name": "dob",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "phone": {
                    "name": "phone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "fiscal_id": {
                    "name": "fiscal_id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "adresses": {
                    "name": "adresses",
                    "isArray": true,
                    "type": {
                        "model": "Adress"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "entityID"
                    }
                },
                "transactions": {
                    "name": "transactions",
                    "isArray": true,
                    "type": {
                        "model": "Trx"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "entityID"
                    }
                },
                "active": {
                    "name": "active",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "EntityType"
                    },
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Entities",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "subscriptions": null
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "delete",
                                    "update"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Adress": {
            "name": "Adress",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "house": {
                    "name": "house",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "road": {
                    "name": "road",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "city": {
                    "name": "city",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "postal_code": {
                    "name": "postal_code",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "country": {
                    "name": "country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "AddressType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "entityID": {
                    "name": "entityID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "active": {
                    "name": "active",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Adresses",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "subscriptions": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEntity",
                        "fields": [
                            "entityID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "delete",
                                    "update"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Basket": {
            "name": "Basket",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "model": "Item"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "basketID"
                    }
                },
                "entity": {
                    "name": "entity",
                    "isArray": false,
                    "type": {
                        "model": "Entity"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "entityID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Baskets",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEntity",
                        "fields": [
                            "entityID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "delete",
                                    "update"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "StockUnit": {
            "name": "StockUnit",
            "values": [
                "G",
                "ML",
                "COUNT"
            ]
        },
        "TrxStatus": {
            "name": "TrxStatus",
            "values": [
                "STARTED",
                "COMPLETED",
                "CANCELLED"
            ]
        },
        "PaymentStatus": {
            "name": "PaymentStatus",
            "values": [
                "STARTED",
                "COMPLETED",
                "FAILED"
            ]
        },
        "EntityType": {
            "name": "EntityType",
            "values": [
                "ADMIN",
                "PRIVATE",
                "ORGANIZATION"
            ]
        },
        "AddressType": {
            "name": "AddressType",
            "values": [
                "FISCAL",
                "DELIVER"
            ]
        }
    },
    "nonModels": {},
    "version": "29abc0560b73f88517d6a78e4215b8ff"
};