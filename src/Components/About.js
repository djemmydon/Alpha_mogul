import React  from "react";
import styled from "styled-components";


function About() {

  return (
    <Body>
      <header >About The Event</header>

      <p >
        IT Conference is a two-day, single-track, conference about anything and
        everything. Its main purpose is to provide a stage for IT developers to
        share experiences and innovations with the local IT community.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, ratione
        nostrum atque nobis debitis doloremque. Fugit, officia laudantium
        repellat assumenda eligendi vel sed dolore delectus. Vitae sequi cum
        doloribus veniam.
      </p>
     
      
    </Body>
  );
}

export default About;

const Body = styled.div`
  margin: 0 auto ;
  margin-top: 12rem;
  text-align: center;
  /* From https://css.glass */
background: rgba(255, 255, 255, 0.36);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(6.2px);
-webkit-backdrop-filter: blur(6.2px);
border: 1px solid rgba(255, 255, 255, 0.3);
display:flex;
flex-direction: column;
align-content: center;
justify-content: center;
  width: 500px;
  height:300px;

  @media screen and (max-width: 900px) {
    margin: 0rem 0;
    margin-top: 36rem;
    /* padding: ; */
    width: 100%;
  }

  p {
    color: black;
    font-size: 0.9rem;
    font-weight: 400;
  }
`;
