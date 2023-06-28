import React from "react";
// import LayoutAbout from '../components/Layout/LayoutAbout'
import PagesBanner from "../components/Layout/PagesBanner";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import WorkIcon from "@mui/icons-material/Work";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const Whydgbits = () => {
  return (
    <div>
      <PagesBanner
        bgImg="https://png.pngtree.com/background/20210710/original/pngtree-blue-digital-technology-electronic-banner-picture-image_1033187.jpg"
        mainTitle="PROFESSIONAL WEBSITE DESIGN AND SOFTWARE DEVELOPMENT"
        subtext="At DGBITS We are able to utilise our creative skills and technological know-how to build a personalised solution that will support your business now and in the future."
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
            <Card sx={{ maxWidth: 1000 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Why to choose DGBITS ?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Focused solutions to meet your distinctive needs DGBITS
                  recognise that every one of our clients has unique needs,
                  which is why we do not suggest a “one size fits all” approach.
                  We have built up many years experience providing tailor-made
                  business solutions that help organisations achieve their
                  aims.Successful organisations now utilise a sophisticated mix
                  of online and offline resources to achieve their objectives.
                  These require a unique set of skills that are simply not
                  possible to employ in-house. This is where DGBITS can help
                  you. We provide Admiring & elegant business solutions that
                  enable you to reach out larger audience in notime.
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Key Benefits By Choosing DGBITS :
                </Typography>
                <List sx={{ width: "100%", maxWidth: 800 }}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <WorkIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="We totally twig your business objectives promptly to provide appropriate and easy to use solution." />
                  </ListItem>

                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <WorkIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="We integrate the power of technology with creativity to develop interactive solutions." />
                  </ListItem>

                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <WorkIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="We are a hub forever to create a bond between the consumer and your brand." />
                  </ListItem>

                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <WorkIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="We bring significant value to your brand through outstanding design and branding." />
                  </ListItem>

                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <WorkIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="We have competence in Mobility, Web marketing and Responsive Design and Web & Mobile App Development." />
                  </ListItem>

                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <WorkIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="We have a huge amount of experience in the print and digital marketing." />
                  </ListItem>

                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <WorkIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="We have access to many high-quality technologies and relationships with experts in their field (e.g. copywriters, photographers, animators, innovative marketing & promotion tools)." />
                  </ListItem>

                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <WorkIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="We are very quick in adopting latest technologies and solutions to deliver the scalable, adaptable and fluid websites and applications." />
                  </ListItem>

                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <WorkIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="We design best digital experiences with flexible tools & fluid routing, no matter which gadget they are accessed from, the call to action links are easy and evident to the users." />
                  </ListItem>

                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <WorkIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Our designs render seamlessly across all operating systems, Multiple screen sizes and devices, making them truly responsive and diverse in delivery." />
                  </ListItem>

                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <WorkIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="By choosing DGBITS your project will be taken to a whole new level." />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
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
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    textAlign={"center"}
                    component="div"
                  >
                    UX & UI Consulting
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We utilise best practice in User eXperience design
                    methodology to define solutions based on end-to-end business
                    and user needs. Our quick start-up approach means we can
                    move from design to prototype rapidly. Simultaneously
                    helping to coach your team through the business
                    transformation and training you on UX, UI design and
                    usability methods
                  </Typography>
                </CardContent>
              </Card>

              <Card
                sx={{
                  maxWidth: { xs: "95%", md: "345" },
                  marginTop: { xs: "15px", md: "5px" },
                }}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    textAlign={"center"}
                    component="div"
                  >
                    Solution Design
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    When designing any innovative solution it pays to ask what
                    are people trying to do now and what might people want to do
                    in the future? Once we've understood this, then we work out
                    how people to do it in the best way going forward. From
                    optimising workflows to mapping out service blueprints, our
                    valuable experienced team is perfectly placed to help you in
                    delivering solution for your business.
                  </Typography>
                </CardContent>
              </Card>

              <Card
                sx={{
                  maxWidth: { xs: "95%", md: "345" },
                  marginTop: { xs: "15px", md: "5px" },
                }}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    textAlign={"center"}
                    component="div"
                  >
                    Product Delivery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We already designed and built several digital products. We
                    understand that developing a product isn’t just limited to
                    UX and UI, it’s about designing a complete business
                    experience. From designing business strategies to
                    understanding key segments in market and size of market, we
                    can guide you through designing, building, launching and
                    transforming your idea to a digital product. Our team
                    experience ensures you to overcome all sort of pitfalls in
                    delivering a product.
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  maxWidth: { xs: "95%", md: "345" },
                  marginTop: { xs: "15px", md: "5px" },
                }}
              ></Card>
            </Box>
            {/* </ItemTwo> */}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Whydgbits;
