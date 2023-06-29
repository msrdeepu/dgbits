import React from "react";

// imporrting the pages
// import LayoutAbout from '../components/Layout/LayoutAbout'
import PagesBanner from "../components/Layout/PagesBanner";
import Bookdemocard from "../components/Layout/Bookdemocard";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Ourmethodology = () => {
  return (
    <div>
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
          DGBITS Comprehensive Development Procedures
        </Typography>
        <Typography
          variant="h6"
          sx={{
            maxWidth: { xs: "95%", md: "75%" },
            textAlign: "center",
            fontWeight: "300",
          }}
        >
          Goals without a plan are just a wish - We Meet your goals with the
          best use of our various Software Development methods. Choose the most
          suited option to fit your needs, within timelines & budget.
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
              Custom Software Development Methodology
            </Typography>
            <br />
            <Typography>
              Combining benefits of several standard development process models,
              we have devised a simple and easy to understand approach to custom
              software development. Our experts are well-versed in methodologies
              like Agile, Waterfall, Prototyping and Scrum.
              <br />
              <br />
              Our aim is to have a transparent and smooth manageable process
              that permits refinement, flexibility, and progress review after
              each phase.
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <img
              height={"330px"}
              src="https://dgbits.in/images/dgbits-images/md.png"
              alt=""
            />
          </Box>
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <img
            height={"330px"}
            src="https://dgbits.in/images/dgbits-images/md.png"
            alt=""
          />
        </Box>

        {/* secon section */}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: { xs: "130vh", md: "90vh" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "30px",
            height: "40vh",
            marginBottom: { xs: "", md: "55px" },
          }}
        >
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Application Maintenance Methodology
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: { xs: "95%", md: "75%" },
              textAlign: "center",
              fontWeight: "300",
              marginBottom: "15px",
              fontSize: { xs: "16px", md: "22px" },
            }}
          >
            Leverage our professional capabilities to maintain your obsolete
            technology systems in the right way! Reduce TCO, support costs and
            enhance your systems continuously with our services
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              marginTop: {
                xs: "",
                md: "40px",
              },
            }}
          >
            <Grid container spacing={2}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <Card
                  item
                  xs={12}
                  md={4}
                  sx={{
                    maxWidth: 345,
                    margin: "5px",
                    backgroundImage:
                      "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Production Support & Maintenanc
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <List>
                        <ListItemButton>
                          <ListItemIcon>
                            <ChevronRightIcon />
                          </ListItemIcon>
                          <ListItemText primary="Configuration Management" />
                        </ListItemButton>
                        <ListItemButton>
                          <ListItemIcon>
                            <ChevronRightIcon />
                          </ListItemIcon>
                          <ListItemText primary=" Server/Database Monitoring" />
                        </ListItemButton>
                        <ListItemButton>
                          <ListItemIcon>
                            <ChevronRightIcon />
                          </ListItemIcon>
                          <ListItemText primary="Schedule Maintenance Work" />
                        </ListItemButton>
                      </List>
                    </Typography>
                  </CardContent>
                </Card>
                <Card
                  item
                  xs={12}
                  md={4}
                  sx={{
                    maxWidth: 345,
                    margin: "5px",
                    backgroundImage:
                      "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)",
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Ad-Hoc Requests
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <List>
                        <ListItemButton>
                          <ListItemIcon>
                            <ChevronRightIcon />
                          </ListItemIcon>
                          <ListItemText primary="Issue Troubleshooting" />
                        </ListItemButton>
                        <ListItemButton>
                          <ListItemIcon>
                            <ChevronRightIcon />
                          </ListItemIcon>
                          <ListItemText primary="Improved Progress Tracking" />
                        </ListItemButton>
                        <ListItemButton>
                          <ListItemIcon>
                            <ChevronRightIcon />
                          </ListItemIcon>
                          <ListItemText primary="Bug Fixing & Reporting" />
                        </ListItemButton>
                      </List>
                    </Typography>
                  </CardContent>
                </Card>

                <Card
                  item
                  xs={12}
                  md={4}
                  sx={{
                    maxWidth: 345,
                    margin: "5px",
                    backgroundImage:
                      "linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)",
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Enhancement Requests
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <List>
                        <ListItemButton>
                          <ListItemIcon>
                            <ChevronRightIcon />
                          </ListItemIcon>
                          <ListItemText primary=" Change Requests" />
                        </ListItemButton>
                        <ListItemButton>
                          <ListItemIcon>
                            <ChevronRightIcon />
                          </ListItemIcon>
                          <ListItemText primary="Feature & Value Additions" />
                        </ListItemButton>
                        <ListItemButton>
                          <ListItemIcon>
                            <ChevronRightIcon />
                          </ListItemIcon>
                          <ListItemText primary="Performance Optimization" />
                        </ListItemButton>
                      </List>
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflowX: "scroll",
          height: "60vh",
        }}
      >
        <img
          sx={{ width: "100%", display: "inline-block", height: "auto" }}
          height={"100px"}
          src="https://dgbits.in/images/dgbits-images/01.png"
          alt=""
        />
        <img
          sx={{ width: "100%", display: "inline-block", height: "auto" }}
          height={"100px"}
          src="https://dgbits.in/images/dgbits-images/02.png"
          alt=""
        />
        <img
          sx={{ width: "100%", display: "inline-block", height: "auto" }}
          height={"100px"}
          src="https://dgbits.in/images/dgbits-images/03.png"
          alt=""
        />
      </Box>

      <Bookdemocard />
    </div>
  );
};

export default Ourmethodology;
