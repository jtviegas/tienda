
import logger from "../common/logger";
import DataStore from "./data_store";
import utils_func from "../common/utils_func"
import { Auth } from 'aws-amplify';

const store = new DataStore();

const stateManager = {

    reducer: (state, action) => {
        logger.debug('[stateManager.reducer|in]: (%s,%s)', JSON.stringify(state), JSON.stringify(action))
        let result = state;
      
        switch (action.type) {
            case 'items.get':
                result = { ...state , items: action.items, user: action.user }
                logger.info('[stateManager.reducer.items.get] got items: %d', action.items.length)
                break;
            case 'item.save':
                utils_func.search_and_replace(state.items, action.item)
                result = { ...state , items: state.items }
                logger.info('[stateManager.reducer.item.save] saved item: %s', action.item.id)
                break;
            case 'item.add.image':
                logger.info('[stateManager.reducer.item.add.image] adding image: %s', JSON.stringify(action.image))
                utils_func.addImageToItem(state.items, action.image)
                result = { ...state , items: state.items }
                break;
            case 'signIn':
                if( action.value !== state.session ) {
                  result = { ...state , session: action.value }
                  logger.info('[stateManager.reducer.signIn] new user session: %s', action.value )
                }
                break;
            case 'signOut':
                if( null !== state.session ){
                  result = { ...state , session: null }
                  logger.info('[stateManager.reducer.signOut] user signedOut')
              }
                break;
            default:
                throw new Error(`${action.type} is not a valid action`);
        };
      
        logger.debug('[stateManager.reducer|out]: => %s', JSON.stringify(result))
        return result;
    }

    , getDispatcher: (f_dispatch) => {
        const handle = (payload) => {
            logger.info('[stateManager.getDispatcher.handle|in]: (%s)', JSON.stringify(payload))
            switch (payload.type) {
              case 'items.get':
                  store.fetchItems(payload.page).then(o => f_dispatch({ ...payload , items: o, user: {} }));
                break;
              case 'basket.add.item':
                break;
              case 'item.save':
                store.saveItem(payload.value).then(o => f_dispatch({ ...payload , item: o }));
                break;
              case 'item.add.image':
                store.saveImage(payload.value).then(o => f_dispatch({ ...payload , image: { src: o} })).catch(err => logger.error(err))
                break;
              case 'signIn':
                f_dispatch({ ...payload })
                break;
              case 'signOut':
                f_dispatch({ ...payload })
                break;
              case 'session.end':
                Auth.signOut().then((result) => {
                  f_dispatch({type: 'signOut'});
                }
              ).catch((err) => {
                  logger.warn(`[stateManager.getDispatcher.handle.session.end] ${err}`)
                }
              );
                  break;
              case 'session.find':
                Auth.currentSession().then((result) => {
                    f_dispatch({type: 'signIn', value: {"jwtToken": result.idToken.jwtToken, "email": result.idToken.payload.email, "groups": result.idToken.payload["cognito:groups"] }});
                  }
                ).catch((err) => {
                    logger.warn(`[stateManager.getDispatcher.handle.session.find] ${err}`)
                    f_dispatch({type: 'signOut'});
                  }
                );
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
    , hubListener: (dispatcher) => {
      return (data) => {
        switch (data.payload.event) {
            case 'signIn':
              logger.info(`[stateManager.hubListener] signInUserSession: ${JSON.stringify(data.payload.data.signInUserSession)}`)
              dispatcher({type: data.payload.event, value: {"jwtToken": data.payload.data.signInUserSession.idToken.jwtToken, "email": data.payload.data.signInUserSession.idToken.payload.email, "groups": data.payload.data.signInUserSession.idToken.payload["cognito:groups"] }})
              break;
            case 'signOut':
              dispatcher({type: data.payload.event})
              break;
            default:
        }
      }
    }

};

export default stateManager;