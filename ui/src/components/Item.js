import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { TimeAgo } from './TimeAgo'

export const ItemExcerpt = ({ item }) => {
  return (
    <article className="card text-center mb-3" key={item.id}>
      <Container fluid="md">
        <Form>

          <Form.Group as={Row} className="mb-3">
            <Col>
              <Form.Label column> {item.name} </Form.Label>
            </Col>
            <Col>
              <TimeAgo creation={new Date(item.creation)} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col>
              <Form.Label column> price </Form.Label>
            </Col>
            <Col>
              <Form.Label column> {item.price} </Form.Label>
            </Col>
            <Col>
              <Form.Label column> family </Form.Label>
            </Col>
            <Col>
              <Form.Label column> {item.family} </Form.Label>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col>
              <Form.Label column> category </Form.Label>
            </Col>
            <Col>
              <Form.Label column> {item.category} </Form.Label>
            </Col>
            <Col>
              <Form.Label column> subcategory </Form.Label>
            </Col>
            <Col>
              <Form.Label column> {item.subcategory} </Form.Label>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col>
              {item.description}
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            
              {item.images.map( (img, i) =>
                <Col key={i}>
                  <Image src={img.url} thumbnail />
                </Col>
							)
				}
            
          </Form.Group>

        </Form>
      


      </Container>

      

      <p className="post-content">{item.description}</p>
      <div>
        
      </div>
     

    </article>
  )
}