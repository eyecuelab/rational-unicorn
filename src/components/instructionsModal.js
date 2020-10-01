import React from "react"
import { Modal, Button } from 'react-bootstrap';
import "../components/layout.css"

const InstructionsModal = ({ onHide, node }) => {
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
          transform: scale(1.1);
        }
        .btn-close:active{
          background-color: rgb(18, 63, 61);
        }
        .head {
          font-size:16px;
          font-weight:bold
        }
        .details {
          font-size:14px;
          font-family: Montserrat;
        }
        .details-nodeId {
          font-size: 14px;
          font-weight:bold;
          font-family:Montserrat
        }
        p {
          font-size:12px
        }
      `}
      </style>
      <Modal show={true} onHide={onHide}>
        <Modal.Header>
          <Modal.Title>
            <p class="head">Details for: <span class="details">{node.node.nodeId}</span></p>
          </Modal.Title>
          <Modal.Body>
            <p class="head">Question/Prompt:</p>
            <p class="details">"{node.node.question.question}"</p>
            <div>
              <p class="head">Answers:</p>
              {node.node.answers.answers.map(answer => {
                return <div><span class="details">"{answer.text}" </span>
                  <p>links to: <span class="details-nodeId">{answer.nextNodeId}</span></p></div>
              })}

            </div>
          </Modal.Body>
        </Modal.Header>
      </Modal >
    </>
  )
}

export default InstructionsModal