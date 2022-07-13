import React from 'react'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function LeadersCardItem(props) {
  return (
    <div className='leaders-card__item'>
          <figure className="leader__cards__item__pic-wrap" >             
              <img src={props.src} alt="Leader" className="leaders__profile-img" />              
          </figure>  
          
          <div className="leaders-card__info">
              <h3 className="leaders-card__name">{props.name}</h3>
              <h5 className="leaders-card__title">{props.title}</h5>
          </div>

      <div className="leaders-card__socials">
        
        <a
          
              class='social-icon-link facebook'  
              href={props.faceb} 
              target='_blank'              
              aria-label='Facebook'
                      
        >                        
          <FontAwesomeIcon icon={['fab', 'facebook']} class="social-logo" />
        </a>     
        
        <a
          
              class='social-icon-link instagram'          
              href={props.insta}
              target='_blank'
              aria-label='Instagram'
              
        >             
          <FontAwesomeIcon icon={['fab', 'instagram']} class="social-logo" />
        </a>
        
          </div>

        
          
    </div>
  )
}

export default LeadersCardItem
