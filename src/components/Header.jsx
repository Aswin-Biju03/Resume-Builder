import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";

function Header() {
  const introduction =
    "At rBuilder, we understand that a great career starts with a great resume. Our mission is to simplify the resume creation process for students, job seekers, and professionals by providing an intuitive and user-friendly tool that helps you craft personalized, visually appealing, and ATS-friendly resumes — without the need for design or formatting skills.";
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#896c22" }}>
        <Toolbar>
          <img
            width={"40px"}
            src="https://cdn-icons-png.flaticon.com/128/207/207114.png"
            alt=""
          />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={"/"} className="text-white text-decoration-none ms-3">
              {" "}
              rBuilder
            </Link>
          </Typography>
         <Tooltip title={introduction}> <Button color="inherit">About us</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
