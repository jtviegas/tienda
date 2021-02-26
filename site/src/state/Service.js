import logger from "../common/logger";
import Store from "./store/graphql_store"
import utilsStore from "./store/utils_store"

class Service {

    constructor() {
        this.store = new Store();
    }

    makeItems = () => {
        logger.debug("[Service|makeItems] in")
        const result = utilsStore.createItems(3, 2);
        logger.debug("[Service|makeItems] out => %s", JSON.stringify(result))
        return result;
    }

    fetchItems = () => {
        logger.debug("[Service|fetchItems] in")
        const result = this.store.getItems(null,{page: 0, limit: 16});
        logger.debug("[Service|fetchItems] out => %s", JSON.stringify(result))
        return result;
    }

    fetchUser = () => {
        logger.debug("[Service|fetchUser] in")
        const result = this.store.getEntity(null);
        logger.debug("[Service|fetchUser] out => %s", JSON.stringify(result))
        return result;
    }

}

export default Service;