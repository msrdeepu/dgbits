import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

const Bookdemocard = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: { xs: "2px", md: "60px" },
        backgroundColor: "#F0F3F7",
      }}
    >
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              component="div"
              sx={{ fontSize: { xs: "30px" } }}
              variant="h4"
            >
              DGBITS is the best technology partner to createa and deliver your
              awesome website!
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Mac Miller
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: { xs: "200", md: "300" } }}
          image="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_740,h_670/https://savvyhrms.com/wp-content/uploads/2023/05/hr-software-in-hydrabad.png"
          alt="Live from space album cover"
        />
      </Card>
    </Box>
  );
};

export default Bookdemocard;
