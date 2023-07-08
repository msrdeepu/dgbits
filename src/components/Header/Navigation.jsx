import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Box from "@mui/material/Box";

// mui imports

const Navigation = () => {
  return (
    // <AppBar>
    <div
      style={{
        backgroundColor: "#0093E9",
        backgrounImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
        fontWeight: 500,
        lineHeight: 1.6,
        color: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <Navbar expand="lg" className="text-white" style={{ color: "white" }}>
        <Container>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Navbar.Brand className="text-white" href="#home">
              DGBITS
            </Navbar.Brand>
          </Box>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="DGBITS"
                id="basic-nav-dropdown"
                className="text-white"
              >
                <NavDropdown.Item href="/about">About us</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Why DGBITS?
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Our Methodology
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Project Mangement
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="PPRODUCTS"
                id="basic-nav-dropdown"
                className="text-white"
              >
                <NavDropdown.Item href="#action/3.1">
                  DGBITS Matrimonial App
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  DGBITS Realestate App
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  DGBITS Swift CRM
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  DGBITS Modular CMS
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="DEVELOPMENT SERVICES"
                id="basic-nav-dropdown"
                className="text-white"
              >
                <NavDropdown.Item href="#action/3.1">
                  Website Design
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Web Applications
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Mobile Apps
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  UI/UX For Apps
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="DESIGN SERVICES" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Branding & Idntity
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Email & Newsletter
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  SMS & WhatsApp
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  SEO & SEM
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Social Media
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="HOSTING"
                id="basic-nav-dropdown"
                className="text-white"
              >
                <NavDropdown.Item href="#action/3.1">
                  Annual Maintinence
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Web Hosting Service
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Domain Registration
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">CAREERS</Nav.Link>
              <Nav.Link href="#home">OUR LATEST PROJECTS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    // </AppBar>
  );
};

export default Navigation;
