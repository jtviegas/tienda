import React from 'react';
import logger from "../../common/logger";
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Redirect, useLocation } from "react-router-dom";

const Auth = () =>  {
    logger.info('[Auth|in]')
    const location = useLocation();
    logger.info(`[Auth] location: ${JSON.stringify(location)}`)
    
    let redirection = "/"
    if ( null !== location && null !== location.state && null !== location.state.from )
        redirection = location.state.from;

    const result =  <Redirect to={redirection} />  ; 
    logger.info('[Auth|out]')
    return result;
};

export default withAuthenticator(Auth);
