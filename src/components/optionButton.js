import React from "react"

const OptionButton = (props) => {
  return (
    <>
      <button id="option-btn" onClick={props.handleClick}>{props.node}</button>
    </>
  )     
}

export default OptionButton