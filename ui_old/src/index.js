import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import App from './App'
import store from './services/store'
import { worker } from './utils/server'
//import { extendedApiSlice } from './features/users/usersSlice'
import {apiSlice} from "./features/api/apiSlice"

const environment = import.meta.env.MODE
console.log("[tienda] current environment: " + environment)

// Wrap app rendering so we can wait for the mock API to initialize
async function main() {

  if("development" === environment){
    console.log("[tienda] starting mock server")
    // mock API server
    await worker.start({ onUnhandledRequest: 'bypass' })
  }

  store.dispatch(apiSlice.endpoints.getItems.initiate())

  const root = createRoot(document.getElementById('root'))

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  )
}

main()
