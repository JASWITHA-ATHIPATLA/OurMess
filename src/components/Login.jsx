import React from 'react'
import { useState } from "react";
import "./Login.css";

function Login() {
  
  function HandleName(e) { 
    const message = document.querySelector(".message");  
    message.innerHTML="";
    const value = e.target.value;
    console.log(value);
    if (value.length <= 8) {
      message.innerHTML = "Invalid Name!Enter Full Name";
    } else if (value.length >= 20) {
      message.innerHTML = "Invalid Name!Name must be less 21 characters";
    } 
  }
  function HandlePassword(e) {
    const message = document.querySelector(".message");
    let pass = e.target.value;
    var lowercase = /[a-z]/g;
    var uppercase = /[A-Z]/g;
    var number = /[0-9]/g;
    if (
      !pass.match(lowercase) ||
      !pass.match(uppercase) ||
      !pass.match(number) ||
      pass.length < 8
    ) {
      message.innerHTML = "Invalid Password!";
    } else if (pass.length > 15) {
      message.innerHTML =
        "Invalid Password!Password must be less 15 characters";
    } else {
      message.innerHTML = "";
    }
  }
  function HandleRegNum(e){
    const message = document.querySelector(".message");
    let RegNum=e.target.value;
    if(RegNum.length==0){
      message.innerHTML="Fill Registration Number";
    }
    else if(RegNum.length>9){
      message.innerHTML ="Invalid Registration Number";
    }
    else {
    message.innerHTML = "";
  }
  }
  return (
    <>
      <div className="form">
        <form action="">
          <fieldset>
            <legend>User Registration</legend>
            <input
              type="text"
              className="Name"
              onChange={HandleName}
              placeholder="Enter UserName"
              required
            />
            <br />
            <input
              type="text"
              className="RegNum"
              onChange={HandleRegNum}
              placeholder="Enter Registration Number"
              required
            />
            <br />
            <input
              type="email"
              className="Email"
              placeholder="Enter Email"
              required
            />
            <br />
            <input
              type="password"
              className="Password"
              onChange={HandlePassword}
              placeholder="Enter Password"
              required
            />
            <br />
            <input
              type="submit"
              className="Submit"
              
              value="Submit"
            />
            <div className="message"></div>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default Login
