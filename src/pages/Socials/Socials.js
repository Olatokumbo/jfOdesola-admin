import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import Navbar from "../../components/Navbar/Navbar";
import style from "./Socials.module.css";
const Socials = () => {
  const [facebookUrl, setFacebookUrl] = useState("");
  const [twitterUrl, setTwitterUrl] = useState("");
  const [instagramUrl, setInstagramUrl] = useState("");
  return (
    <div socials>
      <Navbar />
      <div className={style.content}>
        <form className={style.form}>
          <TextField
            name="fbUrl"
            className={style.input}
            variant="outlined"
            label="Facebook Post URL"
            value={facebookUrl}
            size="small"
            onChange={(e) => setFacebookUrl(e.target.value)}
          />
          <TextField
            name="twUrl"
            className={style.input}
            variant="outlined"
            label="Twitter URL"
            value={twitterUrl}
            size="small"
            onChange={(e) => setTwitterUrl(e.target.value)}
          />
          <TextField
            name="igUrl"
            className={style.input}
            variant="outlined"
            label="Instagram Post URL"
            value={instagramUrl}
            size="small"
            onChange={(e) => setInstagramUrl(e.target.value)}
          />
          <Button variant="contained" className={style.btn} color="primary">
            Save
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Socials;
