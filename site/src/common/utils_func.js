
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
    }
}

export default utils_func;

