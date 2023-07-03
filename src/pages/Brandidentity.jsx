import React from "react";
import PagesBanner from "../components/Layout/PagesBanner";
import Bookdemocard from "../components/Layout/Bookdemocard";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "justify",
  paddingTop: "30px",
  paddingLeft: "30px",
  paddingRight: "30px",
  color: theme.palette.text.secondary,
}));

const Brandidentity = () => {
  return (
    <div>
      <PagesBanner
        bgImg="https://png.pngtree.com/background/20210710/original/pngtree-blue-digital-technology-electronic-banner-picture-image_1033187.jpg"
        mainTitle="BRAND IDENTITY DESIGN"
        subtext="We offer consulting and design services to create a powerful user experience."
      />
      <Box
        sx={{
          flexGrow: 1,
          padding: { xs: "2px", md: "60px" },
          backgroundColor: "#F0F3F7",
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Item>
              <Typography variant="h5" color="#3e4555">
                Corporate Identity & Branding
              </Typography>
              <br />
              <Typography variant="p" fontSize={"18px"}>
                DGBITS Software Private Limited A brand is defined as the “name,
                term, design, symbol, or any other feature that identifies one
                seller’s goods or services as distinct from those of other
                sellers.” This means, your brand or corporate identity are the
                representation of your company's reputation through your
                company's attributes, values, purpose, strengths, passions, and
                products. It’s arguable that a brand is one of the most valuable
                assets a business can have. A Brand represents your company, and
                can have a large impact on your corporate identity. It’s
                important that you take creating your brand seriously, so it can
                properly represent your business. Before you attempt to define
                your brand, you have to define what you think your company is
                about. Great brands are easy to recognize. They have a clear
                mission, and can cultivate a devoted and loyal clientele if used
                properly. Nowadays, creating a brand identity has become
                mandatory to create an exclusive company profile. Promotional
                items such as logos, brochures, newsletters, catalogs, flyers
                are a few important medium that serve the best part in making an
                indirect connection with your customers. These marketing items
                have exceptional ability to develop a strong impact in the minds
                of your prospective clients. At DGBITS, we prefer to create a
                strong, distinct brand identity that generate an impact hard to
                forget.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={4}>
            {/* <ItemTwo> */}

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card sx={{ maxWidth: { xs: "95%", md: "345" } }}>
                <CardMedia
                  sx={{ height: 300 }}
                  image="https://dgbits.in/images/logos/26.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Branding & Identity Services
                  </Typography>
                  <List>
                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Corporate Identity & Branding" />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Profile & Brochure Design" />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Product Catalog Design" />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Marketing & Promotional Flyers" />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Newspaper & Magazine Ads" />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Signage, Stationary & Packaging" />
                    </ListItemButton>
                  </List>
                  <br />
                </CardContent>
              </Card>
            </Box>

            {/* </ItemTwo> */}
          </Grid>
        </Grid>
      </Box>
      <Bookdemocard maintext="Your Business is your Brand. Your Brand is Our Business" />
    </div>
  );
};

export default Brandidentity;
