import React, { useEffect, useRef } from 'react'
// import About from '../Components/About'
import EventBody from '../Components/EventBody'
// import Ticket from '../Components/Ticket'


function Event() {

    const componentRef = useRef();
useEffect(() => {
  window.onpopstate = () => {

    window.location.reload(false);

  }
}, [])

 
  return (
    <div ref={componentRef}>
        

        <EventBody/>
        {/* <About/> */}

       
    </div>
  )
}

export default Event