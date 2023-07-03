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
// import CardMedia from "@mui/material/CardMedia";
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

import ContactsIcon from "@mui/icons-material/Contacts";
import DescriptionIcon from "@mui/icons-material/Description";
import SummarizeIcon from "@mui/icons-material/Summarize";
import RememberMeIcon from "@mui/icons-material/RememberMe";
import PeopleIcon from "@mui/icons-material/People";

// bootstrap imports

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

const Swiftcrm = () => {
  return (
    <div>
      <PagesBanner
        bgImg="https://png.pngtree.com/background/20210710/original/pngtree-blue-digital-technology-electronic-banner-picture-image_1033187.jpg"
        mainTitle="SWIFTCRM"
        subtext="Easily Mange your Project estimates & Invoice with SwiftCRM along your common CRM activities such as( Managing Projects, Tasks, Tickets, Employees, Business Leads)"
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
                Manage and organize your contacts in one powerful, easy-to-use
                database
              </Typography>
              <br />
              <Typography variant="p" fontSize={"18px"}>
                Stacks of business cards? Spreadsheets that aren't in order?
                Unorganized LinkedIn connections? Stop managing your
                relationships in silos. SwiftCRM is simple to learn and allows
                you to track every detail of your business relationships in one
                place. Manage your entire sales pipeline as well as organise and
                respond to all customer support issues with the same tool,
                including Quick Estimates and detailed Invoices with Payment
                Gateway.
              </Typography>
              <br />
              <br />
              <Typography variant="h5" color="#3e4555">
                What is CRM?
              </Typography>
              <br />
              <Typography variant="p" fontSize={"18px"}>
                CRM stands for customer relationship management. This technology
                is used by any size firm or organisation, large or small, to
                support and maintain client connections. CRM technology may
                improve all elements of the customer lifecycle, including
                marketing, sales, commerce, support, and IT. B2B companies use
                it in a range of areas, including high tech, manufacturing,
                financial services, healthcare, and others. It is also used by
                B2C companies in consumer goods and retail.
              </Typography>
              <br />
              <br />
              <Typography variant="p" fontSize={"18px"}>
                A CRM system enables businesses to manage customer and prospect
                relationships through the use of data. Customer and prospect
                information, such as contact and account information, sales
                opportunities, service cases, and marketing campaigns, can be
                stored, tracked, and analysed in a single location.
                Organizations with data in one central location have a complete
                picture of customers and prospects that can be shared and
                analysed in real time by teams across the company.
              </Typography>
              <br />
              <br />
              <Typography variant="p" fontSize={"18px"}>
                Connect with SwiftCRM to convert visitors in real time using
                live chat, and use chatbots to scale your one-on-one chat
                conversations. With free form tools that convert visitors into
                qualified leads, you can attract more visitors to your site and
                grow your database. SwiftCRM will automatically organise,
                enrich, and track each contact in a short period of time.
              </Typography>
              <br />
              <br />
              <Typography variant="p" fontSize={"18px"}>
                Using SwiftCRM to handle contacts and sales activities will
                enhance win rates by 76%, sales productivity by 66%, and revenue
                by 70%. Find out how SwiftCRM is dedicated to your success.
                Discover how we can support your growth by helping you attract,
                retain, and win consumers.
              </Typography>
              <br />
              <br />

              <Box>
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
                      <List>
                        <ListItemButton>
                          <ListItemIcon>
                            <ChevronRightIcon />
                          </ListItemIcon>
                          <ListItemText primary="Schedule Calls and Meetings" />
                        </ListItemButton>

                        <ListItemButton>
                          <ListItemIcon>
                            <ChevronRightIcon />
                          </ListItemIcon>
                          <ListItemText primary="Create tasks for Companies/Contacts" />
                        </ListItemButton>

                        <ListItemButton>
                          <ListItemIcon>
                            <ChevronRightIcon />
                          </ListItemIcon>
                          <ListItemText primary="Add multiple contacts" />
                        </ListItemButton>

                        <ListItemButton>
                          <ListItemIcon>
                            <ChevronRightIcon />
                          </ListItemIcon>
                          <ListItemText primary="Add multiple companies" />
                        </ListItemButton>

                        <ListItemButton>
                          <ListItemIcon>
                            <ChevronRightIcon />
                          </ListItemIcon>
                          <ListItemText primary="Add notes/descriptions to Companies/Contacts" />
                        </ListItemButton>

                        <ListItemButton>
                          <ListItemIcon>
                            <ChevronRightIcon />
                          </ListItemIcon>
                          <ListItemText primary="Generate Activity and Growth reports" />
                        </ListItemButton>

                        <ListItemButton>
                          <ListItemIcon>
                            <ChevronRightIcon />
                          </ListItemIcon>
                          <ListItemText primary="View detailed Activity logs" />
                        </ListItemButton>

                        <ListItemButton>
                          <ListItemIcon>
                            <ChevronRightIcon />
                          </ListItemIcon>
                          <ListItemText primary="Send custom emails" />
                        </ListItemButton>

                        <ListItemButton>
                          <ListItemIcon>
                            <ChevronRightIcon />
                          </ListItemIcon>
                          <ListItemText primary="Open, Win, and Close deals" />
                        </ListItemButton>

                        <ListItemButton>
                          <ListItemIcon>
                            <ChevronRightIcon />
                          </ListItemIcon>
                          <ListItemText primary="Connect invoices to deals" />
                        </ListItemButton>
                      </List>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
              {/* Stepper */}
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
                <img
                  sx={{ height: "80px" }}
                  height={"180px"}
                  src="https://dgbits.in/images/crm-img.png"
                  alt=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <ContactsIcon />
                    Contacts
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Add unlimited contacts to your CRM with detailed
                    information, including company, currency, acquisition stage,
                    and contact owner. You can define acquisition sources for
                    each contact to get insights into which marketing
                    efforts/platforms yield the best result.
                  </Typography>
                </CardContent>
              </Card>

              <Card
                sx={{
                  maxWidth: { xs: "95%", md: "345" },
                  marginTop: { xs: "15px", md: "5px" },
                }}
              >
                {/* <CardMedia
                  sx={{ height: 200 }}
                  image="https://www.shutterstock.com/image-vector/fixed-price-rubber-stamp-red-260nw-1743458237.jpg"
                  title="green iguana"
                /> */}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <DescriptionIcon />
                    Generate Invoices
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Connect invoices to contacts in your CRM and easily
                    reconcile transactions for accurate accounting. Contacts
                    created in CRM are auto-synced with your customer data,
                    easing your process of generating invoices for every closed
                    deal in your CRM pipeline.
                  </Typography>
                </CardContent>
              </Card>

              <Card
                sx={{
                  maxWidth: { xs: "95%", md: "345" },
                  marginTop: { xs: "15px", md: "5px" },
                }}
              >
                {/* <CardMedia
                  sx={{ height: 200 }}
                  image="https://www.imaginarycloud.com/blog/content/images/2022/02/Untitled-design--14-.jpg"
                  title="green iguana"
                /> */}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <SummarizeIcon />
                    Reports
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Generate reports that provide insights into the performance
                    of your customer acquisition efforts. See a breakdown of
                    leads, opportunities, and subscribers acquired within a
                    financial year and develop strategies to improve them
                    accordingly.
                  </Typography>
                </CardContent>
              </Card>

              <Card
                sx={{
                  maxWidth: { xs: "95%", md: "345" },
                  marginTop: { xs: "15px", md: "5px" },
                }}
              >
                {/* <CardMedia
                  sx={{ height: 200 }}
                  image="https://www.imaginarycloud.com/blog/content/images/2022/02/Untitled-design--14-.jpg"
                  title="green iguana"
                /> */}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <RememberMeIcon /> Activity Log
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Keep tabs on every company/customer interaction to gain
                    insight into the time spent managing contacts or moving them
                    from one acquisition stage to another. See daily logs of
                    activities, such as call/meeting schedules, notes, emails,
                    deals, and tasks.
                  </Typography>
                </CardContent>
              </Card>

              <Card
                sx={{
                  maxWidth: { xs: "95%", md: "345" },
                  marginTop: { xs: "15px", md: "5px" },
                }}
              >
                {/* <CardMedia
                  sx={{ height: 200 }}
                  image="https://www.imaginarycloud.com/blog/content/images/2022/02/Untitled-design--14-.jpg"
                  title="green iguana"
                /> */}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <PeopleIcon />
                    Deals
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Open deals and track every step of the customer journey from
                    the proposal to the winning stage. You can customize your
                    pipeline stages, create new ones, and filter based on status
                    - Open, Won, Lost, or Deleted.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            {/* </ItemTwo> */}
          </Grid>
        </Grid>
      </Box>
      <Bookdemocard 
      maintext="Enquire about CRM's capabilities. Simplify your client relationship management."
      />
    </div>
  );
};

export default Swiftcrm;
