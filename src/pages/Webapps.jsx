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

const Webapps = () => {
  return (
    <div>
      <PagesBanner
        bgImg="https://png.pngtree.com/background/20210710/original/pngtree-blue-digital-technology-electronic-banner-picture-image_1033187.jpg"
        mainTitle="CUSTOM WEB APPLICATION DEVELOPMENT"
        subtext="Re-define your IT needs with highly reliable solutions for critical applications."
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
                Powerful business web applications
              </Typography>
              <br />
              <Typography variant="p" fontSize={"18px"}>
                Whether a start-up or an established business, we understand the
                needs of each business from top to bottom to give you
                hassle-free custom software Application development solutions.
                Respond to new business opportunities and challenges by
                effectively balancing your day-to-day operations while being
                easy on your budget. Get a software application designed from
                blueprint and we guarantee it will work your way.
              </Typography>
              <br />
              <br />
              <Typography variant="p" fontSize={"18px"}>
                DGBITS Expert's craft the perfect solution to your business with
                advanced custom software development that accelerates growth,
                boost your revenues, and helps easily targets your potential
                customers. Leverage the power of our customised Applications
                that will cater to every business environment and are the
                perfect fit for every organisation. Turn your business around
                with tailor-made solutions to improve your business performance.
                We create the right tools with increased flexibility and quality
                to ensure consistent business growth.
              </Typography>
              <br />
              <br />
              <Typography variant="p" fontSize={"18px"}>
                DGBITS is a leading Opensource Application development services
                company offering comprehensive range of custom software
                application development services that steer your business to the
                next level, streamline processes and enhance growth. Our team of
                highly proficient developers with extensive experience of NodeJS
                / PHP Laravel Application development in building
                mission-critical web applications supported by professional
                project management processes and work methodologies
              </Typography>
              <br />
              <br />

              <Typography variant="p" fontSize={"18px"}>
                At DGBITS, our in-house team of experienced web developers
                produce web applications that have helped organisations deliver
                their products and services or streamline their organisations’
                processes, helping them save money and grow. We build
                business-critical, web-facing applications, or we will stitch
                business systems together that drive efficiency and make
                business or non-profits more agile. Web applications can be as
                simple as a bespoke hook-up to an external data source, like a
                content feed, or it can be a fully mobile Progressive Web App
                (PWA) that looks and behaves like a native mobile app.
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
                  sx={{ height: 300 }}
                  image="https://dgbits.in/images/webapp.svg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    What Is A Web Application?
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A Web App is a type of application software that is hosted
                    and operated on a third-party server. To access a Web App,
                    customer just needs Web browser.
                  </Typography>

                  <br />
                  <Typography gutterBottom variant="h5" component="div">
                    Web Application vs Website?
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    A web application lets a user manipulate data: they can
                    create, read, update and delete information. A website,
                    however, only lets them download (read, view, listen) data
                    where a user can only access information. Hence a web app is
                    interactive, whereas a website is mostly informational.
                    Other differences: Web apps are more often integrated with
                    other software systems (e.g. CRM, ERP) integrated than
                    websites. Also, unlike websites, web apps usually require
                    authentication.
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            {/* </ItemTwo> */}
          </Grid>
        </Grid>
      </Box>
      <Bookdemocard maintext="If you have a project to realize a web application ?" />
    </div>
  );
};

export default Webapps;
