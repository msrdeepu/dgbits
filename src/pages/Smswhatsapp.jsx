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
// social icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";

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

const Smswhatsapp = () => {
  return (
    <div>
      <PagesBanner
        bgImg="https://png.pngtree.com/background/20210710/original/pngtree-blue-digital-technology-electronic-banner-picture-image_1033187.jpg"
        mainTitle="MOBILE MARKETING, MOBILE OPTIMIZATION SERVICES @ DGBITS"
        subtext="Mobile Marketing makes you job easy to reach out large number of audience"
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
                Mobile Marketing Optimization
              </Typography>
              <br />
              <Typography variant="p" fontSize={"18px"}>
                Mobile usage mounting up at an terrifying rate and thinning the
                defences of physical and digital interactions in our lives.
                Strategic Mobile Marketing can promote products, create brand
                awareness, build customer relationships & increase sales. With
                more consumers on mobile is evolving digital world & modifying
                how we engage with our customers. The recent market trends
                indicate that we can achieve unarguable, reiterate successes
                through Mobile Apps and Mobile Promotion & Marketing.
              </Typography>
              <br />
              <br />
              <Typography variant="p" fontSize={"18px"}>
                Mobile-friendly design and page speed are the key factors in
                mobile-optimization. However with this two elements by
                themselves don’t always add up to a perfectly optimized website
                or app. Many people adopting responsive design to achieve best
                mobile experience but still more to be considered to truly
                optimize for the needs of mobile users. The raw technical
                implementation of a responsive layout isn’t enough to solve this
                problem. Instead, our designers put them self into the mobile
                user’s shoes and take into account what customers want to
                accomplish on website or mobile app using the mobile phone or
                smart devices.
              </Typography>
              <br />
              <br />
              <Typography variant="p" fontSize={"18px"}>
                Our Mobile Marketing Optimization Services help your business to
                earn customers for life by taking care of all your requirements.
              </Typography>
              <br />
              <br />
              <Typography variant="h5" color="#3e4555">
                SMS Marketing
              </Typography>
              <br />

              <Typography variant="p" fontSize={"18px"}>
                SMS Marketing is essential to create better relationships with
                your clients. Regular alert messages on marketing, promotions,
                sales events, coupons, discounts, latest offers, announcements,
                critical notifications, reminders, transaction confirmations and
                emergency alerts are crucial in business communications.
              </Typography>
              <br />
              <br />

              <Typography variant="p" fontSize={"18px"}>
                SMS Marketing is also known as Text message marketing that acts
                as a link between online marketing and offline marketing. As a
                medium of communication, SMS is among the most cost effective
                choice. It can be used to communicate with the customers as well
                as a company’s own staff. At low cost with SMS Marketing we can
                send persuasive and informative custom message along Sender
                Name, Company which directly helps in brand building.
              </Typography>
              <br />
              <br />

              <Typography variant="h5" color="#3e4555">
                WhatsApp Marketing
              </Typography>
              <br />
              <Typography variant="p" fontSize={"18px"}>
                WhatsApp is an incredible tool for business promotion &
                marketing, WhatsApp has 500+ million user base and 273 billion
                messages processed and sent on a daily basis. Innovative mobile
                marketing strategies with WhatsApp, allow companies to send
                message with pictures, videos or audio and several formats of
                other documents. Whats App messaging has gained immense
                popularity across the globe. WhatsApp is so popular that common
                people from all economic categories are using it for various
                purposes. With WhatsApp Marketing business owners have amazing
                opportunities for increasing their profitability in following
                manner.
              </Typography>
              <br />
              <br />
              <Typography variant="h6" color="#3e4555">
                Showcase Products or Services
              </Typography>
              <br />
              <Typography variant="p" fontSize={"18px"}>
                From sending the pictures of your products and different service
                what you offering to clients.WhatsApp allows you to showcase
                effectively on online. The benefit of WhatsApp is that you can
                reach each and every customer in a personalized way. And further
                WhatsApp allows you to send multiple messages in one tap. You
                can create a group with list of clients and send images and
                videos and text to the entire group in one go.
              </Typography>
              <br />
              <br />
              <Typography variant="h6" color="#3e4555">
                Quick Customer Support
              </Typography>
              <br />
              <Typography variant="p" fontSize={"18px"}>
                Because of its wider reach, WhatsApp can be used as a great tool
                for customer support. Sending complaints and messages on
                WhatsApp is much simpler than calling the help desk or toll free
                number. You can send message quickly with WhatsApp to large
                number of customers facing similar kind of issues without any
                hassles. You can also offer consultation for your products and
                services on WhatsApp and it can be done in an easily.
              </Typography>
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
                <CardMedia
                  sx={{ height: 685, padding: "5px" }}
                  image="https://dgbits.in/images/whatsapp-marketing.png"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Low Cost Marketing and Promotion
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    WhatsApp messaging is very strong if utilized efficiently.
                    You need to be smart enough to send useful information to
                    customers along with the products and services in an
                    intelligent manner. WhatsApp makes it very convenient for
                    people to deliver the messages in an easy and efficient
                    manner. You can market your products and send promotional
                    messages through WhatsApp.
                  </Typography>
                  <br />

                  <Typography gutterBottom variant="h5" component="div">
                    Effective Team communication
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    For any business to function actively effective internal
                    communication between teams is must. WhatsApp a good
                    communication platform for team within the business to send
                    or share messages quickly which helps in better
                    communication. Using WhatsApp business communication can
                    remain as easy and effective.
                  </Typography>
                  <br />
                </CardContent>
              </Card>
            </Box>
            {/* </ItemTwo> */}
          </Grid>
        </Grid>
      </Box>
      <Bookdemocard maintext="Clients Stay Tuned & Be Connected with your business" />
    </div>
  );
};

export default Smswhatsapp;
