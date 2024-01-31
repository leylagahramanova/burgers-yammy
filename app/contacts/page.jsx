import Layout from '@/components/Layout'
import React from 'react'

const Contacts = () => {
  return (
    <Layout>   <div className="banner">
    <div className="contain">

        <div className="wrapper">
      
          <div className="form">
            <h4>GET IN TOUCH</h4>
            <h2 className="form-headline">Send us a message</h2>
            <form id="submit-form" action="">
              <p>
                <input id="name" className="form-input" type="text" placeholder="Your Name*"/>
                <small className="name-error"></small>
              </p>
              <p>
                <input id="email" className="form-input" type="email" placeholder="Your Email*"/>
                <small className="name-error"></small>
              </p>
              <p className="full-width">
                <input id="company-name" className="form-input" type="text" placeholder="Company Name*" required/>
                <small></small>
              </p>
              <p className="full-width">
                <textarea  minlength="20" id="message" cols="30" rows="7" placeholder="Your Message*" required></textarea>
                <small></small>
              </p>
              <p className="full-width">
                <input type="checkbox" id="checkbox" name="checkbox" checked/> Yes, I would like to receive communications by call / email about Company's services.
              </p>
              <p className="full-width">
                <input type="submit" className="submit-btn" value="Submit" onclick="checkValidations()"/>
                <button className="reset-btn" onclick="reset()">Reset</button>
              </p>
            </form>
          </div>
      
          <div className="contacts contact-wrapper">
      
            <ul>
              <li><p>We're here to assist you! If you have any questions or need assistance, please feel free to reach out to us.</p></li>
              <span className="hightlight-contact-info">
                <li className="email-info"><i className="fa fa-envelope" aria-hidden="true"></i> yammy@food.com</li>
                <li><i className="fa fa-phone" aria-hidden="true"></i> <span className="highlight-text">+91 11 1111 2900</span></li>
              </span>
            </ul>
          </div>
        </div>
      </div>
</div></Layout>
 
  )
}

export default Contacts