import React from "react";
import "./style/navbar.css";
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
                        <a href="/">DIGITAL MARKETING</a>
                        <a href="/seo">SEO</a>
                        <a href="/ppc-marketing">PPC MARKETING</a>
                        <a href="/social-media-marketing">SOCIAL MEDIA MARKETING</a>
                        <a href="/e-commerce-marketing">E-COMMERCE MARKETING</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">TECHNOLOGY SERVICES <span>+</span></button>
                    <div className="dropdown-content">
                        <a href="/web-development">WEB DEVELOPMENT</a>
                        <a href="/software-developemnt">SOFTWARE DEVELOPMENT</a>
                        <a href="/mobile-app-development">MOBILE APP DEVELOPMENT</a>
                        <a href="/product-development">PRODUCT DEVELOPMENT</a>
                    </div>
                </div>
            <li className="nav-item s-link">
              <a className="dropbtn " aria-current="page" href="/portfolio">
                PORTFOLIO
              </a>
            </li>
            <div className="dropdown">
                    <button className="dropbtn">ABOUT US <span>+</span></button>
                    <div className="dropdown-content">
                        <a href="/about">ABOUT US</a>
                        <a href="/our-founder">OUR FOUNDER</a>
                    </div>
            </div>

            <li className="nav-item s-link">
              <a className="dropbtn " aria-current="page" href="/contact">
                CONTACT US
              </a>
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
