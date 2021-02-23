/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getImage = /* GraphQL */ `
  query GetImage($id: ID!) {
    getImage(id: $id) {
      id
      itemID
      src
      index
      createdAt
      updatedAt
    }
  }
`;
export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        itemID
        src
        index
        createdAt
        updatedAt
      }
      nextToken
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
      images {
        items {
          id
          itemID
          src
          index
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
      }
      basketID
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
        images {
          nextToken
        }
        index
        trxItems {
          nextToken
        }
        basketID
        createdAt
        updatedAt
      }
      nextToken
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
        images {
          nextToken
        }
        index
        trxItems {
          nextToken
        }
        basketID
        createdAt
        updatedAt
      }
      trxID
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
          index
          basketID
          createdAt
          updatedAt
        }
        trxID
        createdAt
        updatedAt
      }
      nextToken
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
      }
      entityID
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
        }
        payments {
          nextToken
        }
        entityID
        createdAt
        updatedAt
      }
      nextToken
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
      }
      active
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
        }
        transactions {
          nextToken
        }
        active
        createdAt
        updatedAt
      }
      nextToken
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
        createdAt
        updatedAt
      }
      nextToken
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
          index
          basketID
          createdAt
          updatedAt
        }
        nextToken
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
        }
        transactions {
          nextToken
        }
        active
        createdAt
        updatedAt
      }
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
