import React from 'react'
import '../footer/footer.css'
import { FaPhone , FaEnvelope, FaLocationPin} from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-first">
       <h1 className='logo'><span>C</span>ombat</h1>
       <p>Duis aute irure dolor in reprehenderit in voluptate velit cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <div className="footer-second">
        <h2>Useful Links</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Blog</li>
          <li>Contact us</li>
        </ul>
        
      </div>
      <div className="footer-third">
        <h2>contact info</h2>
        <ul>
          <li><FaPhone/> <span>+91 9549718564</span></li>
          <li><FaEnvelope/> <span>aman@gmail.com</span></li>
          <li><FaLocationPin/><span>Jaipur 219-Vaishali Nagar</span></li>
        </ul>
      </div>
      <div className="footer-fourth">
        <h2>Social Networks</h2>
        <ul>
          <li><FaFacebookF /></li>
          <li><FaInstagram /></li>
          <li><FaTwitter /></li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer