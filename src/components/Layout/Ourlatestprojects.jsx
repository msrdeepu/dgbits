import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// pages or layout imorts
import PagesBanner from "./PagesBanner";

// import

const ourProjects = [
  {
    id: 1,
    imgURL: "https://dgbits.in/images/smr-thumb.png",
    title: "SLN Developers",
    tech: "HTML5, CSS3, Bootstrap 5, Laravel8",
  },
  {
    id: 2,
    imgURL: "https://dgbits.in/images/smr-thumb.png",
    title: "Satyabhama Decors & Interiors",
    tech: "HTML5, CSS3, Bootstrap 5, Laravel8",
  },
  {
    id: 3,
    imgURL: "https://dgbits.in/images/smr-thumb.png",
    title: "Nextbell Technologies",
    tech: "HTML5, CSS3, Bootstrap 5, Laravel8",
  },
  {
    id: 4,
    imgURL: "",
    title: "HSDentals",
    tech: "HTML5, CSS3, Bootstrap 4, Laravel8",
  },
  {
    id: 5,
    imgURL: "",
    title: "IOTO Matics",
    tech: "HTML5, CSS3, Bootstrap 4, Laravel8",
  },
  {
    id: 6,
    imgURL: "",
    title: "Suraksha Developers",
    tech: "HTML5, CSS3, Bootstrap 5, Laravel8",
  },
  {
    id: 7,
    imgURL: "",
    title: "Dev Global Services",
    tech: "HTML5, CSS3, Bootstrap 5, Laravel8",
  },
  {
    id: 8,
    imgURL: "",
    title: "MahaRaju Health Care",
    tech: "HTML5, CSS3, Bootstrap 5, Laravel8",
  },
  {
    id: 9,
    imgURL: "",
    title: "Global Star Edu",
    tech: "HTML5, CSS3, Bootstrap 5, Laravel8",
  },
  {
    id: 10,
    imgURL: "",
    title: "OM Guest House",
    tech: "HTML5, CSS3, Bootstrap 5, Laravel8",
  },
  {
    id: 11,
    imgURL: "",
    title: "Ruby Infra AP",
    tech: "HTML5, CSS3, Bootstrap 5, Laravel8",
  },
  {
    id: 12,
    imgURL: "",
    title: "SAI Sakthi Video Presentation",
    tech: "Premier, After Effects, Photoshop",
  },
  {
    id: 13,
    imgURL: "",
    title: "Sunrise Matrimony",
    tech: "Laravel, Mysql, Material-UI, PHP",
  },
  {
    id: 14,
    imgURL: "",
    title: "Loyal Links Matrimony",
    tech: "Laravel, Mysql, Material-UI, PHP",
  },
  {
    id: 15,
    imgURL: "",
    title: "Sree Sai Matrimony",
    tech: "Laravel, Mysql, Material-UI, PHP",
  },
  {
    id: 16,
    imgURL: "",
    title: "LT Supercom India",
    tech: "PHP, Jquery, Bootstrap 4, HTML5",
  },
  {
    id: 17,
    imgURL: "",
    title: "ARCEDO Responsive Website",
    tech: "HTML5, CSS3, Jquery, Bootstrap 4, Photoshop",
  },
  {
    id: 18,
    imgURL: "",
    title: "JYOSTAR CMS Website",
    tech: "PHP, HTML5, Bootstrap 4, Photoshop",
  },
  {
    id: 19,
    imgURL: "",
    title: "Sri Guru Matrimony",
    tech: "Laravel, Mysql, Material-UI, PHP",
  },
  {
    id: 20,
    imgURL: "",
    title: "RR Matrimony Application",
    tech: "Laravel, Mysql, Material-UI, PHP",
  },
  {
    id: 21,
    imgURL: "",
    title: "Quantum Life University",
    tech: "PHP, Codignator, HTML5, CSS3, Jquery",
  },
  {
    id: 22,
    imgURL: "",
    title: "SAPARIYA Logo & Website",
    tech: "HTML5, CSS3, Jquery, Bootstrap 4, Photoshop",
  },
  {
    id: 23,
    imgURL: "",
    title: "iDevice Iphone Repair",
    tech: "HTML5, CSS3, Bootstrap 4, PHP",
  },
  {
    id: 24,
    imgURL: "",
    title: "MKS Developers Website",
    tech: "HTML5, CSS3, Bootstrap 4, PHP",
  },
  {
    id: 25,
    imgURL: "",
    title: "NIDI ASSOCIATES",
    tech: "PHP, HTML5, CSS3, Bootstrap 4, Jquery",
  },
  {
    id: 26,
    imgURL: "",
    title: "Life Research Academy",
    tech: "Joomla 3.0, PHP, Jquery, Bootstrap 3",
  },
  {
    id: 27,
    imgURL: "",
    title: "Life Foundation University",
    tech: "PHP, HTML5, CSS3, Jquery",
  },
  {
    id: 28,
    imgURL: "",
    title: "Veeksha Concept School",
    tech: "Bootstrap 3, HTML5, CSS3, Jquery",
  },
  {
    id: 29,
    imgURL: "",
    title: "Moms Kitchen USA",
    tech: "PHP, HTML5, CSS3, Jquery",
  },
  {
    id: 30,
    imgURL: "",
    title: "Vivekananda Residential",
    tech: "Bootstrap 3, HTML5, CSS3, Jquery",
  },
  {
    id: 31,
    imgURL: "",
    title: "Amma Colours",
    tech: "HTML5, CSS3, Bootstrap 4, PHP",
  },
  {
    id: 32,
    imgURL: "",
    title: "LOT Tracks",
    tech: "UX, UI, HTML5, CSS3, React",
  },
  {
    id: 33,
    imgURL: "",
    title: "Palla Residency",
    tech: "Bootstrap 3, HTML5, CSS3, Jquery",
  },
  {
    id: 34,
    imgURL: "",
    title: "SMR Teleservices",
    tech: "Bootstrap 3, HTML5, CSS3, Jquery",
  },
  {
    id: 35,
    imgURL: "",
    title: "Sree Parivaar",
    tech: "Bootstrap 3, HTML5, CSS3, Jquery",
  },
  {
    id: 36,
    imgURL: "",
    title: "MAASAI Planners & Constructions",
    tech: "PHP, HTML5, CSS3, Jquery",
  },
];

const Cardlayout = (project) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "8px" }}>
      <Box sx={{ display: "none" }}>
        id={project.id}
        key={project.id}
      </Box>

      <CardMedia
        component="img"
        alt="green iguana"
        height="290"
        image={project.imgURL}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography gutterBottom variant="h6" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.tech}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Ourlatestprojects = () => {
  return (
    <>
      <PagesBanner
        bgImg="https://png.pngtree.com/background/20210710/original/pngtree-blue-digital-technology-electronic-banner-picture-image_1033187.jpg"
        mainTitle="DGBITS PROJECTS"
        subtext="We build visually engaging websites & apps with the user experience and great call to actions that pull the brand voice and style through each element. We focus on your desired outcomes and user actions to drive the process. Everything from copy writing, design, photography, video, email marketing integration, SEO digital strategy and opt-in materials come into play with each website development and design project."
      />
      <Typography variant="h5" className="text-center m-4 p-3">
        See the showcase of our favorite web design projects below :
      </Typography>
      <Box className="container">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {ourProjects.map(Cardlayout)}
        </Box>
      </Box>
    </>
  );
};

export default Ourlatestprojects;
