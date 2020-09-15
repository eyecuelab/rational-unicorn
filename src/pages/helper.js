import React, { useState } from "react"
import OptionButton from "../components/optionButton"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TextNodes from "../components/content"
import DescriptionModal from "../components/descriptionModal"
import EmailModal from "../components/emailModal"
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
    setPathStorage(newPathStorage)
    console.log(pathStorage, "_________pathStorage after slice()")
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

  function handleHome() {
    window.location = "http://localhost:8000/"
  }

  function handleHelp() {
    alert(
      "Hey there! Click on the option that best applies to you or if you don't know, we got an option for that too! Once you've made your way through you'll be given a list of the services you may require!"
    )
  }

  return (
    <>
      <style type="text/css">
        {`
            
        `}
      </style>
      <Layout>
        <SEO title="Service Guide" />
        <div class="pathwayContainer">
          {showModal ? (
            <DescriptionModal
              onHide={handleClose}
              value={optionValue}
              handleClick={handleClick}
            />
          ) : null}
          {showModal && nodeState == TextNodes[8] ? (
            <EmailModal onHide={handleClose} value={pathStorage} />
          ) : null}
          <div id="text">
            {nodeState !== TextNodes[8] ? (
              <h1 id="questionStyles">{nodeState.question}</h1>
            ) : (
              <div className="splashContainer animated bounceInRight">
                <h1 id="title">
                  Choose
                  <br /> your <br />
                  venture
                </h1>
                <h2 id="subTitle-alt">
                  An interactive <br />
                  guide to your first <br />
                  business entity
                </h2>
              </div>
            )}
            <br />
            <br />
          </div>
          <div id="option-buttons">
            {nodeState !== TextNodes[8] ? (
              nodeState.options.map(option => {
                return (
                  <>
                    <li>
                      <OptionButton
                        class="option-btn"
                        node={option.text}
                        handleClick={() => {
                          setOptionValue(option)
                          setShowModal(true)
                        }}
                      />
                    </li>
                    <br />
                  </>
                )
              })
            ) : (
              <Results
                value={pathStorage}
                showEmail={() => setShowModal(true)}
              />
            )}
          </div>
        </div>
        <div class="nav-btns">
          <button className="home-btn" onClick={() => handleHome()}>
            Start Over
          </button>
          <button className="back-btn" onClick={() => handleBack(pathStorage)}>
            Back
          </button>
          <button className="home-btn" onClick={() => handleHelp()}>
            Help
          </button>
        </div>
      </Layout>
    </>
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
