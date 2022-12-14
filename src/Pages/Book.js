import * as  React from 'react'
import { useSelector } from 'react-redux'
import Cart from '../Components/cart/Cart'

function Book() {
    const ticket  = useSelector(state => state.cart)
  return (
    <div><Cart ticket={ticket} /></div>
  )
}

export default Book