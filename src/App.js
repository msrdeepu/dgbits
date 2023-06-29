import React from "react";
import Box from "@mui/material/Box";
import HeaderOne from "./components/Header/HeaderFirst";
import SecondHeader from "./components/Header/SecondHeader";
// import Navbar from "./components/Header/Navbar";

// pages imports
import About from "./pages/About";
import Whydgbits from "./pages/Whydgbits";
import Ourmethodology from "./pages/Ourmethodology";
import Projectmanagement from "./pages/Projectmanagement";

import Dummy from "./components/Header/Dummy";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <HeaderOne />
        <SecondHeader />
        <Dummy />
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/about/why-dgbits" element={<Whydgbits />} />
          <Route
            exact
            path="/about/our-methodology"
            element={<Ourmethodology />}
          />
          <Route
            exact
            path="/about/project-management"
            element={<Projectmanagement />}
          />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
