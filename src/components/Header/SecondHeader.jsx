import React from "react";
import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import Stack from "@mui/material/Stack";
import { Toolbar } from "@mui/material";

// import YouTubeIcon from "@mui/icons-material/YouTube";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import TwitterIcon from "@mui/icons-material/Twitter";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import EmailIcon from "@mui/icons-material/Email";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledComponent = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-around",
});

export default function SecondHeader() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledToolbar
      sx={{
        fontFamily: "Roboto",
        fontWeight: "100",
        color: "#727b84",
        borderBottom: "solid lightgray 1px",
      }}
    >
      <StyledToolbar
        sx={{ justifyContent: { xs: "center" }, alignItems: { xs: "center" } }}
      >
        <img
          src="https://dgbits.in/images/logo-dgbits.svg"
          alt=""
          height={65}
          className="img-item"
        />
      </StyledToolbar>
      <StyledComponent
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
        }}
      >
        <ArrowDropDownCircleIcon
          id="drop-basic-button"
          aria-controls={open ? "drop-basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        />
        <Menu
          id="drop-basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "drop-basic-button",
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleClose}>
            <PhoneCallbackIcon />
            <Typography>+91-8919818886</Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <EmailIcon />
            <Typography>support@dgbits.in</Typography>
          </MenuItem>
          {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
        </Menu>
      </StyledComponent>
      <StyledToolbar>
        {/* <PhoneCallbackIcon /> &nbsp;&nbsp; +91 8919818886 */}
      </StyledToolbar>
      <StyledToolbar
        sx={{
          display: { xs: "none", md: "block" },
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button
          sx={{ marginLeft: "4px", marginTop: "15px" }}
          variant="contained"
          startIcon={<PhoneCallbackIcon />}
        >
          <Typography>+91-8919818886</Typography>
        </Button>
        <Button
          sx={{ marginLeft: "4px", marginTop: "15px" }}
          variant="contained"
          startIcon={<EmailIcon />}
        >
          <Typography textTransform={"lowercase"}>support@dgbits.in</Typography>
        </Button>
      </StyledToolbar>
      {/* <StyledToolbar sx={{ display: { xs: "none", md: "block" } }}>
        <Typography variant="h6">+91 8919818886</Typography>
      </StyledToolbar> */}
    </StyledToolbar>
  );
}
