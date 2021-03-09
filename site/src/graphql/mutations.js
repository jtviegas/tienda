/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createImage = /* GraphQL */ `
  mutation CreateImage(
    $input: CreateImageInput!
    $condition: ModelImageConditionInput
  ) {
    createImage(input: $input, condition: $condition) {
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
  }
`;
export const updateImage = /* GraphQL */ `
  mutation UpdateImage(
    $input: UpdateImageInput!
    $condition: ModelImageConditionInput
  ) {
    updateImage(input: $input, condition: $condition) {
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
  }
`;
export const deleteImage = /* GraphQL */ `
  mutation DeleteImage(
    $input: DeleteImageInput!
    $condition: ModelImageConditionInput
  ) {
    deleteImage(input: $input, condition: $condition) {
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
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
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
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
export const createTrxItem = /* GraphQL */ `
  mutation CreateTrxItem(
    $input: CreateTrxItemInput!
    $condition: ModelTrxItemConditionInput
  ) {
    createTrxItem(input: $input, condition: $condition) {
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
          startedAt
        }
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
export const updateTrxItem = /* GraphQL */ `
  mutation UpdateTrxItem(
    $input: UpdateTrxItemInput!
    $condition: ModelTrxItemConditionInput
  ) {
    updateTrxItem(input: $input, condition: $condition) {
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
          startedAt
        }
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
export const deleteTrxItem = /* GraphQL */ `
  mutation DeleteTrxItem(
    $input: DeleteTrxItemInput!
    $condition: ModelTrxItemConditionInput
  ) {
    deleteTrxItem(input: $input, condition: $condition) {
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
          startedAt
        }
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
export const createTrx = /* GraphQL */ `
  mutation CreateTrx(
    $input: CreateTrxInput!
    $condition: ModelTrxConditionInput
  ) {
    createTrx(input: $input, condition: $condition) {
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
export const updateTrx = /* GraphQL */ `
  mutation UpdateTrx(
    $input: UpdateTrxInput!
    $condition: ModelTrxConditionInput
  ) {
    updateTrx(input: $input, condition: $condition) {
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
export const deleteTrx = /* GraphQL */ `
  mutation DeleteTrx(
    $input: DeleteTrxInput!
    $condition: ModelTrxConditionInput
  ) {
    deleteTrx(input: $input, condition: $condition) {
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
export const createEntity = /* GraphQL */ `
  mutation CreateEntity(
    $input: CreateEntityInput!
    $condition: ModelEntityConditionInput
  ) {
    createEntity(input: $input, condition: $condition) {
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
export const updateEntity = /* GraphQL */ `
  mutation UpdateEntity(
    $input: UpdateEntityInput!
    $condition: ModelEntityConditionInput
  ) {
    updateEntity(input: $input, condition: $condition) {
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
export const deleteEntity = /* GraphQL */ `
  mutation DeleteEntity(
    $input: DeleteEntityInput!
    $condition: ModelEntityConditionInput
  ) {
    deleteEntity(input: $input, condition: $condition) {
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
export const createPayment = /* GraphQL */ `
  mutation CreatePayment(
    $input: CreatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    createPayment(input: $input, condition: $condition) {
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
export const updatePayment = /* GraphQL */ `
  mutation UpdatePayment(
    $input: UpdatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    updatePayment(input: $input, condition: $condition) {
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
export const deletePayment = /* GraphQL */ `
  mutation DeletePayment(
    $input: DeletePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    deletePayment(input: $input, condition: $condition) {
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
export const createBasket = /* GraphQL */ `
  mutation CreateBasket(
    $input: CreateBasketInput!
    $condition: ModelBasketConditionInput
  ) {
    createBasket(input: $input, condition: $condition) {
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
export const updateBasket = /* GraphQL */ `
  mutation UpdateBasket(
    $input: UpdateBasketInput!
    $condition: ModelBasketConditionInput
  ) {
    updateBasket(input: $input, condition: $condition) {
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
export const deleteBasket = /* GraphQL */ `
  mutation DeleteBasket(
    $input: DeleteBasketInput!
    $condition: ModelBasketConditionInput
  ) {
    deleteBasket(input: $input, condition: $condition) {
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
export const createAdress = /* GraphQL */ `
  mutation CreateAdress(
    $input: CreateAdressInput!
    $condition: ModelAdressConditionInput
  ) {
    createAdress(input: $input, condition: $condition) {
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
export const updateAdress = /* GraphQL */ `
  mutation UpdateAdress(
    $input: UpdateAdressInput!
    $condition: ModelAdressConditionInput
  ) {
    updateAdress(input: $input, condition: $condition) {
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
export const deleteAdress = /* GraphQL */ `
  mutation DeleteAdress(
    $input: DeleteAdressInput!
    $condition: ModelAdressConditionInput
  ) {
    deleteAdress(input: $input, condition: $condition) {
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
