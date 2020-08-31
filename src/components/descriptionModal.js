import React, { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';

const DescriptionModal = (option, handleClick)=> {
  const [showModal, setShowModal] = useState(true);
  const handleClose = () => setShowModal(false);


  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>{option.description}</Modal.Body>
        <Modal.Footer>
          <p>Is this what you were looking for?</p>
          <Button variant="secondary" onClick={handleClose}>
            Nope
          </Button>
          <Button variant="primary" onClick={handleClick(option)}>
            Yup!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DescriptionModal;