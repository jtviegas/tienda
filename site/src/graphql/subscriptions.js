/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
      id
      name
      description
      eur
      dob
      dim_wdh
      weight_kg
      active
      stock_qty
      stock_measure
      images {
        items {
          id
          itemID
          src
          index
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      index
      trxItems {
        items {
          id
          qty
          eur
          tax
          itemID
          trxID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      basketID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
      id
      name
      description
      eur
      dob
      dim_wdh
      weight_kg
      active
      stock_qty
      stock_measure
      images {
        items {
          id
          itemID
          src
          index
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      index
      trxItems {
        items {
          id
          qty
          eur
          tax
          itemID
          trxID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      basketID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
      id
      name
      description
      eur
      dob
      dim_wdh
      weight_kg
      active
      stock_qty
      stock_measure
      images {
        items {
          id
          itemID
          src
          index
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      index
      trxItems {
        items {
          id
          qty
          eur
          tax
          itemID
          trxID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      basketID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePayment = /* GraphQL */ `
  subscription OnCreatePayment {
    onCreatePayment {
      id
      id_external
      source
      value
      currency
      status
      trxID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePayment = /* GraphQL */ `
  subscription OnUpdatePayment {
    onUpdatePayment {
      id
      id_external
      source
      value
      currency
      status
      trxID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePayment = /* GraphQL */ `
  subscription OnDeletePayment {
    onDeletePayment {
      id
      id_external
      source
      value
      currency
      status
      trxID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBasket = /* GraphQL */ `
  subscription OnCreateBasket {
    onCreateBasket {
      id
      items {
        items {
          id
          name
          description
          eur
          dob
          dim_wdh
          weight_kg
          active
          stock_qty
          stock_measure
          index
          basketID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      entityID
      entity {
        id
        first_name
        last_name
        dob
        phone
        email
        fiscal_id
        adresses {
          nextToken
          startedAt
        }
        transactions {
          nextToken
          startedAt
        }
        active
        type
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBasket = /* GraphQL */ `
  subscription OnUpdateBasket {
    onUpdateBasket {
      id
      items {
        items {
          id
          name
          description
          eur
          dob
          dim_wdh
          weight_kg
          active
          stock_qty
          stock_measure
          index
          basketID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      entityID
      entity {
        id
        first_name
        last_name
        dob
        phone
        email
        fiscal_id
        adresses {
          nextToken
          startedAt
        }
        transactions {
          nextToken
          startedAt
        }
        active
        type
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBasket = /* GraphQL */ `
  subscription OnDeleteBasket {
    onDeleteBasket {
      id
      items {
        items {
          id
          name
          description
          eur
          dob
          dim_wdh
          weight_kg
          active
          stock_qty
          stock_measure
          index
          basketID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      entityID
      entity {
        id
        first_name
        last_name
        dob
        phone
        email
        fiscal_id
        adresses {
          nextToken
          startedAt
        }
        transactions {
          nextToken
          startedAt
        }
        active
        type
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
