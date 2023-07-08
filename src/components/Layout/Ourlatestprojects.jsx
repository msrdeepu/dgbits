import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// pages or layout imports
import PagesBanner from "./PagesBanner";

// import images
import img1 from "../../images/serviceimgs/sln-thumb.png";
import img2 from "../../images/serviceimgs/satyabhama-thumb.png";
import img3 from "../../images/serviceimgs/nbt-thumb.png";
import img4 from "../../images/serviceimgs/hsortho-thumb.png";
import img5 from "../../images/serviceimgs/ioto-thumb.png";
import img6 from "../../images/serviceimgs/suraksha-thumb.png";
import img7 from "../../images/serviceimgs/devglobal-thumb.png";
import img8 from "../../images/serviceimgs/mhct-thumb.png";
import img9 from "../../images/serviceimgs/globalstaredu-thumb.png";
import img10 from "../../images/serviceimgs/omguest-thumb.png";
import img11 from "../../images/serviceimgs/ruby-thumb.png";
import img12 from "../../images/serviceimgs/ssec-video-thumb.png";
import img13 from "../../images/serviceimgs/srm-thumb.png";
import img14 from "../../images/serviceimgs/llm-thumb.png";
import img15 from "../../images/serviceimgs/ssm-thumb.png";
import img16 from "../../images/serviceimgs/lt-thumb.png";
import img17 from "../../images/serviceimgs/arcedo-thumb.png";
import img18 from "../../images/serviceimgs/jyostar-thumb.png";
import img19 from "../../images/serviceimgs/sg-thumb.png";
import img20 from "../../images/serviceimgs/rr-thumb.png";
import img21 from "../../images/serviceimgs/qlu-thumb.png";
import img22 from "../../images/serviceimgs/sapariya-thumb.png";
import img23 from "../../images/serviceimgs/idevice-thumb.png";
import img24 from "../../images/serviceimgs/mks-thumb.png";
import img25 from "../../images/serviceimgs/nidi-thumb.png";
import img26 from "../../images/serviceimgs/lra-thumb.png";
import img27 from "../../images/serviceimgs/lf-thumb.png";
import img28 from "../../images/serviceimgs/veeksha-thumb.png";
import img29 from "../../images/serviceimgs/mk-thumb.png";
import img30 from "../../images/serviceimgs/vrhs-thumb.png";
import img31 from "../../images/serviceimgs/color-thumb.png";
import img32 from "../../images/serviceimgs/lt-thumb.png";
import img33 from "../../images/serviceimgs/pr-thumb.png";
import img34 from "../../images/serviceimgs/smr-thumb.png";
import img35 from "../../images/serviceimgs/sp-thumb.png";
import img36 from "../../images/serviceimgs/maa-thumb.png";

// ourProjects array

const ourProjects = [
  {
    id: 1,
    imgURL: img1,
    title: "SLN Developers",
    tech: "HTML5, CSS3, Bootstrap 5, Laravel8",
  },
  {
    id: 2,
    imgURL: img2,
    title: "Satyabhama Decors & Interiors",
    tech: "HTML5, CSS3, Bootstrap 5, Laravel8",
  },
  {
    id: 3,
    imgURL: img3,
    title: "Nextbell Technologies",
    tech: "HTML5, CSS3, Bootstrap 5, Laravel8",
  },
  {
    id: 4,
    imgURL: img4,
    title: "HSDentals",
    tech: "HTML5, CSS3, Bootstrap 4, Laravel8",
  },
  {
    id: 5,
    imgURL: img5,
    title: "IOTO Matics",
    tech: "HTML5, CSS3, Bootstrap 4, Laravel8",
  },
  {
    id: 6,
    imgURL: img6,
    title: "Suraksha Developers",
    tech: "HTML5, CSS3, Bootstrap 5, Laravel8",
  },
  {
    id: 7,
    imgURL: img7,
    title: "Dev Global Services",
    tech: "HTML5, CSS3, Bootstrap 5, Laravel8",
  },
  {
    id: 8,
    imgURL: img8,
    title: "MahaRaju Health Care",
    tech: "HTML5, CSS3, Bootstrap 5, Laravel8",
  },
  {
    id: 9,
    imgURL: img9,
    title: "Global Star Edu",
    tech: "HTML5, CSS3, Bootstrap 5, Laravel8",
  },
  {
    id: 10,
    imgURL: img10,
    title: "OM Guest House",
    tech: "HTML5, CSS3, Bootstrap 5, Laravel8",
  },
  {
    id: 11,
    imgURL: img11,
    title: "Ruby Infra AP",
    tech: "HTML5, CSS3, Bootstrap 5, Laravel8",
  },
  {
    id: 12,
    imgURL: img12,
    title: "SAI Sakthi Video Presentation",
    tech: "Premier, After Effects, Photoshop",
  },
  {
    id: 13,
    imgURL: img13,
    title: "Sunrise Matrimony",
    tech: "Laravel, Mysql, Material-UI, PHP",
  },
  {
    id: 14,
    imgURL: img14,
    title: "Loyal Links Matrimony",
    tech: "Laravel, Mysql, Material-UI, PHP",
  },
  {
    id: 15,
    imgURL: img15,
    title: "Sree Sai Matrimony",
    tech: "Laravel, Mysql, Material-UI, PHP",
  },
  {
    id: 16,
    imgURL: img16,
    title: "LT Supercom India",
    tech: "PHP, Jquery, Bootstrap 4, HTML5",
  },
  {
    id: 17,
    imgURL: img17,
    title: "ARCEDO Responsive Website",
    tech: "HTML5, CSS3, Jquery, Bootstrap 4, Photoshop",
  },
  {
    id: 18,
    imgURL: img18,
    title: "JYOSTAR CMS Website",
    tech: "PHP, HTML5, Bootstrap 4, Photoshop",
  },
  {
    id: 19,
    imgURL: img19,
    title: "Sri Guru Matrimony",
    tech: "Laravel, Mysql, Material-UI, PHP",
  },
  {
    id: 20,
    imgURL: img20,
    title: "RR Matrimony Application",
    tech: "Laravel, Mysql, Material-UI, PHP",
  },
  {
    id: 21,
    imgURL: img21,
    title: "Quantum Life University",
    tech: "PHP, Codignator, HTML5, CSS3, Jquery",
  },
  {
    id: 22,
    imgURL: img22,
    title: "SAPARIYA Logo & Website",
    tech: "HTML5, CSS3, Jquery, Bootstrap 4, Photoshop",
  },
  {
    id: 23,
    imgURL: img23,
    title: "iDevice Iphone Repair",
    tech: "HTML5, CSS3, Bootstrap 4, PHP",
  },
  {
    id: 24,
    imgURL: img24,
    title: "MKS Developers Website",
    tech: "HTML5, CSS3, Bootstrap 4, PHP",
  },
  {
    id: 25,
    imgURL: img25,
    title: "NIDI ASSOCIATES",
    tech: "PHP, HTML5, CSS3, Bootstrap 4, Jquery",
  },
  {
    id: 26,
    imgURL: img26,
    title: "Life Research Academy",
    tech: "Joomla 3.0, PHP, Jquery, Bootstrap 3",
  },
  {
    id: 27,
    imgURL: img27,
    title: "Life Foundation University",
    tech: "PHP, HTML5, CSS3, Jquery",
  },
  {
    id: 28,
    imgURL: img28,
    title: "Veeksha Concept School",
    tech: "Bootstrap 3, HTML5, CSS3, Jquery",
  },
  {
    id: 29,
    imgURL: img29,
    title: "Moms Kitchen USA",
    tech: "PHP, HTML5, CSS3, Jquery",
  },
  {
    id: 30,
    imgURL: img30,
    title: "Vivekananda Residential",
    tech: "Bootstrap 3, HTML5, CSS3, Jquery",
  },
  {
    id: 31,
    imgURL: img31,
    title: "Amma Colours",
    tech: "HTML5, CSS3, Bootstrap 4, PHP",
  },
  {
    id: 32,
    imgURL: img32,
    title: "LOT Tracks",
    tech: "UX, UI, HTML5, CSS3, React",
  },
  {
    id: 33,
    imgURL: img33,
    title: "Palla Residency",
    tech: "Bootstrap 3, HTML5, CSS3, Jquery",
  },
  {
    id: 34,
    imgURL: img34,
    title: "SMR Teleservices",
    tech: "Bootstrap 3, HTML5, CSS3, Jquery",
  },
  {
    id: 35,
    imgURL: img35,
    title: "Sree Parivaar",
    tech: "Bootstrap 3, HTML5, CSS3, Jquery",
  },
  {
    id: 36,
    imgURL: img36,
    title: "MAASAI Planners & Constructions",
    tech: "PHP, HTML5, CSS3, Jquery",
  },
];

const Cardlayout = (project) => {
  return (
    <Card sx={{ maxWidth: 350, margin: "8px" }}>
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
          {/* mapping the ourprojects array with cardlayout function */}
          {ourProjects.map(Cardlayout)}
        </Box>
      </Box>
    </>
  );
};

export default Ourlatestprojects;
