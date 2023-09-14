import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
const GetStarted = () => {
  return (
    <>
    <div className='get-started'> 
        <h2 className='get-t1'>Elevate Your Business with the Premier Digital Marketing Agency</h2>
        <p className='get-t2'>Supercharge Your Business with a Dynamic Digital Marketing Strategy in Jaipur</p>
        <div className=" center">
            <a className='btn' href="/contact">GET STARTED</a>
         </div> 
    </div>
    <div className="flex-container my-3">
    <div className="flex-left">
        <div className="success-growth">
        <img src={require('./images/growth.webp')} alt="growth.webp" />
        </div>
    </div>
    <div className="flex-right">
       <div className="objective">
       <h2>Our Commitment as a Reliable Digital Marketing Company in Jaipur</h2>
       <ul>
        <li><span className='list-icon'><FontAwesomeIcon icon={faCheck} /></span > <span className='list-text'> Transform Your Digital Presence with Engaging Business Content</span></li>
        <li><span className='list-icon'><FontAwesomeIcon icon={faCheck} /></span > <span className='list-text'> Elevate Your Business's Brand Awareness to New Heights</span></li>
        <li><span className='list-icon'><FontAwesomeIcon icon={faCheck} /></span > <span className='list-text'> Boost Your Business Social Media Following for Greater Impact</span></li>
        <li><span className='list-icon'><FontAwesomeIcon icon={faCheck} /></span > <span className='list-text'> Partnering to Accelerate Business Growth and Maximize Profitability</span></li>
        <li><span className='list-icon'><FontAwesomeIcon icon={faCheck} /></span > <span className='list-text'> Providing Exceptional and Tailored Services to Meet Client Expectations</span></li>
       </ul>
       </div>
    </div>
    </div>
    </>
  )
}

export default GetStarted