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

const Emailnewsletter = () => {
  return (
    <div>
      <PagesBanner
        bgImg="https://png.pngtree.com/background/20210710/original/pngtree-blue-digital-technology-electronic-banner-picture-image_1033187.jpg"
        mainTitle="NEWSLETTER & EMAIL MARKETING @ DGBITS"
        subtext="Email marketing is a reliable way to reach customers. Successful campaigns boost sale."
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
                Newsletter & Email Marketing
              </Typography>
              <br />
              <Typography variant="p" fontSize={"18px"}>
                These days, nobody want to ignore Email Marketing. Gmail has 1
                billion email users. Well, 75% of Gmail users use mobile
                devices. Deals and discounts are important for driving sales, so
                where do consumers go to look for them? When people want to find
                a special deal, email is the go-to channel. 66% of consumers
                state that they have made a purchase as the result of a
                marketing message they received by email. Consumers are fine
                with receiving your promotional emails, and they interested to
                find new deals in their inbox.
              </Typography>
              <br />
              <br />
              <Typography variant="p" fontSize={"18px"}>
                Email marketing is a classic and effective way to engage your
                customers and get best conversions. It allows you to create a
                personal voice for your existing customer base, the people who
                have already expressed an interest in purchasing from your
                business. Email Marketing, you can can track precisely how many
                clients are actually opening your email. A success email
                campaign can take time to build, but that’s true with any good
                Email Marketing plan.
              </Typography>
              <br />
              <br />
              <Typography variant="p" fontSize={"18px"}>
                In order to improve your conversions and click-through rates, we
                optimize emails with fluid layout which is easily fits on mobile
                devices. Otherwise, many users won’t be able to interact with
                your Email Marketing Messages and will either delete or
                unsubscribe. If you optimize your Email Marketing for mobile,
                this will improve opportunity to steal customers from other
                competitors. DGBITS design team creates persuasive and
                informative custom emails to enhance your business brand &
                identity.
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
              <Typography variant="p" fontSize={"18px"}>
                We all believe sending emails is easy task, but in reality
                effective email marketing is complex job. DGBITS handle
                everything from list creation, uploading, scheduling and
                managing lists. All these important aspects of email marketing
                we will monitor with our smart tracking software. We use
                powerful tracking and reporting tools before sending the email
                and after. We ensure coding and design are optimized for mobile
                & other smart devices. Also we take extra care to deal with ISP
                compliance and SPAM filters before sending emails. Our reporting
                software tracks how many people received it, opened it, clicked
                it and much more.
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
                  sx={{ height: 600 }}
                  image="https://dgbits.in/images/email-marketing.png"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Start an email newsletter
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Ask new and existing clients if you could email them a
                    weekly newsletter with useful information on topics like
                    branding, paid acquisition, SEO, social media marketing and
                    public relations. Grow your reach by asking people on your
                    email list to share the newsletter with friends and family
                    if they find it useful. Send out surveys that help you home
                    in on the topics your subscribers care most about. By Adding
                    a newsletter signup pop-up or call-to-action on your website
                    homepage.
                  </Typography>
                  <br />
                </CardContent>
              </Card>
            </Box>
            {/* </ItemTwo> */}
          </Grid>
        </Grid>
      </Box>
      <Bookdemocard maintext="Are you ready to engage customers with effective marketing emails?" />
    </div>
  );
};

export default Emailnewsletter;
