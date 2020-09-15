import React from "react"

const Results = ({ value }) => {

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
        <div class="result-container">
            <h3 id="result-head">Your cheat sheet</h3>
            {output.map(outputText => <li id="result-text">{outputText}</li>)}<br/><br/>
            <button class="end-btn">Email Me</button><br/>
            <button class="end-btn">Download PDF</button>
        </div>
    )
} 

export default Results
