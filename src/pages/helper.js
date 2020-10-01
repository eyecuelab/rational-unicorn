import React, { useState, useEffect, useMemo } from "react"
import OptionButton from "../components/optionButton"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DescriptionModal from "../components/descriptionModal"
import EmailModal from "../components/emailModal"
import useNextNode from "../components/useNextNode"
import usePrevNode from "../components/usePrevNode"
import Results from "../components/results"
import { reactLocalStorage } from "reactjs-localstorage"
import { useStaticQuery } from 'gatsby'
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
// import TextNodes from "../components/content"
// import ResultsPDF from "../components/resultsPDF";

const Helper = () => {

  const data = useStaticQuery(
    graphql`
    query {
      allContentfulUnicornNode {
        edges {
          node {
            question {
              question
            }
            answers {
              answers {
                description
                nextNodeId
                prevNodeId
                resultText
                text
              }
            }
            nodeId
          }
        }
      }
    }`
  )
  
  const TextNodes = useMemo(() => {
    return data?.allContentfulUnicornNode?.edges?.map?.(edge => {
      return {
        nodeId: edge.node.nodeId,
        question: edge.node.question,
        options: edge.node.answers.answers.map(answer => {
          return {
            text: answer.text,
            description: answer.description,
            resultText: answer.resultText,
            prevNodeId: answer.prevNodeId,
            nextNodeId: answer.nextNodeId
          }
        })
      }
    })
      ?? [];
  }, [data])

  const [downloadClick, setDownloadClick] = useState(false)
  const [nodeState, setNodeState] = useState(TextNodes[TextNodes.length - 1])
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
    if (pathStorage?.[lastNode]?.nextNodeId == "last") {
      setShowResults(true)
    } else if (pathStorage) {
      for (let i = 0; i < TextNodes.length; i++) {
        if (pathStorage?.[lastNode]?.nextNodeId == TextNodes[i].nodeId) {
          setNodeState(TextNodes[i])
        }
      }
    } else {
      window.location.pathname = '/'
    }
  }, [])

  const handleBack = async value => {
    const prevNode = usePrevNode(value, TextNodes)
    const lastNode = pathStorage?.length - 1
    const backNode = pathStorage?.[lastNode]?.prevNodeId
    const newPathStorage = pathStorage.slice(0, pathStorage.length - 1)
    await reactLocalStorage.set("results", JSON.stringify(newPathStorage))
    if (pathStorage.length < 1) {
      window.location.pathname = '/'
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
    const nextNode = useNextNode(value, TextNodes)
    const nextPathStorage = [...pathStorage, value]
    await reactLocalStorage.set("results", JSON.stringify(nextPathStorage))
    setPathStorage([...pathStorage, value])
    setShowModal(false)
    if (value.nextNodeId === "last") {
      setShowResults(true)
    }
    setNodeState(nextNode)
  }
  

  const downloadPDF = async () => {
    setDownloadClick(true)
    setTimeout(async() => {
      const divToDisplay = document.getElementById("capture")
      html2canvas(divToDisplay).then(async(canvas) => {
        const divImage = await canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        await pdf.addImage(divImage, 'PNG', 0, 0);
        await pdf.save("unicorn-results.pdf");
        setDownloadClick(false)
      })
    }, 0)
 }

  const handleClose = () => setShowModal(false)

  function handleHome() {
    const resetPath = reactLocalStorage.clear()
    setPathStorage(resetPath), (window.location.pathname = '/')
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
              <h1 id="questionStyles">{nodeState.question.question}</h1>
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
              <div id="capture">
                <Results
                  classToggle={downloadClick ? "PDF-format" : null}
                  value={pathStorage}
                  showEmail={
                    (() => setShowResults(true), () => setShowModal(true))
                  } 
                  download={downloadPDF}
                />
             </div>
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

