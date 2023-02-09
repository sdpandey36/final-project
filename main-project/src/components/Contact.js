import React from 'react'
import Navbar from './Navbar'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="signInform-container">
 <div className=" contactForm">
       
    <div className="signIntext">
      <div className="welcomeText">Contact Us</div>
      {/* <div className="pleaseText">Please enter your details</div> */}
      
    </div>
    <form >
      <div className="firstname">
        <label for="firstname">Firstname:</label><br></br>
        <input type="firstname" name="firstname" id="firstname" className='textarea'  placeholder='Enter your firstname' autoComplete='off'></input>
      </div>
      <div className="lastname">
        <label for="lastname">Lastname:</label><br></br>
        <input type="lastname" name="lastname" id="lastname" className='textarea'  placeholder='Enter your lastname' autoComplete='off'></input>
      </div>
      <div className="email">
        <label for="email">Email:</label><br></br>
        <input type="email" name="email" id="email" className='textarea'  placeholder='Enter your email' autoComplete='off'></input>
      </div>
      <div className="message">
        <label for="message">Message:</label><br></br>
        <input type="text" name="message" id="message" className='textarea msg'  placeholder='Message here' autoComplete='off'></input>
      </div>
     
    </form>
    <div className="signIN-btn">
      <button type="submit">Send Message</button>
    </div>


    <div className="noAccount">
      <span>Don't have an account? <span id='signUp'>Sign Up</span></span>
    </div>
    
     
    
    
  </div>
  </div>
    </>
  )
}

export default Contact
