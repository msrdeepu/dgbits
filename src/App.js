import React from "react";
import Box from "@mui/material/Box";
import HeaderOne from "./components/Header/HeaderFirst";
import SecondHeader from "./components/Header/SecondHeader";
import Navbar from "./components/Header/Navbar";

import Dummy from "./components/Header/Dummy";

function App() {
  return (
    <Box>
      <HeaderOne />
      <SecondHeader />
      <Navbar />
      <Dummy />
    </Box>
  );
}

export default App;
