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

const Seosem = () => {
  return (
    <div>
      <PagesBanner
        bgImg="https://png.pngtree.com/background/20210710/original/pngtree-blue-digital-technology-electronic-banner-picture-image_1033187.jpg"
        mainTitle="AMAZING SEARCH ENGINE MARKETING SERVICES"
        subtext="Drive more traffic to your website and boostup sale now"
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
                Search Engine Optimisation
              </Typography>
              <br />
              <Typography variant="p" fontSize={"18px"}>
                Search engine optimization refers to measures that aim to
                improve a website’s position in a search engine’s natural search
                results. This requires experience and ongoing work. Even if you
                manage to get your website to appear at the top of search
                results you will likely need to continue monitoring of results
                and measures, especially if your competition is also making use
                of search engine optimization. If your competition improves its
                position in the search results, it could be at your expense.
              </Typography>
              <br />
              <br />
              <Typography variant="p" fontSize={"18px"}>
                On-page SEO is the practice of optimizing your page’s content to
                ensure that it looks great in the eyes of search engines like
                Google. This includes various tasks like keyword placement, url
                optimization, content readability and more.
              </Typography>
              <br />
              <br />
              <Typography variant="p" fontSize={"18px"}>
                Quite often, the first step in a customer’s journey towards
                completing any online task is via a search engine. So it’s
                absolutely crucial that your site appear as high up any search
                engine results page (SERP) as possible. But ranking well in a
                SERP is not a given. It requires strategy and effort to
                optimizing fully for search engine visibility. As an online
                marketing strategy, SEO considers how search engines work, what
                people search for, the actual search terms or keywords they
                enter and which search engines are preferred by users.
                Optimizing a website for search engines.
              </Typography>
              <br />
              <br />

              <Typography variant="p" fontSize={"18px"}>
                We will do SEO implementation for your content, META information
                and page titles to make sure that will bring the right people to
                your website.
              </Typography>
              <br />
              <br />
              <Typography variant="h5" color="#3e4555">
                SEM & Paid Search Marketing ?
              </Typography>
              <br />
              <Typography variant="p" fontSize={"18px"}>
                SEM (Search Engine Marketing) is the process of gaining website
                traffic by purchasing ads on search engines. SEM is the
                cheapeast form of advertising. It is our mission to help you
                reach as many people for the lowest cost possible. Search Engine
                Marketing involves implementing and succesfully using combined
                online strategies such as SEO (Search Engine Optimisation) and
                PPC (Pay Per Click) Campaigns to position your company at the
                top of Google above your competitor for keywords related to your
                services or products.
              </Typography>
              <br />
              <br />
              <Typography variant="p" fontSize={"18px"}>
                The Paid 'Ads' will often appear at the top of the page when
                people search for your targeted keywords. Having a paid
                advertisement on search engines often doubles the chances of
                having your website clicked on as compared to ranking high
                through organic keyword optimisation (SEO). The Paid Ads is
                referred as “Pay-per-Click” or PPC advertising, where you will
                pay only if your ad is clicked on.
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
                  image="https://dgbits.in/images/sem.png"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Search Engine Marketing (SEM)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Improve your business’s online presence in search engines
                    and drive more qualified leads. Building an organic presence
                    through search engine optimization (SEO) is critical, so
                    adding a paid strategy like SEM can help you create a
                    powerful online marketing strategy that packs a one-two
                    punch. Not only can you dominate the organic results with
                    SEO, but you can also increase visibility and leads by using
                    SEM to run paid ads. With DGBITS at the helm of your SEM
                    ship, you can feel confident we’ll steer you in the right
                    direction towards exponential online growth.
                  </Typography>
                  <br />
                </CardContent>
              </Card>
            </Box>
            {/* </ItemTwo> */}
          </Grid>
        </Grid>
      </Box>
      <Bookdemocard maintext="Are You Looking to create a custom package for your website with our SEO team ?" />
    </div>
  );
};

export default Seosem;
