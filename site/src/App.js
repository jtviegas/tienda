import React, { Fragment, useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';
import Shop from "./components/shop/index"
import Header from "./components/Header"
import Footer from "./components/Footer"
import logger from "./common/logger";
import Service from "./state/service";

const initial_state = {items: [], user: null}

const service = new Service();

function reducer (state, action) {
  logger.debug('[reducer|in]: (%s,%s)', JSON.stringify(state), JSON.stringify(action))
  let result = state;

  switch (action.type) {
    case 'init':
      logger.info('[reducer] init')
      result = { ...state , items: action.data }
      break
    default:
      throw new Error(`${action.type} is not a valid action`);
  };

  logger.debug('[reducer|out]: => %s', JSON.stringify(result))
  return result;
};

const dispatchWrapper = (f_dispatch) => {
  
  let handle = (payload) => {
    logger.debug('[dispatchWrapper.handle|in]: (%s)', JSON.stringify(payload))
    switch (payload.type) {
      case 'init':
        service.fetchItems().then(o => f_dispatch({ ...payload , data: o }));
        break;
      case 'basket.add.item':
        break;
      default:
        f_dispatch(payload)
        break;
    };
    logger.info('[dispatchWrapper.handle|out]')
  }

  return handle;
}


export default function App() {
  logger.info('[App|in]')
  const [ state, dispatch ] = useReducer(reducer, initial_state);
  logger.debug('[App]: going to render state: %s', JSON.stringify(state))
  const wrapper = dispatchWrapper(dispatch);
  useEffect(() => { wrapper( {type:'init'} ); }, []);

  return (
    
      
      <Router>
        <Fragment>
          <Header {...state} dispatch={wrapper} />
          <Route path="/shop" render={() => <Shop {...state} dispatch={wrapper}/>} />
          <Route exact path="/" render={() => <Redirect to="/shop" />} />
          <Footer/>
        </Fragment>
         
        
      </Router>
    
  );

}
