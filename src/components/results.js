import React from "react"

const Results = ({ value, showEmail }) => {

    const output = value.reduce((outputTextArray, currentValue) => {
        const returnArray = [...outputTextArray];
        const { resultText } = currentValue || {};
        if (resultText && resultText !== 'void') {
            returnArray.push(resultText);
        }
        // console.log(currentValue, returnArray, outputTextArray);
        return returnArray;
    }, []);

    // console.log(output)

    return (
        <>
            <style type="text/css">
                {`
                    li {
                        list-style-type: none;
                        position: relative;
                        padding-left: 10px;
                        }
                        
                    li::before {
                        content: "";
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        margin: auto;
                        height: 10px;
                        width: 10px;
                        display: block;
                        background-image: url(https://github.com/eyecuelab/rational-unicorn/blob/modal/src/images/arrow-white.PNG);
                        background-repeat: no-repeat;
                        background-size: 100%;
                        background-color: #810F5D;
                        transform: translate(-50%, 0%);
                    }    
                `}
            </style>
            <div className="result-container">
                <h3 id="result-head">Your cheat sheet</h3>
                {output.map(outputText => <li id="result-text">{outputText}</li>)}<br/><br/>
                <button className="end-btn" onClick={showEmail}>Email Me</button><br/>
                <button className="end-btn">Download PDF</button>
            </div>
        </>
    )
} 

export default Results
