import React from "react" 

const Results = ({ value }) => {
    let output = []
    for (let i = 1; i < value.length; i++) {
    // console.log(value[i].text)
        value[i].category !== "void" ? output.push(value[i].text) : null
    }
    console.log(output)

    return (
        <ul>
            {output.map(outputText => {
                <li>{outputText}</li>
            })}
        </ul>
    )
} 

export default Results
