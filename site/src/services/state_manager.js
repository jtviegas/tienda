
import logger from "../common/logger";
import DataStore from "./data_store";
import utils_func from "../common/utils_func"
import {Item} from "../models/index"

const store = new DataStore();

const stateManager = {

    reducer: (state, action) => {
        logger.debug('[stateManager.reducer|in]: (%s,%s)', JSON.stringify(state), JSON.stringify(action))
        let result = state;
      
        switch (action.type) {
            case 'items.get':
                result = { ...state , items: action.items, user: action.user }
                break;
            case 'item.save':
                logger.info('[stateManager.reducer] item.save action: %s', JSON.stringify(action))
                utils_func.search_and_replace(state.items, action.item)
                result = { ...state , items: state.items }
                break  
            default:
                throw new Error(`${action.type} is not a valid action`);
        };
      
        logger.debug('[stateManager.reducer|out]: => %s', JSON.stringify(result))
        return result;
    }

    , getDispatcher: (f_dispatch) => {
        const handle = (payload) => {
            logger.debug('[stateManager.getDispatcher.handle|in]: (%s)', JSON.stringify(payload))
            switch (payload.type) {
              case 'items.get':
                  store.fetchItems(payload.page).then(o => f_dispatch({ ...payload , items: o, user: {} }));
                break;
              case 'basket.add.item':
                break;
              case 'item.save':
                store.saveItem(payload.value).then(o => f_dispatch({ ...payload , item: o }));
                break;
              default:
                f_dispatch(payload)
                break;
            };
            logger.debug('[stateManager.getDispatcher.handle|out]')
            
        }
        logger.debug('[stateManager.getDispatcher|out] => %s', typeof(handle))
        return handle;
    }

};

export default stateManager;