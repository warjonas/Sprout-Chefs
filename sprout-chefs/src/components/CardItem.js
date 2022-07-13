import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from './Button'

function CardItem(props) {
  return (
      <>
          <li className="cards__item">
              <Link className="cards__item__link" to={props.path}>
                  <figure className="cards__item__pic-wrap" data-category={props.label}>
                      <img src={props.src} alt="Services Image" className="cards__item__img" />
                  </figure>
                  <div className="cards__item__info">
                      <h5 className='cards__item__heading'>{props.heading}</h5>
                      
                      <p className="cards__item__description">
                          {props.text}
                      </p>
                  </div>
                  <div className="cards__items__btn">
                      
                        <Button className="card-btn" buttonSize='btn--large' buttonStyle='btn--primary' path={props.path}>
                            {props.btntxt}                          
                        </Button> 
                      
                                           
                  </div>
            
                  
              </Link>
          </li>
      
    </>
  )
}

export default CardItem
