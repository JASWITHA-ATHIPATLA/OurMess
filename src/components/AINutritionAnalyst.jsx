import React, { useState } from "react";
import styled from "styled-components";

/* ---------------- GEMINI API ---------------- */

const GEMINI_API_KEY = "AIzaSyCNdXxeC8j8nmyS-r7qPMbWhMDk_bcyptA";

const GEMINI_URL =
"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

/* ---------------- SAMPLE MENU DATA ---------------- */

const februaryMenu = {
  "Feb 1": {
    day: "Monday",
    breakfast: "Idli with sambar",
    lunch: "Rice, dal, vegetable curry",
    snacks: "Tea and biscuits",
    dinner: "Chapati with paneer curry"
  },

  "Feb 2": {
    day: "Tuesday",
    breakfast: "Dosa with chutney",
    lunch: "Rice, rasam, potato fry",
    snacks: "Samosa and tea",
    dinner: "Veg pulao with raita"
  },

  "Feb 3": {
    day: "Wednesday",
    breakfast: "Upma with coconut chutney",
    lunch: "Rice, sambar, cabbage curry",
    snacks: "Banana and tea",
    dinner: "Chapati with dal"
  }
};

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
box-shadow: 0 6px 15px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
text-align: center;
margin-bottom: 20px;
`;

const Meal = styled.div`
margin-bottom: 12px;
`;

const MealTitle = styled.h4`
margin: 0;
color: #f8ae25;
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
border-radius: 10px;
border: none;
background: #f8ae25;
color: white;
font-weight: bold;
cursor: pointer;

:hover {
background: #e39a0f;
}
`;

const AiResult = styled.div`
margin-top: 20px;
padding: 15px;
background: #f1f5f9;
border-left: 4px solid #f8ae25;
border-radius: 8px;
font-size: 14px;
`;

/* ---------------- COMPONENT ---------------- */

function AINutritionAnalyst() {

const todayKey = "Feb 1";   // change date if needed
const todayMenu = februaryMenu[todayKey];

const [aiText, setAiText] = useState("");
const [loading, setLoading] = useState(false);

const analyzeMenu = async () => {

if (!todayMenu) return;

setLoading(true);
setAiText("Analyzing menu...");

try {

const prompt = `
You are a nutrition expert.

Breakfast: ${todayMenu.breakfast}
Lunch: ${todayMenu.lunch}
Snacks: ${todayMenu.snacks}
Dinner: ${todayMenu.dinner}

Tell:
1. Overall health
2. Protein level
3. Calories level
4. One improvement tip

Keep answer short.
`;

const response = await fetch(
`${GEMINI_URL}?key=${GEMINI_API_KEY}`,
{
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
contents: [
{
parts: [{ text: prompt }]
}
]
})
}
);

const data = await response.json();

console.log(data);

const result =
data?.candidates?.[0]?.content?.parts?.[0]?.text ||
"AI response not available.";

setAiText(result);

} catch (error) {

console.error(error);
setAiText("Error connecting to Gemini API");

}

setLoading(false);

};

if (!todayMenu) {
return <p>No menu found.</p>;
}

return (

<Page>

<Card>

<Title>Today's Mess Menu ({todayKey})</Title>

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

<Button onClick={analyzeMenu}>
{loading ? "Analyzing..." : "Analyze Today's Meal"}
</Button>

{aiText && <AiResult>{aiText}</AiResult>}

</Card>

</Page>

);

}

export default AINutritionAnalyst;
