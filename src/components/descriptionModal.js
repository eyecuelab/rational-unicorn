import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import HandleClick from '../components/handleClick';

const DescriptionModal = (showModal, option)=> {

  const handleClose = () => setShowModal(false);
  console.log(showModal + "___modal prop state___");
  console.log(option.value + "___modal props___");

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{option.text}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{option.description}</Modal.Body>
        <Modal.Footer>
          <p>Is this what you were looking for?</p>
          <Button variant="outline-dark" onClick={handleClose}>
            Nope
          </Button>
          <Button variant="outline-success" onClick={<HandleClick value={option.value}/>}>
            Yup!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DescriptionModal;