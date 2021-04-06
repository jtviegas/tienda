
import logger from "./logger";

const utils_func = {
    search_and_replace: (items, item) => {
        logger.debug('[utils_func.search_and_replace|in]: (%s, %s)',JSON.stringify(items) , JSON.stringify(item))
        const index = items.findIndex(o => o.id === item.id);
        if( -1 < index)
            items.splice(index, 1)
        items.push(item)
        logger.debug('[utils_func.search_and_replace|out] => %s', JSON.stringify(items))
    }, 
    addImageToItem: (items, image) => {
        logger.info('[utils_func.addImageToItem|in]: (%s, %s)',JSON.stringify(items) , JSON.stringify(image))
        const index = items.findIndex(o => o.id === image.itemID);
        // items[index].images.push(image)
        logger.info('[utils_func.addImageToItem|out] => %s', JSON.stringify(items))
    },
    removeFromArray: (images, o) => {
        logger.info('[removeFromArray|in] (%s, %s)', JSON.stringify(images), JSON.stringify(o))
        const idx = images.indexOf(o)
        let result = images
        if (-1 < idx){
            logger.info('[removeFromArray] removing index %d', idx)
            result = images.slice()
            result.splice(idx,1)
        }
        logger.info('[removeFromArray|out] => %s', JSON.stringify(result))
        return result
    }
}

export default utils_func;

