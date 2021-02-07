/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
      id
      name
      tags
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
      id
      name
      tags
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
      id
      name
      tags
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEntity = /* GraphQL */ `
  subscription OnCreateEntity {
    onCreateEntity {
      id
      name
      dob
      phone
      email
      fiscal_id
      tags
      inserted
      updated
      group {
        id
        name
        tags
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      transactions {
        items {
          id
          inserted
          updated
          entityID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      adresses {
        items {
          id
          part_1
          part_2
          postal_code
          country
          tags
          entityID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEntity = /* GraphQL */ `
  subscription OnUpdateEntity {
    onUpdateEntity {
      id
      name
      dob
      phone
      email
      fiscal_id
      tags
      inserted
      updated
      group {
        id
        name
        tags
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      transactions {
        items {
          id
          inserted
          updated
          entityID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      adresses {
        items {
          id
          part_1
          part_2
          postal_code
          country
          tags
          entityID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEntity = /* GraphQL */ `
  subscription OnDeleteEntity {
    onDeleteEntity {
      id
      name
      dob
      phone
      email
      fiscal_id
      tags
      inserted
      updated
      group {
        id
        name
        tags
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      transactions {
        items {
          id
          inserted
          updated
          entityID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      adresses {
        items {
          id
          part_1
          part_2
          postal_code
          country
          tags
          entityID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTrxItem = /* GraphQL */ `
  subscription OnCreateTrxItem {
    onCreateTrxItem {
      id
      quantity
      value_eur
      tax
      inserted
      item {
        id
        name
        notes
        current_value_eur
        images
        tags
        dimension_wdh
        weight_kg
        dob
        inserted
        updated
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      updated
      transactionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTrxItem = /* GraphQL */ `
  subscription OnUpdateTrxItem {
    onUpdateTrxItem {
      id
      quantity
      value_eur
      tax
      inserted
      item {
        id
        name
        notes
        current_value_eur
        images
        tags
        dimension_wdh
        weight_kg
        dob
        inserted
        updated
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      updated
      transactionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTrxItem = /* GraphQL */ `
  subscription OnDeleteTrxItem {
    onDeleteTrxItem {
      id
      quantity
      value_eur
      tax
      inserted
      item {
        id
        name
        notes
        current_value_eur
        images
        tags
        dimension_wdh
        weight_kg
        dob
        inserted
        updated
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      updated
      transactionID
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
      id2
      inserted
      updated
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
      id2
      inserted
      updated
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
      id2
      inserted
      updated
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction {
    onCreateTransaction {
      id
      inserted
      updated
      payment {
        id
        id2
        inserted
        updated
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      trxItems {
        items {
          id
          quantity
          value_eur
          tax
          inserted
          updated
          transactionID
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction {
    onUpdateTransaction {
      id
      inserted
      updated
      payment {
        id
        id2
        inserted
        updated
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      trxItems {
        items {
          id
          quantity
          value_eur
          tax
          inserted
          updated
          transactionID
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction {
    onDeleteTransaction {
      id
      inserted
      updated
      payment {
        id
        id2
        inserted
        updated
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      trxItems {
        items {
          id
          quantity
          value_eur
          tax
          inserted
          updated
          transactionID
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAdress = /* GraphQL */ `
  subscription OnCreateAdress {
    onCreateAdress {
      id
      part_1
      part_2
      postal_code
      country
      tags
      entityID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAdress = /* GraphQL */ `
  subscription OnUpdateAdress {
    onUpdateAdress {
      id
      part_1
      part_2
      postal_code
      country
      tags
      entityID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAdress = /* GraphQL */ `
  subscription OnDeleteAdress {
    onDeleteAdress {
      id
      part_1
      part_2
      postal_code
      country
      tags
      entityID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
      id
      name
      notes
      current_value_eur
      images
      tags
      dimension_wdh
      weight_kg
      dob
      inserted
      updated
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
      notes
      current_value_eur
      images
      tags
      dimension_wdh
      weight_kg
      dob
      inserted
      updated
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
      notes
      current_value_eur
      images
      tags
      dimension_wdh
      weight_kg
      dob
      inserted
      updated
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
