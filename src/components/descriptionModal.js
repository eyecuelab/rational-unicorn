import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const DescriptionModal = ({ onHide, value, handleClick })=> {

  return (
    <>
      <Modal show={true} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{value.text}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{value.description}</Modal.Body>
        <Modal.Footer>
          <p>Is this what you were looking for?</p>
          <Button variant="outline-dark" onClick={onHide}>
            Nope
          </Button>
          <Button variant="outline-success" onClick={()=>handleClick(value)}>
            Yup!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DescriptionModal;