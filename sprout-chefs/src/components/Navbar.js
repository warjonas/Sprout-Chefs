import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation } from 'react-router-dom'
import menu from '../sprout_chefs_menu.pdf'


function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
   

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const location = useLocation();

    const { pathname } = location
    
    const splitLocation = pathname.split('/')

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])
    window.addEventListener('resize', showButton)



  return (
    <div>
          <nav className="navbar">
              <div className="navbar-container">
                  
                  <div className="menu-icon" onClick={ handleClick }>
                      <FontAwesomeIcon icon={click ? 'xmark': 'bars'}/>
                  </div>

                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                      
                      <li className='nav-item'>
                          <Link to='/' className={splitLocation[1]=== "" ? 'nav-links active':'nav-links'}  onClick={closeMobileMenu}>
                              Home
                          </Link>
                      </li>
                      <li className='nav-item' >
                          
                          <Link to='/sprout-chefs-menu'  className={splitLocation[1]==='sprout-chefs-menu' ? 'nav-links active':'nav-links'} onClick={closeMobileMenu}>
                              Menu
                          </Link>
                      </li>

                      <li className='nav-item logo'>
                          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                              <img src="./Images/logo.png" alt="" />
                          </Link>
                      </li>
                    
                      <li className='nav-item' >
                          <Link to='/about-us' className={splitLocation[1]=== 'about-us' ? 'nav-links active':'nav-links'} onClick={closeMobileMenu}>
                              About
                          </Link>
                      </li>
                      <li className='nav-item' >
                          <Link to='/contact-us' className={splitLocation[1]==='contact-us' ? 'nav-links active':'nav-links'} onClick={closeMobileMenu}>
                              Contact
                          </Link>
                      </li>
                  </ul>
              </div>
      </nav>
    </div>
  )
}

export default Navbar
