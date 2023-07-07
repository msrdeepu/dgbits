import React from "react";

// imporrting the pages
// import LayoutAbout from '../components/Layout/LayoutAbout'
import PagesBanner from "../components/Layout/PagesBanner";
import Internform from "../components/Forms/Internform";

import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

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

const Careers = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <PagesBanner
        bgImg="https://png.pngtree.com/background/20210710/original/pngtree-blue-digital-technology-electronic-banner-picture-image_1033187.jpg"
        mainTitle="CAREERS AT DGBITS IN TIRUPATI"
        subtext="We’re always looking for new talent. If you feel you would be a good fit for our team, please contact us with your resume and information."
      />
      <Box
        sx={{
          flexGrow: 1,
          padding: { xs: "2px", md: "60px" },
          backgroundColor: "#F0F3F7",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <Typography variant="h5" color="#3e4555">
                WE ARE HIRING!
              </Typography>
              <br />
              <Typography variant="p" fontSize={"18px"}>
                We always welcome Innovative, Smart and Talented people to join
                our team. We will feel happy to work with people who think out
                of the box. We announce openings time to time. Interested
                candidates are requested to send their updated Resume. If we
                feel you meet our expectations, we will spare no time in
                reaching you. If all this sounds great, Please share us your
                resume now. We would be equally excited to have you on board!
              </Typography>
              <br />
              <br />
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        1. React Native Developer
                      </Typography>
                      <Typography sx={{ color: "text.secondary" }}>
                        Location(DGBITS, Tirupati)
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <b>Job Type :</b> Full Time Relevant
                      </Typography>
                      <Typography>
                        <b>Experience :</b> 1 year and above
                      </Typography>
                      <Typography>
                        <b>Requirement :</b> Immediate
                      </Typography>
                    </AccordionDetails>
                    <Box>
                      <Typography variant="h5">Job Description:</Typography>
                      <Typography variant="p">
                        We are looking for a React Native Developer interested
                        in building performing mobile apps on both the IOS and
                        Andriod platforms. You will be responsible for
                        architecting and building these applications, as well as
                        coordinating with the teams responsible for other layers
                        of the product infrastructure.
                      </Typography>{" "}
                      <br />
                      <Typography variant="h5">Responsibilities:</Typography>
                      <List
                        sx={{
                          width: "100%",

                          bgcolor: "background.paper",
                        }}
                      >
                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Write effective, scalable code" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Build Best UIs across both platforms" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Leverage native APIs for deep integrations" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Diagnose and fix bugs and performance bottlenecks for performance that brings native feel" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Working closely with UX and Front-end Developers" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Test and debug programs" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Improve functionality of existing systems" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Implement security and data protection solutions" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Assess and prioritize feature requests" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Designing and creating RESTful APIs for internal and partner consumption" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Transition existing React web apps to React Native Mobile & Web" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Coordinate with internal teams to understand user requirements and provide technical solutions" />
                        </ListItem>
                      </List>
                      <Typography variant="h5">
                        Requirements and Qualifications:
                      </Typography>
                      <List
                        sx={{
                          width: "100%",

                          bgcolor: "background.paper",
                        }}
                      >
                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Firm grasp of the JavaScript including ES6 Syntax" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Rock Solid at working with third-party dependencies and debugging dependency conflicts." />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Familiarity with native build tools, like Xcode, Gradle, Andriod Studio" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Understanding of REST APIs, the document request model, offline storage, cookies, redux state management, role based Authentication and authorization." />
                        </ListItem>
                      </List>
                    </Box>
                  </Accordion>

                  {/* second accordian */}
                  <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        3. PHP Laravel Fullstack Developer
                      </Typography>
                      <Typography sx={{ color: "text.secondary" }}>
                        Location (DGBITS, Tirupati)
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <b>Job Type :</b> Full Time Relevant
                      </Typography>
                      <Typography>
                        <b>Experience :</b> 1 year and above
                      </Typography>
                      <Typography>
                        <b>Requirement :</b> Immediate
                      </Typography>
                    </AccordionDetails>
                    <Box>
                      <Typography variant="h5">Job Description:</Typography>
                      <Typography variant="p">
                        Are you an highly experienced, ambitious Fullstack
                        developer looking for a challenging role where you can
                        learn lots more? We are looking for a motivated PHP -
                        Laravel developer to come join our agile team of
                        professionals. If you are passionate about technology,
                        constantly seeking to learn and improve skillset, then
                        you are the type of person we are looking for!
                      </Typography>{" "}
                      <br />
                      <Typography variant="h5">Responsibilities:</Typography>
                      <List
                        sx={{
                          width: "100%",

                          bgcolor: "background.paper",
                        }}
                      >
                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Develop, record and maintain cutting edge web-based PHP applications on portal plus premium service platforms" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Build innovative, state-of-the-art applications and collaborate with the User Experience (UX) team" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Ensure HTML, CSS, and shared JavaScript is valid and consistent across applications" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Prepare and maintain all applications utilizing standard development tools" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Utilize backend data services and contribute to increase existing data services API" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Lead the entire web application development life cycle right from concept stage to delivery and post launch support" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Convey effectively with all task progress, evaluations, suggestions, schedules along with technical and process issues" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Document the development process, architecture, and standard components" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Coordinate with co-developers and keeps project manager well informed of the status of development effort and serves as liaison between development staff and project manager" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Keep abreast of new trends and best practices in web development" />
                        </ListItem>
                      </List>
                      <Typography variant="h5">
                        Requirements and Qualifications:
                      </Typography>
                      <List
                        sx={{
                          width: "100%",

                          bgcolor: "background.paper",
                        }}
                      >
                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Previous working experience as a PHP - Laravel developer for 1 year" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="BS/MS degree in Computer Science, Engineering, MIS or similar relevant field" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="In depth knowledge of object-oriented PHP and Laravel Framework" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Hands on experience with SQL schema design, SOLID principles, REST API design" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Software testing (PHPUnit, PHPSpec, Behat)" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="MySQL profiling and query optimization" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Creative and efficient problem solver" />
                        </ListItem>
                      </List>
                    </Box>
                  </Accordion>

                  {/* third accordion */}
                  <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        3. Business Development Executives
                      </Typography>
                      <Typography sx={{ color: "text.secondary" }}>
                        Location (DGBITS, Tirupati)
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <b>Job Type :</b> Full Time Relevant
                      </Typography>
                      <Typography>
                        <b>Experience :</b> 1 year and above
                      </Typography>
                      <Typography>
                        <b>Requirement :</b> Immediate
                      </Typography>
                    </AccordionDetails>
                    <Box>
                      <Typography variant="h5">Job Description:</Typography>
                      <Typography variant="p">
                        We are looking for a Business Development Executive to
                        join our team. A successful candidate should have very
                        good understanding and knowledge in all aspects of
                        Webdesign, Web Development, UI/UX design process from
                        design research to prototyping. The candidate should
                        have an excellent communication skills.
                      </Typography>{" "}
                      <br />
                      <Typography variant="h5">Responsibilities:</Typography>
                      <List
                        sx={{
                          width: "100%",

                          bgcolor: "background.paper",
                        }}
                      >
                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Hand on in communication (verbal & written skills)" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Must have analytical skills and good at presentations" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Able to generate good business proposals" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Flexibility to work in odd working hours" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Pitching company’s services/ products" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Maintaining fruitful relationships with existing clients and identifying prospective clients" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Contacting potential clients via email or phone to establish rapport and set up meetings" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Planning and overseeing new marketing initiatives" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Attending conferences, meetings, and industry events" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Preparing PowerPoint presentations and sales displays" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Negotiating and re-negotiating by phone, email, and in person" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Develop and deliver social media brand strategies, campaigns, and plans to build awareness" />
                        </ListItem>
                      </List>
                      <Typography variant="h5">
                        Requirements and Qualifications:
                      </Typography>
                      <List
                        sx={{
                          width: "100%",

                          bgcolor: "background.paper",
                        }}
                      >
                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Good communication and interpersonal skills" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="In-depth knowledge of the industry and its current events" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Ability to handle pressure and meet deadlines" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Excellent time management and organization skills" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Strong presentation and negotiation skills" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Strong communication and interpersonal skills" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="Internet surfing on different browser" />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <KeyboardArrowRightIcon />
                          </ListItemAvatar>
                          <ListItemText primary="MS office package (Excel, word ,PowerPoint)" />
                        </ListItem>
                      </List>
                    </Box>
                  </Accordion>
                  <Typography sx={{ textAlign: "center", margin: "5px" }}>
                    Please send us your resume and any salary requirements to
                    &nbsp;
                    <Typography variant="span" sx={{ color: "#ff4d7e" }}>
                      support@dgbits.com &nbsp;
                    </Typography>{" "}
                    or use our Apply Now form.
                  </Typography>

                  <Grid item xs={12}>
                    <Internform />
                  </Grid>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Box>
      {/* <Bookdemocard maintext="Not sure what to select? Need a customized plan, you’d like to discuss?" /> */}
    </div>
  );
};

export default Careers;
