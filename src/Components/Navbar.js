import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";



function Navbar() {
    // const total = useSelector(state => state.cart.totalQuantity)
  return (
    <Body>

      <div className="logo"> 
       
    <img src="/img/peculiar.png" alt=""/>
    
      </div>
    
     
    </Body>
  );
}

export default Navbar;

const Body = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: black;
  z-index: 200;

  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  a{
    color: white;
    text-decoration: none;
  }

  /* padding: 0 10px; */

  .logo {
    margin-top: 30px;
    margin-left: 10px;
    height: 50px;
    position: relative;
    z-index: 10px;

    @media screen and (max-width: 500px) {
    margin-top: 10px;

      height: 43px;

        }
    img{
      height: 100%;
    }
  }
  .cart {
    margin-right: 30px;
    position: relative;
    span {
      font-size: 2rem;
    }

    .count {
      position: absolute;
      top: -5px;
      right: -12px;
      width: 20px;
      height: 20px;
      background-color: #f14105;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;

      span {
        font-size: 0.8rem;
 font-weight: 600;
      }
    }
  }
`;
