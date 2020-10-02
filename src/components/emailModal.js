import React, { useState } from "react"
import { Modal, Button, Form, Col } from "react-bootstrap"

const Results = ({ onHide, value }) => {
  const [name, setName] = useState("")

  const output = value.reduce((outputTextArray, currentValue) => {
    const returnArray = [...outputTextArray]
    const { resultText } = currentValue || {}
    if (resultText && resultText !== "void") {
      returnArray.push(resultText)
    }
    return returnArray
  }, [])

  const sendEmail = event => {
    event.preventDefault()
    const listText = output.map(outputText => `%0D%0A •  ${outputText} %0D%0A`)
    let a = document.createElement("a")
    a.href = `mailto:michaeljonas@rationalunicorn.com?subject=Choose Your Venture Results&body=Hello Rational Unicorn. I did a thing!
        %0D%0A
        %0D%0A And by that I mean I've taken my first step towards becoming an entrepreneur and I'd like to talk about it!
        %0D%0A
        %0D%0A My results from the Choose Your Venture application include the following services:
        %0D%0A ${listText}
        %0D%0A I can't wait to meet you and until then take care.
        %0D%0A
        %0D%0A Fondly,
        %0D%0A ${name}`
    a.target = "_blank" // this opens in a new tab
    a.rel = "noopener noreferrer"
    a.click()
    onHide
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
            <p id="email-head">Choose your venture</p>
            <p id="email-title">Results Cheat Sheet</p>
            <p id="email-subTitle">Presented by Rational Unicorn</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul id="email-body">
            <p className="referral-text">Send us your results and we'll help you get started!</p>
            {output.map(outputText => (
              <>
                <li key={outputText?.replace(/\s/, "-")} className="email-li">
                  {outputText}
                </li>
                <br />
              </>
            ))}
            <p className="referral-text">Need a different service?<br/>Check out our list of vetted specialists <a className="referral-link" href="https://rationalunicornlegalservices.com/referrals">here</a>.</p>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Form onSubmit={sendEmail}>
            <Form.Group>
              <Form.Row>
                <Col xs={12}>
                  <Form.Control
                    type="text"
                    onChange={e => setName(e.target.value)}
                    placeholder="Please enter your name"
                  />
                  <a
                    className="newsLink"
                    href="https://rationalunicorn.us7.list-manage.com/subscribe?u=26217361a595e76edc25043f3&id=09deb29ea3"
                  >
                    Sign up for the Newsletter!
                  </a>
                </Col>
              </Form.Row>
            </Form.Group>
            <div className="noWrap">
              <Button variant="close" onClick={onHide}>
                Close
              </Button>
              <Button variant="send" type="submit">
                E-Mail
              </Button>
            </div>
          </Form>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Results
