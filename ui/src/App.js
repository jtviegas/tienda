import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { ItemList } from "./features/item/ItemList"
import { Navbar } from './components/Navbar'
import { Account } from "./features/account/Account"
import { Login } from "./features/account/Login"


function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        { console.log("[App]") }
        <Switch>
          <Route exact path="/" component={ItemList} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/login" component={Login} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
