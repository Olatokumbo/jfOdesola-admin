import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actionCreator from "../../store/actions";
import style from "./Navbar.module.css";

const Navbar = ({logout}) => {
  return (
    <AppBar className={style.navbar} position="static">
      <Toolbar>
        <Link to="/home" className={style.logo}>
          <Typography>
            Johnson Odesola (Admin)
          </Typography>
        </Link>
        <Button variant="contained" color="secondary" onClick={logout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

const mapDispatchToProps = (dispatch) =>{
  return {
    logout: ()=>dispatch(actionCreator.startSignout())
  }
} 

export default connect (null, mapDispatchToProps)(Navbar);
