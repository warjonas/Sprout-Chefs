import React, {useEffect} from 'react'
import MenuDocument from '../MenuDocument'


function Menu() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }) 

  return (
      <div>              
              
        <MenuDocument/>                          
         
      </div>
      
  )
}

export default Menu

