import React from "react";
import styled from "styled-components";

function Button(props) {
  return (
    <Body onClick={props.click}>
  <span className="name">{props.ticket}</span>
      <span className="material-symbols-outlined">confirmation_number</span>
    </Body>
  );
}

export default Button;

const Body = styled.button`
  width: 150px;
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

  &:hover{
    background-color: #dc3545;
  }

  .name{
    font-size: 0.8rem;
    color: white;
  }

  .material-symbols-outlined{
    color: white;
  }
`;
