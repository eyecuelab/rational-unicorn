import React from "react";
import {Modal, Button, Form} from 'react-bootstrap';

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
          float: left;
        }

        .btn-send {
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
      `}
      </style>
        <Modal show={true} onHide={onHide}>
            <Modal.Header>
                <Modal.Title><h2 id="questionStyles">Here are your Results</h2></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul>
                    {output.map(outputText => <li>{outputText}</li>)}
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Form inline>
                    <FormControl type="text" placeholder="your-email@email.com" className="mr-sm-2" />
                </Form>
                <Button variant="close" onClick={onHide}>
                    Close
                </Button>
                <Button variant="send" onClick={onHide}>
                    Send
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
} 

export default Results