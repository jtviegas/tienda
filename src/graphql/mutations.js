/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
export const createEntity = /* GraphQL */ `
  mutation CreateEntity(
    $input: CreateEntityInput!
    $condition: ModelEntityConditionInput
  ) {
    createEntity(input: $input, condition: $condition) {
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
export const updateEntity = /* GraphQL */ `
  mutation UpdateEntity(
    $input: UpdateEntityInput!
    $condition: ModelEntityConditionInput
  ) {
    updateEntity(input: $input, condition: $condition) {
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
export const deleteEntity = /* GraphQL */ `
  mutation DeleteEntity(
    $input: DeleteEntityInput!
    $condition: ModelEntityConditionInput
  ) {
    deleteEntity(input: $input, condition: $condition) {
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
export const createTrxItem = /* GraphQL */ `
  mutation CreateTrxItem(
    $input: CreateTrxItemInput!
    $condition: ModelTrxItemConditionInput
  ) {
    createTrxItem(input: $input, condition: $condition) {
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
export const updateTrxItem = /* GraphQL */ `
  mutation UpdateTrxItem(
    $input: UpdateTrxItemInput!
    $condition: ModelTrxItemConditionInput
  ) {
    updateTrxItem(input: $input, condition: $condition) {
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
export const deleteTrxItem = /* GraphQL */ `
  mutation DeleteTrxItem(
    $input: DeleteTrxItemInput!
    $condition: ModelTrxItemConditionInput
  ) {
    deleteTrxItem(input: $input, condition: $condition) {
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
export const createPayment = /* GraphQL */ `
  mutation CreatePayment(
    $input: CreatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    createPayment(input: $input, condition: $condition) {
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
export const updatePayment = /* GraphQL */ `
  mutation UpdatePayment(
    $input: UpdatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    updatePayment(input: $input, condition: $condition) {
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
export const deletePayment = /* GraphQL */ `
  mutation DeletePayment(
    $input: DeletePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    deletePayment(input: $input, condition: $condition) {
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
export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
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
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
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
export const deleteTransaction = /* GraphQL */ `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
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
export const createAdress = /* GraphQL */ `
  mutation CreateAdress(
    $input: CreateAdressInput!
    $condition: ModelAdressConditionInput
  ) {
    createAdress(input: $input, condition: $condition) {
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
export const updateAdress = /* GraphQL */ `
  mutation UpdateAdress(
    $input: UpdateAdressInput!
    $condition: ModelAdressConditionInput
  ) {
    updateAdress(input: $input, condition: $condition) {
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
export const deleteAdress = /* GraphQL */ `
  mutation DeleteAdress(
    $input: DeleteAdressInput!
    $condition: ModelAdressConditionInput
  ) {
    deleteAdress(input: $input, condition: $condition) {
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
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
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
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
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
