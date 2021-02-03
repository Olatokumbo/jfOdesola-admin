import React, { useState, useEffect } from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import * as actionCreator from "../../store/actions";
import { connect } from "react-redux"; 
import style from "./About.module.css";

const About = ({getAbout, editAbout, data}) => {
  useEffect(()=>{
    getAbout();
  }, [getAbout])

  useEffect(()=>{
    setAboutHeader1(data.aboutHeader1);
    setAboutHeader2(data.aboutHeader2);
    setAboutInfo(data.aboutInfo);
    setWisdomQuote(data.wisdomQuote)
  }, [data, getAbout])
  // const [data, setData] = useState({});
  const [aboutHeader1, setAboutHeader1] = useState("");
  const [aboutHeader2, setAboutHeader2] = useState("");
  const [aboutInfo, setAboutInfo] = useState("");
  const [wisdomQuote, setWisdomQuote] = useState("");

  const updateAboutDone = () =>{
    editAbout({aboutHeader1, aboutHeader2, aboutInfo, wisdomQuote })
  }
  return (
    <div className={style.about}>
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
          value={wisdomQuote}
          size="small"
          onChange={(e) => setWisdomQuote(e.target.value)}
        />
        <Button className={style.btn} variant="outlined" color="primary" onClick={updateAboutDone}>Save</Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    data: state.about.about
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    getAbout: ()=>dispatch(actionCreator.fetchAbout()),
    editAbout: (data)=>dispatch(actionCreator.updateAbout(data))
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (About);
