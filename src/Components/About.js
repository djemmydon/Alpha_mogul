import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Body>
      <header>About The Event</header>

      <p>
      The undisputed kreatives festival(TUK FEST.)  provides a platform for creative minds to showcase  their skills and talents.
Activities lined up for TUK festival include fashion pop up, dance, music, drama, stand up comedy, art and craft exhibition, corporate social networking and lots more.
      </p>
    </Body>
  );
}

export default About;

const Body = styled.div`
  margin: 0 auto;
  margin-top: 0rem;
  text-align: center;
  /* From https://css.glass */
  /* border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.2px);
  -webkit-backdrop-filter: blur(6.2px);
  border: 1px solid rgba(255, 255, 255, 0.3); */
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 500px;
  height: 250px;

  @media screen and (max-width: 900px) {
    margin: 0rem 0;

   top: 24rem;
    width: 100%;
  color: white;
  /* background: rgba(255, 255, 255, 0.36); */
  border-radius: 0px;

  }
  @media screen and (max-width: 500px) {
    margin-bottom: 5rem;
 
 
    width: 100%;
  color: white;
  /* background: rgba(255, 255, 255, 0.36); */

  }

  p {
    color: white;
    font-size: 0.8rem;
    font-weight: 400;
  }
`;
