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

/*
const App = () => {

  const isAuthenticated = () => {
    const accessToken = sessionStorage.getItem("accessToken")
    return !!accessToken
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ isAuthenticated() ? ( <Navigate replace to="/home" /> ) : ( <Navigate replace to="/login" /> )}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/confirm" element={<ConfirmUserPage />} />
        <Route path="/home" element={ isAuthenticated() ? <HomePage /> : <Navigate replace to="/login" /> }/>
      </Routes>
    </BrowserRouter>
  )
}
*/

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
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
