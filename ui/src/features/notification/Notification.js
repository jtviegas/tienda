import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { notificationOut, getNotification } from './notificationSlice';

export const Notification = () => {

  const dispatch = useDispatch()
  const notification = useSelector(getNotification)
  const dismissNotification = () => {
    dispatch(notificationOut());
  }

  const show = ((notification != undefined) && (-1 < Object.keys(notification).indexOf("text")))
  return (
    <Modal show={show} onHide={dismissNotification}>
      <Modal.Header closeButton>
        <Modal.Title>{notification ? notification.header : ""}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{notification ? notification.text: ""}</Modal.Body>
      <Modal.Footer>
        <Button onClick={dismissNotification}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
