import React from "react"

const Button = (props) => {
  // console.log(props.node + "___button props___");
  return (
    <>
      <button onClick={props.handleClick}>{props.node}</button>
    </>
  )     
}

export default Button