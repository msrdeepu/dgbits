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

const Socialmedia = () => {
  return (
    <div>
      <PagesBanner
        bgImg="https://png.pngtree.com/background/20210710/original/pngtree-blue-digital-technology-electronic-banner-picture-image_1033187.jpg"
        mainTitle="SOCIAL MEDIA MARKETING & MANAGEMENT"
        subtext="Make use of Social Media to drive more traffic to your website and boostup sale now."
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
                Social Media Marketing & Management - SMM
              </Typography>
              <br />
              <Typography variant="p" fontSize={"18px"}>
                Social media marketing is the use of social media platforms to
                connect with your audience to build your brand, increase sales,
                and drive website traffic. This involves publishing great
                content on your social media profiles, listening to and engaging
                your followers, analyzing your results, and running social media
                advertisements.
              </Typography>
              <br />
              <br />
              <Typography variant="p" fontSize={"18px"}>
                The major social media platforms (at the moment) are Facebook,
                Instagram, Twitter, LinkedIn, Pinterest, YouTube, and Snapchat.
              </Typography>
              <br />
              <br />
              <Typography variant="p" fontSize={"18px"}>
                Ever startup these days needs to adopt social media. It's a lot
                cheaper than paying for plain old advertising and a lot more
                effective. Using social media also enables you to connect with
                customers a lot more directly because they usually choose to.
                They choose to share your products, follow your blog, like you
                on Facebook and follow you on Twitter. It means they're signing
                up to your updates intentionally.
              </Typography>
              <br />
              <br />

              <Typography variant="p" fontSize={"18px"}>
                Social Media Marketing helps to increase brand awareness and
                allows your company to engage with potentially new users as well
                as existing clients. Being active on social media channels now
                contributes positively in Google search ranks. DGBITS can help
                your business to establish itself as a reputable company and
                gain customer trust. Social Media Marketing makes substantial
                growth in business and much stronger brand presence. Utilising
                several social media platforms such as Facebook, Twitter,
                LinkedIn, YouTube, Pintrest and others genrate huge leads and
                encourages customers loyal. DGBITS will help you to drive leads
                through (Posts, Adverts, likes, comments, videos, infographics,
                blogs etc.) on your social media channels.
              </Typography>
              <br />
              <br />

              <Typography variant="p" fontSize={"18px"}>
                DGBITS Social Media Marketing & Management Services helps in
                managing, monitoring and regulating your social media
                communications to improve your brand awareness and website
                traffic. Increasing your website traffic will directly influence
                leads and sales. By increasing leads and retargeting ads users
                stay connected with your brand always.
              </Typography>
              <br />
              <br />
              <Typography variant="h5" color="#3e4555">
                How to Market on Social Media
              </Typography>
              <br />
              <Typography variant="p" fontSize={"18px"}>
                Are you struggling to get the best results from your social
                media marketing strategy? Becoming a thought leader does not
                happen overnight. However, with creative social media marketing
                ideas and a data-driven social media marketing business
                approach, you can position your brand as an expert in your
                respective field in no time.
              </Typography>
              <br />
              <br />
              <Typography variant="p" fontSize={"18px"}>
                From choosing the right social media channels to developing your
                social media content marketing strategy, every step is crucial
                to creating a successful social media marketing business
                campaign. Ready to begin marketing through social media?
              </Typography>
              <br />
              <br />
              <Typography variant="p" fontSize={"18px"}>
                Our social media marketing firm has put together the best
                practices to promote your business across online platforms
                effectively.
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
                  sx={{ height: 370 }}
                  image="https://dgbits.in/images/smm.png"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <FacebookIcon />
                    Facebook Marketing
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Facebook is most extensively used social media platform in
                    India. DGBITS ensure you are sending the right message to
                    engage clients and encourage interaction.
                  </Typography>
                  <br />

                  <Typography gutterBottom variant="h5" component="div">
                    <LinkedInIcon />
                    LinkedIn Marketing
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    DGBITS LinkedIn marketing solutions widen your reach to the
                    professionals by generating more connections and post
                    content to widen your network.
                  </Typography>
                  <br />

                  <Typography gutterBottom variant="h5" component="div">
                    <TwitterIcon />
                    Twitter Marketing
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    DGBITS marketing services will Fine tune your Twitter
                    presence to get better results by establish personal
                    connection and interaction with your clients, encourages
                    instant retweets.
                  </Typography>
                  <br />

                  <Typography gutterBottom variant="h5" component="div">
                    <PinterestIcon />
                    Pinterest Marketing
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Adverts and promotions on Pinterest can introduce your
                    business. DGBITS will post your products and services to
                    catch user attention, and expand your business niche.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            {/* </ItemTwo> */}
          </Grid>
        </Grid>
      </Box>
      <Bookdemocard maintext="Superior Social Media Marketing services ensure strong online success" />
    </div>
  );
};

export default Socialmedia;
