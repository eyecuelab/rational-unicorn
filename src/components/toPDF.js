// import React from 'react';

// const toPDF = value => {
//     const output = value.reduce((outputTextArray, currentValue) => {
//         const returnArray = [...outputTextArray];
//         const { resultText } = currentValue || {};
//         if (resultText && resultText !== 'void') {
//             returnArray.push(resultText);
//         }

//         return returnArray;
//     }, []);

//     return (
//         <>
//             <div className="resultUnicron" />
//             <div className="resultPDF">
//                 <h3 id="result-head">Your cheat sheet</h3>
//                 {output.map(outputText => <li className="results-li">{outputText}</li>)}<br/><br/>
//                 <button className="end-btn1" onClick={showEmail}><p className="end-btn1-text">Email Me</p></button><br/>
//                 <button className="end-btn2"><p className="end-btn2-text">Download PDF</p></button>
//             </div>
//         </>
//     )
// } 


// export default toPDF;