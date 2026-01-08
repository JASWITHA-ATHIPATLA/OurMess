import React,{useContext,useState} from "react";
import styled from "styled-components";
import BFB_Menu from "../assets/BFB_Menu.jpeg";
import ThemeContext from "./ThemeContex";
const Container=styled.div`
  width:100%,
  height:100vh,
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
}`;
const PlaceOrder = styled.div`
  margin: 2rem auto;
  padding: 2rem;
  width: 90%;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    /* Mobile */
  @media (max-width: 600px) {
    width: 80%;
    margin-right:10px;
    padding: 1rem;
    gap: 0.8rem;
  }
`;

const Header = styled.h2`
  text-align: center;
  font-weight: bold;
`;

const Card = styled.img`
  height: 30%;
  width: 100%;
  object-fit: contain;
  border-radius: 10px;
  border: 2px solid black;
`;

const Contact = styled.h3`
  text-align: center;
  font-size: 1rem;
`;

function OredersTake() {
  const Theme=useContext(ThemeContext);
  return (<Container onClick={() => Theme.toogleTheme()}  style={{backgroundColor:Theme.darkTheme?"#333" : "#f9f9f9"}}>
    <PlaceOrder >
      {console.log(Theme.darkTheme)}
      <Header>Best Food at Lower Cost -OurMess</Header>
      <Card src={BFB_Menu} alt="Breakfast Menu" />
      <Contact>
        To order please contact:
        <br />
        📞 <strong>8523814248</strong>
      </Contact>
    </PlaceOrder>
  </Container>
  );
}

export default OredersTake;
