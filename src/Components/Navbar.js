import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";


function Navbar() {
    const total = useSelector(state => state.cart.totalQuantity)
  return (
    <Body>
      <div className="logo">
        <h3>LOGO</h3>
      </div>
      <div className="cart">
        <span className="material-symbols-outlined">shopping_cart</span>

        <div className="count">
          <span>{total}</span>
        </div>
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

  /* padding: 0 10px; */

  .logo {
    margin-left: 30px;
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
