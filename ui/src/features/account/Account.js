import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { authenticated } from './accountSlice'
import Container from 'react-bootstrap/esm/Container'

export const Account = () => {

  const account = useSelector(state => state.account)
  console.log("window: ", window)
  const dispatch = useDispatch()

  /*
  if (0 == Object.keys(account).length)
    console.log("no account yet")
    // window.location.href = "https://www.google.com/"
  else
  { */ 
    return (
      <Container>
        <fieldset disabled>
        <Form>
        <Row className="justify-content-md-center">
          <Col md={{ span: 6 }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
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
            <Form.Control type="password" placeholder="Password" />
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
  //}


}