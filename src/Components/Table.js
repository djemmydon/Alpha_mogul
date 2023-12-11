import {
  collection,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../fire";
import BounceLoader from "react-spinners/BounceLoader";
function Table() {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "booking"));

    const unsuscribe = onSnapshot(q, (querySnapshot) => {
      let arr = [];
      querySnapshot.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });
      setBooking(arr);
    });
    return () => unsuscribe;
  }, []);

  const toggleComplete = async (item) => {
    await updateDoc(doc(db, "booking", item.id), {
      complete: !item.complete,
    });
  };

  console.log(booking);
  return (
    <Body>
      <div className="Header">
        <h1>Books</h1>{" "}
      </div>
      {!booking.length ? (
        <div className="loading">
          <BounceLoader color="white" />
        </div>
      ) : (
        <div className="t_body">
          <table>
            <thead>
              <tr>
                <th>User Name</th>
                <th>Email</th>
                <th>Phone No.</th>
                <th>No. Seats</th>
                <th>Trans. Reference</th>
                <th>Amount</th>
                <th>Status</th>
                <td>Completed</td>
              </tr>
            </thead>

            <tbody>
              <>
                {booking.map((item) => (
                  <tr key={item.id} className={item.complete ? "checked" : ""}>
                    <td>
                      {item.firstName} {item.lastName}
                    </td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.seat}</td>
                    <td>{item.ref}</td>
                    <td>{item?.amount?.toLocaleString()}</td>
                    <td>{item.status ? `Is Paid` : `Not Paid`}</td>
                    <td>
                      <input
                        onChange={() => toggleComplete(item)}
                        type="checkbox"
                        checked={item.complete ? "checked" : ""}
                      />
                    </td>
                  </tr>
                ))}
              </>
            </tbody>
          </table>
        </div>
      )}
    </Body>
  );
}

export default Table;

const Body = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
  height: 100vh;
  font-family: "Montserrat", sans-serif;
  overflow: hidden;

  .Header {
    display: flex;
    justify-content: center;
  }
  h1 {
    text-align: center;
    font-size: 1.4rem;
    color: #fff;
    position: relative;
    margin-bottom: 2rem;
    border-bottom: #f14105 2px solid;
  }
  .t_body {
    width: 100%;
    overflow-x: scroll;

    table {
      width: 100%;
      user-select: none;
      font-size: 0.8rem;
      border-collapse: collapse;
      font-family: "Montserrat", sans-serif;

      overflow-x: scroll;

      thead {
        background-color: red;
        color: white;
        border-radius: 10px;
      }

      thead tr th {
        padding: 10px 13px;
        font-weight: 300;
        white-space: nowrap;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;

        @media screen and (max-width: 500px) {
          padding: 3px 3px;
          font-size: 0.6rem;
        }
      }
    }
    tbody {
      border-radius: 10px;
    }

    tbody tr td {
      padding: 10px 10px;
      font-weight: 300;
      white-space: nowrap;
      background-color: white;
      border: 1px solid red;
      transition: 0.6s;
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      @media screen and (max-width: 500px) {
        padding: 5px 5px;
        font-size: 0.6rem;
      }
    }
    .checked {
      text-decoration: line-through;
      font-weight: 600;
    }
  }

  .loading {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
