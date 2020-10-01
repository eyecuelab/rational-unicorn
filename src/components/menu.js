import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHorseHead,
  faPaperPlane,
  faHome,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

const Menu = ({ toggle, value }) => {
  let visibility = "hide"

  if (value) {
    visibility = "show"
  }

  return (
    <>
      <div id="flyoutMenu" onClick={toggle} className={visibility}>
        <br />
        <div className="navNoWrap">
          <h2>
            <Link to="/">
              <FontAwesomeIcon className="icon-font" icon={faHome} /> Home
            </Link>
          </h2>
        </div>
        <div className="navNoWrap">
          <h2>
            <Link to="/about">
              <FontAwesomeIcon className="icon-font" icon={faInfoCircle} />{" "}
              About
            </Link>
          </h2>
        </div>
        <div className="navNoWrap">
          <h2>
            <a href="https://rationalunicornlegalservices.com/">
              <FontAwesomeIcon className="icon-font" icon={faHorseHead} />{" "}
              Company Site
            </a>
          </h2>
        </div>
        <div className="navNoWrap">
          <h2>
            <a href="https://rationalunicornlegalservices.com/contact">
              <FontAwesomeIcon className="icon-font" icon={faPaperPlane} />{" "}
              Contact Us
            </a>
          </h2>
        </div>
        <div className="menu-footer">
          <p className="footer-title">Rational Unicorn Legal Services PC</p>
          <hr />
          <p className="footer-body">
            107 SE WASHINGTON ST, STE 156 PORTLAND, OR 97214
            <br />
            www.RationalUnicornLegalServices.com
          </p>
        </div>
      </div>
    </>
  )
}

export default Menu
