import React from "react"

const Results = ({ value, showEmail, download, classToggle }) => {

    const output = value.reduce((outputTextArray, currentValue) => {
        const returnArray = [...outputTextArray];
        const { resultText } = currentValue || {};
        if (resultText && resultText !== 'void') {
            returnArray.push(resultText);
        }


        return returnArray;
    }, []);

    return (
        <>
            <style type="text/css">
              {`
              .PDF-format{
                background: linear-gradient(
                    180deg,
                    #429792 12.67%,
                    #99d8d4 100.16%,
                    #f3f3f3 106.03%
                  );
                background-size: cover;
                background-repeat: no-repeat;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                max-height: 100vw;
                overflow: visible;
                padding-top: 20%;
                padding-left: 5%;
                font-size: 10px !important;
                white-space: normal;
              }

              .btn-hide{
                  display: none;
              }
              `}
            </style>
            <div className={classToggle}>
                <div className="resultUnicron" /> 
                <div className="results-container">
                    <h3 className="results-head">Your cheat sheet</h3>
                    {output.map((outputText) => <li key={outputText?.replace(/\s/,'-')} className="results-li">{outputText}</li>)}<br/><br/>
                    <button className= {classToggle? "btn-hide" : "end-btn1"} onClick={showEmail}><p className="end-btn1-text">Email Me</p></button><br/>
                    <button className= {classToggle? "btn-hide" : "end-btn2"} onClick={download}><p className="end-btn2-text">Download PDF</p></button>
                </div>
            </div>
        </>
    )
} 

export default Results
