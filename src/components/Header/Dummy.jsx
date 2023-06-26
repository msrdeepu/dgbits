import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-around",
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
