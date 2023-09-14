import React from 'react'
import "./style/blog.css";
const Blog = () => {
  return (
    <div className='container my-4'>
        <h3 className='faq-t1'>OUR BLOG</h3>
        <h2 className='faq-t2'>INFORMATION HUB</h2>
        <div className="row">
            <div className="card card-width" >
                <img src={require('./images/Twitter-to-X.png')} alt="success-growth" />
                <div className="card-body">
                    <a href="/blog" className="category-btn">UPDATE</a>
                    <h5 className="card-title">TWITTER TO X - TWITTER IS BEING REBRANDED AS X</h5>
                    <p className="card-text">Whenever anyone thinks about Twitter the blue bird comes to mind, right? The …</p>                    
                </div>
            </div>
            <div className="card card-width" >
                <img src={require('./images/Twitter-to-X.png')} alt="success-growth" />
                <div className="card-body">
                    <a href="/blog" className="category-btn">UPDATE</a>
                    <h5 className="card-title">TWITTER TO X - TWITTER IS BEING REBRANDED AS X</h5>
                    <p className="card-text">Whenever anyone thinks about Twitter the blue bird comes to mind, right? The …</p>                    
                </div>
            </div>
            <div className="card card-width" >
                <img src={require('./images/Twitter-to-X.png')} alt="success-growth" />
                <div className="card-body">
                    <a href="/blog" className="category-btn">UPDATE</a>
                    <h5 className="card-title">TWITTER TO X - TWITTER IS BEING REBRANDED AS X</h5>
                    <p className="card-text">Whenever anyone thinks about Twitter the blue bird comes to mind, right? The …</p>                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog