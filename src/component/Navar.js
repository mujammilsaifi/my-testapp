import React from "react";
import "./style/navbar.css";
import { Link } from 'react-router-dom'
function Navar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand logo" href="/">
        <img src={require('./images/Digital Whopper logo.png')} alt="site Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                <div className="dropdown">
                    <button className="dropbtn">DIGITAL MARKETING <span>+</span></button>
                    <div className="dropdown-content">
                        <Link to="/">DIGITAL MARKETING</Link>
                        <Link to="/seo">SEO</Link>
                        <Link to="/ppc-marketing">PPC MARKETING</Link>
                        <Link to="/social-media-marketing">SOCIAL MEDIA MARKETING</Link>
                        <Link to="/e-commerce-marketing">E-COMMERCE MARKETING</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">TECHNOLOGY SERVICES <span>+</span></button>
                    <div className="dropdown-content">
                        <Link to="/web-development">WEB DEVELOPMENT</Link>
                        <Link to="/software-developemnt">SOFTWARE DEVELOPMENT</Link>
                        <Link to="/mobile-app-development">MOBILE APP DEVELOPMENT</Link>
                        <Link to="/product-development">PRODUCT DEVELOPMENT</Link>
                    </div>
                </div>
            <li className="nav-item s-link">
              <Link className="dropbtn " aria-current="page" to="/portfolio">
                PORTFOLIO
              </Link>
            </li>
            <div className="dropdown">
                    <button className="dropbtn">ABOUT US <span>+</span></button>
                    <div className="dropdown-content">
                        <Link to="/about">ABOUT US</Link>
                        <Link to="/our-founder">OUR FOUNDER</Link>
                    </div>
            </div>

            <li className="nav-item s-link">
              <Link className="dropbtn " aria-current="page" to="/contact">
                CONTACT US
              </Link>
            </li>
          </ul>
          <div className="contact">
            <div className="number">
            <p>Talk to Our Expart</p>
            <a href="tel:6200379161" >+91 6200379161</a>
            </div>
            <a href="tel:6200379161" className="call"><img src={require('./images/phone-call.png')}  alt="" /></a>
         </div>
        </div>
        
      </div>
    </nav>
  );
}

export default Navar;
