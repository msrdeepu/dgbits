import React from "react";

// imporrting the pages
// import LayoutAbout from '../components/Layout/LayoutAbout'
import PagesBanner from "../components/Layout/PagesBanner";
import Bookdemocard from "../components/Layout/Bookdemocard";

// material UI imports
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";

// bootstrap imports
import { Carousel } from "react-bootstrap";

const steps = [
  {
    label: "Technology Stack",
    description: (
      <List>
        <Typography>
          Choosing the right technology can always help you improve the overall
          efficiency of your matrimony application. Followings are some crucial
          technologies that you may take into consideration when developing an
          application:
        </Typography>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary="Web Application" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary="Mobile – Android (Extra Cost for mobile app )" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary="Payments Instamojo / Razorpay etc." />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary="Real-time Analytics Google Tagging etc." />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary="Download Profile in Word Format" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary="Total activity Tracking from admin dashboard" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary="Twak.to Chat integration" />
        </ListItemButton>
      </List>
    ),
  },
  {
    label: "User Features",
    description: (
      <List>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary=" Login" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary="Profile Verification" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary=" Create Partner Profile" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary=" Set Compatibility Preferences" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary=" Upload & Resize Pictures" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary="Quick Contacts" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary=" User Analytics Activity Tracking" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary=" Add Horoscope on request" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary="Browse Profiles" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary="Advanced Searches" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary=" Express Interest" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary="Check Horoscope of Selected Profile" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary=" View Success Stories" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary=" Notification/Alerts" />
        </ListItemButton>
      </List>
    ),
  },
  {
    label: "Admin Features",
    description: (
      <List>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary="Customer Profile Verification" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary="Manage Profile" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary="Manage Transaction" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary="Agent Login" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary="Agent Activity Tracking" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary="Admin Activity Tracking" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary="Real Time Dashboard" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary="Manage Success Stories" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary="Upload & Resize Pictures" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary="Manage Membership Packages" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary="Manage Promotional Banners" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary="Customized Search / Priority Search" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary="Payment gateway instamojo / Razor Pay" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary="Manage Notifications" />
        </ListItemButton>
      </List>
    ),
  },
];

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

const Matrimonialapp = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <PagesBanner
        bgImg="https://png.pngtree.com/background/20210710/original/pngtree-blue-digital-technology-electronic-banner-picture-image_1033187.jpg"
        mainTitle="MATRIMONIAL SOFTWARE AND APP DEVELOPMENT SERVICES"
        subtext="Anyone can find all the necessary information about the match that has excited his or her interest by using matrimonial apps. With every detail of the potential match at their fingertips, making a decision will be easier than ever."
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
                Get Start your Matrimonial App in a week:
              </Typography>
              <br />
              <Typography variant="p" fontSize={"18px"}>
                People nowadays prefer to find their life partner through online
                platforms because they are too busy with their jobs and cannot
                travel with their parents to find a suitable partner for
                marriage. Alternatively, parents may need to hire matchmakers to
                find a suitable partner for their children. DGBITS SOFTWARE
                PRIVATE LTD is a leading marriage / matrimony website
                Development Company in TIRUPATI, India. DGBITS has developed the
                ideal internet platform for matrimonial agencies to go online in
                a matter of weeks. Our matrimony web publishing tools and
                integrated administration panel provide website owners with
                faster access and flexibility.
              </Typography>
              <br />
              <br />
              <Typography variant="p" fontSize={"18px"}>
                Our Matrimonial Software is a full-featured, ready-to-implement
                system that allows you to create the desired design for your app
                while utilising the powerful functionality provided by our
                matrimony software. It’s easy and very affordable price to start
                and manage it in the long term, and we have build many custom
                Matrimonial websites in TIRUPATI.
              </Typography>
              <br />
              <br />
              <Typography variant="p" fontSize={"18px"}>
                Matrimonal Application Comes With a Content Management System,
                though Which Admin Can Control the Membership packages Pages &
                Discount Coupons, Payments much more..
              </Typography>
              <br />
              <br />
              <br />
              <br />

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Matrimonial Application Features</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Give free and paid registration and limit access to profiles." />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Special Login section and mobile app for members to manage membership and view matching profiles." />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary=" Accept online payment and convert free profiles to paid instantly." />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Send auto reminder emails to renew memberships and get notifications." />
                    </ListItemButton>
                  </List>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Matrimonial Application Features</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    By creating a matrimonial app, you can help your viewers
                    find their match quickly by registering in the app and
                    filling out a profile creation form. As a result, the app
                    will begin to function and display matching profiles to app
                    users. There are numerous significant advantages to having
                    such apps developed, such as:
                  </Typography>
                  <List>
                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="You can use the app to make it simple and convenient for your customers to find partners within their caste and community." />
                    </ListItemButton>
                  </List>
                  <ListItemButton>
                    <ListItemIcon>
                      <ChevronRightIcon />
                    </ListItemIcon>
                    <ListItemText primary=" A mobile app will attract a larger audience because it will allow them to browse multiple profiles at the same time." />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <ChevronRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Privacy & security of the profiles can be discovered with a feature-rich mobile app." />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <ChevronRightIcon />
                    </ListItemIcon>
                    <ListItemText primary=" Applications are an excellent source of advertising and marketing." />
                  </ListItemButton>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    Advanced Features for Matrimonial Mobile App
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Typography variant="span" sx={{ fontWeight: "bold" }}>
                      Add pictures from phone :{" "}
                    </Typography>
                    This feature allows users to upload photos directly from
                    their phone to share with persons who are interested in
                    their profile.
                  </Typography>
                  <br />
                  <br />
                  <Typography>
                    <Typography variant="span" sx={{ fontWeight: "bold" }}>
                      Location Based Search :{" "}
                    </Typography>
                    This is also a useful feature to allow users to find the
                    matches nearby their location.
                  </Typography>
                  <br />
                  <br />
                  <Typography>
                    <Typography variant="span" sx={{ fontWeight: "bold" }}>
                      Save profiles as Favorite :{" "}
                    </Typography>
                    This feature help user to save their favorite profiles which
                    they are interested in to open next time when they open the
                    app.
                  </Typography>
                  <br />
                  <br />
                  <Typography>
                    <Typography variant="span" sx={{ fontWeight: "bold" }}>
                      Payment Gateway :{" "}
                    </Typography>
                    The integration of this feature helps peoples to find the
                    appropriate payment option to purchase the membership within
                    the app.
                  </Typography>
                  <br />
                  <br />
                  <Typography>
                    <Typography variant="span" sx={{ fontWeight: "bold" }}>
                      Search and Filter :{" "}
                    </Typography>
                    With ‘search and filter’, you can help the users search for
                    their prospective matches as per their personal preferences
                    and requisites.
                  </Typography>
                  <br />
                  <br />
                  <Typography>
                    <Typography variant="span" sx={{ fontWeight: "bold" }}>
                      User Blocking Feature :{" "}
                    </Typography>
                    The user-blocking feature is important because it allows the
                    users to block the other user profiles that will try their
                    patience with unnecessary nuisances.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Box>
                <Carousel fade>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://dgbits.in/images/mat/slider1.jpg"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      {/* <h3>First slide label</h3>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p> */}
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://dgbits.in/images/mat/slider2.jpg"
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      {/* <h3>Second slide label</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p> */}
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://dgbits.in/images/mat/slider3.jpg"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      {/* <h3>Third slide label</h3>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p> */}
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://dgbits.in/images/mat/slider4.jpg"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      {/* <h3>First slide label</h3>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p> */}
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://dgbits.in/images/mat/slider5.jpg"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      {/* <h3>First slide label</h3>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p> */}
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
                <br />
                <br />
              </Box>
              {/* Stepper */}
              <Box sx={{ maxWidth: 400 }}>
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((step, index) => (
                    <Step key={step.label}>
                      <StepLabel
                        optional={
                          index === 2 ? (
                            <Typography variant="caption">
                              Its Amazing
                            </Typography>
                          ) : null
                        }
                      >
                        {step.label}
                      </StepLabel>
                      <StepContent>
                        <Typography>{step.description}</Typography>
                        <Box sx={{ mb: 2 }}>
                          <div>
                            <Button
                              variant="contained"
                              onClick={handleNext}
                              sx={{ mt: 1, mr: 1 }}
                            >
                              {index === steps.length - 1 ? "Done" : "Continue"}
                            </Button>
                            <Button
                              disabled={index === 0}
                              onClick={handleBack}
                              sx={{ mt: 1, mr: 1 }}
                            >
                              Back
                            </Button>
                          </div>
                        </Box>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
                {activeStep === steps.length && (
                  <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>You can see the Featue&apos;s Again</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                      Read again
                    </Button>
                  </Paper>
                )}
              </Box>
              {/* stepper */}
              {/* <br />
              <Typography variant="h5" color="#3e4555">
                Corporate Branding :
              </Typography> */}
              <br />

              {/* <Typography variant="p" fontSize={"18px"}>
                A brand is the promise, the idea, and the expectations that
                settle in the customer’s mind about a product, service, or
                company. Branding is the process by which you go about
                developing a brand. We design and develop brand awareness and
                recognition though a visual identity system that is easy to
                remember and immediately recognizable.
              </Typography>
              <br />
              <br />
              <Typography variant="h5" color="#3e4555">
                Quality Analysts and Testing :
              </Typography>
              <br />
              <Typography variant="p" fontSize={"18px"}>
                Our Testing team is equipped with industries best testing tools
                and QA strategies. Our experts have got Bird’s eye to catch and
                kill the software bugs, or any security loop hole in your
                desktop based or web application.Our wide range of software and
                website quality testing services includes: Thorough Regression
                and Functional testing- GUI and Usability testing through manual
                - feedback systems- Accessibility testing- Load testing- User
                Acceptance Testing- Security Testing Now a day’s various
                websites & applications are being compromised due to security
                loop holes or due to in secured web hosting servers. People are
                loosing access to their important data and sometimes loosing the
                whole website. If you are also going through such challenges
                then Just get in touch with us +91 89198 18886
              </Typography>
              <br />
              <br />
              <Typography variant="h5" color="#3e4555">
                Application Design & Maintenance :
              </Typography>
              <br />
              <Typography variant="p" fontSize={"18px"}>
                DGBITS offers Mobile & Web Application Development, Ecommerce
                Development, custom portal, software development, B2B / B2C
                Applications, Custom Application, CMS, CRMS, ERPs, POS &
                Inventory Applications using open source Development. We build
                robust database driven web applications and scalable e-commerce
                solutions.If you are looking for dedicated team of developers or
                want to get your ideas converted to real valuable business
                application get in touch with us +91 89198 18886.
              </Typography>
              <br />
              <br />
              <Typography variant="h5" color="#3e4555">
                WEBSITE DESIGN & WEB APPLICATION DEVELOPMENT
              </Typography>
              <br />
              <Typography variant="p" fontSize={"18px"}>
                Thanks to modern web technologies we create amazing web
                applications and websites. From small invoice POS applications
                to large public online services. We use the latest Javascript
                frameworks on the frontends (React / Vue / Angular) and we rely
                on cloud & edge services for scalable backends (PHP/Laravel,
                Python/Django, Node.js, Deno.js you name it)
              </Typography>
              <br />
              <br />
              <Typography variant="h5" color="#3e4555">
                MOBILE APP DEVELOPMENT
              </Typography>
              <br />
              <Typography variant="p" fontSize={"18px"}>
                The mobile market is changing very fast. We develop Native Apps
                Android, IOS & Hybrid Apps using IONIC & React Native. Also we
                build mobile back-ends, admin dashboards and we provide
                integration and maintenance. Using the latest mobile
                technologies, we can deliver top quality applications in record
                time.
              </Typography>
              <br />
              <br />
              <Typography variant="h5" color="#3e4555">
                DIGITAL MARKETING SERVICES
              </Typography>
              <br />
              <Typography variant="p" fontSize={"18px"}>
                The services offered by DGBITS is not limited to just Mobile &
                Web App development, Website design and web maintenance but also
                offers other valuable services, such as SEO, Social Media
                Promotions, Corporate Branding, Graphic Design, Ecommerce / POS
                Related Solutions, Corporate Presentations, Logo Design,
                Business Video Presentations, Online & Offline Advertisement
                design and much more.
              </Typography> */}
              <br />
              <br />
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
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://dgbits.in/images/login-ma.png"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      {/* <h3>First slide label</h3>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p> */}
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://dgbits.in/images/login-ma1.png"
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      {/* <h3>Second slide label</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p> */}
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://dgbits.in/images/login-ma2.png"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      {/* <h3>Third slide label</h3>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p> */}
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://dgbits.in/images/login-ma3.png"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      {/* <h3>Third slide label</h3>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p> */}
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://dgbits.in/images/login-ma4.png"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      {/* <h3>Third slide label</h3>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p> */}
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Hello
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>

              <Card
                sx={{
                  maxWidth: { xs: "95%", md: "345" },
                  marginTop: { xs: "15px", md: "5px" },
                }}
              >
                <CardMedia
                  sx={{ height: 200 }}
                  image="https://www.shutterstock.com/image-vector/fixed-price-rubber-stamp-red-260nw-1743458237.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>

              <Card
                sx={{
                  maxWidth: { xs: "95%", md: "345" },
                  marginTop: { xs: "15px", md: "5px" },
                }}
              >
                <CardMedia
                  sx={{ height: 200 }}
                  image="https://www.imaginarycloud.com/blog/content/images/2022/02/Untitled-design--14-.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>

              <Card
                sx={{
                  maxWidth: { xs: "95%", md: "345" },
                  marginTop: { xs: "15px", md: "5px" },
                }}
              >
                <CardMedia
                  sx={{ height: 200 }}
                  image="https://png.pngtree.com/png-clipart/20201208/original/pngtree-modern-design-we-are-hiring-to-join-work-team-in-geometric-png-image_5502563.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            {/* </ItemTwo> */}
          </Grid>
        </Grid>
      </Box>
      <Bookdemocard />
    </div>
  );
};

export default Matrimonialapp;
