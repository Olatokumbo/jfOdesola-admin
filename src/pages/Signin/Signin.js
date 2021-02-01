import React from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import style from "./Signin.module.css";
const Signin = ({error}) => {
  return (
    <div className={style.main}>
      <div className={style.signinContainer}>
        <div className={style.left}></div>
        <div className={style.right}>
          <div className={style.brand}>
            <Typography variant="h6">JF Odesola (Admin)</Typography>
          </div>
          <form className={style.form}>
            <TextField
              name="email"
              type="email"
              className={style.input}
              variant="outlined"
              label="Email"
              size="small"
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              name="password"
              type="password"
              className={style.input}
              variant="outlined"
              label="Password"
              size="small"
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button
              type="submit"
              className={style.signin}
              variant="contained"
              size="small"
              color="primary"
            >
              Sign In
            </Button>
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          </form>
        </div>
      </div>
    </div>
  );
};
export default connect()(Signin);
