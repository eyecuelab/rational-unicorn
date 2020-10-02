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
          margin: 0 auto;
          display: flex;
          justify-content: center !important;
          align-items: center !important;
          line-heigh:auto;
          width: 120px;
          height: 30px;
          transform: scale(1.1);
        }
        .btn-close:active{
          background-color: rgb(18, 63, 61);
        }

        .btn-confirm {
          background-color: rgb(46, 155, 149);
          color: white;
          border-radius: 30px;
          margin: 0 auto;
          display: flex;
          justify-content: center !important;
          align-items: center !important;
          line-height: auto;
          width: 120px;
          height: 30px;
          transform: scale(1.1);
        }
        .btn-confirm:active{
          background-color: rgb(18, 63, 61);
        }
      `}
      </style>
      <Modal show={true} onHide={onHide}>
        <Modal.Header>
          <Modal.Title><p id="question-head">{value.text}</p></Modal.Title>
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