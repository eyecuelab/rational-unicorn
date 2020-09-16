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
                        padding-left: 30px;
                        }
                        
                    li::before {
                        content: "";
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        margin: auto;
                        height: 25px;
                        width: 25px;
                        display: block;
                        background-image: url(https://raw.githubusercontent.com/eyecuelab/rational-unicorn/modal/src/images/arrow-white.PNG);
                        background-repeat: no-repeat;
                        background-size: 100%;
                        background-color: #ffffff;
                        opacity: 1;
                    }    
                `}
            </style>
            <div className="result-container">
                <h3 id="result-head">Your cheat sheet</h3>
                {output.map(outputText => <li id="result-text">{outputText}</li>)}<br/><br/>
                <button className="end-btn1" onClick={showEmail}>Email Me</button><br/>
                <button className="end-btn2">Download PDF</button>
            </div>
        </>
    )
} 

export default Results
