import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import config from "../config.json";



export const LogInUp = (props) => {

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
            <Form.Control type="email" placeholder="enter your email" value={props.email} onChange={props.onEmailChanged}/>
            <Form.Text> We'll never share your email with anyone else </Form.Text>
          </Form.Group>

          <Form.Group controlId="accountPswd">
            <Form.Label>password</Form.Label>
            <Form.Control type="password" placeholder="your password here" value={props.pswd} onChange={props.onPswdChanged}/>
          </Form.Group>

          <Form.Group controlId="signInUp">
          <Button type="button" value="signin" className="offset-2 col-8 offset-2 offset-sm-1 col-sm-4 my-3" disabled={!props.canSign} onClick={props.onSignInClicked}> 
            Sign in
          </Button>
          <Button type="button" value="signup" className="offset-2 col-8 offset-2 offset-sm-2 col-sm-4 offset-sm-1 my-3" disabled={!props.canSign} onClick={props.onSignUpClicked}>
            Sign up
          </Button>
          </Form.Group>
          
          <Form.Group controlId="forgotPswd">
            <Button type="button" value="forgot" className="offset-3 col-6 offset-3 offset-sm-2 col-sm-8 offset-sm-2 my-5" onClick={props.onForgotClicked}>
              forgot passsword ?
            </Button>
          </Form.Group>
        </Form>
      </div>
    </Container>
  )


}