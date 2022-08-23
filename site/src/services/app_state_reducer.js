import logger from "../common/logger";
import utils_func from "../common/utils_func"

const appStateReducer = (state, action) => {
        logger.debug('[appStateReducer|in]: (%s,%s)', JSON.stringify(state), JSON.stringify(action))
        let result = state;
      
        switch (action.type) {
            case 'items.get':
                result = { ...state , items: action.items, user: action.user }
                logger.info('[appStateReducer.items.get] got items: %d', action.items.length)
                break;
            case 'item.save':
                utils_func.search_and_replace(state.items, action.item)
                result = { ...state , items: state.items }
                logger.info('[appStateReducer.item.save] saved item: %s', action.item.id)
                break;
            case 'signIn':
                if( action.value !== state.session ) {
                  result = { ...state , session: action.value }
                  logger.info('[appStateReducer.signIn] new user session: %s', action.value )
                }
                break;
            case 'signOut':
                if( null !== state.session ){
                  result = { ...state , session: null }
                  logger.info('[appStateReducer.signOut] user signedOut')
              }
                break;
            default:
                throw new Error(`${action.type} is not a valid action`);
        };
      
        logger.debug('[appStateReducer|out]: => %s', JSON.stringify(result))
        return result;
    }


export default appStateReducer;