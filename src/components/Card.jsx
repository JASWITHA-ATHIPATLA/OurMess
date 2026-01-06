import { useEffect, useState } from "react";
import OredersTake from './OredersTake';
import styled from "styled-components";
import { Link,useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 15em;
  height: 20em;
  margin-top: 3%;
  border:2px solid black;
  border-radius: 5%;
  overflow:hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-left:2vw;
  @media(max-width:768px){
  width:70%;
  height:auto;
  }
`;

const Wrap=styled.img`
 text-align:center;
 border-radius:10%;
 width:80%;
 height:50%;
 overflow:hidden;
 border:2px solid black;
`
const OrderFood=styled.button`
   width:8em;
   height:4vh;
   background-color:gold;
   font-size:0.5em;
   border-radius:1vh;
   margin-bottom:5px;
   &:hover{
   background-color:black;
   color:white;
   }
`
const Price=styled.div`
width:100%;
height:5vh;
font-size:1.2em;
text-align:center;
`
// const PlaceOrder=styled(Link)`
//  width:70%;
//  height:100%;
//  background-color:blue;
// `
function Card(props,{price}){
 
      const navigate = useNavigate();
      const handleOrder = () => {
    navigate("/OredersTake");
  };
  return (
    <div>
      <Container>
      <h1>{props.foodName}</h1>
      <Wrap src={props.foodimg} alt="Food order"></Wrap>
      <Price>{price}</Price>
      <OrderFood onClick={handleOrder}>Order</OrderFood>
        </Container>
    </div>
  )
}

export default Card