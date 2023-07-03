import React from "react";

// imporrting the pages
// import LayoutAbout from '../components/Layout/LayoutAbout'
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
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

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

const About = () => {
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
            <Item>
              <Typography variant="h5" color="#3e4555">
                About Us
              </Typography>
              <br />
              <Typography variant="p" fontSize={"18px"}>
                DGBITS Software Private Limited is a professional Website
                Designing and software development Company Located in Tirupati,
                Andhrapradesh India. For over a decade, DGBITS partnered with
                innovators, start-ups, universities, Organizations to enable
                their online webExperince.
              </Typography>
              <br />
              <br />
              <Typography variant="p" fontSize={"18px"}>
                At DGBITS Software Private Limited , WE LOVE WHAT WE DO. WE ARE
                VERY PASSIONATE. WE ARE VERY CREATIVE. Our team have a strong
                background as designers and engineers and our industry
                experience brings our work to a different level. We focus on
                developing solutions that leads digital transformation for
                Startups & MSMEs.
              </Typography>
              <br />
              <br />
              <Typography variant="p" fontSize={"18px"}>
                DGBITS Offering admiring & elegant web solutions that enable
                Small and Medium Enterprises to achieve their online objectives.
                DGBITS delivered tailor made solutions for business and web
                applications to wide variety of clients across the globe. We are
                able to utilise our creative skills and technological know-how
                to build a personalised solution that will support your business
                now and in the future.We are pride ourselves on our high levels
                of customer service. This has been achieved by carrying out all
                the work in-house, where we can maintain quality control and
                ensure your deadlines are met. Our approach has enabled us to
                grow by reputation alone; nearly all of our new business comes
                as a referral from our existing clients.
              </Typography>
              <br />
              <br />
              <Typography variant="h5" color="#3e4555">
                Corporate Branding :
              </Typography>
              <br />

              <Typography variant="p" fontSize={"18px"}>
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
                  sx={{ height: 200 }}
                  image="https://dgbits.in/images/human-resource.jpeg"
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
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
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
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
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
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
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
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Box>

            {/* </ItemTwo> */}
          </Grid>
        </Grid>
      </Box>
      <Bookdemocard 
      maintext="DGBITS is the best technology partner to create and deliver your awesome website!"
      />
    </div>
  );
};

export default About;
