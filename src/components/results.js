import React from "react" 

const Results = ({ value }) => {
    console.log(value);
    // const output = []
    // value.forEach((value) => {
    //     const  { text, cateogry } = value || {};
    //     if (text && resultText !== 'void') {
    //         output.push(value.text)
    //     }
    // })
        
    // }
    const output = value.reduce((outputTextArray, currentValue) => {
        const returnArray = [...outputTextArray];
        const { resultText } = currentValue || {};
        if (resultText && resultText !== 'void') {
            returnArray.push(resultText);
        }
        console.log(currentValue, returnArray, outputTextArray);
        return returnArray;
    }, []);

    // console.log(output)

    return (
        <ul>
            {output.map(outputText => <li>{outputText}</li>)}
        </ul>
    )
} 

export default Results
