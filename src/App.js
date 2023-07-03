import React from "react";
import Box from "@mui/material/Box";
import HeaderOne from "./components/Header/HeaderFirst";
import SecondHeader from "./components/Header/SecondHeader";
// import Navbar from "./components/Header/Navbar";

// bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";

// pages imports
import About from "./pages/About";
import Whydgbits from "./pages/Whydgbits";
import Ourmethodology from "./pages/Ourmethodology";
import Projectmanagement from "./pages/Projectmanagement";
import Matrimonialapp from "./pages/Matrimonialapp";
import Realestateapp from "./pages/Realestateapp";
import Swiftcrm from "./pages/Swiftcrm";
import Modularcms from "./pages/Modularcms";
import Webdesignservice from "./pages/Webdesignservice";
import Webapps from "./pages/Webapps";
import Mobileapps from "./pages/Mobileapps";
import Uiux from "./pages/Uiux";
import Brandidentity from "./pages/Brandidentity";
import Emailnewsletter from "./pages/Emailnewsletter";
import Seosem from "./pages/Seosem";
import Socialmedia from "./pages/Socialmedia";
import Smswhatsapp from "./pages/Smswhatsapp";

import Dummy from "./components/Header/Dummy";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <HeaderOne />
        <SecondHeader />
        <Dummy />
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/about/why-dgbits" element={<Whydgbits />} />
          <Route
            exact
            path="/about/our-methodology"
            element={<Ourmethodology />}
          />
          <Route
            exact
            path="/about/project-management"
            element={<Projectmanagement />}
          />

          <Route
            exact
            path="/products/matrimonial-app"
            element={<Matrimonialapp />}
          />

          <Route
            exact
            path="/products/realestate-app"
            element={<Realestateapp />}
          />

          <Route exact path="/products/swift-crm" element={<Swiftcrm />} />
          <Route exact path="/products/modular-cms" element={<Modularcms />} />
          <Route
            exact
            path="/services/web-design"
            element={<Webdesignservice />}
          />
          <Route exact path="/services/web-apps" element={<Webapps />} />
          <Route exact path="/services/mobile-apps" element={<Mobileapps />} />
          <Route exact path="/services/ui-ux" element={<Uiux />} />
          <Route
            exact
            path="/digitalmarketing/branding"
            element={<Brandidentity />}
          />
          <Route
            exact
            path="/digitalmarketing/email-newsletter"
            element={<Emailnewsletter />}
          />

          <Route exact path="/digitalmarketing/seo-sem" element={<Seosem />} />
          <Route
            exact
            path="/digitalmarketing/social-media"
            element={<Socialmedia />}
          />

          <Route
            exact
            path="/digitalmarketing/sms-whatsapp"
            element={<Smswhatsapp />}
          />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
