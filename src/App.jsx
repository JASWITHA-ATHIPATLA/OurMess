import { useContext, useState } from "react";
import "./App.css";
import FoodRating from "./components/FoodRating.jsx";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import ButtonSide from "./components/ButtonSide.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Calender from "./components/Calender.jsx";
import MessMenu from "./components/MessMenu.jsx";
import MainContent from "./components/MainContent.jsx";
import Login from "./components/Login.jsx";
import OredersTake from "./components/OredersTake.jsx";
import Location from "./components/Location.jsx";
import Discussions from "./components/Discussions.jsx";
import ThemeContext from "./components/Navbar.jsx";
import AINutritionAnalyst from "./components/AINutritionAnalyst.jsx";

const MainCotainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: #f9fafb;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Wrapper1 = styled.div`
  flex: 0.8;
`;
const Wrapper2 = styled.div`
  flex: 3;
`;
function Layout({ sideBarVisibility, setsideBarVisibility }) {
  return (
    <MainCotainer>
      <Navbar
        sideBarVisibility={sideBarVisibility}
        setsideBarVisibility={setsideBarVisibility}
      />
      <Wrapper>
        <Wrapper1 style={{ display: sideBarVisibility ? "block" : "none" }}>
          {sideBarVisibility && <ButtonSide />}
        </Wrapper1>
        <Wrapper2>
          <MainContent /> {/* MainContent now renders the <Outlet /> */}
        </Wrapper2>
      </Wrapper>
    </MainCotainer>
  );
}
function App() {
  const [sideBarVisibility, setsideBarVisibility] = useState(false);
  const DarkTheme = useContext(ThemeContext);
  return (
    <>
      <Routes>
        <Route path="Login" element={<Login />} />
        <Route
          path="/"
          element={
            <Layout
              sideBarVisibility={sideBarVisibility}
              setsideBarVisibility={setsideBarVisibility}
            />
          }
        >
          <Route index element={<h1>Welcome to OurMess!</h1>} />
          <Route path="Home" element={<Home />} />
          <Route path="Calender" element={<Calender />} />
          <Route path="MessMenu" element={<MessMenu />} />
          <Route path="OredersTake" element={<OredersTake />} />
          <Route path="FoodRating" element={<FoodRating />} />
          <Route path="Location" element={<Location />} />
          <Route path="Discussions" element={<Discussions />} />
          <Route path="AINutritionAnalyst" element={<AINutritionAnalyst />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
