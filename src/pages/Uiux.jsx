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

const Uiux = () => {
  return (
    <div>
      <PagesBanner
        bgImg="https://png.pngtree.com/background/20210710/original/pngtree-blue-digital-technology-electronic-banner-picture-image_1033187.jpg"
        mainTitle="UX (USER EXPERIENCE) & UI (USER INTERFACE)"
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
                UX (User experience) & UI (User interface) Services
              </Typography>
              <br />
              <Typography variant="p" fontSize={"18px"}>
                There are huge number of websites on internet of which only a
                few websites are a favorite for the online users. And what makes
                these sites so appealing to users is the UI and UX design. UX
                (User experience) is the deciding factor between a good and bad
                website. Users want a website that is easy to navigate and
                explore information.
              </Typography>
              <br />
              <br />
              <Typography variant="p" fontSize={"18px"}>
                DGBITS is an awesome web and mobile app design and development
                services company in Tirupati, India. DGBITS specialized in
                creating user-centered UI design. We adopt meticulous and
                structured process right from blueprints, wireframes, prototypes
                and design page mockups to infuse life into great designs.
              </Typography>
              <br />
              <br />
              <Typography variant="p" fontSize={"18px"}>
                At DGBITS, we incorporate user experience (UX) design and
                development activities at every stage of your product cycle with
                the main aim of improving end-user experience as it has profound
                impact on your business. We create uniquely branded user
                interfaces that truly represent your brand without compromising
                application usability. We have expertise in all the latest web
                designing tools
              </Typography>
              <br />
              <br />

              <Typography variant="p" fontSize={"18px"}>
                DGBITS Newletter & email marketing experts take your existing
                customer lists and craft messaging that improves your brand
                image. Unlike other competitors our approach is unique, For
                every E-mail or Newsletter Message we give you bespoken content
                that connect users to your business.
              </Typography>
              <br />
              <br />
              <div className="text-center">
                <img src="https://dgbits.in/images/product-cycle.jpg" alt="" />
              </div>
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
                  sx={{ height: 350 }}
                  image="https://dgbits.in/images/ux-ui.jpeg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Our UX/UI Capabilities
                  </Typography>
                  <List>
                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="User Research and Evaluation" />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Visual design" />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Personas & User Surveys" />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Screen Flow Diagrams & Maps" />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Mind maps & Heat maps" />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Information Architecture" />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Wireframes & Mockups" />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Clickable prototype" />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="User journey or user flow" />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="UI style guides & Accessibility" />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="User Experience Design for Web" />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="UX Design for Mobile Apps" />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Usability Audit" />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Conversion Rate Optimization" />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Testing and Validation" />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="UX/UI Consulting Services" />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Research skills and analytics" />
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
      <Bookdemocard maintext="Clever websites, applications that fuel business." />
    </div>
  );
};

export default Uiux;
