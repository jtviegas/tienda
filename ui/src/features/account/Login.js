import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useHistory } from 'react-router-dom';
import qs from "qs";
import { getAccount } from './accountSlice';
import config from "../../config.json";
import { signedIn, signedUp } from './accountSlice';
import { notificationIn } from '../notification/notificationSlice';


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
      try{
        dispatch(signedIn({email, pswd}));
        history.push(referrer);
      }
      catch(error){
        console.error("onSignInClicked: ", error)
      }
      
      
    }
  }

  const onSignUpClicked = () => {
    if (email && pswd) {
      try{
        dispatch(signedUp({email, pswd}).then((o) => console.log("signedUp then", o)).catch((err) => {
          console.log("signedUp reducer catch", err);
          throw err;
        }));
        history.push(referrer);
      }
      catch(error){
        console.error("onSignUpClicked: ", error)
      }
    }
  }

  

  const canSignX = Boolean(email) && Boolean(pswd)

  return (
    <Container>
      <div className="card my-5">
        <Form className="card-body cardbody-color col-md-6 offset-md-3 col-8 offset-2 justify-content-md-center">
        <div className="text-center">
            <img src={config.logo} className="img-fluid profile-image-pic img-thumbnail rounded-circle my-2"
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

          <Button type="button" value="signin" className="col-8 offset-2 col-sm-4 offset-sm-1 my-3" disabled={!canSignX} onClick={onSignInClicked}> 
            Sign in
          </Button>
          <Button type="button" value="signup" className="col-8 offset-2 col-sm-4 offset-sm-1 my-3" disabled={!canSignX} onClick={onSignUpClicked}>
            Sign up
          </Button>
        </Form>
        <div id="emailHelp" className="my-4 text-center"><a href="#">forgot passsword?</a></div>
      </div>
    </Container>
  )


}