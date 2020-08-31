import React, { useState } from "react"
import Button from "../components/button"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content"
import DescriptionModal from "../components/descriptionModal"


const Helper = () => {
  const [nodeState, setNodeState] = useState(textNodes[0]);
  const [requiredState, setRequiredState] = useState(null);
  const handleShow = () => setShow(true);

  const handleClick = (description, requiredState, prevNodeId, nextNodeId)=> {
    // set requiredState options
    if (!!requiredState) {
      setRequiredState(requiredState);
    }
    // choose next node to use
    for (let i = 0; i < textNodes.length; i++) {
      if (nextNodeId == textNodes[i].nodeId) {
        // set that node to nodeState
        setNodeState(textNodes[i]);
        return;
      }
    }
  }

  return (

    <Layout>
      <SEO title="Service Guide" />
      <div class="container">
        <div id="text">{nodeState.question}</div>
        <div id="option-buttons" class="btn-grid">
          {nodeState.options.map(option => { // refactor for reduce()
            // logic for showing option based on required state
            // return !option.requiredState? || option.requiredState.contains(option.config) <Button style={btnStyles} node={option} handleClick={handleClick} /> : null
            return <Button style={btnStyles} node={option} handleClick={handleShow(handleClick), option} />
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