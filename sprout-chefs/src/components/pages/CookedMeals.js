import React, {useEffect} from 'react'
import Homecooked from '../Homecooked'

function CookedMeals() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  })

  return (
    <div>
      <Homecooked />
    </div>
  )
}

export default CookedMeals
