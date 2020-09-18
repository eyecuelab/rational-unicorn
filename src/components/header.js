import React from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHorseHead, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const navImg = {
  width: "70px",
}
const navLinkStyles = {
  marginLeft: "10%",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "20px",
  lineHeight: "20px",
  color: "#FFFFFF"
}


const Header = () => {
  
  function toHome() {
    window.location ='http://localhost:8000/';
  }
  
  function toMainSite() {
    window.location ='https://rationalunicornlegalservices.com/';
  }
  
  function toContact() {
    window.location ='https://rationalunicornlegalservices.com/contact';
  }

  return (
    <>
      <Navbar className="navBar" variant='dark' expand="lg">
      <Navbar.Brand onClick={()=>toHome()}>{<img style={navImg} src="https://i.ibb.co/2nVm0Y3/Rational-Unicorn-1.png" alt="Unicorn Logo" />}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown.Item>
              <div className="homeLink" onClick={()=>toMainSite()}>
                <div className="noWrap">
                  <FontAwesomeIcon icon={faHorseHead}/><p style={navLinkStyles}>Main Site</p>
                </div>
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <div className="contactLink" onClick={toContact}>
                <div className="noWrap">
                  <FontAwesomeIcon icon={faPaperPlane}/><p style={navLinkStyles}>Contact Us</p>
                </div>
              </div>
            </NavDropdown.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )};


export default Header
