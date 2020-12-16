import React, { useState } from "react"
import Pagination from "../components/pagination"



const Results = ({ value, showEmail, download, classToggle, currentPage, resultsPerPage }) => {
  const output = value.reduce((outputTextArray, currentValue) => {
    const returnArray = [...outputTextArray]
    const { resultText } = currentValue || {}
    if (resultText && resultText !== "void") {
      returnArray.push(resultText)
    }

    return returnArray
  }, [])

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = output.slice(indexOfFirstResult, indexOfLastResult);


  console.log(output, "this is the output --------------------");

  return (
    <>
      <div className={classToggle}>
        <div className={classToggle ? "pdf-unicorn" : "unicorn-hide"} />
        <div className="results-container">
          <h3 className={classToggle ? "alt-top-head" : "top-head-hide"}>
            Choose your
            <br />
            venture
            <br />
          </h3>
          <h3 className={classToggle ? "alt-head" : "results-head"}>
            Cheat sheet
          </h3>
          <p className={classToggle ? "alt-text" : "alt-text-hide"}>
            You did it! Congratulations!
            <br />
            Based on your selections, here
            <br />
            are some services you may
            <br />
            require to get up and running!
          </p>
          {currentResults.map(outputText => (
            <>
              <li
                key={outputText?.replace(/\s/, "-")}
                className={classToggle ? "alt-li" : "results-li"}
              >
                {outputText}
              </li>
              <br />
            </>
          ))}
          <br />
          <br />
          <button
            className={classToggle ? "btn-hide" : "end-btn1"}
            onClick={showEmail}
          >
            <p className="end-btn1-text">Email Results</p>
          </button>
          <br />
          <button
            className={classToggle ? "btn-hide" : "end-btn2"}
            onClick={download}
          >
            <p className="end-btn2-text">Download PDF</p>
          </button>
          <div className={classToggle ? "PDF-footer" : "footer-hide"}>
            <p className="PDF-footer-title">
              Rational Unicorn Legal Services PC
            </p>
            <hr className="pdf-hr" />
            <p className="PDF-footer-body">
              107 SE WASHINGTON ST, STE 156 PORTLAND, OR 97214
              <br />
              www.RationalUnicornLegalServices.com
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Results
