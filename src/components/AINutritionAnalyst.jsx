import React, { useState } from "react";
import styled from "styled-components";
import { februaryMenu } from "./MenuData.jsx";

/* ---------------- GEMINI API ---------------- */
const GEMINI_API_KEY = "PUT_YOUR_KEY_HERE";
const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

/* ---------------- STYLED COMPONENTS ---------------- */

const Page = styled.div`
  min-height: 100vh;
  background: #f4f6f8;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
`;

const Card = styled.div`
  max-width: 800px;
  margin: auto;
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 15px;
  text-align: center;
`;

const Meal = styled.div`
  margin-bottom: 12px;
`;

const MealTitle = styled.h4`
  margin: 0;
  color: #f6c34e;
`;

const MealText = styled.p`
  margin: 4px 0 0;
  color: #444;
  font-size: 14px;
`;

const Button = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  border-radius: 12px;
  border: none;
  background: #f8ae25;
  color: white;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #ebac0f;
  }
`;

const AiResult = styled.div`
  margin-top: 15px;
  padding: 15px;
  background: #f1f5f9;
  border-left: 4px solid rgba(235, 159, 37, 1);
  border-radius: 8px;
  font-size: 14px;
`;

/* ---------------- COMPONENT ---------------- */

function AINutritionAnalyst() {
  // ✅ build today's key based on date
  const todayDate = new Date().getDate();
  const todayKey = `Feb ${todayDate}`;

  const todayMenu = februaryMenu[todayKey];

  const [aiText, setAiText] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeFebruaryMenu = async () => {
    if (!todayMenu) return;

    setLoading(true);
    setAiText("Analyzing today's menu...");

    try {
      const payload = {
        contents: [
          {
            parts: [
              {
                text: `You are a nutrition expert.

Breakfast: ${todayMenu.breakfast}
Lunch: ${todayMenu.lunch}
Snacks: ${todayMenu.snacks}
Dinner: ${todayMenu.dinner}

Tell:
1) Overall health
2) Protein level
3) Calories level
4) One improvement tip.

Keep answer short.`
              }
            ]
          }
        ]
      };

      const response = await fetch(
        `${GEMINI_URL}?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        }
      );

      const data = await response.json();

      setAiText(
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
          "No response received."
      );
    } catch (error) {
      setAiText("Error connecting to Gemini API.");
    }

    setLoading(false);
  };

  if (!todayMenu) return <p>No menu found for today.</p>;

  return (
    <Page>
      <Card>
        <Title>
          Today's Mess Menu ({todayKey} - {todayMenu.day})
        </Title>

        <Meal>
          <MealTitle>Breakfast</MealTitle>
          <MealText>{todayMenu.breakfast}</MealText>
        </Meal>

        <Meal>
          <MealTitle>Lunch</MealTitle>
          <MealText>{todayMenu.lunch}</MealText>
        </Meal>

        <Meal>
          <MealTitle>Snacks</MealTitle>
          <MealText>{todayMenu.snacks}</MealText>
        </Meal>

        <Meal>
          <MealTitle>Dinner</MealTitle>
          <MealText>{todayMenu.dinner}</MealText>
        </Meal>

        <Button onClick={analyzeFebruaryMenu}>
          {loading ? "Analyzing..." : "Analyze Today's Meal"}
        </Button>

        {aiText && <AiResult>{aiText}</AiResult>}
      </Card>
    </Page>
  );
}

export default AINutritionAnalyst;
