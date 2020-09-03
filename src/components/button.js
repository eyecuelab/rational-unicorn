import React from "react"

const Button = (option ) => {
  console.log(option + "button prop");
  return (
    <>
      <button>{option.node}</button>
    </>
  )     
}

export default Button