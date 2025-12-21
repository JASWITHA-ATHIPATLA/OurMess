import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import FoodData from "./FoodData";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
function Home(){
  const [showCards,setCards]=useState(false);

  useEffect(()=>{
   setTimeout(()=>{
    setCards(true);   
   },1000);
  },[])
  const Cards=[];
  return (
    <div style={{textAlign:"center"}}>
      <br/>
      <br/>
      <br/>
      
      {showCards == true ?<CardWrapper>
      {/* <input type="text" className="searchFood" placeholder="Search Food"/> */}
      {/* {FoodCard.map((value) => (
        <FoodCard3
          key={value.id}
          name={value.item}
          price={value.price}
        />
      ))} */}
      {FoodData.map((value)=>{
        return (
           <FoodCard price={value.price}/>
        )
      })}
      </CardWrapper>:<h1>{"loding please wait ..."}</h1>}
    </div>
  );
};
export default Home;
