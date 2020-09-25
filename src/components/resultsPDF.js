import React from "react";

const resultsPDF = ({value}) => {

    console.log(value, " value passed into resultsPDF")

    const output = value.reduce((outputTextArray, currentValue) => {
        const returnArray = [...outputTextArray];
        const { resultText } = currentValue || {};
        if (resultText && resultText !== 'void') {
            returnArray.push(resultText);
        }

        return returnArray;
    }, []);

    return (
        <div className="pdf-wrapper">
            <div className="pdf-unicorn" />
            <div className="resultsPDF">
                <div className="pdf-title">
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
                <div className="pdf-content">
                    <h3 className="resultsPDF-head">Your venture cheat sheet</h3>
                    {output.map(outputText => <li className="resultsPDF-li">{outputText}</li>)}<br/><br/>
                </div>
                <div className="PDF-footer">
                    <p className="footer-title">Rational Unicorn LLC</p>
                    <hr />
                    <p className="footer-body">107 SE WASHINGTON ST, STE 156 PORTLAND, OR 97214<br/>
                    www.RationalUnicornLegalServices.com</p>
                </div>
            </div>
        </div>
    )
} 


export default resultsPDF;