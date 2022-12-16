import React from "react";
import styled from "styled-components";
// import Button from "./res/Button";
// import { PaystackButton } from 'react-paystack';
// import Cart from './cart/Cart'

function EventBody() {
  return (
    <Body>
      <Text>
    
      </Text>
{/* 
      <MinDetail>
        <div className="box_body">
          <div>
            <span className="material-symbols-outlined iconn">location_on</span>

            <h2>Alheri Hotel Ibadan</h2>
            <p>
              Opposite 3hr borehole drilling company,Akala express, Ibadan Oyo
              State{" "}
            </p>
          </div>
          <div>
            <span className="material-symbols-outlined iconn">
              calendar_month
            </span>

            <h2>17th December 2022</h2>
            <p>8:000am</p>
          </div>

          <div>
            <span className="material-symbols-outlined iconn">payments</span>

            <h2>₦3,000 - ₦100,000</h2>

            <Button ticket="Book Ticket" />
          </div>
        </div>
      </MinDetail> */}

      <div className="overlay"></div>
    </Body>
  );
   
}

export default EventBody;

const Body = styled.div`
  background-image: url(/img/tuk-bgron.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  position: relative;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    /* background: rgba(17, 17, 17, 0.658); */
  }
`;

const Text = styled.div`
  text-align: center;
  position: relative;
  z-index: 100;

  h1 {
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-size: 4rem;

    @media screen and (max-width: 700px) {
      font-size: 3rem;
    }
    @media screen and (max-width: 500px) {
      font-size: 2rem;
    }
  }
  p {
    margin: 0;
    padding: 0;

    span {
      color: #d9072a;
    }
  }
`;

// const MinDetail = styled.div`
//   width: 1280px;
//   height: 320px;

//   background: rgba(255, 255, 255, 0.36);
//   border-radius: 16px;
//   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
//   backdrop-filter: blur(6.2px);
//   -webkit-backdrop-filter: blur(7px);
//   border: 1px solid rgba(255, 255, 255, 0.3);
//   position: absolute;
//   bottom: -10rem;
//   z-index: 100;
//   color: black;

//   display: flex;
//   justify-content: center;

//   @media screen and (max-width: 1200px) {
//     width: 100%;
//   }
//   @media screen and (max-width: 900px) {
//     height: 100%;
//     bottom: -33rem;
//   }

//   .box_body {
//     width: 1000px;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;

//     @media screen and (max-width: 900px) {
//       flex-direction: column;
//       padding: 30px 0;
//     }

//     div {
//       width: 300px;
//       height: 200px;
//       .iconn {
//         font-size: 2rem;
//         color: #f14105;
//         font-weight: 400;
//       }
//       h2 {
//         font-size: 1.5rem;
//       }
//       p {
//         color: black;
//       }
//     }
//   }
// `;
