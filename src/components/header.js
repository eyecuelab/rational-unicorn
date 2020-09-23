import React, { useState } from "react"
import Menu from "../components/menu"


const Header = () => {

  const [menuVisibility, setMenuVisibility] = useState(false)

  return (
    <>
      <button id="logoButton"
        onClick={()=>setMenuVisibility(true)} />
        <Menu 
        value={menuVisibility}
        toggle={()=>setMenuVisibility(false)} /> 
    </>
  )
}

export default Header
