import React, {useEffect} from 'react'

import AboutHero from '../AboutHero'
import Mission from '../Mission'
import Leaders from '../Leaders'
import Gallery from '../Gallery'

function About() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }) 
  return (
    <>      
      <AboutHero />      
      <Mission />
      <Leaders />
      <Gallery/>
    </>
    
  )
}

export default About
