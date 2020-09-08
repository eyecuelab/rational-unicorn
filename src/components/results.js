import React from "react"

const Results = ({ value }) => {
  console.log(value)
  for (let i = 1; i < value.length; i++) {
      if (value[i].category !== "void") {
      console.log(value[i].text)
      return (
        <p>{value[i].text}</p>
      )
    }
  }
}

export default Results
