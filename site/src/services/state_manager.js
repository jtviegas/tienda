import logger from "../common/logger";
import DataStore from "./data_store";
import { Auth } from 'aws-amplify';

const store = new DataStore();

const stateManager = (reducer) => {

  const handle = (payload, callback) => {
      logger.info(`[stateManager.handle|in]: (${JSON.stringify(payload)}, ${callback})`)
      let promise = null;
      switch (payload.type) {
        case 'items.get':
          promise = store.fetchItems(payload.page);
          promise.then(o => reducer({ ...payload , items: o }));
          break;
        case 'item.save':
          promise = store.saveItem(payload.value)
          promise.then(o => reducer({ ...payload , item: o }));
          break;
        case 'image.save':
          promise = store.saveImage(payload.value)
          break;
        case 'signIn':
          reducer({ ...payload })
          break;
        case 'signOut':
          reducer({ ...payload })
          break;
        case 'session.end':
          promise = Auth.signOut()
          promise.then((result) => reducer({type: 'signOut'}) );
          break;
        case 'session.find':
          Auth.currentSession().then((result) => {
            reducer(
              { type: 'signIn', 
                value: {"jwtToken": result.idToken.jwtToken, "email": result.idToken.payload.email, 
                        "groups": result.idToken.payload["cognito:groups"] }
              });
            }
          ).catch((err) => {
              logger.error(err);
              reducer({type: 'signOut'});
            }
          );
          break;
        default:
          reducer(payload)
          break;
      };

      if ( null !== promise ){
        let catcher = (err) => logger.error(err);
        if( callback && callback.then ){
          promise.then(callback.then);
          if (callback.catch) 
            catcher = callback.catch;
        }
        promise.catch(catcher);
      }

      logger.debug('[stateManager.handle|out]')
  }
  return handle;
};

export default stateManager;