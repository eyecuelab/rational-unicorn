import React from "react"

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>{props.node}</button>
    </>
  )     
}

export default Button