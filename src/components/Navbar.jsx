import React, { useState, createContext } from "react";
import "./Navbar.css";
import { Menu, X, Sun, Moon } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Themecontext = createContext();
const Container = styled.div`
  width: 100%;
  height: 10vh;
  background-color: rgb(255, 170, 0);
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;
const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
const NavText = styled(Link)`
  margin: 0 18px;
  font-size: 18px;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: #fff;
  }
`;
const DiscordJoin = styled.button`
  width: 10vw;
  height: 70%;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-left: 0px;
  background-color: #fff3e0;
  overflow: hidden;
  &:hover {
    background-color: #eadbc8;
  }
`;
const Navbar = ({ sideBarVisibility, setsideBarVisibility }) => {

  const [darkTheme, setdarkTheme] = useState(false);
  function toogleTheme() {
    setdarkTheme((prevTheme) => !prevTheme);
  }

  return (
    <Container>
      <Themecontext.Provider value={{ darkTheme, toogleTheme }}>
      <ToggleButton onClick={() => setsideBarVisibility(!sideBarVisibility)}>
        {sideBarVisibility ? <X size={28} /> : <Menu size={28} />}
      </ToggleButton>
      <h2>Our Mess</h2>

      <NavText to="/FoodRating">Home</NavText>
      <NavText to="/Login">Login</NavText>


        <button
          style={{
            background: "orange",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={toogleTheme}
        >
          {darkTheme ? <Sun size={19} /> : <Moon size={19} />}
        </button>
      </Themecontext.Provider>

      <DiscordJoin
        onClick={() => {
          return window.open("https://discord.gg/TzhSUyfbyW", "_blank");
        }}
      >
        <FaDiscord size={34} color="rgba(8, 32, 216, 1)">
          Join
        </FaDiscord>
      </DiscordJoin>
    </Container>
  );
};

export default Navbar;
