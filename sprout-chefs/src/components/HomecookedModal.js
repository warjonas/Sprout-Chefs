import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import './UpcomingEvent.css'
import emailjs from '@emailjs/browser'
import './Homecooked.css'


const Modal = ({ handleClose, show }) => {

    const showHideClassName = show ? "modal display-block" : "modal display-none"

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_3aouexh', 'template_fp6685m', form.current, '2ht7hBj-wzWh0SVTz')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
    
    }

    return (
        <div className={showHideClassName}>
            
            <section className='homecooked-modal'>
                <div className='order-section'>      
                    <div className='order-container'>                       
                        <div className="order-container">       
                            <h2>Place your Order</h2>  
                            
                            <form ref={form} onSubmit={sendEmail} className="contact-form">
                                <label>Your name</label><input type="text" placeholder='e.g. Joe Soap' name="from_name" required />                                
                                <label>For which Day/s: </label><input type="text" placeholder='e.g. Monday, Wednesday, Thursday' name="day" required />
                                <label>How many orders:  </label><input type="text" placeholder='e.g. 5 orders per day , 5' name="tot_orders" required/>      
                                <label>Contact Number:  </label><input type="phone" placeholder='e.g. 0812345678' name="phone" required /> 
                                <label>Email:  </label><input type="email" placeholder='e.g.joesoap@gmail.com' name="reply_to" required /> 
                                <label>Additional Notes: </label><textarea name="notes" id="" cols="25" rows="10" placeholder='e.g. Allergies, additional sauces, etc.'></textarea>

                                <input type="submit" value="Place Order" class='order-btn btn' />
                            </form>
                        </div>                       
           
                    </div>

                    <div className="modal-footer">
                          
                    <button className='close-btn' type='button' onClick={handleClose}>
                        Close
                    </button>
                </div>
      
                </div>  
                

                
                
            </section>

        </div> 
    )
}

export default Modal