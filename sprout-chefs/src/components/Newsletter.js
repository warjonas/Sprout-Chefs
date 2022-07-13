import React from 'react'
import { Button } from './Button'
import './Newsletter.css'

function Newsletter() {
  return (
      <div className='newsletter'>
          <div className="newsletter-container">
              <h1 className='subscription-heading'>Newsletter</h1>
              <p className='subscription-text'>
                  Subscribe to our newsletter to be in the know about any upcoming events or deals
              </p>
              <div className="input-area">
                    <form>                        
                      <input type="email" name='email' placeholder='Your Email' className='newsletter-input' />
                      <Button buttonStyle='btn--primary' buttonSize='btn--large' className='btn' path='/'>                          
                          Subscribe                           
                      </Button>
                      
                    </form>
              </div>
              
          </div>
      
    </div>
  )
}

export default Newsletter
