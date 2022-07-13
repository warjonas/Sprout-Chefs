import React, {useEffect} from 'react'
import ContactForm from '../ContactForm'


function Contact() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  })    
  return (
      <div>
          <ContactForm/>
      </div>      
          
  )
}

export default Contact
