import React, { useState } from "react"
import Button from "../components/button"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const btnStyles = {

}

const textNodes = [
  {
    id: 1,
    text: "Let's get started, select what best applies to you.",
    options: [
      {
        text: "I'm starting a business",
        requiredState: null,
        config: { startingBiz: true },
        nextText: 2,
      },
      {
        text: "I own a business",
        requiredState: null,
        nextText: 2,
      },
      {
        text: "I'm going into business with someone",
        requiredState: null,
        config: { startingBiz: true, partner: true },
        nextText: 2,
      },
      {
        text: "I'm a content/product creator",
        requiredState: null,
        nextText: 3,
      },
    ],
  },
  {
    id: 2,
    text:
      "A new business can be quite an exciting adventure! Here are some things you may need to help you get started!",
    options: [
      {
        text: "LLC",
        requiredState: currentState => currentState.startingBiz,
        config: { llc: true },
        nextText: 4,
      },
      {
        text: "Partnership",
        requiredState: currentState => currentState.partner,
        config: { partnership: true },
        nextText: 4,
      },
      {
        text: "Intellectual Property",
        requiredState: null,
        config: { copyright: true, trademark: true, patent: true },
        nextText: 4,
      },
    ],
  },
  {
    id: 3,
    text:
      "I applaud your creativity! Here's some options in protecting what you've created.",
    options: [
      {
        text: "Copyrights",
        requiredState: null,
        config: { copyright: true },
        nextText: 4,
      },
      {
        text: "Trademarks",
        requiredState: null,
        config: { trademark: true },
        nextText: 4,
      },
      {
        text: "Patents",
        requiredState: null,
        config: { patent: true },
        nextText: 4,
      },
    ],
  },
  {
    id: 4,
    text: "Here's a contract you will need to get started on your adventure!",
    options: [
      {
        text: "Copyright Contract",
        requiredState: currentState => currentState.copyright,
        nextText: -1,
      },
      {
        text: "Trademark Contract",
        requiredState: currentState => currentState.trademark,
        nextText: -1,
      },
      {
        text: "Patent Contract",
        requiredState: currentState => currentState.patent,
        nextText: -1,
      },
      {
        text: "LLC Contract",
        requiredState: currentState => currentState.llc,
        nextText: -1,
      },
      {
        text: "Partnership Contract",
        requiredState: currentState => currentState.partner,
        nextText: -1,
      },
    ],
  },
]

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
              uniBodyText { uniBodyText }
            }
          }
    }
  }`
    )


  return (
    <Layout>
      <SEO title="Service Guide"/>
      <div class="container">
        {data.allContentfulTestTypeForUnicorn.edges.map (edge => {
          return (<>
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
