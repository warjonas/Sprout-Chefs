import React from 'react'

import '../App.css'
import './Hero.css'
import { Button } from './Button'
import menu from '../sprout_chefs_menu.pdf'


function Hero() {
  return (
    <div className='hero-container'>
      <div className="hero-container-message">
        <div className="mobile-logo-wrap">
          <img src="./Images/logo.png" alt="sprout chefs logo" className='mobile-logo' />
        </div>
        <h1>DELICIOUSNESS AWAITS</h1>
        <p>
          Take a look at our delicious menu or contact us now to enquire about  our catering services
        </p>
        <div className="hero-btns">
          <Button className="hero-btns" buttonStyle='btn--outline' buttonSize='btn--large' path='/sprout-chefs-menu'>
          
              View Menu
                            
          </Button>

          
            <Button className="hero-btns" buttonStyle='btn--primary' buttonSize='btn--large' path='/contact-us'>
              CONTACT US
            </Button>
         
          


        </div>

      </div>                    
    </div>
  )
}

export default Hero
