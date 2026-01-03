import { useState, useEffect } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import FoodData from "./FoodData";
import "./FoodRating.css";

/* ---------- Styled Components ---------- */

const MainContent = styled.div`
  width: 70vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Container = styled.div`
  width: 17em;
  height: 22em;
  margin-top: 3%;
  border: 2px solid #333;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Wrap = styled.img`
  width: 80%;
  height: 50%;
  border-radius: 10%;
  border: 1px solid #ccc;
  object-fit: cover;
`;

const OrderFood = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-evenly;
`;

/* ---------- Component ---------- */

function FoodRating() {

  /* 1️⃣ State Initialization (Safe + Persistent) */
  const [ratings, setRatings] = useState(() => {
    const saved = localStorage.getItem("foodRatings");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return {};
      }
    }
    return {};
  });

  /* 2️⃣ Persist Ratings */
  useEffect(() => {
    localStorage.setItem("foodRatings", JSON.stringify(ratings));
  }, [ratings]);

  /* 3️⃣ Handle Star Click (CRASH-PROOF) */
  const handleRating = (foodId, star) => {
    setRatings((prev) => {
      const safeFoodRatings =
        prev[foodId] ?? { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

      return {
        ...prev,
        [foodId]: {
          ...safeFoodRatings,
          [star]: safeFoodRatings[star] + 1,
        },
      };
    });
  };

  /* 4️⃣ Get Dominant Rating */
  const getDominantRating = (ratingObj) => {
    if (!ratingObj) return 0;

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

  /* 5️⃣ Color Logic */
  const getStarClass = (star, dominant) => {
    if (star > dominant) return "star";
    if (dominant === 1 || dominant === 2) return "star red";
    if (dominant === 3) return "star orange";
    if (dominant === 4) return "star yellow";
    if (dominant === 5) return "star green";
    return "star";
  };

  /* ---------- UI ---------- */

  return (
    <MainContent>
    <h1></h1>
      {FoodData.map((food) => {
        const foodRatingData =
          ratings[food.id] ?? { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

        const dominantRating = getDominantRating(foodRatingData);
        const date=new Date();
        return (
          <Container key={food.id}>
            <h2>{food.item}</h2>
            <Wrap src={food.img} alt={food.item} />
            <h3>{date.toLocaleDateString()}</h3>
            <OrderFood>
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  size={26}
                  className={getStarClass(star, dominantRating)}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleRating(food.id, star)}
                />
              ))}
            </OrderFood>

            <p>Popular Vote: {dominantRating} Stars</p>
          </Container>
        );
      })}
    </MainContent>
  );
}

export default FoodRating;
