import React, {useState} from 'react'
import '../component/style/portfolio.css'
const Portfolio = () => {
    const [toggle, setToggle] = useState(1);

    const tabtoogle=(id)=>{
          setToggle(id);
    }
  return (
    <div className='portfolio'>
      <div className="contact-t1">
        <h1>DIGITAL WHOOPER</h1>
        <h2>OUR WORKING PORTFOLIO</h2>
      </div>
      <div className="ourwork">
        <h3>Our Works</h3>
        <h2>Have a look at our working portfolio...</h2>
      </div>
      <div className="tabs">
              <ul class="nav nav-tabs mb-3 mx-auto" id="ex2" role="tablist">
                <li class="nav-item" role="presentation" onClick={()=>tabtoogle(1)}> ALL
                </li>
                <li class="nav-item" role="presentation" onClick={()=>tabtoogle(2)}> Digital Marketing
                </li>
                <li class="nav-item" role="presentation" onClick={()=>tabtoogle(3)}>Web Development
                </li>
              </ul>
                <div className={toggle===1?'all-content':'all-content tab-work-show'}>
                    <div className="content-1">                       
                    <img src={require('../component/images/work-1.png')} alt="success-growth" />
                    <img src={require('../component/images/work-1.png')} alt="success-growth" />
                    <img src={require('../component/images/work-1.png')} alt="success-growth" />
                    </div>
                    <div className="content-1">
                    <img src={require('../component/images/work-2.png')} alt="success-growth" />
                    </div>
                    <div className="content-1">
                    <img src={require('../component/images/work-3.png')} alt="success-growth" />
                    </div>
                </div>
                <div className={toggle===2?'marketing-content':'marketing-content tab-work-show'}>
                    <div className="content-market">
                        <h2>Digital Marketing</h2>
                    <img src={require('../component/images/work-1.png')} alt="success-growth" />
                    </div>
                </div>
                <div className={toggle===3?'web-development':'web-development tab-work-show'}>
                    <div className="content-market">
                    <h2>Web Development</h2>
                    <img src={require('../component/images/work-1.png')} alt="success-growth" />
                    
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Portfolio