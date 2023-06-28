import React from "react";

// import { Maintitle } from './styledLayout';
import { Typography } from "@mui/material";
import Box from "@mui/material";

export default function PagesBanner(props) {
  return (
    <section
      style={{
        backgroundImage: `url(${props.bgImg})`,
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "48vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundPosition: "center center",
      }}
    >
      <Typography
        variant={"h3"}
        sx={{
          color: "white",
          padding: "8px",
          transform: "uppercase",
          width: { xs: "95%", md: "70%" },
          fontFamily: "Roboto",
          fontSize: { xs: "22px", md: "40px" },
        }}
      >
        {props.mainTitle}
      </Typography>
      <Typography
        variant="p"
        sx={{
          color: "#8d97ad",
          padding: "8px",
          width: { xs: "95%", md: "60%" },
          fontFamily: "Roboto",
          // fontSize:{xs:"22px",md:"40px"}
        }}
      >
        {props.subtext}
      </Typography>
    </section>
  );
}
