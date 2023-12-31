import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Internshomepage = () => {
  return (
    <Grid container spacing={2}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          height: "65vh",
          alignItems: "center",
          width: "100%",

          flexWrap: "wrap",
        }}
      ></Box>
    </Grid>
  );
};

export default Internshomepage;
