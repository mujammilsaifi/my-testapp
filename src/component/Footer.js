import React from 'react'
import "./style/footer.css";
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className="div-1">
                <h2><strong>DIGITAL WHOPPER</strong></h2>
                <img src={require('./images/Digital Whopper logo.png')} alt="site Logo" />
                <h3>Unlock Your Online Potential with Digital Whopper : Your Path to Digital Success!</h3>
                <div className="address">
                    <p>Address: D5, Bharu Marg, Ashok Vihar, Nandpuri Colony, Malviya Nagar, Jaipur, Rajasthan 302017 <br />
                    Email:  digitalwhopperhelp@gmail.com <br/>
                    CALL: +91 6200379161</p>
                </div>
        </div>
        <div className="div-2">
            <h2> <strong>DIGITAL MARKETING</strong></h2>
            <ul>
                <li><Link to="/">Digital Marketing</Link></li>
                <li><Link to="/social-media-marketing">Social Media Marketing</Link></li>
                <li><Link to="/seo">SEO</Link></li>
                <li><Link to="/ppc-marketing">PPC Marketing</Link></li>
                <li><Link to="/e-commerce-marketing">E-Commerce Marketing</Link></li>
            </ul>
        </div>
        <div className="div-2">
            <h2> <strong>TECHNOLOGY SERVICES</strong></h2>
            <ul>
                <li><Link to="/web-development">Web Development</Link></li>
                <li><Link to="/software-development">Software Development</Link></li>
                <li><Link to="/mobile-app-development">Mobile App Development</Link></li>
                <li><Link to="/product-development">Product Development</Link></li>
            </ul>
        </div>
        <div className="div-2">
            <h2> <strong>QUICK LINKS </strong></h2>
            <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/career">Careers</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/privacy-policy">PRIVACY POLICY</Link></li>
                <li><Link to="/company-policy">COMPANY POLICY</Link></li>
            </ul>
        </div>
        <div className="div-3">
            <h2> <strong>REACH US</strong></h2>
            <div className="map">
            <h1>map</h1>
            </div>
            
        </div>
    </div>
    <div className="copyright">
        <p>Copyright &copy; 2023 <span style={{color: 'orange'}}> Digital Whopper. </span> All Rights Reserved.</p>
    </div>
    </>
  )
}

export default Footer