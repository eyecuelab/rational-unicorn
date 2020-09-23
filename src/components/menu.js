import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHorseHead, faPaperPlane, faHome, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

 
const Menu = ({toggle, value}) => {

    let visibility = "hide"

    if(value){
      visibility = "show"
    }

    return (
        <>
            <div id="flyoutMenu"
               onClick={toggle} 
               className={visibility}>
            <div className="navNoWrap">
                <h2 ><Link to="/"><FontAwesomeIcon icon={faHome}/>  Home</Link></h2>
            </div> 
            <div className="navNoWrap">
                <h2 ><Link to="/about"><FontAwesomeIcon icon={faInfoCircle}/>  About</Link></h2>
            </div>
            <hr />
            <div className="navNoWrap">
                <h2 ><a href="https://rationalunicornlegalservices.com/"><FontAwesomeIcon icon={faHorseHead}/>  Company Site</a></h2>
            </div>
            <div className="navNoWrap">
                <h2 ><a href="https://rationalunicornlegalservices.com/contact"><FontAwesomeIcon icon={faPaperPlane}/>  Contact Us</a></h2>
            </div>
          </div>
        </>
    )
}


 
export default Menu;