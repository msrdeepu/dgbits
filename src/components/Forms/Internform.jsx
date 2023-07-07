import React from "react";

import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import BackupIcon from "@mui/icons-material/Backup";

const Internform = () => {
  return (
    <div>
      <form>
        <CardContent sx={{ padding: { xs: "50px", md: "85px" } }}>
          <br />
          <Typography gutterBottom variant="h5" component="div">
            Apply Now:
          </Typography>
          <TextField
            fullWidth
            label="Enter Your Full Name"
            type="text"
            id="fullWidth"
            sx={{ margin: "5px" }}
          />
          <br />
          <TextField
            fullWidth
            label="Mobile / Phone Number"
            type="number"
            id="fullWidth"
            sx={{ margin: "5px" }}
          />
          <br />
          <TextField
            fullWidth
            label="Enter Your Email"
            type="email"
            id="fullWidth"
            sx={{ margin: "5px" }}
          />
          <br />
          <TextField
            fullWidth
            label="Enter Your Town / City"
            type="text"
            id="fullWidth"
            sx={{ margin: "5px" }}
          />
          <br />
          <TextField
            fullWidth
            label="Salary Expectation"
            type="text"
            id="fullWidth"
            sx={{ margin: "5px" }}
          />
          <br />
          <TextField
            fullWidth
            label="Current Company"
            type="text"
            id="fullWidth"
            sx={{ margin: "5px" }}
          />{" "}
          <br />
          <label style={{ margin: "5px" }} for="cars">
            Position / Role
          </label>{" "}
          <br />
          <select
            style={{
              height: "50px",
              margin: "5px",
              width: "100%",
              borderRadius: "3px",
              borderStyle: "solid",
              borderColor: "rgb(196,196,196)",
            }}
            name="APPLY FOR"
            id="roles"
          >
            <option value="APPLY FOR">APPLY FOR</option>
            <option value="Assistant Manager - Business Development">
              Assistant Manager - Business Development
            </option>
            <option value="Business Development Executive">
              Business Development Executive
            </option>
            <option value="Content Writer">Content Writer</option>
            <option value="Web Designer">Graphic - Web Designer</option>
            <option value="HTML5 - Web Developer">HTML5 - Web Developer</option>
            <option value="PHP - Laravel Developer">
              PHP - Laravel Developer
            </option>
            <option value="React JS - React Native Developer">
              React JS - React Native Developer
            </option>
            <option value="Associate - Digital Marketing">
              Associate - Digital Marketing
            </option>
            <option value="Frontdesk Representative">
              Frontdesk Representative
            </option>
          </select>
          <br />
          <label sx={{ margin: "5px" }} htmlFor="">
            Upload your Resume
          </label>
          <br />
          <TextField
            fullWidth
            label=""
            type="file"
            id="fullWidth"
            sx={{ margin: "5px" }}
          />
          <br />
          <label sx={{ margin: "5px" }} htmlFor="">
            Upload your photo
          </label>{" "}
          <br />
          <TextField
            fullWidth
            label=""
            type="file"
            id="fullWidth"
            sx={{ margin: "5px" }}
          />
          <br />
          <Button variant="contained" endIcon={<BackupIcon />}>
            Apply Now
          </Button>
        </CardContent>
      </form>
    </div>
  );
};

export default Internform;
