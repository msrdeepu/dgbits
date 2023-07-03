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
// import CardActions from "@mui/material/CardActions";
// import Button from "@mui/material/Button";

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

const Webdesignservice = () => {
  return (
    <div>
      <PagesBanner
        bgImg="https://png.pngtree.com/background/20210710/original/pngtree-blue-digital-technology-electronic-banner-picture-image_1033187.jpg"
        mainTitle="MOBILE FIRST RESPONSIVE WEBSITE DESIGN SERVICE"
        subtext="Responsive design has become more important as the amount of mobile traffic now reaches for more than half of total internet traffic."
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
                Website Design Service
              </Typography>
              <br />
              <Typography variant="p" fontSize={"18px"}>
                If you are a small business owner, or an online retailer, or a
                large corporate, then you will agree that the purpose of your
                website is to build credibility, drive more website visitors and
                convert them to purchasers for your business. A unique website
                attracts more traffic than any ordinary website. Fascinating
                content convey the right message of your organization to your
                customers in a way easy to comprehend and understand.
              </Typography>
              <br />
              <br />
              <Typography variant="p" fontSize={"18px"}>
                Web design needs invincible passion and creativity in order to
                stand out in the crowd. And our large experience & expertise has
                given us the insight on what works the best. Through Responsive
                web design, Interactive design, User interface design and User
                experience design, we convey the right message to your targeted
                audience. We define or redefine your branding to match your
                vision and to achieve goals. Discovering and delivering with our
                innovative ideas is a continuous quest we thrive for to execute
                our clients’ needs and thereby create the brand they wish for.
              </Typography>
              <br />
              <br />
              <Typography variant="p" fontSize={"18px"}>
                Imagine having a website that makes you stand out in the crowd,
                With easy to navigate and responsive on all devices. Picture
                your potential customers searching for a keyword in your
                industry and seeing your business come up on the first page of
                Google. Enjoy the feeling of attracting more & more visitors to
                your website and watching them converted to valid sales leads
                for your business. Now to brings this into reality needs lot of
                expertise in design trends and smart domain experience, with
                over 17 plus years of experience we at DGBITS Know How To
                Achieve IT.
              </Typography>
              <br />
              <br />
              <Typography variant="h5" color="#3e4555">
                Responsive Web Design Service
              </Typography>
              <br />

              <Typography variant="p" fontSize={"18px"}>
                At DGBITS the trendy Responsive web design services company
                Tirupati, Andhra Pradesh, India offering the innovative
                solutions in making the website effective and easy to use on any
                device. Responsive design ensures that there is no need for any
                additional design or enhancement when a new smart device arrives
                in the market.
              </Typography>
              <br />
              <br />
              {/* <Typography variant="h5" color="#3e4555">
                Quality Analysts and Testing :
              </Typography>
              <br /> */}
              <Typography variant="p" fontSize={"18px"}>
                Responsive web design solutions which make websites and
                applications smart enough to resize and adapt its content on the
                basis of the screen size of the device. Thus increasing the
                development speed, makes project easy to manage and increases
                the usability. Responsive Web Design provides an optimal user
                experience on all kinds and sizes of devices from large screen
                desktops to small smartphones. So if you have substantial mobile
                traffic on your website or are looking to market to mobile web
                users, then a responsive site is a must and can definitely help
                give a good first impression of your company.
              </Typography>
              <br />
              <br />
              {/* <Typography variant="h5" color="#3e4555">
                Application Design & Maintenance :
              </Typography>
              <br /> */}
              {/* <Typography variant="p" fontSize={"18px"}>
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
              <br /> */}
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
                  image="https://dgbits.in/images/mobile-first-design.png"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    What is mobile-first design?
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Designing with a mobile-first approach makes the most of
                    what a mobile device has to offer by going against the
                    traditional direction of web design.
                  </Typography>

                  <br />
                  <Typography variant="body2" color="text.secondary">
                    Before mobile became the dominant way folks interacted with
                    the internet, designers generally worked large to small;
                    desktop to tablet to smartphone. Hardly surprising, given
                    that the desktop long preceded the mobile phone and the
                    iPhone didn’t debut until 2007.
                  </Typography>

                  <br />
                  <Typography variant="body2" color="text.secondary">
                    Nowadays, given the current ubiquity of smartphones,
                    designers generally work small to large; starting from the
                    pocket-sized screen and scaling up from there.
                  </Typography>

                  <br />
                  <Typography variant="body2" color="text.secondary">
                    This approach forces designers to work with the most limited
                    real estate first, on the screen size users will likely use
                    most. Instead of paring down a desktop design to fit a
                    mobile device, mobile-first designs are optimized for mobile
                    devices and then expanded for desktop.
                  </Typography>

                  <br />
                  <Typography variant="body2" color="text.secondary">
                    As a result, mobile-first design is the right approach for
                    most software and web experiences today.
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            {/* </ItemTwo> */}
          </Grid>
        </Grid>
      </Box>
      <Bookdemocard maintext="Not sure what to select? Need a customized plan, you’d like to discuss?" />
    </div>
  );
};

export default Webdesignservice;
