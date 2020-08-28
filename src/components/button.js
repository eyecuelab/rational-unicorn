import React from "react"
import Content from "../components/content"

const Button = ({node, handleShow, handleClick}) => {
  const { text } = node;
  return (
    <>
      <button onClick={() => handleShow(handleClick)}>{text}</button>
    </>
  )    
}

export default Button