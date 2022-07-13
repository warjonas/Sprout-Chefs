import React, {Component} from 'react'
import './UpcomingEvent.css'
import Modal from './UpcomingEventModal'
import {Button} from './Button'


class UpcomingEvent extends Component {

    

    constructor() {
        super();
        this.state = {
            show: false
        }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        

    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };


    render() {
        return (
        <div className='event'>
            <div className='event-container'>
                <h1>Upcoming Event</h1>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    {/* <img src="./Images/no-event-image-mobile.jpeg" alt="fathers day meal" className='modal-image' /> */}
                </Modal>
                <figure className='event-container__img-wrap'>
                    <img src="./Images/no-event-image-mobile.jpeg" alt="Upcoming Event" className='event-container__img' />                           
                </figure>
                {/* <Button buttonSize='btn--large' buttonStyle='btn--primary'  className='event-containter__btn' onClick={this.showModal}>
                    View More
                </Button> */}
            </div>           
        </div>

      
      
  )}
}

export default UpcomingEvent
