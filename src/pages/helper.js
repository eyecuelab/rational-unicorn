import React, { useState } from "react"
import Button from "../components/button"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content"
import DescriptionModal from "../components/descriptionModal"

const btnStyles = {}

// const textNodes = [
//   {
//     id: 1,
//     text: "Let's get started, select what best applies to you.",
//     options: [
//       {
//         text: "I'm starting a business",
//         requiredState: null,
//         config: { startingBiz: true },
//         nextText: 2,
//       },
//       {
//         text: "I own a business",
//         requiredState: null,
//         config: null,
//         nextText: 2,
//       },
//       {
//         text: "I'm going into business with someone",
//         requiredState: null,
//         config: { startingBiz: true, partner: true },
//         nextText: 4,
//       },
//       {
//         text: "I'm a content/product creator",
//         requiredState: null,
//         config: null,
//         nextText: 3,
//       },
//     ],
//   },
//   {
//     id: 2,
//     text:
//       "A new business can be quite an exciting adventure! Here are some things you may need to help you get started!",
//     options: [
//       {
//         text: "LLC",
//         requiredState: currentState => currentState.startingBiz,
//         config: { llc: true },
//         nextText: 4,
//       },
//       {
//         text: "Partnership Agreement",
//         requiredState: currentState => currentState.partner,
//         config: { partnership: true },
//         nextText: 4,
//       },
//       {
//         text: "Intellectual Property",
//         requiredState: null,
//         config: { copyright: true, trademark: true, patent: true },
//         nextText: 3,
//       },
//       {
//         text: "Start Over",
//         requiredState: null,
//         config: null,
//         nextText: 1,
//       },
//     ],
//   },
//   {
//     id: 3,
//     text:
//       "I applaud your creativity! Here's some options in protecting what you've created.",
//     options: [
//       {
//         text: "Copyrights",
//         requiredState: null,
//         config: { copyright: true },
//         nextText: 3,
//       },
//       {
//         text: "Trademarks",
//         requiredState: null,
//         config: { trademark: true },
//         nextText: 3,
//       },
//       {
//         text: "Patents",
//         requiredState: null,
//         config: { patent: true },
//         nextText: 3,
//       },
//       {
//         text: "Start Over",
//         requiredState: null,
//         config: null,
//         nextText: 1,
//       },
//     ],
//   },
//   {
//     id: 4,
//     text:
//       "Going into business with someone huh? It's good to know someone will have your back. Here's some services you may need.",
//     options: [
//       {
//         text: "Partnership Agreement",
//         requiredState: currentState => currentState.partner,
//         config: null,
//         nextText: 4,
//       },
//       {
//         text: "LLC Contract",
//         requiredState: currentState => currentState.llc,
//         config: null,
//         nextText: 2,
//       },
//       {
//         text: "Intellectual Property",
//         requiredState: currentState => currentState.copyright,
//         config: null,
//         nextText: 3,
//       },
//       {
//         text: "Start Over",
//         requiredState: null,
//         config: null,
//         nextText: 1,
//       },
//     ],
//   },
// ]

const Helper = () => {
  const [textState, setTextState] = useState(textNodes[0])
  const [configuration, setConfiguration] = useState(null)

  const handleClick = (description, requiredState, prevNodeId, nextNodeId)=> {
    // set configuration options
    if (!!requireState) {
      setConfiguration(requiredState);
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
      <button class="home-btn">
        <Link to="/">Home</Link>
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
