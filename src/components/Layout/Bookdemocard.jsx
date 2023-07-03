import React from "react";
// import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import SkipNextIcon from "@mui/icons-material/SkipNext";

const Bookdemocard = (props) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: { xs: "2px", md: "60px" },
        backgroundColor: "#F0F3F7",
      }}
    >
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column", padding: "8px" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              component="div"
              sx={{
                fontSize: { xs: "30px", md: "38px" },
                maxWidth: { xs: "auto", md: "75%" },
              }}
              variant="h4"
            >
              {props.maintext}
            </Typography>
            <br />
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              We welcome enquirers about our services, Please do call us :
              <Typography variant="span" color={"purple"} fontWeight={"bold"}>
                +91-89198-18886
              </Typography>
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <Button variant="contained">Book Demo</Button>
          </Box>
        </Box>
        <CardMedia
          component="img"
          height={"250px"}
          sx={{ width: { xs: "auto", md: "auto" } }}
          image="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_740,h_670/https://savvyhrms.com/wp-content/uploads/2023/05/hr-software-in-hydrabad.png"
          alt="Live from space album cover"
        />
      </Card>
    </Box>
  );
};

export default Bookdemocard;
