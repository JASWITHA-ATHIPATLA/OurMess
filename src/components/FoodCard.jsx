import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Axios from 'axios'
import { Link,useNavigate } from 'react-router-dom';
import Card from "./Card.jsx"

// fetch("https://foodish-api.com/api/").then((res)=>{res.json().then((data))})

function FoodCard({price}) {
 const [foodimg,setFoodImg]=useState();
 const [foodName,setFoodName]=useState();
 const cards=[]
  useEffect(()=>{
       const fetchData=async ()=>{
        try{const response=await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const data= await response.json();
        console.log(data);
        const meals=data.meals;
        const img=await meals[0].strMealThumb;
        setFoodImg(img);
        const food=meals[0].strMeal;
        await setFoodName(food.slice(0,18));

       }catch(error){
        console.error("Fetch error:", error);
       }}
       fetchData();
  },[])


  return (
  <>
      <Card price={price} foodimg={foodimg} foodName={foodName}/>
   </>
  )
}

export default FoodCard

