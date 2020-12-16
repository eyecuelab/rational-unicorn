import React, { useState, useEffect, useMemo } from "react"
import OptionButton from "../components/optionButton"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DescriptionModal from "../components/descriptionModal"
import EmailModal from "../components/emailModal"
import HelpModal from "../components/helpModal"
import useNextNode from "../components/useNextNode"
import usePrevNode from "../components/usePrevNode"
import Results from "../components/results"
import { useStaticQuery, graphql } from "gatsby"
import html2canvas from "html2canvas"
import { jsPDF } from "jspdf"
import { Spinner } from "react-bootstrap"
import { getResults, setResults, clearStorage } from "../services/storage"
// import TextNodes from "../components/content"

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
      }
    `
  )

  // const formatDescription = text => (text?.[0] === "`" ? eval(text) : text)

  const TextNodes = useMemo(() => {
    return (
      data?.allContentfulUnicornNode?.edges?.map?.(edge => {
        return {
          nodeId: edge.node.nodeId,
          question: edge.node.question,
          options: edge.node.answers.answers.map(answer => {
            return {
              text: answer.text,
              description: answer.description,
              resultText: answer.resultText,
              prevNodeId: answer.prevNodeId,
              nextNodeId: answer.nextNodeId,
            }
          }),
        }
      }) ?? []
    )
  }, [data])

  const [downloadClick, setDownloadClick] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [nodeState, setNodeState] = useState(TextNodes[TextNodes.length - 1])
  const [showModal, setShowModal] = useState(false)
  const [showHelp, setShowHelp] = useState(false)
  const [optionValue, setOptionValue] = useState(null)
  const [pathStorage, setPathStorage] = useState(
    getResults("results") 
  )
  const [showResults, setShowResults] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)  // PAGINATION
  const [resultsPerPage, setResultsPerPage] = useState(4)  // PAGINATION


  useEffect(() => {
    const lastNode = pathStorage?.length - 1
    if (pathStorage?.[lastNode]?.nextNodeId == "Last") {
      setShowResults(true)
    } else if (pathStorage) {
      for (let i = 0; i < TextNodes.length; i++) {
        if (pathStorage?.[lastNode]?.nextNodeId == TextNodes[i].nodeId) {
          setNodeState(TextNodes[i])
        }
      }
    } else {
      window.location.pathname = "/"
    }
  }, [])

  const handleBack = async value => {
    const prevNode = usePrevNode(value, TextNodes)
    const lastNode = pathStorage?.length - 1
    const backNode = pathStorage?.[lastNode]?.prevNodeId
    const newPathStorage = pathStorage.slice(0, pathStorage.length - 1)
    await setResults(newPathStorage)
    if (pathStorage.length < 1) {
      window.location.pathname = "/"
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
    await setResults(nextPathStorage)
    setPathStorage([...pathStorage, value])
    setShowModal(false)
    if (value.nextNodeId === "Last") {
      setShowResults(true)
    }
    setNodeState(nextNode)
  }

  const loadingScreen = () => {
    return (
      <div className="spinnerz">
        <div className="spin-position">
          <h1 className="loader-head">Prancing In Progress</h1><br/>
          <Spinner className="spinner1" animation="grow" variant="light" />
          <Spinner className="spinner2" animation="grow" variant="light" />
          <Spinner className="spinner3" animation="grow" variant="light" />
          <Spinner className="spinner4" animation="grow" variant="light" />
        </div>
      </div>
    )
  }

  const downloadPDF = async () => {
    setIsLoading(true)
    setDownloadClick(true)
    setTimeout(async () => {
      const divToDisplay = document.getElementById("capture")
      html2canvas(divToDisplay).then(async canvas => {
        const divImage = await canvas.toDataURL("image/png")
        const pdf = new jsPDF()
        await pdf.addImage(divImage, "PNG", 0, 0)
        await pdf.save("unicorn-results.pdf")
        setDownloadClick(false)
        setIsLoading(false)
      })
    }, 0)
  }

  const handleClose = () => {
    setShowModal(false)
    setShowHelp(false)
  }

  function handleHome() {
    const resetPath = clearStorage()
    setPathStorage(resetPath), (window.location.pathname = "/")
  }

  function handleHelp() {
    setShowHelp(true)
  }

  return (
    <>
      <Layout>
        <SEO title="Service Guide" />
        <div className="pathwayContainer">
          {showHelp ? <HelpModal onHide={handleClose} /> : null}
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
                {isLoading ? loadingScreen() : null}
                <div id="capture">
                  <Results
                    classToggle={downloadClick ? "PDF-format" : null}
                    value={pathStorage}
                    showEmail={
                      (() => setShowResults(true), () => setShowModal(true))
                    }
                    download={downloadPDF}
                    currentPage={currentPage}
                    resultsPerPage={resultsPerPage}
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
