import React from 'react'
import '../component/style/contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePhone} from '@fortawesome/free-solid-svg-icons'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import ContactForm from '../component/ContactForm'
const Contact = () => {
  return (
    <div className='contact-us'>
      <div className="contact-t1">
        <h1>Contact Us</h1>
        <h2>Unlock Your Digital Potential with Our Cutting-Edge IT Solutions</h2>
      </div>
      <div className="d-address">
        <div className="div">
          <span><FontAwesomeIcon icon={faSquarePhone} /></span>
          <h3>Call Us</h3>
          <p>+91-62003779161</p>
        </div>
        <div className="div">
          <span><FontAwesomeIcon icon={faLocationDot} /></span>
          <h3>Address</h3>
          <p>D5, Bharu Marg, Ashok Vihar, Nandpuri Colony, Malviya Nagar, Jaipur, Rajasthan 302017</p>
        </div>
        <div className="div">
          <span><FontAwesomeIcon icon={faEnvelope} /></span>
          <h3>Email</h3>
          <p>digitalwhopperhelp@gmail.com</p>
        </div>
      </div>
      <div className="container-p">
        <p>At Digital Whooper, we serve as your access point to exceptional digital marketing solutions. As the premier SEO firm in the region, we specialize in directing organic traffic to your site, propelling your online visibility to new heights.</p>
        <p>If you're seeking a top-notch digital marketing firm in Jaipur, your quest ends with us. At Digital Whooper, we offer an all-encompassing array of services precisely crafted to align with your individual needs. Whether it's dynamic social media marketing or exceedingly efficient PPC campaigns, we've got your digital marketing essentials fully addressed.</p>
       <p>Unleash Success: Contact Digital Whooper Now and Elevate Your Business with Proven Digital Marketing Expertise. Let's Embark on a Journey of Growth Together!</p>
      </div>
      <div className="contact-form">
      <div className="contact_us">
          <ContactForm/>
           
      </div>
      </div>
      
    </div>
  )
}

export default Contact