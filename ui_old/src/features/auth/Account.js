import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Redirect } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'

//import { authenticated } from './accountSlice'
import Container from 'react-bootstrap/esm/Container'
import { getAccount } from './accountSlice';


const AccountReadOnlyExcerpt = (account) => {

  return (
      <>
        <Form.Group as={Row} controlId="accountEmail">
          <Form.Label column sm="4">email</Form.Label>
          <Col sm="8">
            <Form.Control plaintext readOnly value={account.email} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="accountPswd">
          <Form.Label column sm="4">password</Form.Label>
          <Col sm="8">
            <Form.Control type="password" plaintext readOnly value={account.pswd} />
          </Col>
        </Form.Group>
      </>
  )
  
}

export const Account = () => {

  const account = useSelector(getAccount)
  const hasAccount = (0 < Object.keys(account).length)

  console.log("[Account]", account)

  if(!hasAccount){
    return (<Redirect to="/login?referrer=/account"/>)
  }
  else{
    return (
      <Container>
        <div className="card my-5">
          <Form className="card-body cardbody-color col-md-6 offset-md-3 col-8 offset-2 justify-content-md-center">
            <div className="text-center">
              <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-2"
                width="200px" alt="profile"/>
            </div>
            <AccountReadOnlyExcerpt {...account} />
            </Form>
        </div>
      </Container>
    )
  }

}