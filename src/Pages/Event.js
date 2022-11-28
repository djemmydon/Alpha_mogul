import React, { useRef } from 'react'
import About from '../Components/About'
import EventBody from '../Components/EventBody'
import Ticket from '../Components/Ticket'
import { useReactToPrint } from "react-to-print";


function Event() {

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
  return (
    <div ref={componentRef}>
        <EventBody/>
        <About/>
        <Ticket/>

        <button onClick={handlePrint}></button>
    </div>
  )
}

export default Event