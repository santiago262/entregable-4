import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function DeleteModal({ showDelete, handleConfirmDelete, handleCancelDelete, nameUser }) {
  return (
    <Modal show={showDelete} onHide={handleCancelDelete}>
      <Modal.Header closeButton>
        <Modal.Title>Delete User</Modal.Title>
      </Modal.Header>
      <Modal.Body>{`Are you sure you want to delete ${nameUser}?`}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCancelDelete}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleConfirmDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}