import React, { useState } from "react"
import Button from "../components/button"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AnswerNode from "../components/answer-node"

const btnStyles = {}


// const Helper = () => {
//   const [textState, setTextState] = useState(textNodes[0]);
//   const [configuration, setConfiguration] = useState(null);

//   function handleClick(next, config) {
//     // set configuration options
//     if (!!config) {
//       setConfiguration(config);
//     }
//     // choose next node to use
//     for (let i = 0; i < textNodes.length; i++) {
//       if (next == textNodes[i].id) {
//         // set that node to textState
//         setTextState(textNodes[i]);
//         return;
//       }
//     }
//   }

const Helper = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulTestTypeForUnicorn {
          edges {
            node {
              uniTitle
              uniId
              slug
              id
              uniBodyText {
                uniBodyText
              }
            }
          }
        }
        allContentfulTestTypeForUnicornDoWeNeedJsonJsonNode {
          edges {
            node {
              buttons
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Service Guide" />
      <div>
        <AnswerNode props={data}></AnswerNode>
      </div>
      <div class="container">
        {data.allContentfulTestTypeForUnicorn.edges.map(edge => {
          return (
            <>
              <h1>{edge.node.uniTitle}</h1>
              <p>{edge.node.id}</p>
              <p>{edge.node.uniBodyText.uniBodyText}</p>
            </>
          )
        })}
      </div>
    </Layout>
    // <Layout>
    //   <SEO title="Service Guide" />
    //   <div class="container">
    //     <div id="text">{textState.text}</div>
    //     <div id="option-buttons" class="btn-grid">
    //       {textState.options.map(option => {
    //         // logic for showing option based on required state
    //         // return !option.requiredState? || option.requiredState.contains(option.config) <Button style={btnStyles} node={option} handleClick={handleClick} /> : null
    //         return <Button style={btnStyles} node={option} handleClick={handleClick} />
    //       })}
    //     </div>
    //   </div>
    //   <br />
    //   <br />
    //   <Link to="/">Start Over</Link>
    // </Layout>
  )
}

export default Helper
