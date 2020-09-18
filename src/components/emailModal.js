import React from "react";
import {Modal, Button, Form, FormControl} from 'react-bootstrap';

const Results = ({ onHide, value }) => {

    const output = value.reduce((outputTextArray, currentValue) => {
        const returnArray = [...outputTextArray];
        const { resultText } = currentValue || {};
        if (resultText && resultText !== 'void') {
            returnArray.push(resultText);
        }
        // console.log(currentValue, returnArray, outputTextArray);
        return returnArray;
    }, []);

    // console.log(output)

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
          transform: translate(-30%, 0%) scale(1.1);
        }
        .btn-close:active{
            background-color: rgb(18, 63, 61);
          }

        .btn-send {
          background-color: rgb(46, 155, 149);
          color: white;
          border-radius: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 120px;
          height: 30px;
          transform: translate(-15%, 0%) scale(1.1);
        }
        .btn-send:active{
          background-color: rgb(18, 63, 61);
        }
      `}
      </style>
        <Modal show={true} onHide={onHide}>
            <Modal.Header>
                <Modal.Title>
                    <p id='email-head'>Choose your venture</p>
                    <p id='email-title'>Your Cheat Sheet</p>
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
                <Form inline>
                    <FormControl type="text" placeholder="email@email-address.com" id="email-form" />
                </Form>
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