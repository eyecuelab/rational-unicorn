import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const DescriptionModal = ({ onHide, value, handleClick })=> {

  return (
    <>
      <style type="text/css">
      {`
      .btn-close {
        background-color: rgb(42, 196, 175);
        color: white;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 30px

      }

      .btn-confirm {
        background-color: rgb(28, 129, 116);
        color: white;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 30px
      }

      .modal-header {
        background-color: purple;
        color: white;
        font-size: 10px;
        padding: 0.5em, 1.5em;
        text-align: center;
      }

      .modal-footer {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      `}
      </style>
      <Modal show={true} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{value.text}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{value.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="close" onClick={onHide}>
            Close
          </Button>
          <Button variant="confirm" onClick={()=>handleClick(value)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DescriptionModal;