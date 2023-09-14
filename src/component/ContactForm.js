import axios from 'axios';
import React,{useState} from 'react'
const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [res, setRes] = useState(true);
    // submit form handle
    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(name,email,phone,message);
        const data={
            Name:name,
            Email:email,
            Phone:phone,
            Message:message
        }
        axios.post('https://sheet.best/api/sheets/0420a83c-e485-4cbe-8ec4-9971624b6026',data).then((response)=>{
                setName('')
                setEmail('')
                setPhone('')
                setMessage('')
                setRes(false)
        })
    }
  return (
    <>
    <div className="responsive-container-block container">
      <form className="form-box" autoComplete='off' onSubmit={handleSubmit}>
        <p className="text-blk contact-head">
          GET IN TOUCH
        </p>
        <p className="text-blk contact-subhead">
        Fill this form to receive your quote. 
        </p>
        <div className="container-block form-wrapper">
          <div className="responsive-container-block">
            <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt-4">
              <input className="input" id="ijowk-4" name="Name" placeholder='Enter your Name' onChange={(e)=>setName(e.target.value)} value={name} required/>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <input type='email' className="input" id="ipmgh-4" name="Email" placeholder='Enter your Email Address' onChange={(e)=>setEmail(e.target.value)} value={email} required/>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <input className="input" id="imgis-4" name="PhoneNumber" placeholder='Contact Number'onChange={(e)=>setPhone(e.target.value)} value={phone} required/>
            </div>
            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-4">
              <textarea className="textinput input" id="i5vyy-4" name='Message' placeholder="Write your message..." onChange={(e)=>setMessage(e.target.value)} value={message} required></textarea>
            </div>
          </div>
          <button className="submit-btn">
            SUBMIT HERE
          </button>
        </div>
      </form>
      <h2 className={res?'response-hide':'response'}>You Data Submitted SuccessFully!</h2>
      </div>
        
    </>
  )
}

export default ContactForm