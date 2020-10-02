import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const HelpModal = ({ onHide })=> {

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
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            width: 120px;
            height: 30px;
            transform: translate(0%, 0%) scale(1.1);
        }
        .btn-close:hover{
            background-color: rgb(18, 63, 61);
            color: #FFFFFF;
        }
        .btn-close:active{
            background-color: rgb(18, 63, 61);
            color: #FFFFFF;
        }
      `}
      </style>
      <Modal show={true} onHide={onHide}>
        <Modal.Header>
          <Modal.Title><h3 className="info-head">You Got This</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Congratulations on your first step to becoming an entrepreneur!<br/><br/>At Rational Unicorn, we know it’s a daunting task to sort out all the legal requirements on your own. This is why we created this app to help potential business owners like you through the process.<br/><br/>After clicking <strong>start</strong> simply select the option that best applies to you. If you're not sure what that is, fear not we've got an option for that too! Once you've made your way through you'll be given a list of the services you may require!<br/><br/><strong>Please note that the only way to reset your choices is by clicking Start Over</strong>.<br/><br/> Have fun and thanks for stopping by!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="close" onClick={onHide}>
            Got It!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HelpModal;