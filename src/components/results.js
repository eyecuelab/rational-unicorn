import React from "react"

const Results = ({ value }) => {
  let result = [] // let result = initial for loop and then instead of result.push we would have the <p> around value[1].text Hmmmmmmmm yeah mayb? I don't know how that will jive with the html/jsx.
  for (let i = 1; i < value.length; i++) {
    console.log(value[i].text)
        value[i].category !== "void" ? result.push(value[i].text) : result
  }
  console.table(result)
  return result
}

export default Results
