import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import Content from '../components/content'

const DescriptionModal = (handleClick)=> {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>{}</Modal.Body>
        <Modal.Footer>
          <p>Is this what you were looking for?</p>
          <Button variant="secondary" onClick={handleClose}>
            Nope
          </Button>
          <Button variant="primary" onClick={handleClick(description, requiredState, prevNodeId, nextNodeId), handleClose}>
            Yup!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DescriptionModal;