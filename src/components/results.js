import React from "react"

const Results = ({ value }) => {
  let result = []
  for (let i = 1; i < value.length; i++) {
    console.log(value[i].text)
        value[i].category !== "void" ? result.push(value[i].text) : result
  }
  return result
}

export default Results
