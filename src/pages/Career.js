import React from 'react'
import '../component/style/careers.css'
const Career = () => {
    

  return (
    <>
    <div className="careers-sec-1">
        <h1>Carees</h1>
    </div>
    <div className="post-container">
      <h2>CURRENTLY WE ARE RECRUITING</h2>
      <div className="open-post">
        <div className="position">
          <p>Position</p>
          <h3>Content Writer</h3>
          <h3>Graphic Designer</h3>
          <h3>Social Marketing Handller</h3>
        </div>
        <div className="location">
          <p>Location</p>
          <h6>Jaipur, Rajasthan</h6>
          <h6>Jaipur, Rajasthan</h6>
          <h6>Jaipur, Rajasthan</h6>
        </div>
        <div className="type">
          <p>Type</p>
          <h6>Internship/Full-Time</h6>
          <h6>Internship/Full-Time</h6>
          <h6>Internship/Full-Time</h6>
        </div>
        <div className="apply-btn">
          <a href="/apply" className='apply-button'>Apply Now</a>
          <a href="/apply" className='apply-button'>Apply Now</a>
          <a href="/apply" className='apply-button'>Apply Now</a>
        </div>
      </div>
    </div>
    <div className="our-perks">
      <h6>BENEFITS AFTER JOIN US</h6>
    </div>
    
    </>
  )
}

export default Career