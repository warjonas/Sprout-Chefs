import React, {useEffect, useState} from 'react'
import {useMediaQuery} from '@material-ui/core'
import menu from '../sprout_chefs_menu.pdf'
import {Button} from './Button'
import './MenuDocument.css'

function MenuDocument () {      

    const isDesktop = useMediaQuery('(min-width:600px)')   

    return (
      
        <div className='takeaway-menu'>
              <div className="takeaway-menu-container">
                  
                <h1> Sprout Chefs Menu</h1>
                    
                <div className="takeaway-menu-img-wrap">
                    <figure className='takeaway-menu-img'>
                        <img src="./Images/Menu1.png" alt="sprout chefs menu 1"/>
                    </figure>

                    <figure className='takeaway-menu-img'>
                        <img src="./Images/Menu2.png" alt="sprout chefs menu 1"/>
                    </figure>

                </div>          
                <a href="/contact-us" className="download">
                    Contact Us        
                </a>

                <a href={menu} className="download">
                    Download Menu           
                </a>
              </div>
              
          </div>
      
  )
}

export default MenuDocument

