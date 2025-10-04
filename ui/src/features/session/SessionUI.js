import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import config from "../../config.json";



export const SessionUI = (props) => {

    const {
      email, onEmailChanged, 
      secret, onSecretChanged,
      secretName, secretNamePlaceHolder,
      callType, callName, 
      onCallClicked, canCall
    } = props


    
  return (
    <Form className="card-body cardbody-color col-md-6 offset-md-3 col-8 offset-2 justify-content-md-center">
      <div className="text-center">
        <img src={config.logo} className="img-fluid profile-image-pic img-thumbnail rounded-circle my-2"
          width="200px" alt="profile" />
      </div>

      <Form.Group controlId="accountEmail">
        <Form.Label>email</Form.Label>
        <Form.Control type="email" placeholder="enter your email" value={email} onChange={onEmailChanged} />
        <Form.Text> We'll never share your email with anyone else </Form.Text>
      </Form.Group>

      <Form.Group controlId="accountSecret">
        <Form.Label>{secretName}</Form.Label>
        <Form.Control type="password" placeholder={secretNamePlaceHolder} value={secret} onChange={onSecretChanged} />
      </Form.Group>

      <Form.Group controlId="call">
        <Button type="button" value={callType} className="offset-3 col-6 offset-3 offset-sm-2 col-sm-8 offset-sm-2 my-5" onClick={onCallClicked} disabled={!canCall}>
          {callName}
        </Button>
      </Form.Group>

    </Form>
  )


}