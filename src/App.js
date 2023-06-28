import React from "react";
import Box from "@mui/material/Box";
import HeaderOne from "./components/Header/HeaderFirst";
import SecondHeader from "./components/Header/SecondHeader";
import Navbar from "./components/Header/Navbar";

import Dummy from "./components/Header/Dummy";

// pages imports
import About from "./pages/About";
import Whydgbits from "./pages/Whydgbits";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <HeaderOne />
        <SecondHeader />
        <Navbar />
        <Dummy />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/why-dgbits" element={<Whydgbits />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
