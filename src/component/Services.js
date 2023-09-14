import React from 'react'
import "./style/services.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
const Services = () => {
  return (
    
    <div className='container' >
        <h3 className='t-1'>Unlock Success: Secure Jaipur's Premier Digital Marketing Team</h3>
        <h1 className='t-2'>Top Digital Marketing Agency in Jaipur</h1>
        <section className="faeture-col-par">
        <div className="container-service">
            <div className="feature-col">                    
            <img src={require('./images/socialmedia.gif')} alt="socialmedia.gif" />
                    <h3 className='service'>Social Media Marketing</h3>
                    <p> The Power of Social Media with Digital Whooper With over 80% of users active on social media, our Social Media Marketing (SMM) services are your gateway to boosting your business's online presence. Experience increased website traffic, heightened brand awareness, and the opportunity to engage a niche audience. Elevate your business with SMM and watch your sales soar.</p>
                    <div className="go">     
                     <a href="/social-media-marketing"><FontAwesomeIcon icon={faArrowAltCircleRight} /></a>
                    </div>
                                    
            </div>
            <div className="feature-col">         
                    <img src={require('./images/ecommerce.gif')} alt="ecommerce" />        
                    <h3 className='service'>E-Commerce</h3>
                    <p>In the digital real, the future belongs to E-commerce, and our Jaipur-based digital marketing services specialize in delivering the finest e-commerce marketing solutions. From strategic third-party website optimization to dynamic product promotions on social media platforms and captivating original content production, we've been the catalyst for countless e-commerce businesses in realizing their aspirations.</p>
                    <div className="go">     
                     <a href="/e-commerce-marketing"><FontAwesomeIcon icon={faArrowAltCircleRight} /></a>
                    </div>
                                    
            </div>
            <div className="feature-col">                    
                    <img src={require('./images/seo.gif')} alt="seo.gif" />
                    <h3 className='service'>SEO</h3>
                    <p>Search Engine Optimization (SEO) is the art of enhancing your website's visibility by boosting its ranking for industry-relevant keywords. As a leading digital marketing company, we employ proven techniques and tools to optimize your site, making it highly attractive to your target audience. Recognized as the premier SEO Company in Jaipur, we deliver meticulously researched SEO Services to drive traffic and revenue for your online business."</p>
                    <div className="go">     
                     <a href="/seo"><FontAwesomeIcon icon={faArrowAltCircleRight} /></a>
                    </div>
                                    
            </div>
            <div className="feature-col">                    
                <img src={require('./images/web.gif')} alt="web.gif" />
                    <h3 className='service'>Web Development</h3>
                    <p>Discover the Full Spectrum of Online Possibilities with Digital Whooper's Unparalleled Web Development Services. At Digital Whooper, we don't just build websites; we craft digital experiences that leave a lasting impression. Our dedicated team of web development experts specializes in designing visually stunning, responsive websites that go beyond aesthetics to engage and captivate your target audience.</p>
                    <div className="go">     
                     <a href="/web-development"><FontAwesomeIcon icon={faArrowAltCircleRight} /></a>
                    </div>                                    
            </div>
            <div className="feature-col">                    
                <img src={require('./images/android.gif')} alt="android.gif" />
                    <h3 className='service'>Android Development</h3>
                    <p> Our Android Development Expertise. Our Android Development services are crafted to transform your innovative app ideas into reality. We specialize in creating dynamic and user-friendly Android applications that cater to your unique needs. Our experienced team of developers ensures your app not only meets the latest industry standards but also stands out in terms of design and functionality.</p>
                    <div className="go">     
                     <a href="/mobile-app-development"><FontAwesomeIcon icon={faArrowAltCircleRight} /></a>
                    </div>                                    
            </div>
            <div className="feature-col">                    
                <img src={require('./images/software-development.gif')} alt="software-development.gif" />
                    <h3 className='service'>Software Development</h3>
                    <p> At Digital Whooper, we take pride in our ability to transform complex concepts into cutting-edge software solutions. Our seasoned team of developers specializes in creating tailored software applications that not only meet but exceed your business requirements.We approach every project with a commitment to excellence, focusing on user-friendly interfaces, scalability, and performance. </p>
                    <div className="go">     
                     <a href="/software-developemnt"><FontAwesomeIcon icon={faArrowAltCircleRight} /></a>
                    </div>                                    
            </div>
            <div className="feature-col">                    
                <img src={require('./images/google ad.gif')} alt="google ad.gif" />
                    <h3 className='service'>Google Ads</h3>
                    <p>Google Ads with Digital Whooper. Our Google Ads services are your gateway to targeted, results-driven advertising. We specialize in creating and managing high-impact campaigns that connect your brand with the right audience at the right time.
                    Our certified experts meticulously optimize your ads, conduct keyword research, Whether you aim to boost website traffic, increase e-commerce sales, or generate leads, our tailored Google Ads solutions are designed to achieve your specific goals.
                    </p>
                    <div className="go">     
                     <a href="ppc-marketing"><FontAwesomeIcon icon={faArrowAltCircleRight} /></a>
                    </div>                                    
            </div>
            <div className="feature-col">                    
                <img src={require('./images/etsy.gif')} alt="etsy.gif" />
                    <h3 className='service'>Etsy</h3>
                    <p>Success on Etsy with Digital Whooper's Expertise. Our Etsy services are designed to elevate your online storefront and propel your handmade or artisanal business to new heights.We specialize in optimizing every aspect of your Etsy shop, from crafting enticing product listings and managing SEO to strategic promotions. Our goal is to enhance your shop's visibility, attract organic traffic, and drive higher conversion rates.Digital Whooper's Etsy services offer tailored support to help you succeed.</p>
                    <div className="go">     
                     <a href="/ppc-marketing"><FontAwesomeIcon icon={faArrowAltCircleRight} /></a>
                    </div>                                    
            </div>
            <div className="feature-col">                    
                <img src={require('./images/meta ads.gif')} alt="meta ads.gif" />
                    <h3 className='service'>Meta Ads</h3>
                    <p>Digital Whooper's Meta Ads Expertise. Our Meta Ads services are meticulously designed to help our clients leverage the full potential of the Meta (formerly Facebook) advertising platform. Whether your goal is to expand your customer base, drive website traffic, or boost sales, Digital Whooper's Meta Ads services deliver tailored solutions that align with your unique objectives. Partner with us to navigate the dynamic landscape of Meta Ads and achieve outstanding online success.</p>
                    <div className="go">     
                     <a href="/ppc-marketing"><FontAwesomeIcon icon={faArrowAltCircleRight} /></a>
                    </div>                                    
            </div>
        </div>        
        </section>
        <div className=" center">
            <a className='btn' href="/contact">CONSULT OUR TEAM</a>
         </div>  
  </div>
  )
}

export default Services