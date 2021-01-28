import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <AppBar className={style.navbar} position="static">
      <Toolbar>
        <Link to="/home" className={style.logo}>
          <Typography>
            Johnson Odesola (Admin)
          </Typography>
        </Link>
        <Button variant="contained" color="secondary">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
