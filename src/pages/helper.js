import React, { useState } from "react"
import Button from "../components/button"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TextNodes from "../components/content"
import DescriptionModal from "../components/descriptionModal"

const Helper = () => {
  const [nodeState, setNodeState] = useState(TextNodes[0])
  const [showModal, setShowModal] = useState(false)
  // const [requiredState, setRequiredState] = useState(null);

  const handleShow = () => setShowModal(true)
  const handleClose = () => setShowModal(false)

  const handleClick = option => {
    // set requiredState options
    // if (!!requiredState) {
    //   setRequiredState(requiredState);
    // }
    // choose next node to use
    for (let i = 0; i < TextNodes.length; i++) {
      if (option.nextNodeId == TextNodes[i].nodeId) {
        // set that node to nodeState
        setNodeState(TextNodes[i])
        return
      }
    }
  }

  return (
    <Layout>
      <SEO title="Service Guide" />
      <div class="container">
        <div id="text">{nodeState.question}</div>
        <div id="option-buttons" class="btn-grid">
          {nodeState.options.map(option => {
            return (
              <>
                <Button
                  node={option.text}
                  handleClick={() => handleShow(handleClick(option), option)}
                />
                <DescriptionModal
                  show={showModal}
                  onHide={handleClose}
                  // onClick={handleClick}
                />
              </>
            )
          })}
        </div>
      </div>
      <br />
      <br />
      <Link to="/">Start Over</Link>
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
