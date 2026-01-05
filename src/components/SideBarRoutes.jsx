import React from 'react'
import Home from "./components/Home.jsx";
import Calender from "./components/Calender.jsx";
import MessMenu from "./components/MessMenu.jsx";
import Location from './Location.jsx';
function SideBarRoutes() {
  return (<Route>
          <Route index element={<h1>Welcome to OurMess!</h1>}/>
          <Route path="Home" element={<Home />} />
          <Route path="Calender" element={<Calender />} />
          <Route path="MessMenu" element={<MessMenu />} />
          <Route path="Location" element={<Location />} />
          {/* <Route path="*" element={ <Home/>} /> */}
  </Route>
  )
}

export default SideBarRoutes