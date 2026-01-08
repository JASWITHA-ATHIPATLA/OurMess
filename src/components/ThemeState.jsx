import React,{useState} from "react";
import ThemeContext from "./ThemeContex";

const ThemeState=(props)=>{
 const [darkTheme,setdarkTheme]=useState(false);
 const toogleTheme=()=>{
  setdarkTheme(!darkTheme);
 }
 return <ThemeContext.Provider value={{darkTheme,toogleTheme}}>
     {props.children}
 </ThemeContext.Provider>
}
export default ThemeState;
