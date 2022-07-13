import React, {useEffect} from 'react'
import Card from '../Card'
import Hero from '../Hero'
import UpcomingEvent from '../UpcomingEvent'
import Newsletter from '../Newsletter'

function Home() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    })


    return (
        <>
            <Hero />
            <Card />
            <UpcomingEvent /> 
            <Newsletter />
        </>
      
      
    )
    
}

export default Home
