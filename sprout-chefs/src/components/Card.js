import React from 'react'
import CardItem from './CardItem'
import './Card.css'

function Card() {
  return (
      <div className='cards'>
          <h1>What we offer</h1>
          
          <div className="cards__container">
              <div className="cards__wrapper">
                  <ul className="cards__items">
                      <CardItem src="./Images/Homecooked.jpeg"
                          heading = "Homecooked Meals"
                          text="For the days where you are too tired to cook dinner, we offer home cooked meals, with the menu rotating each week, for collection."
                          label="Fried Chicken, Savoury Rice and Veggie Bake"
                          path='/homecooked-meals' 
                          btntxt="Order Now"
                      />                        
                      
                  
                      <CardItem src="./Images/Catering.jpeg"
                          heading="Event Catering"
                          text="For all your catering needs, be it social or corporate events, contact us now"
                          label="Meaty Platter"
                          path='/contact-us' 
                          btntxt="Contact Us"
                      />                        
                      
                  
                      <CardItem src="./Images/Takeaway.jpeg"
                          heading="Delicious Takeaways"
                          text="Check out our menu and contact us to have your order placed ahead of time before collecting."
                          label="Classic B and E Sandwhich"
                          path='/sprout-chefs-menu' 
                          btntxt="View Menu"
                      />                        
                      
                  </ul>
              </div>
          </div>
      
    </div>
  )
}

export default Card
