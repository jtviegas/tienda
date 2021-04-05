/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        description
        eur
        dob
        dim_wdh
        weight_kg
        active
        stock_qty
        stock_measure
        images
        index
        trxItems {
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
      description
      eur
      dob
      dim_wdh
      weight_kg
      active
      stock_qty
      stock_measure
      images
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
        description
        eur
        dob
        dim_wdh
        weight_kg
        active
        stock_qty
        stock_measure
        images
        index
        trxItems {
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
        qty
        eur
        tax
        itemID
        item {
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
          images
          index
          basketID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
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
  }
`;
export const getTrxItem = /* GraphQL */ `
  query GetTrxItem($id: ID!) {
    getTrxItem(id: $id) {
      id
      qty
      eur
      tax
      itemID
      item {
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
        images
        index
        trxItems {
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
      trxID
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
        qty
        eur
        tax
        itemID
        item {
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
          images
          index
          basketID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
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
  }
`;
export const syncTrxes = /* GraphQL */ `
  query SyncTrxes(
    $filter: ModelTrxFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTrxes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        buyer_id
        buyer_name
        buyer_phone
        buyer_email
        buyer_fiscal_id
        deliver_address_id
        deliver_address_house
        deliver_address_road
        deliver_address_city
        deliver_address_postalcode
        deliver_address_country
        fiscal_address_id
        fiscal_address_house
        fiscal_address_road
        fiscal_address_city
        fiscal_address_postal_code
        fiscal_address_country
        status
        items {
          nextToken
          startedAt
        }
        payments {
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
export const getTrx = /* GraphQL */ `
  query GetTrx($id: ID!) {
    getTrx(id: $id) {
      id
      buyer_id
      buyer_name
      buyer_phone
      buyer_email
      buyer_fiscal_id
      deliver_address_id
      deliver_address_house
      deliver_address_road
      deliver_address_city
      deliver_address_postalcode
      deliver_address_country
      fiscal_address_id
      fiscal_address_house
      fiscal_address_road
      fiscal_address_city
      fiscal_address_postal_code
      fiscal_address_country
      status
      items {
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
      payments {
        items {
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
export const listTrxs = /* GraphQL */ `
  query ListTrxs(
    $filter: ModelTrxFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrxs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        buyer_id
        buyer_name
        buyer_phone
        buyer_email
        buyer_fiscal_id
        deliver_address_id
        deliver_address_house
        deliver_address_road
        deliver_address_city
        deliver_address_postalcode
        deliver_address_country
        fiscal_address_id
        fiscal_address_house
        fiscal_address_road
        fiscal_address_city
        fiscal_address_postal_code
        fiscal_address_country
        status
        items {
          nextToken
          startedAt
        }
        payments {
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
      nextToken
      startedAt
    }
  }
`;
export const getEntity = /* GraphQL */ `
  query GetEntity($id: ID!) {
    getEntity(id: $id) {
      id
      first_name
      last_name
      dob
      phone
      email
      fiscal_id
      adresses {
        items {
          id
          house
          road
          city
          postal_code
          country
          type
          entityID
          active
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      transactions {
        items {
          id
          buyer_id
          buyer_name
          buyer_phone
          buyer_email
          buyer_fiscal_id
          deliver_address_id
          deliver_address_house
          deliver_address_road
          deliver_address_city
          deliver_address_postalcode
          deliver_address_country
          fiscal_address_id
          fiscal_address_house
          fiscal_address_road
          fiscal_address_city
          fiscal_address_postal_code
          fiscal_address_country
          status
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
      active
      type
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
      nextToken
      startedAt
    }
  }
`;
export const getPayment = /* GraphQL */ `
  query GetPayment($id: ID!) {
    getPayment(id: $id) {
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
export const listPayments = /* GraphQL */ `
  query ListPayments(
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncBaskets = /* GraphQL */ `
  query SyncBaskets(
    $filter: ModelBasketFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBaskets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        items {
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
      nextToken
      startedAt
    }
  }
`;
export const getBasket = /* GraphQL */ `
  query GetBasket($id: ID!) {
    getBasket(id: $id) {
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
          images
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
export const listBaskets = /* GraphQL */ `
  query ListBaskets(
    $filter: ModelBasketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBaskets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        items {
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
        house
        road
        city
        postal_code
        country
        type
        entityID
        active
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
      house
      road
      city
      postal_code
      country
      type
      entityID
      active
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
        house
        road
        city
        postal_code
        country
        type
        entityID
        active
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
