import React from 'react'
import "./style/footer.css";
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
                    Email:  digitalwhopperhelp@gmail.com <br />
                    CALL: +91 6200379161</p>
                </div>
        </div>
        <div className="div-2">
            <h2> <strong>DIGITAL MARKETING</strong></h2>
            <ul>
                <li><a href="/">Digital Marketing</a></li>
                <li><a href="/social-media-marketing">Social Media Marketing</a></li>
                <li><a href="/seo">SEO</a></li>
                <li><a href="/ppc-marketing">PPC Marketing</a></li>
                <li><a href="/e-commerce-marketing">E-Commerce Marketing</a></li>
            </ul>
        </div>
        <div className="div-2">
            <h2> <strong>TECHNOLOGY SERVICES</strong></h2>
            <ul>
                <li><a href="/web-development">Web Development</a></li>
                <li><a href="/software-development">Software Development</a></li>
                <li><a href="/mobile-app-development">Mobile App Development</a></li>
                <li><a href="/product-development">Product Development</a></li>
            </ul>
        </div>
        <div className="div-2">
            <h2> <strong>QUICK LINKS </strong></h2>
            <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/career">Careers</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/privacy-policy">PRIVACY POLICY</a></li>
                <li><a href="/company-policy">COMPANY POLICY</a></li>
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