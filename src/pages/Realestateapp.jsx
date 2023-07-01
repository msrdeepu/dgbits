import React from "react";

// imporrting the pages
// import LayoutAbout from '../components/Layout/LayoutAbout'
import PagesBanner from "../components/Layout/PagesBanner";
import Bookdemocard from "../components/Layout/Bookdemocard";

// material UI imports
import StoreIcon from "@mui/icons-material/Store";
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
import Person3Icon from "@mui/icons-material/Person3";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import PaymentIcon from "@mui/icons-material/Payment";

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

const Realestateapp = () => {
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
        mainTitle="A REAL ESTATE CRM & ERP SOFTWARE AND APP DEVELOPMENT SERVICES"
        subtext="To meet your specific real estate business requirements, we have a qualified and experienced team of real estate app developers in India. The significance of a good real estate web development service cannot be neglected, regardless of whether you are a large or small firm."
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
                CRM & ERP Modules:
              </Typography>
              <br />
              <Typography variant="p" fontSize={"18px"}>
                DGBITS offers you the most profitable real estate applications
                available. Our CRM platform for real estate agents allows them
                to manage properties, inquiries, customers, transactions, site
                visits, and more. This property management software's
                comprehensive dashboard puts you in complete control.
              </Typography>
              <br />
              <br />
              <Typography variant="p" fontSize={"18px"}>
                Mobile web and mobile apps are becoming increasingly popular in
                the real estate industry today. You can reach out to potential
                clients round the clock with real estate mobile applications,
                making it easier for them to contact you from anywhere. With
                real estate apps, Realtors and buyers can communicate in
                lightning fast, eliminating the need to find suitable
                properties, reach agents for price negotiations, and other
                stressful tasks. Realtors who incorporate mobile into their
                operations will see advantages. It is not surprising that most
                real estate developers are investing in the development of real
                estate apps to help with selling and as a marketing medium.
              </Typography>
              <br />
              <br />
              <Typography variant="p" fontSize={"18px"}>
                DGBITS Software Private Limited creates real estate applications
                that give businesses a competitive advantage. We create
                innovative solutions tailored to the needs of our customers by
                enhancing client experience, operational efficiency, and overall
                growth. We can design an app that is specific to your needs,
                whether you are an agent, developer, or rental agency.
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
                  <Typography>Application Features: </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {/* <List>
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
                  </List> */}
                  <Typography variant="h6">Property listing</Typography>

                  <Typography variant="p">
                    Real estate companies, property owners, and agents can list
                    properties in the platform under categories such as flat for
                    sale/rent, villa for sale/rent and others.
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="h6">Property details</Typography>

                  <Typography variant="p">
                    Users can view end-to-end details on properties such as the
                    number of rooms in a flat, the size of the land, nearest
                    landmark, and more.
                  </Typography>
                  <br />
                  <br />

                  <Typography variant="h6">Search & filter</Typography>

                  <Typography variant="p">
                    The powerful search lets users find the property as per
                    their requirements. To further enhance search results, the
                    user can activate filters.
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="h6">Property On Map</Typography>

                  <Typography variant="p">
                    Users looking to buy or rent a property can search for its
                    location using the advanced map integrated into the
                    application.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Admin Features</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {/* <List>
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
                  </List> */}
                  <Typography variant="h6">Manage agents</Typography>

                  <Typography variant="p">
                    With the well-crafted admin panel, manage agents registered
                    in your application, Track their property listings, check
                    the listing views and others.
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="h6">Manage earnings</Typography>

                  <Typography variant="p">
                    The admin can monitor and manage the agent earnings,
                    commissions, monthly incentives, and other sources
                    seamlessly.
                  </Typography>
                  <br />
                  <br />

                  <Typography variant="h6">Manage vendor</Typography>

                  <Typography variant="p">
                    The admin can monitor and manage real-estate vendors,
                    including their registration, their earnings, and others via
                    the cutting-edge panel.
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="h6">Manage Leads</Typography>

                  <Typography variant="p">
                    Admins can update leads on the latest offers on the property
                    they have shown an interest in, suggest similar offerings
                    and much more via notifications.
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="h6">Activity Tracking</Typography>

                  <Typography variant="p">
                    A sales-oriented feature, admin can gather & manage
                    buyer/customer/user information, property views, favorites,
                    and others to increase conversions.
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="h6">Manage project</Typography>

                  <Typography variant="p">
                    The real-estate company, agent, or broker can manage their
                    property listings such as updating the price, time of
                    delivery, and other details hassle-free.
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="h6">Reports</Typography>

                  <Typography variant="p">
                    The admin can download complete reports on platforms
                    functioning, user traffic, total earnings, and others.
                    Real-estate companies and agents can download reports with
                    regards to their listing.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Key Features</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Typography variant="span">
                      <b>Booking Management :</b>
                    </Typography>{" "}
                    Booking management lets you manage the entire booking
                    life-cycle - for real estate units such as buildings, land,
                    parking, etc - right from Allotment to Possession,
                    automatically calculate the Service tax & Taxes, generate
                    customer communication.
                  </Typography>
                  <List>
                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Track bookings" />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Collection Payment Schedules" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Outstanding Collection Tracking" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Allotment & Agreement Generation" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Transfer & Cancellations" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Service Tax & Interest Calculations" />
                    </ListItemButton>
                  </List>
                </AccordionDetails>

                <AccordionDetails>
                  <Typography>
                    <Typography variant="span">
                      <b>Purchase Management :</b>
                    </Typography>{" "}
                    This module is completely devoted to the Purchase department
                    of your organisation. Apart from managing your Indents,
                    Quotations & Purchase Orders
                  </Typography>
                  <List>
                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Supplier and Material Management" />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Indent, Quotation, Purchase Order" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Supplier Bills, Supplier Payouts" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Inventory, Issue, Return, Transfer" />
                    </ListItemButton>
                  </List>
                </AccordionDetails>

                <AccordionDetails>
                  <Typography>
                    <Typography variant="span">
                      <b>Business Management :</b>
                    </Typography>{" "}
                    Automate the entire engineering process and managing
                    budgets, issue work orders, & tracking contractor running
                    bills, get your contractor master report, budget variance
                    report, contractor advance statement, payment statements and
                    miscellaneous payment statements.
                  </Typography>
                  <List>
                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Define Work and Material Budgets" />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Create Contractors work orders" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Capture Contractor Running Bills" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Manage Contractor Pay-outs" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Plan activities using Gantt Chart" />
                    </ListItemButton>
                  </List>
                </AccordionDetails>
              </Accordion>
              <Box>
                <Carousel fade>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://dgbits.in/images/real/sln-web.png"
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
                      src="https://dgbits.in/images/real/ruby-web.png"
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
                      src="https://dgbits.in/images/real/ssls-web.png"
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
                      src="https://dgbits.in/images/real/suraksha-web.png"
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
                      src="https://dgbits.in/images/real/real-1.png"
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
                      src="https://dgbits.in/images/real/real-2.png"
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
                      src="https://dgbits.in/images/real/real-3.png"
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
                      src="https://dgbits.in/images/real/real-4.png"
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
                      src="https://dgbits.in/images/real/real-5.png"
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
                    Advanced Benifits
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Our real estate app development solutions help your
                    customers buy, sell, and rent properties seamlessly.
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
                    <Person3Icon />
                    Increased user engagement
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    The app serves global customers round the clock with updated
                    information on property. This helps improve user convenience
                    and provides them the right access to property solutions on
                    the go. The platform keeps customers engaged and ensures
                    higher conversion hassle-free.
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
                    <VerifiedUserIcon />
                    Better property visibility
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
                    <BrandingWatermarkIcon /> Better Branding
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The dedicated applications help real-estate developers
                    leverage the platform to increase their brand visibility
                    among users. They can showcase their presence in the
                    application comprising their project details, price, contact
                    information, previously delivered work and much more.
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
                    <ConnectWithoutContactIcon />
                    Improved coordination
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Our cutting-edge solutions help improve coordination between
                    developers and agents. This, in turn, will ensure better
                    decision making and result in leads and successful
                    conversions.
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
                    <StoreIcon />
                    Reliable marketing channel
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The app offers a direct marketing channel for businesses
                    with features such as push notifications, in-app messaging &
                    calling, live-chat, automated email, and much more.
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
                    <PaymentIcon />
                    Receive Online payments
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Presence of new-gen popular payment gateways and easy
                    additions of new ones as per the business requirements to
                    enhance the user experience and boost operational
                    efficiency.
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

export default Realestateapp;
