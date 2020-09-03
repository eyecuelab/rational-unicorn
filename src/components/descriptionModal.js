import React, { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';
import HandleClick from '../components/handleClick';
import Helper from '../pages/helper';

const DescriptionModal = (option)=> {
  const [showModal, setShowModal] = useState(false);
  
  const handleClose = () => setShowModal(false);


  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{option.text}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{option.description}</Modal.Body>
        <Modal.Footer>
          <p>Is this what you were looking for?</p>
          <Button variant="secondary" onClick={handleClose}>
            Nope
          </Button>
          <Button variant="primary" onClick={<HandleClick value={ option }/>}>
            Yup!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DescriptionModal;