import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";

import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
});

export default function Dummy() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Link to="/about">
            <Typography
              padding={5}
              variant="h6"
              color="inherit"
              component="div"
            >
              About Us
            </Typography>
          </Link>

          <Link to="/why-dgbits">
            <Typography
              padding={5}
              variant="h6"
              color="inherit"
              component="div"
            >
              Why DGBITS?
            </Typography>
          </Link>

          <Typography variant="h6" color="inherit" component="div">
            Our Methodology
          </Typography>

          <Typography variant="h6" color="inherit" component="div">
            Project Management
          </Typography>

          <Typography variant="h6" color="inherit" component="div">
            DGBITS Matrimonial App
          </Typography>

          <Typography variant="h6" color="inherit" component="div">
            DGBITS Realestate App
          </Typography>

          <Typography padding={5} variant="h6" color="inherit" component="div">
            DGBITS Swift CRM
          </Typography>
          <Typography variant="h6" color="inherit" component="div">
            DGBITS Modular CMS
          </Typography>
          <Typography variant="h6" color="inherit" component="div">
            Website Design
          </Typography>
          <Typography variant="h6" color="inherit" component="div">
            Web applications
          </Typography>
          <Typography variant="h6" color="inherit" component="div">
            Mobile Apps
          </Typography>
          <Typography variant="h6" color="inherit" component="div">
            UI/UX for Apps
          </Typography>
          <Typography variant="h6" color="inherit" component="div">
            Branding & Identity
          </Typography>
        </StyledToolbar>
      </AppBar>
      <AppBar position="static">
        <StyledToolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>

          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>

          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>

          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>

          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>

          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>

          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
