import React, { useState } from "react"
import Button from "../components/button"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TextNodes from "../components/content"
import DescriptionModal from "../components/descriptionModal"
import useNextNode from "../components/useNextNode"

const Helper = () => {
  const [nodeState, setNodeState] = useState(TextNodes[0])
  const [showModal, setShowModal] = useState(false)
  const [optionValue, setOptionValue] = useState(null)
  console.log(showModal, optionValue);
  

  const handleClose = () => setShowModal(false)
  const handleClick = (value) => {
    const nextNode = useNextNode(value);
    setNodeState(nextNode);
    setShowModal(false);
  }

//  console.log(nodeState.options[0].text + " ___button text___");

  return (
    <Layout>
      <SEO title="Service Guide" />
      <div class="container">
        {
          showModal ? (
            <DescriptionModal
              onHide={handleClose}
              value={optionValue}
              handleClick={handleClick}
            />
          ) : null
        } 
        <div id="text">{nodeState.question}</div>
        <div id="option-buttons" class="btn-grid">
          {nodeState.options.map(option => {
            // console.log(option.text + " ___mapped button text___");
            return (
                <Button
                  node={option.text}
                  handleClick={() => {
                    setOptionValue(option)
                    setShowModal(true)
                  }}
                />
            )
          })}
        </div>
      </div>
      <br />
      <br />
      <button class="home-btn"><Link to="/">Start Over</Link></button>
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
