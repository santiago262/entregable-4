import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormData from "./FormUser"

export default function CustomModal({ show, handleClose ,setUserEdit ,updateUser ,postUser,userEdit}) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register User</Modal.Title>
        </Modal.Header>
        
        <Modal.Body><FormData setUserEdit={setUserEdit} updateUser={updateUser}postUser={postUser} userEdit={userEdit} handleClose={handleClose}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}