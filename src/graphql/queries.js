/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncGroups = /* GraphQL */ `
  query SyncGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        tags
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
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
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        tags
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEntities = /* GraphQL */ `
  query SyncEntities(
    $filter: ModelEntityFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEntities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          nextToken
          startedAt
        }
        adresses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getEntity = /* GraphQL */ `
  query GetEntity($id: ID!) {
    getEntity(id: $id) {
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
export const listEntitys = /* GraphQL */ `
  query ListEntitys(
    $filter: ModelEntityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          nextToken
          startedAt
        }
        adresses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTrxItems = /* GraphQL */ `
  query SyncTrxItems(
    $filter: ModelTrxItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTrxItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTrxItem = /* GraphQL */ `
  query GetTrxItem($id: ID!) {
    getTrxItem(id: $id) {
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
export const listTrxItems = /* GraphQL */ `
  query ListTrxItems(
    $filter: ModelTrxItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrxItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPayments = /* GraphQL */ `
  query SyncPayments(
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPayments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getPayment = /* GraphQL */ `
  query GetPayment($id: ID!) {
    getPayment(id: $id) {
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
export const listPayments = /* GraphQL */ `
  query ListPayments(
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTransactions = /* GraphQL */ `
  query SyncTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTransactions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
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
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncAdresses = /* GraphQL */ `
  query SyncAdresses(
    $filter: ModelAdressFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAdresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getAdress = /* GraphQL */ `
  query GetAdress($id: ID!) {
    getAdress(id: $id) {
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
export const listAdresss = /* GraphQL */ `
  query ListAdresss(
    $filter: ModelAdressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdresss(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncItems = /* GraphQL */ `
  query SyncItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
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
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
