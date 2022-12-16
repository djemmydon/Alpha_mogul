import React, { useRef } from 'react'
import About from '../Components/About'
import EventBody from '../Components/EventBody'
import Ticket from '../Components/Ticket'


function Event() {

    const componentRef = useRef();

 
  return (
    <div ref={componentRef}>
        <EventBody/>
        <About/>
        <Ticket/>

       
    </div>
  )
}

export default Event