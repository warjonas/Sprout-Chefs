import React, {useRef} from 'react'
import { Button } from './Button'
import './ContactForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import emailjs from '@emailjs/browser'

function ContactForm() {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_2ab7xoe', 'template_ftrez9s', form.current, '2ht7hBj-wzWh0SVTz')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
  
  }
  

  return (  
    
    <div className='contact-section'>
      
      <div className='contact-container'>
        
        <div className="form-container">          
          <h2>Get In Touch</h2>          
          <div className="contact-text">
            
            <p><FontAwesomeIcon icon='searchlocation'/> 112 Burt Drive, York House, Shop 3, Cotsworld </p>             
            <p><FontAwesomeIcon icon='phone'/> (+27) 73 382 5317</p> 
            <p><FontAwesomeIcon icon='phone'/> (+27) 73 245 7461</p>
            
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" placeholder='Your Name' name="from_name" required />
            <input type="email" placeholder='Your Email' name="reply_to" required/> 
            <textarea name="message" id="" cols="25" rows="10" placeholder='Write your message here'></textarea>
            <input type="submit" value="Send" class='contact-us btn'/>
            {/* <Button buttonSize='btn--large' buttonStyle='btn--send' className='btn'> Send </Button> */}
          </form>

        </div>

        <div className="map">
          <Map/>
        </div>
        
      </div>
      
    </div>  
    
  )
}

export default ContactForm

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })
  
  if (!isLoaded) return <div>Loading...</div>
  
  return <GoogleMap zoom={16} center={{ lat: -33.94178756162564, lng: 25.548035926283852 }} mapContainerClassName="map-container" >
    <Marker position={{ lat: -33.94178756162564, lng: 25.548035926283852 }} label='Sprout Chefs' />
  </GoogleMap>
}


