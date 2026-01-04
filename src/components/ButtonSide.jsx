import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import { Link} from "react-router-dom";
import Home from "./Home";
import Calender from "./Calender.jsx";
import MessMenu from "./MessMenu.jsx"

const Container = styled.div`
  width: 20vw;
  height: 100vh;
  background-color: white;
  @media(max-width:768px){
   width:30vw;
   height:100%;
 }
`;

const SideWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: cream;
  gap:2vh;
  flex-direction:column;
`;

const SideButtons = styled(Link)`
 width: 80%;
 height:5vh;
 margin-top:2vh;
 margin-left:5vh;
 padding:1vh;
 text-decoration: none;
 text-align:center;
 font-size: 1.5vw;
 border-radius: 12px;
 color:black;
 background-color:#f0f0f0;
 transition: background-color 0.3s ease;
 @media(max-width:768px){
 margin-left:0px;
  background-color:white;
 font-size:5vw;
 }
 &:hover {
  background-color: rgb(255, 170, 0);
  color:blue;
  cursor:pointer;
 }
`;

function Sidebar() {
  return (
    <Container>
      <SideWrapper>
        <SideButtons to="/Home">Order</SideButtons>
        <SideButtons to="/MessMenu">Mess Menu</SideButtons>
        <SideButtons to="/Calender">Calender</SideButtons>
        <SideButtons to="/Location">Location</SideButtons>
        <SideButtons to="/FoodRating">MessRatings</SideButtons>
        <SideButtons to="/Discussions">Discussions</SideButtons>
        <SideButtons to="/AINutritionAnalyst">AI Nutrition Analyst</SideButtons>
      </SideWrapper>
    </Container>
  );
}
export default Sidebar;
