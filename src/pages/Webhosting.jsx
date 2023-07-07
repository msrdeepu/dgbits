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

const Annualmaintinence = () => {
  return (
    <div>
      <PagesBanner
        bgImg="https://png.pngtree.com/background/20210710/original/pngtree-blue-digital-technology-electronic-banner-picture-image_1033187.jpg"
        mainTitle="WEBSITE OR APP HOSTING SERVICES"
        subtext="Talk to us we would like to know your hosting requirements. We can offer ideal plan for your business."
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
                99% Up Time Guarantee
              </Typography>
              <br />
              <Typography variant="p" fontSize={"18px"}>
                Nothing is more important than having a 24×7 operating web host.
                We make sure web host is operating on a powerful server and
                stable network connections. 99.5% and above is the recommended
                uptime score; anything below 99% is unacceptable for us.
              </Typography>
              <br />
              <br />
              <Typography variant="p" fontSize={"18px"}>
                As a service to our clients, DGBITS offers hosting for each
                website we create or maintain. We will keep track of how many
                people are visiting your site and what speed there connections
                are to make sure your website is optimized to download as fast
                as possible.
              </Typography>
              <br />
              <br />

              <Typography variant="h5" color="#3e4555">
                Exclusive control panel
              </Typography>
              <br />

              <Typography variant="p" fontSize={"18px"}>
                The exclusive control panel offered for free to all DGBITS
                clients without limits or additional licenses. Our control panel
                brings a simple but friendly, nice and easy to use web interface
                with all the needed options and properties to admin your
                services. Systematic updates and improvements are applied.
              </Typography>
              <br />
              <br />

              <Typography variant="p" fontSize={"18px"}>
                Our cPanels are powered with Auto Script Installers for easy web
                apps installations and updates, .htaccess access for
                security/page redirects/etc purposes, Server Side Include (SSI)
                for easier site maintenance, and FTP access for easy file
                transfer. DGBITSprovides every customer with the necessary tools
                to get a fully-functional website up and running as quickly as
                possible. We provide an incredibly convenient drag-and-drop
                website builder and application installer. You can have an
                amazing website online in no time! WordPress, Joomla, Drupal,
                Prestashop, Magento, OpenCart, all applications can be installed
                in just a click.
              </Typography>
              <br />
              <br />
              <Typography variant="h5" color="#3e4555">
                Packages and Pricing
              </Typography>
              <br />

              <Typography variant="p" fontSize={"18px"}>
                DGBITS has an impressive track record of designing and
                developing visually elegant, technically demanding websites. We
                have served numerous segments and different verticals, always
                capturing the essence of the brand and delivering admiring
                webExperience. Our customer-focused development team who have
                great experience and dedication to do everything for clients and
                help them to achieve their goals. Our aim is to provide cost
                effective solutions for clients and enabling them to excel in
                the internet business & marketing.
              </Typography>
              <br />
              <br />

              <Typography variant="p" fontSize={"18px"}>
                DGBITS offers many packages and prices which are really
                competitive, giving in many cases web hosting packages with the
                possibility of host more than one domain and multiples sub
                domains few times you might need multiple landing pages to
                leverage maximum traffic through Digital Marketing services, So
                you will need not to buy any additional hosting packages all of
                sudden. Please do call us to checkout latest offers, we're
                always sell at competitive prices! +91 99890 36524.
              </Typography>
              <br />
              <br />
              <Typography variant="h5" color="#3e4555">
                All Hosting Plans With Incredible Features...
              </Typography>
              <br />

              <Typography variant="p" fontSize={"18px"}>
                DGBITS support team will ensure you to continue and add content
                in your website with confidence. Regularly updating the CMS
                software patches as it becomes available will ensure you have
                the peace of mind. When it comes to online security, peace of
                mind is something that’s always worth having.
              </Typography>
              <br />
              <br />

              <Typography variant="p" fontSize={"18px"}>
                DGBITS specialists offering support and maintenance services to
                make website available to the online world and get it updated
                and running smoothly. Moreover, our solutions are cost-effective
                and provide value to your money with the highest level of
                accuracy in our services. Website maintenance ensures the
                website stays fresh and updated to visitors visiting your site.
                Such sites are able to get more traffic and hence establish a
                good communication with your potential clients and other
                members.
              </Typography>
              <br />
              <br />

              <Typography variant="p" fontSize={"18px"}>
                There are three kinds of web application maintenance those
                errands to zero in on. These are:
              </Typography>
              <br />
              <br />

              <Typography variant="p" fontSize={"18px"}>
                1. Security support: Security is the main justification for web
                application support. Programmers are continuously looking for
                ways of attempting and breaking into an organization’s site.
                Particularly are the ones that are applications with admittance
                to client subtleties and monetary data. Your security should be
                more tight than tight. Normal support checks will uncover
                weaknesses and permit you to fix them before they’re found by
                any other person.
              </Typography>
              <br />
              <br />

              <Typography variant="p" fontSize={"18px"}>
                2. Preventive maintenance: The maintenance of web application
                must be carried out in regular intervals in order to check for
                the system faults and to make sure that any feature updates are
                needed. This can be performed based on the time, finding the
                faults, managing risks, other conditions and based upon the
                predictions.
              </Typography>
              <br />
              <br />

              <Typography variant="p" fontSize={"18px"}>
                3. Corrective maintenance: The corrective maintenance is majorly
                carried out to solve the business fallouts. This may be of
                deferred type or the emergency type as it is based on the
                criticality and the time taken to solve the failures. When you
                are making any custom web application, these kinds of scenarios
                can be expected.
              </Typography>
              <br />
              <br />

              <Typography variant="p" fontSize={"18px"}>
                There are three kinds of web application maintenance those
                errands to zero in on. These are:
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
                  sx={{ height: 1100 }}
                  image="https://dgbits.in/images/web-hosting.png"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Types of Content Management Systems
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Differences between Monolithic systems and a Headless
                    system.
                  </Typography>
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    Monolithic CMS : Includes Rendering (presenting data through
                    an interface, i.e., a website), Data Layer (where content
                    lives, i.e., database), and User Management all in one
                    single package. The most popular monolithic CMS, by a large
                    margin, is WordPress.
                  </Typography>{" "}
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    Headless CMS : Includes only Data Layer and User Management.
                    Rendering is done externally through an API. Strapi,
                    Directus and other jamstack CMS are examples of headless
                    CMS. We use AstroJS or NextJS for Frontend to show content
                    saved in Strapi or Directus using API or GraphQL
                  </Typography>
                  <br />
                  <Typography gutterBottom variant="h5" component="div">
                    JAMstack web deployment
                  </Typography>
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    All websites we develop using JAMstack are built for
                    performance and deployed upon what is referred to as a
                    Content Delivery Network (CDN), sometimes known as an edge
                    network. There are no web servers to worry about and best of
                    all cost is much lower than traditional web hosting. For
                    small sites, the cost of deploying and hosting your website
                    may be as little as zero!
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

export default Annualmaintinence;
