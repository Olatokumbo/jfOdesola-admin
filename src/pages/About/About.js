import React, { useState } from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import Navbar from "../../components/Navbar/Navbar";
import style from "./About.module.css";

const About = () => {
  // const [data, setData] = useState({});
  const [aboutHeader1, setAboutHeader1] = useState("");
  const [aboutHeader2, setAboutHeader2] = useState("");
  const [aboutInfo, setAboutInfo] = useState("");
  const [wisdomQuotes, setWisdomQuotes] = useState("");

  return (
    <div className={style.about}>
      <Navbar />
      <div className={style.content}>
        <Typography className={style.header}>About Section</Typography>
        <TextField
          className={style.input}
          variant="outlined"
          label="About Header1"
          name="aboutHeader1"
          multiline
          rows="3"
          value={aboutHeader1}
          size="small"
          onChange={(e) => setAboutHeader1(e.target.value)}
        />
        <TextField
          className={style.input}
          variant="outlined"
          label="About Header2"
          name="aboutHeader2"
          multiline
          rows="3"
          value={aboutHeader2}
          size="small"
          onChange={(e) => setAboutHeader2(e.target.value)}
        />
        <TextField
          className={style.input}
          variant="outlined"
          label="About Info"
          name="aboutInfo"
          multiline
          rows="10"
          value={aboutInfo}
          size="small"
          onChange={(e) => setAboutInfo(e.target.value)}
        />
        <TextField
          className={style.input}
          variant="outlined"
          label="Wisdom Quotes"
          name="wisdomQuotes"
          value={wisdomQuotes}
          size="small"
          onChange={(e) => setWisdomQuotes(e.target.value)}
        />
        <Button className={style.btn} variant="outlined" color="primary">Save</Button>
      </div>
    </div>
  );
};

export default About;
