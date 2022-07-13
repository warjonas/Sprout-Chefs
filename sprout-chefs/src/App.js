
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Footer from './components/Footer'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Menu from './components/pages/Menu'
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import CookedMeals from './components/pages/CookedMeals';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import { faBars, faX, faXmark, faSearchLocation, faPhone } from '@fortawesome/free-solid-svg-icons';


library.add(fab, faBars, faX, faXmark, faSearchLocation, faPhone)

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/sprout-chefs-menu' exact element={<Menu />} />
          <Route path='/contact-us' exact element={<Contact />} />
          <Route path='/about-us' exact element={<About />} />
          <Route path='/privacy-policy' exact element={<PrivacyPolicy />} />
          <Route path='/homecooked-meals' exact element={<CookedMeals />} />


          

          

          
        </Routes>

        <Footer />
        
      </Router>
    </>
  );
}

export default App;
