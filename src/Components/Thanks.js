import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Thanks() {
  return (
    <Body>

<div>
<h1>Thanks for booking</h1>

</div>
<div>
<button>
    <Link to="/">Go back Home</Link>
</button>

</div>
   


    </Body>
  )
}

export default Thanks


const Body = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100vh;


h1{
    font-size: 1.5rem;
    color: black;
    text-align: center;

}

button{
    width: 120px;
  height: 40px;
  background-color: #f14105;
  border-color: #f14105;
  outline: none;
  border: none;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content:space-around;
  transition:0.3s;

  a{
    color: white;
    font-weight: 400;

    text-decoration: none;

   
  }

  &:hover{
    text-decoration: underline;

    }
}
`