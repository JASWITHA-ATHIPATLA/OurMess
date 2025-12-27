import { useState, useEffect } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import FoodData from "./FoodData";
import "./FoodRating.css";

/* ---------- Styled Components ---------- */

const MainContent = styled.div`
  width: 70vw;
  display: flex;
  justify-content: center;
  gap: 2vw;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 50vw;
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
    height: 50%;
  }
`;

const Wrap = styled.img`
  width: 80%;
  height: 50%;
  border-radius: 10%;
  border: 1px solid black;
`;

const OrderFood = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-evenly;
`;

/* ---------- Component ---------- */

function FoodRating() {
  // Load ratings from localStorage
  const [ratings, setRatings] = useState(() => {
    const saved = localStorage.getItem("foodRatings");
    return saved
      ? JSON.parse(saved)
      : FoodData.map(() => ({
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
        }));
  });

  // Save ratings to localStorage on change
  useEffect(() => {
    localStorage.setItem("foodRatings", JSON.stringify(ratings));
  }, [ratings]);

  // Handle rating click
  const handleRating = (foodIndex, star) => {
    const updated = [...ratings];
    updated[foodIndex][star] += 1;
    setRatings(updated);
  };

  // Find majority rating
  const getDominantRating = (ratingObj) => {
    let max = 0;
    let dominant = 0;

    for (let star in ratingObj) {
      if (ratingObj[star] > max) {
        max = ratingObj[star];
        dominant = Number(star);
      }
    }
    return dominant;
  };

  // Assign color
  const getStarClass = (star, dominantRating) => {
    if (star > dominantRating) return "star";
    if (dominantRating === 2) return "star red";
    if (dominantRating === 3) return "star orange";
    if (dominantRating === 4) return "star yellow";
    if (dominantRating === 5) return "star green";
    return "star";
  };

  return (
    <MainContent>
      {FoodData.map((food, idx) => {
        const dominantRating = getDominantRating(ratings[idx]);

        return (
          <Container key={food.id}>
            <h2>{food.item}</h2>
            <Wrap src={food.img} alt={food.item} />

            <OrderFood>
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  size={22}
                  cursor="pointer"
                  className={getStarClass(star, dominantRating)}
                  onClick={() => handleRating(idx, star)}
                />
              ))}
            </OrderFood>
          </Container>
        );
      })}
    </MainContent>
  );
}

export default FoodRating;
