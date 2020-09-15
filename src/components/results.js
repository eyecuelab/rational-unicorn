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
        <div className="result-container">
            <h3 id="result-head">Your cheat sheet</h3>
            {output.map(outputText => <li id="result-text">{outputText}</li>)}<br/><br/>
    <button className="end-btn" onClick={showEmail}>Email Me</button><br/>
            <button className="end-btn">Download PDF</button>
        </div>
    )
} 

export default Results
