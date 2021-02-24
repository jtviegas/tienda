
import Store from "./store/graphql_store"
import utilsStore from "./store/utils_store"

class Service {

    constructor() {
        this.store = new Store();
    }

    makeItems = () => {
        return utilsStore.createItems(3, 2);
    }

    fetchItems = () => {
        return this.store.getItems(null,{page: 0, limit: 16});
    }

    fetchUser = () => {
        return this.store.getEntity(null);
    }

}

export default Service;