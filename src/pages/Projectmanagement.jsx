import React from "react";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListSubheader from "@mui/material/ListSubheader";

import PagesBanner from "../components/Layout/PagesBanner";
import Bookdemocard from "../components/Layout/Bookdemocard";

const Projectmanagement = () => {
  return (
    <Box>
      <PagesBanner
        bgImg="https://png.pngtree.com/background/20210710/original/pngtree-blue-digital-technology-electronic-banner-picture-image_1033187.jpg"
        mainTitle="PROFESSIONAL WEBSITE DESIGN AND SOFTWARE DEVELOPMENT"
        subtext="At DGBITS We are able to utilise our creative skills and technological know-how to build a personalised solution that will support your business now and in the future."
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
          height: "40vh",
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Better Choices Best Results
        </Typography>
        <Typography
          variant="h6"
          sx={{
            maxWidth: { xs: "95%", md: "75%" },
            textAlign: "center",
            fontWeight: "300",
          }}
        >
          Envision to make your choices simple with the right partner, approach,
          and management at your side to achieve desired results for your high
          profitability and efficiency
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
          backgroundImage: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "left",
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: "100%", md: "50%" },
              padding: { xs: "25px", md: "2px" },
            }}
          >
            <Typography variant="h5">
              Succeed Like A Leader with Project Management
            </Typography>
            <br />
            <Typography>
              What do business owners wish for ? That projects are completed
              faster, cheaper and better. Well, that is precisely what we offer.
              Don’t let your significant IT investments turn insignificant due
              to lack of planning and execution. Win the challenge of increasing
              your IT efficiency, reduced costs and that too within tight
              timelines.
              <br />
              <br />
              Get the right mixture of planning, monitoring and controlling that
              enables us to complete your projects on time, within budget and
              with superior quality of results.
              <br />
              <br />
              Transform your project wishes to reality with our vast experience
              of creating 100+ success stories with our best practices.
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <img
              height={"330px"}
              src="https://dgbits.in/images/dgbits-images/ps.png"
              alt=""
            />
          </Box>
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <img
            height={"330px"}
            src="https://dgbits.in/images/dgbits-images/ps.png"
            alt=""
          />
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "auto",
            backgroundColor: "#4158D0",
            backgroundImage:
              "linear-gradient(43deg, #4158D0 0%, #5250c8 46%, #22b1f3 100%)",
          }}
        >
          <Typography
            variant="h4"
            sx={{ padding: { xs: "20px", md: "20px" } }}
            textAlign={"center"}
            color={"#ffffff"}
          >
            Succeed Like A Leader with Project Management
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "left",
            }}
          >
            <Box
              sx={{
                maxWidth: { xs: "100%", md: "90%" },
                padding: { xs: "25px", md: "30px" },
                color: "#ffffff",
              }}
            >
              <List>
                <Typography variant="h6">
                  Transparent Process Practice
                </Typography>
                <ListItemButton>
                  <ListItemIcon>
                    <ChevronRightIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary=" Process dependent and people independent." />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <ChevronRightIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Ensures completion in pre-set time and budget." />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <ChevronRightIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Human error free judgement." />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <ChevronRightIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Delivery is in tandem with your objectives" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <ChevronRightIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Clear reporting at regular intervals" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <ChevronRightIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Schedule Maintenance Work" />
                </ListItemButton>
                <Typography variant="h6">
                  Retrospection and Reflection
                </Typography>
                <ListItemButton>
                  <ListItemIcon>
                    <ChevronRightIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Strong feedback mechanism." />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <ChevronRightIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Weekly and monthly review mechanism." />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <ChevronRightIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Analyze feedback and make amendments." />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <ChevronRightIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="All suggestions are acknowledged." />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <ChevronRightIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Enables improvement of process" />
                </ListItemButton>
              </List>
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <img
                height={"500px"}
                src="https://dgbits.in/images/dgbits-images/tec.png"
                alt=""
              />
            </Box>
          </Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <img
              height={"330px"}
              src="https://dgbits.in/images/dgbits-images/tec.png"
              alt=""
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "left",
            }}
          >
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <img
                height={"500px"}
                src="https://dgbits.in/images/pmbanner.svg"
                alt=""
              />
            </Box>
            <Box
              sx={{
                maxWidth: { xs: "100%", md: "90%" },
                padding: { xs: "25px", md: "30px" },
                color: "#ffffff",
              }}
            >
              <List>
                <Typography variant="h6">Methodical Communication</Typography>
                <ListItemButton>
                  <ListItemIcon>
                    <ChevronRightIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Proper understanding of audience and intent." />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <ChevronRightIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Apt Communication style." />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <ChevronRightIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Human error free judgement." />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <ChevronRightIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Enables streamlined and clear communication." />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <ChevronRightIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Proper set of protocols in place." />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <ChevronRightIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Right information access to the right person." />
                </ListItemButton>
                <Typography variant="h6">
                  Result and Timeline Orientation
                </Typography>
                <ListItemButton>
                  <ListItemIcon>
                    <ChevronRightIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Expert pool of resources." />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <ChevronRightIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="OOPS! You can't copy the text." />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <ChevronRightIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Wide experience in various industries." />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <ChevronRightIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Absolute no elongation of timelines." />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <ChevronRightIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Set expectations-get due results" />
                </ListItemButton>
              </List>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <img
              height={"330px"}
              src="https://dgbits.in/images/pmbanner.svg"
              alt=""
            />
          </Box>
        </Box>
      </Box>
      <Bookdemocard />
    </Box>
  );
};

export default Projectmanagement;
