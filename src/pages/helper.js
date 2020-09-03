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

  const handleClose = () => setShowModal(false)

 console.log(nodeState.options[0].text + " button text");

  return (
    <Layout>
      <SEO title="Service Guide" />
      <div class="container">
        <div id="text">{nodeState.question}</div>
        <div id="option-buttons" class="btn-grid">
          {nodeState.options.map(option => {
            console.log(option.text + " mapped button name"); // it works!
            return (
              <>
                <Button
                  node={option.text}
                  handleClick={() => setShowModal(true), option}
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
