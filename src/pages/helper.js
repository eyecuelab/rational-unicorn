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
    console.log(pathStorage, "_________pathStorage after pop()")
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

  return (
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
          {nodeState !== TextNodes[8] ? nodeState.question : <h3>Here are your Results</h3>}
        </div>
        <div id="option-buttons" class="btn-grid">
          {nodeState !== TextNodes[8]
            ? nodeState.options.map(option => {
                return (
                  <Button
                    node={option.text}
                    handleClick={() => {
                      setOptionValue(option)
                      setShowModal(true)
                    }}
                  />
                )
              })
            : <Results value={pathStorage} />}
          <button class="btn" onClick={() => handleBack(pathStorage)}>
            Back
          </button>
        </div>
      </div>
      <br />
      <br />
      <button class="home-btn">
        <Link to="/">Start Over</Link>
      </button>
    </Layout>
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
