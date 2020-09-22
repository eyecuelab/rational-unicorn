import React, { useState, useEffect } from "react"
import OptionButton from "../components/optionButton"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TextNodes from "../components/content"
import DescriptionModal from "../components/descriptionModal"
import EmailModal from "../components/emailModal"
import useNextNode from "../components/useNextNode"
import usePrevNode from "../components/usePrevNode"
import Results from "../components/results"
import { reactLocalStorage } from "reactjs-localstorage"
// import html2canvas from 'html2canvas';
// import { jsPDF } from "jspdf";
// import ResultsPDF from "../components/resultsPDF";
// import { Switch, Route, Router } from 'react-router-dom'; // use this to replace window.location = "http://localhost:8000/"

const Helper = () => {
  const data = useStaticQuery(
    graphql`
  query {
  allContentfulUniNodeV4 {
    edges {
      node {
        answers {
          answers {
            description
            nextNodeId
            prevNodeId
            resultText
            text
          }
        }
        question {
          question
        }
        nodeId
      }
    }
  }
}
    `
  )

  const [nodeState, setNodeState] = useState(TextNodes[0])
  const [showModal, setShowModal] = useState(false)
  const [optionValue, setOptionValue] = useState(null)
  const [pathStorage, setPathStorage] = useState(
    reactLocalStorage.get("results")
      ? JSON.parse(reactLocalStorage.get("results"))
      : []
  )
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    const lastNode = pathStorage?.length - 1
    if (pathStorage?.[lastNode]?.nextNodeId == 8) {
      setShowResults(true)
    } else if (pathStorage) {
      for (let i = 0; i < TextNodes.length; i++) {
        if (pathStorage?.[lastNode]?.nextNodeId == TextNodes[i].nodeId) {
          setNodeState(TextNodes[i])
        }
      }
    } else {
      window.location = "http://localhost:8000/"
    }
  }, [])

  const handleBack = async value => {
    const prevNode = usePrevNode(value)
    const lastNode = pathStorage?.length - 1
    const backNode = pathStorage?.[lastNode]?.prevNodeId
    const newPathStorage = pathStorage.slice(0, pathStorage.length - 1)
    await reactLocalStorage.set("results", JSON.stringify(newPathStorage))
    if (pathStorage.length < 1) {
      window.location = "http://localhost:8000/"
    } else if (showResults) {
      for (let i = 0; i < TextNodes.length; i++) {
        if (TextNodes[i].nodeId == backNode) {
          setNodeState(TextNodes[i])
        }
      }
      setShowResults(false)
    } else {
      setNodeState(prevNode)
    }
    setPathStorage(newPathStorage)
    setShowModal(false)
  }

  const handleClick = async value => {
    const nextNode = useNextNode(value)
    const nextPathStorage = [...pathStorage, value]
    await reactLocalStorage.set("results", JSON.stringify(nextPathStorage))
    setPathStorage([...pathStorage, value])
    setShowModal(false)
    if (nextNode === TextNodes[8]) {
      setShowResults(true)
    }
    setNodeState(nextNode)
  }

  //   const downloadPDF = () => {
  //     const divToDisplay = document.getElementById('capture')
  //     html2canvas(divToDisplay).then(async(canvas) => {
  //       const divImage = await canvas.toDataURL("image/png");
  //       const pdf = new jsPDF();
  //       await pdf.addImage(divImage, 'PNG', 0, 0);
  //       await pdf.save("download.pdf");
  //     })
  //  }

  const handleClose = () => setShowModal(false)

  function handleHome() {
    const resetPath = reactLocalStorage.clear()
    setPathStorage(resetPath), (window.location = "http://localhost:8000/")
  }

  function handleHelp() {
    alert(
      "Hey there! Click on the option that best applies to you or if you don't know, we got an option for that too! Once you've made your way through you'll be given a list of the services you may require!"
    )
  }

  return (
    <>
      <Layout>
        <SEO title="Service Guide" />
        <div className="pathwayContainer">
          {showModal && !showResults ? (
            <DescriptionModal
              onHide={handleClose}
              value={optionValue}
              handleClick={handleClick}
            />
          ) : null}
          {showModal && showResults ? (
            <EmailModal onHide={handleClose} value={pathStorage} />
          ) : null}
          <div id="text">
            {!showResults ? (
              <h1 id="questionStyles">{nodeState.question}</h1>
            ) : (
                <div className="splashContainer animated bounceInRight">
                  <h1 id="title-alt">
                    Choose
                  <br /> your <br />
                  venture
                </h1>
                  <h2 id="subTitle-alt">
                    An interactive <br />
                  guide to your new <br />
                  business entity
                </h2>
                </div>
              )}
            <br />
            <br />
          </div>
          <div id="option-buttons">
            {!showResults ? (
              nodeState.options.map(option => {
                return (
                  <span key={option.description}>
                    <li>
                      <OptionButton
                        className="option-btn"
                        node={option.text}
                        handleClick={() => {
                          setOptionValue(option)
                          setShowModal(true)
                        }}
                      />
                    </li>
                    <br />
                  </span>
                )
              })
            ) : (
                <>
                  <Results
                    value={pathStorage}
                    showEmail={
                      (() => setShowResults(true), () => setShowModal(true))
                    }
                  // download={downloadPDF()}
                  />
                  {/* <div id='capture'><ResultsPDF value={pathStorage}/></div> */}
                </>
              )}
          </div>
        </div>
        <div className="nav-btns">
          <button className="home-btn" onClick={() => handleHome()}>
            Start
            <br />
            Over
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
