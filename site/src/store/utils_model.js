import { Image, Item } from "../models";

let images_url = "http://tmp.tgedr.com.s3-website-us-east-1.amazonaws.com/images"

let randomString = (length) => {
    let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}


 let getRandomImageSrc = () => images_url + '/images' + parseInt(7* Math.random()) + '.jpeg'

 let randomEntity = () => {
    return {
        "id": randomString(8),
        "name": randomString(8),
        "description": randomString(8),
        "dob":  999999999999 * Math.random(),
        "phone":  toString(999999999 * Math.random())
    }

}

let randomImage = (itemId, index) => {
    return new Image({
        "id": randomString(8),
        "itemID": itemId,
        "src": getRandomImageSrc(),
        "index": index,
    })
}

let randomItem = (name = null, id = null, images = 0) => {
    //let id = randomString(12)
    let r = {
        // "id": id,
        "name": name === null ? randomString(8) : name,
        "description": randomString(8),
        "eur":  100*Math.random(),
        "dob":  999999999999 * Math.random(),
        "active": true,
        "stock_qty": parseInt((12 * Math.random())),
        "stock_measure": "COUNT",
        // "images": [0,1,2].map(o => randomImage(id,o))
    };
    if( id !== null ) 
        r.id = id
    if( 0 < images){
        r.images = []
        for(let i=0; i < images; i++)
            r.images.push(randomImage(id, i))
    }
    
    return new Item(r);
}

let utils = {
    randomEntity: randomEntity
    , randomItem: randomItem
    , randomImage: randomImage
    , randomString: randomString
}
export default utils;
