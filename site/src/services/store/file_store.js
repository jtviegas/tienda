import { Storage } from 'aws-amplify';
import logger from "../../common/logger";

class FileStore {


    putObject = (key, obj) => {
        logger.debug("[FileStore|putObject|in] (%s,%s)", JSON.stringify(key), JSON.stringify(obj))
        const promise = Storage.put(key, obj)
        logger.debug("[FileStore|putObject|out] => %s", promise)
        return promise;
    }

    // TODO https://stackoverflow.com/questions/41708430/javascript-promises-creating-an-array-of-promises-to-be-executed-together
    putObjects = (key, obj) => {
        logger.debug("[FileStore|putObject|in] (%s,%s)", JSON.stringify(key), JSON.stringify(obj))
        const promise = Storage.put(key, obj)
        logger.debug("[FileStore|putObject|out] => %s", promise)
        return promise;
    }

    listObjects = (keypath) => {
        logger.debug("[FileStore|listObjects|in] (%s)", JSON.stringify(keypath))
        const promise = Storage.list(keypath)
        logger.debug("[FileStore|listObjects|out] => %s", promise)
        return promise;
    }

    removeObject = (key) => {
        logger.debug("[FileStore|removeObject|in] (%s)", JSON.stringify(key))
        const promise = Storage.remove(key)
        logger.debug("[FileStore|removeObject|out] => %s", promise)
        return promise;
    }


}

export default FileStore;