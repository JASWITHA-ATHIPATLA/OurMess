import React from "react";
import styled from "styled-components";
import { februaryMenu } from "./MenuData.jsx";

/* ---------- STYLES ---------- */

const Container = styled.div`
  width: 77vw;
  min-height: 90vh;
  background-color: black;
  color: orange;
  padding: 16px;

    @media (max-width: 900px) {
    width:60vw;
   }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 18px;
`;

/* ---------- GRID ---------- */

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  width: 90%;
  margin: auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const MealCard = styled.div`
  border: 2px solid orange;
  border-radius: 12px;
  padding: 14px;
  background-color: #111;
  box-shadow: 0 0 8px rgba(255, 165, 0, 0.4);
`;

const MealTitle = styled.h4`
  margin-bottom: 8px;
  text-align: center;
  color: #ffd27d;
`;

/* ---------- COMPONENT ---------- */

const MessMenu = () => {
  const today = new Date();
  const month = today.toLocaleString("en-US", { month: "short" });
  const date = today.getDate();
  const todayKey = `${month} ${date}`;

  const todayMenu = februaryMenu[todayKey];

  if (!todayMenu) {
    return (
      <Container>
        <Title>No menu available for today</Title>
      </Container>
    );
  }

  return (
    <Container>
      <Title>
        🍽️ Today’s Mess Menu – {todayKey} ({todayMenu.day})
      </Title>

      <CardsGrid>
        <MealCard>
          <MealTitle>🍳 Breakfast</MealTitle>
          <p>{todayMenu.breakfast}</p>
        </MealCard>

        <MealCard>
          <MealTitle>🍛 Lunch</MealTitle>
          <p>{todayMenu.lunch}</p>
        </MealCard>

        <MealCard>
          <MealTitle>☕ Snacks</MealTitle>
          <p>{todayMenu.snacks}</p>
        </MealCard>

        <MealCard>
          <MealTitle>🍽️ Dinner</MealTitle>
          <p>{todayMenu.dinner}</p>
        </MealCard>
      </CardsGrid>
    </Container>
  );
};

export default MessMenu;
