import React from 'react'
import LeadersCardItem from './LeadersCardItem'
import './Leaders.css'

function Leaders() {
  return (
      <div className='leaders'>
          <h1>Meet Our Leaders</h1>
            <div className="leaders__container">              
              <div className="leaders-card__wrapper">
                  <div className="leaders-card__items">
                        <LeadersCardItem src='./Images/SC-2-profile.jpg'
                        name="Nicole Coetzee"
                        title='Founder'
                        insta='https://www.instagram.com/nicoletjonas/'  
                        
                    />

                    <LeadersCardItem src='./Images/SC-11-profile.jpg'                      
                        name="Megan Munnick"
                        title='Founder'
                        insta='https://www.instagram.com/meganmunnick/'
                        faceb='https://www.facebook.com/megan.munnick'
                    />
                  </div>

                  
              </div>
            </div>          
        </div>
  )
}

export default Leaders
