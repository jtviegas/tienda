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

export const Account = () => {

  const dispatch = useDispatch()
  const history = useHistory()
  
  const account = useSelector(getAccount)
  const hasAccount = (0 < Object.keys(account).length)

  console.log("[Account]", account)

  if(!hasAccount){
    return (<Redirect to="/login?referrer=/account"/>)
  }
  else{
    return (
      <Container>
        <fieldset disabled={!hasAccount}>
        <Form>
        <Row className="justify-content-md-center">
          <Col md={{ span: 6 }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={account.user}/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={{ span: 6 }}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={account.pswd}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          </Col>
        </Row>
        </Form>
        </fieldset>
      </Container>
    )
  }
    
  //}


}