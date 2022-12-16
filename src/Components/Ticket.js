import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { useReactToPrint } from "react-to-print";
import styled from "styled-components";
import { cartActions } from "../redux/ticket/ticket";
import Button from "./res/Button";

function Ticket() {
  return (
    <div>
      <Body>
        <header>Tickets</header>

        <Main>
          {ticketList.map((item) => (
            <List items={item} key={item.name} />
          ))}
        </Main>
      </Body>
    </div>
  );
}

export default Ticket;

function List({ items }) {


  const navigate = useNavigate()
  const [qty, setQty] = useState(1);
  console.log(items);

  const decrease = () => {
    if (qty > 1) {
      setQty((prev) => prev - 1);
    }
  };
  const increase = () => {
    setQty((prev) => prev + 1);
  };

  const totalPrice = qty * items.price;
  const cartItems = useSelector((state) => state.cart);

  console.log(cartItems);

  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(cartActions.addToCart({ ...items, qty, totalPrice }));
    navigate("/book")
  };
  const componentRef = useRef();

  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  //   documentTitle: " emp-data",
  //   onAfterPrint: () => alert("print success"),
  // });
  return (
    <div className="ticket_body" ref={componentRef}>
      <div className="ticket_details">
        <p>{items.name}</p>
        <span>₦{items.price.toLocaleString()}</span>
      </div>

      <div className="quantity">
        <div className="quantity_minus_remove" onClick={decrease}>
          <span className="material-symbols-outlined">remove</span>
        </div>
        <div className="quantity_amount">
          <span>{qty}</span>
        </div>
        <div className="quantity_minus_remove" onClick={increase}>
          <span className="material-symbols-outlined">add</span>
        </div>
      </div>

      <div>
        <Button ticket="Book Tickets" click={addToCartHandler} />
      </div>
    </div>
  );
}

const Body = styled.div`
  /* background: white; */
  width: 100%;
  position: relative;
  margin-top: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(17, 17, 17, 0.658);
  }
`;

const Main = styled.div`
  height: 100%;
  /* border: 1px solid rgb(133, 128, 128); */
  color: rgb(123, 128, 128);
  margin: 20px;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
  flex-direction: row;

  .ticket_body {
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
background: rgba(255, 255, 255, 0.36);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(6.2px);
-webkit-backdrop-filter: blur(6.2px);
border: 1px solid rgba(255, 255, 255, 0.3);
    color: black;
    border-bottom: 2px solid #f14105;
    padding: 10px;
    border-radius: 10px 10px;

    @media screen and (max-width: 400px) {
    width: 250px;
      
    }

    .ticket_details {
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        font-size: 1.2rem;
        font-weight: 600;
      }
    }

    .quantity {
      display: flex;

      .quantity_minus_remove {
        width: 30px;
        height: 30px;
        background: red;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        span {
          color: white;
          font-size: 0.9rem;
          font-weight: 500;
        }
      }

      .quantity_amount {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;

        background: white;
        box-shadow: 1px 1px 40px #1111;
        span {
          font-weight: 500;
        }
      }
    }
  }
`;

const ticketList = [
  {
    id: 1,
    name: "Regular TIcket",
    price: 3000,
  },
];
