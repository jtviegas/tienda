import Store from "../services/store/graphql_store"
import utils from '../services/store/utils_model';
// @ts-ignore
import {Item} from '../models';

let store = new Store()
let itemName = "XPTO XPTO XPTO"

test('renders learn react link', async () => {

  let item = await store.saveItem(utils.randomItem(itemName))
  console.log("item with no images:", item);

  let img = await store.saveImage(utils.randomImage(item.id,0))
  console.log("img associated with item:", img);

  item = await store.getItem(item.id)
  console.log("does item know about img? no it does not", item);
  expect(item.images).toBeUndefined()

  item = Item.copyOf(item, updated => {
    updated.images = [img]
  })
  console.log("item to be saved with image:", item);
  item = await store.saveItem(item)
  console.log("item associated with image now?", item);

  item = await store.getItem(item.id)
  console.log("item associated with image now?", item);
  
  expect(item.name).toEqual(itemName)
  expect(item.images.length).toEqual(1)

})

