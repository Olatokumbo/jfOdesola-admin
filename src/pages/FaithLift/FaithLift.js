import React, { useState } from "react";
import { TextField, Typography,Button } from "@material-ui/core";
import Navbar from "../../components/Navbar/Navbar";
import style from "./FaithLift.module.css";

const FaithLift = () => {
  const [header1, setHeader1] = useState("");
  const [header2, setHeader2] = useState("");
  const [card1, setCard1] = useState("");
  const [card2, setCard2] = useState("");
  return (
    <div className={style.faithLift}>
      <Navbar />
      <div className={style.content}>
        <Typography className={style.header}>FaithLift Section</Typography>
        <TextField
          className={style.input}
          variant="outlined"
          label="Header 1"
          name="header 1"
          multiline
          rows="3"
          value={header1}
          size="small"
          onChange={(e) => setHeader1(e.target.value)}
        />
        <TextField
          className={style.input}
          variant="outlined"
          label="Header 2"
          name="header 2"
          multiline
          rows="3"
          value={header2}
          size="small"
          onChange={(e) => setHeader2(e.target.value)}
        />
        <TextField
          className={style.input}
          variant="outlined"
          label="Card 1"
          name="card1"
          multiline
          rows="3"
          value={card1}
          size="small"
          onChange={(e) => setCard1(e.target.value)}
        />
        <TextField
          className={style.input}
          variant="outlined"
          label="Card 2"
          name="card2"
          multiline
          rows="3"
          value={card2}
          size="small"
          onChange={(e) => setCard2(e.target.value)}
        />
        <Button className={style.btn} variant="contained" color="primary">Save</Button>
      </div>
    </div>
  );
};

export default FaithLift;
