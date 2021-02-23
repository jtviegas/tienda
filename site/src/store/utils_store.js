import model from "./utils_model"
import Store from "./graphql_store"
import { Item } from "../models/index"

let store = new Store()

let createItems = async (n, images=0) => {
    for(let i=0; i<n; i++){
        let item = await store.saveItem(model.randomItem())
        let imgs = []
        for(let j=0;j<images;j++)
            imgs.push(await store.saveImage(model.randomImage(item.id,0)))

        item = Item.copyOf(item, updated => {
            updated.images = imgs
        })
        await store.saveItem(item)
    }
}


let utils = {
    createItems: createItems
}
export default utils;