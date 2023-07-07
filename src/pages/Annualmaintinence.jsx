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
        mainTitle="WEBSITE MAINTENANCE SERVICES"
        subtext="Talk to us we would like to know your amc requirements. We can offer ideal maintainence plan for your website or app."
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
                Annual Maintenance Contract - AMC
              </Typography>
              <br />
              <Typography variant="p" fontSize={"18px"}>
                Website maintenance is must, Once you have your Website designed
                and hosted, you will need to maintain it on regular basis. As
                your business grows and evolves, your website requires routine
                updates to keep your content fresh and your visitors engaged.
                Website maintenance is vital in effectively communicating your
                brand and providing the best possible user experience. Being a
                dedicated website maintenance company in Tirupati, Andhra
                Pradesh, India. we take care of files and data backup on regular
                intervals to avoid emergencies and unusual occurrences. This
                secure backups ensure the business continuity.
              </Typography>
              <br />
              <br />
              <Typography variant="p" fontSize={"18px"}>
                At DGBITS, We believe that making a web site is not a onetime
                affair, it's a lifelong commitment. A website should be
                regularly updated with the latest about your company, brand,
                products & Services, News, Events, Awards, Locations & Contacts
                and anything else that might be relevant, geared to generate the
                maximum returns from your website.
              </Typography>
              <br />
              <br />

              <Typography variant="h5" color="#3e4555">
                Why Maintenance Contract is Essential for large websites & web
                applications ?
              </Typography>
              <br />

              <Typography variant="p" fontSize={"18px"}>
                Content management system (CMS) or headless CMS like Directus or
                Strapi or wordpress CMS are easier to add, edit and refine
                content on your website. The ability to add content easily /
                quickly and to manage content regularly is essential for any
                professional website. All CMS based websites need a regular
                back-end management support to achieve best performance.
              </Typography>
              <br />
              <br />

              <Typography variant="p" fontSize={"18px"}>
                Similar to anti-virus software updates, CMS updates are provided
                regularly for good reason. When it comes to online security,
                everything on the internet can become vulnerable with time and
                hackers are always search new holes and finding new ways to
                exploit the back end of cms based websites.
              </Typography>
              <br />
              <br />

              <Typography variant="p" fontSize={"18px"}>
                Outdated version of Open Source CMS software is especially prone
                for attacks, loop holes in old coding, free plugins and outdated
                scripts in CMS let hackers to exploit for their own gain. To
                effectively manage CMS based website, it’s important to have a
                AMC plan in place with DGBITS this ensure your CMS is regularly
                updated for better performance and to tighten the security of
                your website.
              </Typography>
              <br />
              <br />

              <Typography variant="p" fontSize={"18px"}>
                To make your website bug free, we do regular bug fixes, website
                health checkups, and improvements. Our dedicated team takes care
                of any issue that arises through third-party plugins or by the
                core itself. Your issue would be resolved at the highest
                priority.
              </Typography>
              <br />
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
                  sx={{ height: 200 }}
                  image="https://dgbits.in/images/website-maintenance.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Web Maintenance Services
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    All you need to keep your website 100% Secure and updated.
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
                  image="https://dgbits.in/images/amc-icon-2.png"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Performance Checkup
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Our intensive maintenance checklist ensures your website
                    performs at its best. All the performance monitoring
                    activities are scheduled through our automated CRM system.
                    You will get a detailed reports on a monthly basis.
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
                  image="https://dgbits.in/images/amc-icon-3.png"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Functionality Checkup
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We check whether all forms are working properly and whether
                    inquiry emails are getting received. We also check for any
                    broken links on the website and rectify it. Broken links are
                    a bad sign for SEO, hence it helps to keep your SEO health
                    score high.
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
                  image="https://dgbits.in/images/amc-icon-4.png"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Fixes and Enhancements
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    To make your website bug free, we do regular bug fixes,
                    website health checkups, and improvements. Our dedicated
                    team takes care of any issue that arises through third-party
                    plugins or by the core itself. Your issue would be resolved
                    at the highest priority.
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
                  image="https://dgbits.in/images/amc-icon-5.png"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Mobile & Browser Optimization
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We guarantee that you won't be penalized for not having a
                    fully responsive website. If a section is not responsive, we
                    address it with permanent fix.
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
