import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Body>
      <header>About The Event</header>

      <p>
        The undisputed kreatives fest is the first of it's kind in the city of
        ibadan. Th is event encourages creative minds to use fashion, dance,
        music, drama, graphics and entertainment to express creativity
      </p>
    </Body>
  );
}

export default About;

const Body = styled.div`
  margin: 0 auto;
  margin-top: 5rem;
  text-align: center;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.36);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.2px);
  -webkit-backdrop-filter: blur(6.2px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 500px;
  height: 250px;

  @media screen and (max-width: 900px) {
    margin: 0rem 0;
    margin-top: 2rem;
    /* padding: ; */
    width: 100%;
  }

  p {
    color: black;
    font-size: 0.9rem;
    font-weight: 400;
  }
`;
