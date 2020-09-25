import React from "react";
import {Modal, Button, Form, Col} from 'react-bootstrap';

const Results = ({ onHide, value }) => {

    const output = value.reduce((outputTextArray, currentValue) => {
        const returnArray = [...outputTextArray];
        const { resultText } = currentValue || {};
        if (resultText && resultText !== 'void') {
            returnArray.push(resultText);
        }
        return returnArray;
    }, []);

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
          margin: 0 auto;
          width: 120px;
          height: 30px;
          transform: translate(10%, 0%) scale(1.1);
        }
        .btn-close:hover{
            background-color: rgb(18, 63, 61);
          }

        .btn-send {
          background-color: rgb(46, 155, 149);
          color: white;
          border-radius: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          width: 120px;
          height: 30px;
          transform: translate(0%, 0%) scale(1.1);
        }
        .btn-send:hover{
          background-color: rgb(18, 63, 61);
        }
        @media screen and (min-width: 460px) {
            .btn-close {
                justify-content: space-evenly;
                margin: 0 auto;
                transform: translate(0%, 0%);
            }
            .btn-send {
                justify-content: space-evenly;
                margin: 0 auto;
                transform: translate(0%, 0%);
            }
        }
      `}
      </style>
        <Modal show={true} onHide={onHide}>
            <Modal.Header>
                <Modal.Title>
                    <p id='email-head'>Choose your venture</p>
                    <p id='email-title'>Results Cheat Sheet</p>
                    <p id='email-subTitle'>Presented by Rational Unicorn</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br/>
                <ul id="email-body">
                    {output.map(outputText => <li className="email-li">{outputText}</li>)}
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Form.Group>
                    <Form.Row>
                        <Col xs={12}>
                            <Form.Control type="email" placeholder="email@email-address.com" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Col>
                    </Form.Row>
                </Form.Group>
                <div className="noWrap">
                    <Button variant="close" onClick={onHide}>
                        Close
                    </Button>
                    <Button variant="send" onClick={onHide}>
                        Send
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>
        </>
    );
} 

export default Results