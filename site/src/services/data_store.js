import logger from "../common/logger";
import Store from "./store/graphql_store"
import FileStore from "./store/file_store"
import utilsStore from "./store/utils_store"
import config from "../common/config"

class DataStore {

    constructor() {
        this.store = new Store();
        this.fileStore = new FileStore();
    }

    makeItems = () => {
        logger.debug("[DataStore|makeItems] in")
        const result = utilsStore.createItems(3, 2);
        logger.debug("[DataStore|makeItems] out => %s", result)
        return result;
    }

    fetchItems = (page=0) => {
        logger.info("[DataStore|fetchItems|in] (%s)", JSON.stringify(page))
        const result = this.store.getItems(null, {page: page, limit: config.items.pagesize});
        logger.debug("[DataStore|fetchItems|out] => %s", result)
        return result;
    }

    saveItem = (item) => {
        logger.debug("[DataStore|saveItem|in] (%s)", JSON.stringify(item))
        const result = this.store.saveItem(item)
        logger.debug("[DataStore|saveItem|out] %s", result)
        return result;
    }

    saveImage = (image) => {
        logger.info(`[DataStore|saveImage|in] (name: ${image.name}, type: ${image.type})`)
        const result = this.fileStore.putObject(image.name, image, { level: 'public', contentType: image.type })
        logger.info("[DataStore|saveItem|out] %s", result)
        return result;
    }

    fetchUser = () => {
        logger.debug("[DataStore|fetchUser] in")
        const result = this.store.getEntity(null);
        logger.debug("[DataStore|fetchUser] out => %s", result)
        return result;
    }

}

export default DataStore;