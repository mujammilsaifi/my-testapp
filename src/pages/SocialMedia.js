import React from 'react'
import '../component/style/socialMedia.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram, faYoutube,faTwitter, faLinkedin,faPinterest} from '@fortawesome/free-brands-svg-icons'

const SocialMedia = () => {
  return (
    <>
    <div className='social-media'>
        <h2>Digital Whopper</h2>
        <h1>Unlock Digital Potential with Top Social Media Agency</h1>
        <p>At Digital Whopper, Our Team Empowers Your Business with Premium SMM Services. Find Out Why We're Your Top SMM Choice.</p> 
        <a href="contact"  className='btn'>CONSULT WITH US</a>
    </div>
    <h2 className='social-h'>Why Select Us as the Top Social Media Marketing Firm</h2>
    <div className="social-service py-3">
        <div className="social-div">
            <img src={require('../component/images/Social Media Management.png')} alt="success" />
           <h3>Regional Proficiency</h3>
           <p>we have an intimate understanding of the city's market dynamics. Our profound familiarity with the local terrain provides us with a unique edge in crafting customized SMM strategies.</p>
        </div>
        <div className="social-div">
            <img src={require('../component/images/Paid Marketing.png')} alt="success" />
           <h3>Proven Track Record</h3>
           <p>Our outcomes are a testament to our capabilities. We've enabled numerous Jaipur-based businesses to excel on social media platforms, significantly enhancing brand recognition, interaction, and conversion rates.</p>
        </div>
        <div className="social-div">
            <img src={require('../component/images/Influence Marketing.png')} alt="Influence Marketing" />
           <h3>Customized Strategies</h3>
           <p>A singular approach doesn't universally apply. We craft distinctive SMM strategies for every client, harmonizing with their objectives and target demographics to optimize ROI.</p>
        </div>
    </div>
    <div className="platforms">
        <p>Platforms</p>
        <h3>SOCIAL MEDIA MARKETING PLATFORM</h3>
        <h2>The following are the social media marketing platforms</h2>
        <div className="platform">
            <div className="platform-div">
            <FontAwesomeIcon icon={faFacebook} />
                <h2>Facebook Marketing</h2>
            </div>
            <div className="platform-div">
            <FontAwesomeIcon icon={faYoutube} />
                <h2>Youtube Marketing</h2>
            </div>
            <div className="platform-div">
            <FontAwesomeIcon icon={faInstagram} />
                <h2>Instagram Marketing</h2>
            </div>
            <div className="platform-div">
            <FontAwesomeIcon icon={faTwitter} />
                <h2>Twitter Marketing</h2>
            </div>
            <div className="platform-div">
            <FontAwesomeIcon icon={faLinkedin} />
                <h2>LinkedIn Marketing</h2>
            </div>
            <div className="platform-div">
            <FontAwesomeIcon icon={faPinterest} />
                <h2>Pinterest Marketing</h2>
            </div>
        </div>
        <a className='btn' href="/contact">BOOST YOUR SOCIAL MEDIA</a>
    </div>
    <div className="grow-your-social">
        <p>Grow Your Social Media Presence With Us?</p>
        <a href="/about" className='btn'>DISCOVER MORE</a>
    </div>
    <div className="why-choose-social">
        <h6>Why us?</h6>
        <h5>WHY CHOOSE DIGITAL WHOOPER</h5>
        <div className="why-social">
            <div className="div-why-social">
                <ul>
                    <li>We have an expert team of social media marketing to deliver the best results to our clients.</li>
                    <li>Our social media experts at The Cogent identify and analyze your niche audience to determine their online behavior and carefully craft relevant ads and content that addresses their needs.</li>
                    <li>We deliver social media campaign reports that give a full picture of your social media performance.</li>
                    <li>To determine the most appropriate and profitable social media marketing platforms and techniques for your business, our social media marketing company performs in-depth business reviews, audience analysis, and competitor benchmarking.</li>
                </ul>
            </div>
            <div className="div-why-social">
            <img src={require('../component/images/social-why-choose.jpg')} alt="Influence Marketing" />
            </div>

        </div>
    </div>
    </>
  )
}

export default SocialMedia