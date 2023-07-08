import React from "react";
import Box from "@mui/material/Box";

// imnages
import sliderimage1 from "../images/sliderimages/slider-1.jpg";
import sliderimage2 from "../images/sliderimages/slider-2.jpg";
import sliderimage3 from "../images/sliderimages/slider-3.jpg";

// slider
import Homeslider from "../components/Sliders/Homeslider";
// components
import Internshomepage from "../components/Layout/Internshomepage";

const Home = () => {
  return (
    <Box>
      <Homeslider
        slideimg1={sliderimage1}
        slideimg2={sliderimage2}
        slideimg3={sliderimage3}
      />
      <Internshomepage />
    </Box>
  );
};

export default Home;
