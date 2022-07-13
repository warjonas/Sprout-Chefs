import React, { Component } from 'react'
import Modal from './HomecookedModal'
import menu from '../Home-cooked-meals.jpg'
import './Homecooked.css'

export default class Homecooked extends Component {

    constructor() {
        super();
        this.state = {
            show: false
        }

        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }

    showModal = () => {
        this.setState({show:true})
    }

    hideModal = () => {
        this.setState({show:false})
    }


  render() {
      return (
        
          <div className='homecooked-menu'>
              <div className="homecooked-menu-container">
                  
                <h1> This Weeks Home Cooked Meals</h1>
                    
                <div className="homecooked-menu-img-wrap">
                    <figure className='homecooked-menu-img'>
                        <img src="./Images/Home-cooked-meals.jpg" alt="homecooked meals menu"/>
                    </figure>
                </div>

                <div className="page-nav">               
                    
                    <button onClick={this.showModal} className='menu-btns'>Place Order</button>                
                    
                </div>

                <a href={menu} className="download">
                    Download Menu           
                </a>
              </div>
            
            <Modal show={this.state.show} handleClose={this.hideModal}>

                
            </Modal>   
            
        
      

          </div>
          
        
                     
              
      
    )
  }
}

