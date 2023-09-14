import React from 'react'
import "./style/hero.css";
const HeroSection = () => {
  return (
    <div className='hero'>
        <h3 className='second-title'>Digital Whopper</h3>
        <h1 className='second-title'>We make digital beautiful.</h1>
        <p className='success'> In all our projects, from storytelling and brand building to  <br />crafting  user interactions, we prioritize both aesthetics and <br />functionality, ensuring that every project is meticulously perfected.</p>
        <a className='btn' href="tel:1234567890">CALL US</a>
    </div> 
  )
}

export default HeroSection