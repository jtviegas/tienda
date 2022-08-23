import logger from "../common/logger";
import { Auth } from 'aws-amplify';

const eventListener = (dispatcher) => {
  return (data) => {
    switch (data.payload.event) {
        case 'signIn':
          logger.info(`[eventListener] signInUserSession: ${JSON.stringify(data.payload.data.signInUserSession)}`)
          dispatcher({type: data.payload.event, value: {"jwtToken": data.payload.data.signInUserSession.idToken.jwtToken, 
            "email": data.payload.data.signInUserSession.idToken.payload.email, 
            "groups": data.payload.data.signInUserSession.idToken.payload["cognito:groups"] }})
          break;
        case 'signOut':
          dispatcher({type: data.payload.event})
          break;
        default:
    }
  }
}

export default eventListener;