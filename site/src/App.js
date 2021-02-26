import React, { Fragment, useReducer, useEffect } from 'react';
import './App.css';
import ItemGallery from "./components/ItemGallery"
import Header from "./components/Header"
import Footer from "./components/Footer"
import logger from "./common/logger";
import Service from "./state/service";

const initial_state = {items: [], user: null}

const service = new Service();

function reducer (state, action) {
  logger.info('[reducer|in]: (%s,%s)', JSON.stringify(state), JSON.stringify(action))
  let result = state;

  switch (action.type) {
    case 'init':
      logger.info('[reducer] init')
      result = { ...state , items: action.data }
      break
    default:
      throw new Error(`${action.type} is not a valid action`);
  };

  logger.info('[reducer|out]: => %s', JSON.stringify(result))
  return result;
};

const dispatchWrapper = (f_dispatch) => {

  let handle = (payload) => {
    switch (payload.type) {
      case 'init':
        service.fetchItems().then(o => f_dispatch({ ...payload , data: o }));
        break;
      default:
        f_dispatch(payload)
        break;
    };
  }

  return handle;
}


export default function App() {
  
  const [ state, dispatch ] = useReducer(reducer, initial_state);
  logger.info('[App]: going to render state: %s', JSON.stringify(state))
  const wrapper = dispatchWrapper(dispatch);
  useEffect(() => { wrapper( {type:'init'} ); }, []);

  
  return (
    <Fragment>
      <Header {...state} />
      <ItemGallery {...state} />
      <Footer />
    </Fragment>
  );

}
