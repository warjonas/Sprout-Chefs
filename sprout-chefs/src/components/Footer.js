import React from 'react'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './Footer.css'
import privacyPolicy from '../Sprout-Chefs-Privacy-Policy.docx'

function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer-links">
      
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Services</h2>
            <Link to='/contact-us'>Catering</Link>
            <Link to='/homecooked-meals'>Home Cooked Meals</Link>
            <Link to='/sprout-chefs-menu'>Take Aways</Link>

          </div>
          <div className="footer-link-items">
            <h2>Resources</h2>
            <Link to='/sprout-chefs-menu'>Menu</Link>
            <Link to='/about-us'>About Us</Link>
            <Link to='/contact-us'>Contact Us</Link>
            <a href='/privacy-policy'>Privacy Policy</a>

          </div>
        </div>

      </div>

      
        <div className="social-media-wrap">
          <div className="footer-logo">
          <Link to='/' className='navbar-logo'>
            
            <img src="./Images/logo.png" alt="" />
            
          </Link>
          
          </div>
          <small className="website-rights">Sprout Chefs 2022</small>
          <div className="social-icons">
            <a
              class='social-icon-link facebook'              
              href='https://www.facebook.com/Sprout-Chefs-103776334831034'              
              target='_blank'              
              aria-label='Facebook'              
            >          
                <FontAwesomeIcon icon={['fab', 'facebook']} class="social-logo" />
            </a>            
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/sprout_chefs/'
              target='_blank'
              aria-label='Instagram'
            >
                <FontAwesomeIcon icon={['fab', 'instagram']} class="social-logo" />
            </a>
            
          </div>
        </div>

      
          
      
    </div>
  )
}

export default Footer
