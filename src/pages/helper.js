import React, { useState } from "react"
import Button from "../components/button"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TextNodes from "../components/content"
import DescriptionModal from "../components/descriptionModal"
import useNextNode from "../components/useNextNode"
import usePrevNode from "../components/usePrevNode"
import Results from "../components/results"

const Helper = () => {
  const [nodeState, setNodeState] = useState(TextNodes[0])
  const [showModal, setShowModal] = useState(false)
  const [optionValue, setOptionValue] = useState(null)
  const [pathStorage, setPathStorage] = useState([null])

  const handleClose = () => setShowModal(false)

  const handleBack = value => {
    const prevNode = usePrevNode(value)
    const newPathStorage = pathStorage.slice(0, pathStorage.length - 1)
    setPathStorage(newPathStorage);
    console.log(pathStorage, "_________pathStorage after slice()")
    setNodeState(prevNode)
    setShowModal(false)
  }

  const handleClick = value => {
    console.log(nodeState.nodeId, "_______ Current Node ID")
    const nextNode = useNextNode(value)
    setPathStorage([...pathStorage, value])
    console.log(pathStorage, "_______pathStorage")
    setNodeState(nextNode)
    setShowModal(false)
  }

  function handleHome() {
    window.location = 'http://localhost:8000/';
  }

  return (
    <>
      <style type="text/css">
        {`
            
        `}
      </style>
      <Layout>
        <SEO title="Service Guide" />
        <div class="container">
          {showModal ? (
            <DescriptionModal
              onHide={handleClose}
              value={optionValue}
              handleClick={handleClick}
            />
          ) : null}
          <div id="text">
            {nodeState !== TextNodes[8] ? <h1 className="questionStyles">{nodeState.question}</h1> : <h3>Here are your Results</h3>}
            <br /><br />
          </div>
          <div id="option-buttons" class="btn-grid">
            {nodeState !== TextNodes[8]
              ? nodeState.options.map(option => {
                return (
                  <>
                    <li><Button
                      variant="default"
                      className="options"
                      node={option.text}
                      handleClick={() => {
                        setOptionValue(option)
                        setShowModal(true)
                      }}
                    /></li><br />
                  </>
                )
              })
              : <Results value={pathStorage} />}
          </div>
        </div>
        <div class="nav-btns">
          <button className="home-btn" onClick={() => handleHome()}>
            Start Over
          </button>
          <button className="back-btn" onClick={() => handleBack(pathStorage)}>
            Back
          </button>
        </div>
      </Layout>
    </>
  )
}

export default Helper

// --------------graphQL logic----------------------

// const Helper = () => {
//   const data = useStaticQuery(
//     graphql`
//       query {
//         allContentfulTestTypeForUnicorn {
//           edges {
//             node {
//               uniTitle
//               uniId
//               slug
//               id
//               uniBodyText {
//                 uniBodyText
//               }
//             }
//           }
//         }
//         allContentfulTestTypeForUnicornDoWeNeedJsonJsonNode {
//           edges {
//             node {
//               buttons
//             }
//           }
//         }
//       }
//     `
//   )

//--------------Render-------------------

// <Layout>
//   <SEO title="Service Guide" />
//   <div>
//     <AnswerNode props={data}></AnswerNode>
//   </div>
//   <div class="container">
//     {data.allContentfulTestTypeForUnicorn.edges.map(edge => {
//       return (
//         <>
//           <h1>{edge.node.uniTitle}</h1>
//           <p>{edge.node.id}</p>
//           <p>{edge.node.uniBodyText.uniBodyText}</p>
//         </>
//       )
//     })}
//   </div>
// </Layout>
