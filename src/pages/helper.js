import React, { useState } from "react"
import Button from "../components/button"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const btnStyles = {}

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
        config: null,
        nextText: 2,
      },
      {
        text: "I'm going into business with someone",
        requiredState: null,
        config: { startingBiz: true, partner: true },
        nextText: 4,
      },
      {
        text: "I'm a content/product creator",
        requiredState: null,
        config: null,
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
        text: "Partnership Agreement",
        requiredState: currentState => currentState.partner,
        config: { partnership: true },
        nextText: 4,
      },
      {
        text: "Intellectual Property",
        requiredState: null,
        config: { copyright: true, trademark: true, patent: true },
        nextText: 3,
      },
      {
        text: "Start Over",
        requiredState: null,
        config: null,
        nextText: 1,
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
        nextText: 3,
      },
      {
        text: "Trademarks",
        requiredState: null,
        config: { trademark: true },
        nextText: 3,
      },
      {
        text: "Patents",
        requiredState: null,
        config: { patent: true },
        nextText: 3,
      },
      {
        text: "Start Over",
        requiredState: null,
        config: null,
        nextText: 1,
      },
    ],
  },
  {
    id: 4,
    text:
      "Going into business with someone huh? It's good to know someone will have your back. Here's some services you may need.",
    options: [
      {
        text: "Partnership Agreement",
        requiredState: currentState => currentState.partner,
        config: null,
        nextText: 4,
      },
      {
        text: "LLC Contract",
        requiredState: currentState => currentState.llc,
        config: null,
        nextText: 2,
      },
      {
        text: "Intellectual Property",
        requiredState: currentState => currentState.copyright,
        config: null,
        nextText: 3,
      },
      {
        text: "Start Over",
        requiredState: null,
        config: null,
        nextText: 1,
      },
    ],
  },
]

const Helper = () => {
  const [textState, setTextState] = useState(textNodes[0])
  const [configuration, setConfiguration] = useState(null)

  function handleClick(next, config) {
    // set configuration options
    if (!!config) {
      setConfiguration(config)
    }
    // choose next node to use
    for (let i = 0; i < textNodes.length; i++) {
      if (next == textNodes[i].id) {
        // set that node to textState
        setTextState(textNodes[i])
        return
      }
    }
  }

  return (
    <Layout>
      <SEO title="Page two" />
      <div class="container">
        <div id="text">{textState.text}</div>
        <div id="option-buttons" class="btn-grid">
          {textState.options.map(option => {
            // logic for showing option based on required state
            // return !option.requiredState? || option.requiredState.contains(option.config) <Button style={btnStyles} node={option} handleClick={handleClick} /> : null
            return (
              <Button
                style={btnStyles}
                node={option}
                handleClick={handleClick}
              />
            )
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
