import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useHistory } from 'react-router-dom'
import qs from "qs"
import { getAccount } from './accountSlice';


import { signedIn, signedUp } from './accountSlice'


export const Login = (props) => {

  const dispatch = useDispatch()
  const history = useHistory()

  const account = useSelector(getAccount)
  const hasAccount = (0 < Object.keys(account).length)
  const referrer = qs.parse(props.location.search, { ignoreQueryPrefix: true }).referrer

  console.log("[Login]", props, referrer, account)

  const [email, setEmail] = useState(hasAccount ? account.email : '')
  const [pswd, setPswd] = useState(hasAccount ? account.pswd : '')

  const onEmailChanged = e => setEmail(e.target.value)
  const onPswdChanged = e => setPswd(e.target.value)

  const onSignInClicked = () => {
    if (email && pswd) {
      dispatch(signedIn({email, pswd}))
      console.log("[Login] pushing referrer:", referrer)
      history.push(referrer)
    }
  }

  const onSignUpClicked = () => {
    if (email && pswd) {
      dispatch(signedUp({email, pswd}))
      console.log("[Login] pushing referrer:", referrer)
      history.push(referrer)
      setEmail('')
      setPswd('')
    }
  }

  const canSignX = Boolean(email) && Boolean(pswd)

  return (
    <Container>
      <div className="card my-5">
        <Form className="card-body cardbody-color col-md-6 offset-md-3 col-8 offset-2 justify-content-md-center">
        <div className="text-center">
            <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-2"
              width="200px" alt="profile"/>
          </div>
          <Form.Group controlId="accountEmail">
            <Form.Label>email</Form.Label>
            <Form.Control type="email" placeholder="enter your email" value={email} onChange={onEmailChanged}/>
            <Form.Text> We'll never share your email with anyone else </Form.Text>
          </Form.Group>

          <Form.Group controlId="accountPswd">
            <Form.Label>password</Form.Label>
            <Form.Control type="password" placeholder="your password here" value={pswd} onChange={onPswdChanged}/>
          </Form.Group>

          <Button type="button" className="col-8 offset-2 col-sm-4 offset-sm-1 my-3" disabled={!canSignX} onClick={onSignInClicked}> 
            Sign in
          </Button>
          <Button type="button" className="col-8 offset-2 col-sm-4 offset-sm-1 my-3" disabled={!canSignX} onClick={onSignUpClicked}>
            Sign up
          </Button>

          <div id="emailHelp" className="col-8 offset-2 col-sm-6 offset-sm-3 my-4"><a href="#">forgot passsword?</a></div>
        </Form>
      </div>
    </Container>
  )


}