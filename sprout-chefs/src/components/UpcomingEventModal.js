import { Link } from 'react-router-dom'
import './UpcomingEvent.css'
// import {Button } from './Button'

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none"

    return (
        <div className={showHideClassName}>

            <section className='modal-main upcomingevent'>
                {/* <h1>Upcoming Event</h1> */}
                {children}

                <div className="modal-footer">
                    <Link to='/contact-us' className="modal-contact">
                        Contact Us                
                    </Link>
                    
                    <button type='button' onClick={handleClose}>
                        Close
                    </button>
                </div>
                
            </section>

        </div> 
    )
}

export default Modal