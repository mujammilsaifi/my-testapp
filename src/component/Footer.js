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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.904791692362!2d75.81476607497078!3d26.842980363084685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db70d6ddc5739%3A0x26f55464d633e961!2sDigital%20Whopper!5e0!3m2!1sen!2sin!4v1693403125754!5m2!1sen!2sin"  className='map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" id='1'></iframe>
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