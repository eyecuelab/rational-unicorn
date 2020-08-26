import React, { useState } from "react"
import Button from "../components/button"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// const textElement = document.getElementById("text")
// const optionButtonsElement = document.getElementById("option-buttons")

const textNodes = [
  {
    id: 1,
    text: "Let's get started, select what best applies to you.",
    options: [
      {
        text: "I'm starting a business",
        config: { startingBiz: true },
        nextText: 2,
      },
      {
        text: "I own a business",
        nextText: 2,
      },
      {
        text: "I'm going into business with someone",
        config: { startingBiz: true, partner: true },
        nextText: 2,
      },
      {
        text: "I'm a content/product creator",
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
        config: { copyright: true },
        nextText: 4,
      },
      {
        text: "Trademarks",
        config: { trademark: true },
        nextText: 4,
      },
      {
        text: "Patents",
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

const Helper = () => {
  const [textState, setTextState] = useState(textNodes[0]);
  const [configuration, setConfiguration] = useState(null);

  function handleClick(next, config) {
    // set configuration options
    if (!!config) {
      setConfiguration(config);
    }

    // choose next node to use
    for (let i = 0; i < textNodes.length; i++) {
      if (next == textNodes[i].id) {
        // set that node to textState
        setTextState(textNodes[i]);
        return;
      }
    }
  }


  // function showTextNode(textNodeIndex) {
  //   const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
  //   setTextState(textNode.text) // hook gets set here  
    // while (optionButtonsElement.firstChild) {
    //   optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    // }

    // textNode.options.forEach(option => {
    //   if (showOption(option)) {
    //     const button = document.createElement("button");
    //     button.innerText = option.text;
    //     button.classList.add("btn");
    //     button.addEventListener("click", () => selectOption(option));
    //     optionButtonsElement.appendChild(button);
    //   }
    // })
  // }

  // function showOption(option) {
  //   return option.requiredState == null || option.requiredState(state);
  // }

  // function selectOption(option) {
  //   const nextTextNodeId = option.nextText;
  //   if (nextTextNodeId <= 0) {
  //     return startHelper();
  //   }
  //   state = Object.assign(state, option.setState);
  //   showTextNode(nextTextNodeId);
  // }



  return (
    <Layout>
      <SEO title="Page two" />
      <div class="container">
        <div id="text">{textState.text}</div>
        <div id="option-buttons" class="btn-grid">
          {textState.options.map(option => {
            // logic for showing option based on required state
            return <Button node={option} handleClick={handleClick} />
          })}
        </div>
      </div>
      <Link to="/">Start Over</Link>
    </Layout>
  )
}



export default Helper
