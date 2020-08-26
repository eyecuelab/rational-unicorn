import React from "react"

const Button = ({node, handleClick}) => {
  const { nextText, config, text } = node;
  return (
    <>
      <button onClick={() => handleClick(nextText, config)}>{text}</button>
    </>
  )    
}

export default Button