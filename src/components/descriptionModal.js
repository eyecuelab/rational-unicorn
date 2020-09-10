import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const DescriptionModal = ({ onHide, value, handleClick })=> {

  return (
    <>
      <style type="text/css">
      {`
      .btn-close {
        background-color: rgb(46, 155, 149);
        color: white;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 30px;
        float: left;

      }

      .btn-confirm {
        background-color: rgb(18, 63, 61);
        color: white;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 30px;
        float: right;
      }

      .modal {
        padding: 10em 2em;
        border-radius: 10px;
      }

      .modal-header {
        background-color: rgb(143, 2, 101);
        color: white;
        font-size: 10px;
        padding: 0.5em, 1.5em;
        text-align: center;
      }

      .modal-title {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 0 auto;
        font-size: 20px
      }

      .modal-body {
        overflow-y: scroll;
      }

      .modal-footer {
        display: inline-block;
        margin: 0 auto;
        white-space: nowrap;
      }
      `}
      </style>
      <Modal show={true} onHide={onHide}>
        <Modal.Header>
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