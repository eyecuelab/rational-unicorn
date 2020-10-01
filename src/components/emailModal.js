import React, { useState } from "react";
import {Modal, Button, Form, Col} from 'react-bootstrap';

const Results = ({ onHide, value }) => {

    const [email, setEmail] = useState('')

    const output = value.reduce((outputTextArray, currentValue) => {
        const returnArray = [...outputTextArray];
        const { resultText } = currentValue || {};
        if (resultText && resultText !== 'void') {
            returnArray.push(resultText);
        }
        return returnArray;
    }, []);

    const sendEmail = (event) => {
        event.preventDefault();
        const refText = "here"
        const refLink = refText.link("https://rationalunicornlegalservices.com/referrals")
        const listText = output.map((outputText) => `%0D%0A •  ${outputText} %0D%0A`) 
        let a = document.createElement('a');
        a.href=`mailto:${email}?subject=Your Cheat Sheet from Rational Unicorn&body=Congratulations on your first step to becoming an entrepreneur!
        %0D%0A
        %0D%0AAt Rational Unicorn, we know it’s a daunting task to sort out all the legal requirements on your own. This is why we created this app to help potential business owners like you through the process.
        %0D%0A
        %0D%0A Based on your selections, here is what you may need to get you on your way!
        %0D%0A ${listText}
        %0D%0A Here are some additional resources to help get you on your way:
        %0D%0A
        %0D%0A Referrals to vetted professionals that offer additional services can be found ${refLink}.`
        a.target = '_blank'; // this opens in a new tab
        a.rel ='noopener noreferrer'
        a.click();
        onHide;
    }

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
          color: #FFFFFF !important;
        }
        .btn-send:active{
            background-color: rgb(18, 63, 61);
            color: #FFFFFF !important;
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
                <ul id="email-body">
                    {output.map(outputText => <><li key={outputText?.replace(/\s/,'-')} className="email-li">{outputText}</li><br/></>)}
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Form onSubmit={sendEmail}>
                    <Form.Group>
                        <Form.Row>
                            <Col xs={12}>
                                <Form.Control type="email" onChange= {(e)=> setEmail(e.target.value)} placeholder="Enter E-mail Here" /><br/>
                                <Form.Text className="text-muted">
                                    * We'll never share your email with anyone else *
                                </Form.Text>
                                <a className="newsLink" href="https://rationalunicorn.us7.list-manage.com/subscribe?u=26217361a595e76edc25043f3&id=09deb29ea3">Sign up for the Newsletter!</a>
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <div className="noWrap">
                        <Button variant="close" onClick={onHide}>
                            Close
                        </Button>
                        <Button variant="send" type="submit">
                            Send
                        </Button>
                    </div>
                </Form>
            </Modal.Footer>
        </Modal>
        </>
    );
} 

export default Results;