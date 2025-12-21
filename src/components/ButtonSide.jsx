import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import { Link} from "react-router-dom";
import Home from "./Home";
import Calender from "./Calender.jsx";
import MessMenu from "./MessMenu.jsx"

const Container = styled.div`
  width: 30vw;
  height: 100%;
  background-color: white;
`;

const SideWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: cream;
  gap:3vh;
  flex-direction:column;
`;

const SideButtons = styled(Link)`
 width: 90%;
 height:5vh;
 margin-top:2vh;
 padding:1vh;
 text-decoration: none;
 text-align:center;
 font-size: 1.5vw;
 border-radius: 12px;
 color: black;
 transition: background-color 0.3s ease;
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
        <SideButtons to="/">Location</SideButtons>
        <SideButtons to="/">Notices</SideButtons>
        <SideButtons to="/">Discussions</SideButtons>
      </SideWrapper>
    </Container>
  );
}
export default Sidebar;
