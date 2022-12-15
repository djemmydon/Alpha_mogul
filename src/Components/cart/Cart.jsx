import * as React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { usePaystackPayment } from "react-paystack";
// import { useReactToPrint } from "react-to-print";
import exportAsImage from "../../exportAs";

function Cart({ ticket }) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [data, setData] = React.useState({});

  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: ticket?.allTotalPrice * 100,
    firstName,
    lastName,
    publicKey: "pk_test_0af8c9c840c5cec7443250dcc87f7a44b02eb8b0",
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.

    console.log(reference);
    setData(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  console.log(data);
  const initializePayment = usePaystackPayment(config);
  console.log(ticket);

  const componentRef = React.useRef();

  const navigate = useNavigate();

  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  //   documentTitle: " Tuk-Fest",
  //   onAfterPrint: () => alert("print success"),
  // });
  return (
    <>
      <Body>
        {/* <Head>
          <h1>Complete Your Purchase</h1>
          <div className="overlay"></div>
        </Head> */}
        <MinDetail>
          <div className="box_body">
            {ticket?.itemList?.map((p) => (
              <div className="item">
                <div className="left">
                  <h2>
                    {/* <span>Name:</span> */}
                    TUK FEST
                  </h2>
                  <span>Dec 30, 2022</span>

                  <p>
                    Barcode, No 2, Osuntokun Avene,Old Bodija Estate, Ibadan
                  </p>
                </div>
                <div className="right">
                  <h2>
                    {" "}
                    <span>Number of Seats:</span> {p.qty}
                  </h2>
                  <h2>
                    {" "}
                    <span>Total Price:</span> ₦{p.totalPrice.toLocaleString()}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </MinDetail>
        <Form>
          <h1>Billing Information</h1>

          <div className="form__">
            <div className="input_element">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="input_element">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="input_element">
              <label htmlFor="">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input_element">
              <label htmlFor="">Phone Number</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="input_element button">
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  initializePayment(onSuccess, onClose);
                }}
              >
                {" "}
                Pay {ticket?.allTotalPrice}
              </button>
            </div>
          </div>
        </Form>
      </Body>

      {data.status === "success" && (
        <Tickets>
          <div>
            {" "}
            <TiketBody
              ref={componentRef}
              className={
                data.status === "success" ? "ticket_body active" : "ticket_body"
              }
            >
              <div className="ticket_head">
                <h1>TUK FEST</h1>
                <span class="material-symbols-outlined">location_on</span>
                <p>Barcode, No 2, Osuntokun Avenue,Old Bodija Estae, Ibadan</p>
              </div>

              <div>
                <p>
                  <span>Username:</span> {firstName} {lastName}
                </p>
                <p>
                  <span>Email:</span> {email}
                </p>
              </div>
              <div className="input_element">
                <p>
                  <span>Phone No:</span> {phone}
                </p>
              </div>
              <div className="input_element">
                <p>
                  <span>No. of seat:</span> 50
                </p>
                <p>
                  <span>Trans. Refrence:</span> {data.reference}
                </p>
                <p>
                  <span>Status</span> {data.status}
                </p>
                <p className="price">
                  <span>Amount:</span>₦{ticket.allTotalPrice.toLocaleString()}
                </p>
              </div>

              <p className="diclaimer">
                <span>Disclaimer:</span> Holder of this ticket voluntarily
                assumes all risks and danger incidental to any event for which
                this ticket is issued and waives all claims against the event
                sponsor, the owner of the facility, the ticket producer or
                issuer.
              </p>
            </TiketBody>
          </div>

          <button
            type="submit"
            onClick={() => {
              exportAsImage(componentRef.current, "test");
              localStorage.removeItem("itemList");
              localStorage.removeItem("allTotalPrice");
              localStorage.removeItem("totalQuantity");
              navigate("/");
            }}
          >
            Download Ticket now
          </button>
        </Tickets>
      )}
    </>
  );
}

export default Cart;

const Body = styled.div`
  height: 100%;
`;
// const Head = styled.div`
//   padding-top: 5rem;
//   width: 100%;
//   background: url(/img/bg11.jpeg);

//   height: 70vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   position: relative;
//   h1 {
//     font-size: 3rem;
//     text-align: center;
//     position: relative;
//     z-index: 10;
//   }

//   .overlay {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: #0000009b;
//   }
// `;

const MinDetail = styled.div`
  width: 100%;
  top: 25rem;
  height: 320px;

  z-index: 100;
  color: black;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  @media screen and (max-width: 900px) {
    height: 300px;
  }

  .box_body {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-top: 5rem;

    .item {
      width: 600px;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      background: rgba(186, 147, 147, 0.36);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(6.2px);
      -webkit-backdrop-filter: blur(6.2px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 10px;
      padding: 10px;
      color: white;

      @media screen and (max-width: 1200px) {
        width: 100%;
      }
      @media screen and (max-width: 900px) {
        height: 300px;
      }

      .left {
        display: flex;
        flex-direction: column;
        width: 200px;

        h2 {
          font-size: 2rem;
          padding: 5px 0;
          margin: 0;
          color: #f14105;
        }
        span {
          text-align: start;
          color: rgb(40, 38, 38);
          font-size: 0.8rem;
          padding: 5px 0;
          font-weight: 600;
        }

        p {
          margin: 0;
          padding: 0;
          font-size: 0.9rem;
          padding: 5px 0;
        }
      }
      .right {
        display: flex;
        flex-direction: column;
      }
      .iconn {
        font-size: 2rem;
        color: rgb(201, 201, 201);
        font-weight: 400;
      }
      h2 {
        font-size: 0.8rem;
      }
      p {
      }
    }
  }
`;

const Form = styled.form`
  margin: 0 auto;
  padding-top: 2rem;
  text-align: center;
  position: relative;
  width: 500px;
  height: 100%;

  @media screen and (max-width: 900px) {
    margin: 2rem 0;

    /* padding: ; */
    width: 100%;
  }

  h1 {
    font-size: 1.4rem;
    color: #002d80;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 220px;
      height: 2px;
      background: #f14105;
      top: 35px;
    }
  }

  .form__ {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 2rem;

    .input_element {
      display: flex;
      flex-direction: column;
      justify-items: flex-start;
      align-items: start;
      gap: 5px;

      label {
        font-size: 0.8rem;
      }

      input {
        width: 300px;
        height: 30px;
        outline: none;
        border-radius: 10px;
        background-color: #002d801d;
        border: none;
        border: 2.4px solid #002d803e;
        transition: 0.3s ease-in-out;

        &:focus {
          border: 2.4px solid #002d80;
        }
      }

      button {
        width: 300px;
        height: 30px;
        margin-bottom: 30px;
        outline: none;
        border: none;
        border-radius: 10px;
        background: #f14105;
        color: white;
        position: relative;
        transition: 0.3s;
        transform: scale(0.9);

        &:hover {
          transform: scale(1);
        }
      }
    }
  }
`;

const Tickets = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #000000a9;
  width: 100%;
  height: 100%;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 3rem;

  height: 100%;

  .ticket_body.active {
  }

  button {
    width: 300px;
    height: 40px;
    margin-bottom: 30px;
    outline: none;
    border: none;
    border-radius: 10px;
    background: white;
    color: #f14105;
    position: relative;
    transition: 0.3s;
    transform: scale(0.9);
    font-weight: 600;

    &:hover {
      transform: scale(1);
    }
  }
`;

const TiketBody = styled.div`
  width: 300px;
  height: 400px;
  background: #fff;
  border-radius: 15px;
  scroll-behavior: auto;
  transition: all 0.4s;
  transform: scale(1);
  /* padding: 10px 20px; */

  h1 {
    text-align: center;
    font-size: 32px;
    color: #ffffff;
    font-family: "Arial Black", Gadget, sans-serif;
    text-shadow: 0px 0px 0 rgb(206, 206, 206), 1px 1px 0 rgb(157, 157, 157),
      2px 2px 0 rgb(108, 108, 108), 3px 3px 2px rgba(0, 0, 0, 0.6),
      3px 3px 1px rgba(0, 0, 0, 0.5), 0px 0px 2px rgba(0, 0, 0, 0.2);
  }

  .ticket_head {
    text-align: center;
    display: flex;
    justify-items: center;
    flex-direction: column;
    gap: 5px;
    color: white;
    background: #f14105;
    max-width: 300px;
    padding-bottom: 5px;

    p,
    span,
    h1 {
      margin: 0;
      padding: 0;
      color: white;
      border: none;
    }
  }

  p {
    color: white;
    font-size: 0.63rem;
    color: black;
    border-bottom: 1px solid black;
    padding: 3px 10px;

    span {
      font-weight: 700;
    }
  }
  .price {
    background: #f14105;
    border: none;
    color: white;
    font-size: 1rem;
  }
  .diclaimer {
    font-size: 0.6rem;
    border: none;
    padding: 0 10px;
  }
`;
