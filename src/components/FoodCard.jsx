import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";
import Card from "./Card.jsx";

function FoodCard({ price }) {
  const [foodDataArr, setFoodDataArr] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        for (let i = 0; i < 12; i++) {
          const response = await fetch(
            "https://www.themealdb.com/api/json/v1/1/random.php"
          );
          const data = await response.json();
          const meals = data.meals;
          // console.log(meals);
          setFoodDataArr((prev) => [...prev, ...meals]);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {foodDataArr.map((meal, index) => (
        <Card
          key={index}
          price={price || "₹199"}
          foodimg={meal.strMealThumb}
          foodName={meal.strMeal?.slice(0, 18)}
        />
      ))}
    </>
  );
}

export default FoodCard;
