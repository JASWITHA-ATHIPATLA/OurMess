import { useState, useEffect } from "react";
import styled from "styled-components";
import img from "../assets/Afternoon-food.jpeg";
import { FaStar } from "react-icons/fa";
import FoodData from "./FoodData";
import "./FoodRating.css";

const MainContent = styled.div`
  width:50vw;
  height:auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vw;
  @media(max-width:768px){
  width:70vw;
  flex-direction: column;
}
`;
const Container = styled.div`
  width: 20em;
  height: 20em;
  margin-top: 3%;
  border: 2px solid black;
  border-radius: 5%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 2vw;
  @media (max-width: 768px) {
    width: 70%;
    height: auto;
  }
`;

const Wrap = styled.img`
  width: 80%;
  height: 50%;
  text-align: center;
  border-radius: 10%;
  overflow: hidden;
  border: 1px solid black;
`;
const OrderFood = styled.div`
  width: 90%;
  height: 10%;
  margin: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 2px;
`;

function FoodRating() {
  const [rating, setrating] = useState(() =>
  FoodData.map(() => 0)
);
  const starsArr = [1, 2, 3, 4, 5];
  const getStarRatings = (star) => {
    if (star > rating) return "star";

    // active stars
    if (rating <= 2) return "star red";
    if (rating === 3) return "star orange";
    if (rating > 4) return "star green";
    return "star yellow";
  };
  return (
    <>
      <MainContent>
        {FoodData.map((food, idx) => (
          <Container key={idx}>
            <h1>{food.item}</h1>
            <Wrap src={food.img} alt="Food order"></Wrap>
            <OrderFood>
              {starsArr.map((star) => (
                <FaStar
                  key={star}
                  cursor="pointer"
                  size={20}
                  className={getStarRatings(star)}
                  onClick={() =>{const updated = [...ratings];
            updated[idx] = star;
            setRatings(updated);}}
                />
              ))}
            </OrderFood>
          </Container>
        ))}
      </MainContent>
    </>
  );
}

export default FoodRating;
