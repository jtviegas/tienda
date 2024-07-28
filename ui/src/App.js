import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { ItemList } from "./features/item/ItemList"
import { Navbar } from './components/Navbar'
import { Account } from "./features/auth/Account"
import { Auth } from "./features/auth/Auth"
import { Notification } from './features/notification/Notification'


function App() {

  
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Notification/>
        <Switch>
          <Route exact path="/" component={ItemList} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/login" component={Auth} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
