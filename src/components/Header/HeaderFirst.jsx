import React from "react";
import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import Stack from "@mui/material/Stack";
import { Toolbar } from "@mui/material";

import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

function HeaderOne() {
  return (
    <StyledToolbar
      sx={{
        fontFamily: "Roboto",
        fontWeight: "100",
        color: "#727b84",
        borderBottom: { xs: "none", md: "solid lightgray 1px" },
        justifyContent: { xs: "space-between", md: "space-between" },
      }}
    >
      <Typography variant="h6" sx={{ display: { xs: "none", md: "block" } }}>
        Leading Digital Transformation - DGBITS
      </Typography>
      <Typography variant="h6" sx={{ display: { xs: "block", md: "none" } }}>
        DGBITS
      </Typography>
      <StyledToolbar>
        <LocationOnIcon color="error" />
        <Typography variant="h6" sx={{ display: { xs: "none", md: "block" } }}>
          Tirupati, AP, INDIA
        </Typography>
      </StyledToolbar>
      <StyledToolbar sx={{ gap: 3 }}>
        <YouTubeIcon />
        <FacebookIcon />
        <LinkedInIcon />
        <TwitterIcon />
      </StyledToolbar>
    </StyledToolbar>
  );
}

export default HeaderOne;
