import React from 'react'
import "./style/secondSection.css";
import ContactForm from './ContactForm';
const SecondSection = () => {
  return (
    <>
    <div className="Parent ">
        <div className="child1">
            <div className="container">
                <h1 className='heading2'>Your Brand's Digital Best Friend</h1>
                <p>Ever thought about how to make your brand truly stand out in the digital world? We're here to answer that question. At our agency, we're more than just marketers; we're your dedicated partners. We combine data-driven strategies with the latest tech-savvy solutions to ensure your brand doesn't just look good but excels in the digital landscape. Ready to start on this exciting journey together</p>
            </div>
        </div>
        <div className="child2">
        <div className="contact_us">
        <ContactForm/>
      </div>
      </div>
  </div>
  </>
  )
}

export default SecondSection