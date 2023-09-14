import React from 'react'
import '../component/style/webdevelopment.css'
const WebDevelopment = () => {
  return (
    <>
        <div className="web-sec-1">
            <h3>Digital Whopper</h3>
            <h2>Best Web & Website Development Company</h2>
            <p>Transformation is possible with us…</p>
            <a href="/contact" className='btn'>CALL US</a>
        </div>
        <div className="web-sec-2">
            <div className="div-sec-1">
                <h2>Transform With Technology</h2>
                <p><strong>Digital Whopper stands as a leading and top-tier web development company, consistently delivering exceptional results and high-quality websites to clients through the utilization of cutting-edge technology. Our extensive service portfolio in software development includes web application design, web-based enterprise solutions, e-commerce website development, and e-portal creation.</strong></p>
                <a href="/contact" className='btn'>GET DIGITALLY TRANSFORM!</a>
            </div>
            <div className="div-sec-2">
            <img src={require('../component/images/web-img.jpg')} alt="image" />
            </div>
        </div>
        <div className="technology">
            <h3>Digital Whopper</h3>
            <h2>Our Web Application Development Services</h2>
            <p>In the global web development era, The Digital Whopper is one of the leading Website Application Development Company</p>
            <p className='tech-p'>Web development firms, Digital Whopper stands out as the premier Web Application Development Company. Our squad of skilled web application developers commences projects from the ground up and adheres to top-notch development methodologies and principles to provide top-quality services to our clientele. With a track record of overseeing numerous web application projects, we have demonstrated our expertise in this field and are eager to establish additional milestones within the same realm.</p>
            <div className="tech-1">
                <div className="tech-div">
                <img src={require('../component/images/wordpress-img.jpg')} alt="wordpress" />
                </div>
                <div className="tech-div">
                    <h2>WordPress Website</h2>
                    <p>WordPress, a free and open-source platform, is the foundation of our website creation services. Our skilled web developers possess extensive expertise in WordPress, crafting distinct websites that prioritize control, security, and exceptional performance. We provide scalable, aesthetically pleasing WordPress solutions that enhance your business's reputation at an affordable cost. Our WordPress website development services are characterized by quality and swift delivery.</p>
                    <div className="work">
                        <h4>Our Work</h4>
                        <a href="https://medastudio.com/" target="_blank">www.medastudio.com</a> <br />
                        <a href="https://mariaross.in/" target="_blank">www.mariaross.in</a>
                    </div>
                </div>
            </div>
            <div className="tech-1">
                <div className="tech-div">
                    <h2>MERN Stack Application</h2>
                    <p>MERN stack is a software stack that includes four open-source technologies: (MongoDB, Express.js, React, and Nodejs). These components provide an end-to-end framework for building dynamic web sites and web applications.     Among these technologies MongoDB is a database system, Node.js is a server-side runtime environment, Express.js is a web framework for Node.js and React is a client-side JavaScript library used for building user interfaces.</p>
                    
                </div>
                <div className="tech-div">
                <img src={require('../component/images/mern-stack.jpg')} alt="mern-stack" />
                </div>
            </div>
            <div className="tech-1">
                <div className="tech-div">
                <img src={require('../component/images/php-img.jpg')} alt="php" />
                </div>
                <div className="tech-div">
                    <h2>PHP Developemnt</h2>
                    <p>PHP (Hypertext Preprocessor) is a popular server-side scripting language primarily used for web development. It excels in creating dynamic and interactive web applications by embedding code within HTML files. PHP is known for its wide support across various web servers and operating systems, making it highly versatile. It's also well-suited for database integration, particularly with MySQL, thanks to its native support.</p>
                </div>
            </div>
            <div className="tech-1">
                <div className="tech-div">
                    <h2>Django Development</h2>
                    <p>Django is a high-level Python web framework known for its simplicity and robustness in web development. It follows the Model-View-Controller (MVC) architectural pattern, which encourages clean and maintainable code.Django promotes rapid development with its "batteries-included" philosophy, allowing developers to focus on building unique web applications rather than reinventing the wheel.</p>
                    
                </div>
                <div className="tech-div">
                <img src={require('../component/images/django-img.jpg')} alt="django-img" />
                </div>
            </div>
            <div className="tech-1">
                <div className="tech-div">
                <img src={require('../component/images/netDev.jpg')} alt="tech" />
                </div>
                <div className="tech-div">
                    <h2>.Net Technologies</h2>
                    <p>. NET is an open-source platform for building desktop, web, and mobile applications that can run natively on any operating system. The . NET system includes tools, libraries, and languages that support modern, scalable, and high-performance software development.</p>
                    
                </div>
            </div>
            <a href="/contact" className='btn'>LET'S CONNECT</a>
        </div>
    </>
  )
}

export default WebDevelopment