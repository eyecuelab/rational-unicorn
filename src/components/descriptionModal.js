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
        .btn-close:active{
          background-color: rgb(18, 63, 61);
        }

        .btn-confirm {
          background-color: rgb(46, 155, 149);
          color: white;
          border-radius: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 120px;
          height: 30px;
          float: right;
        }
        .btn-confirm:active{
          background-color: rgb(18, 63, 61);
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