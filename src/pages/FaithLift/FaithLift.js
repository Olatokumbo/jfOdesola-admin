import React, { useState, useEffect } from "react";
import { TextField, Typography,Button } from "@material-ui/core";
import Navbar from "../../components/Navbar/Navbar";
import { connect } from "react-redux"; 
import * as actionCreator from "../../store/actions";
import style from "./FaithLift.module.css";

const FaithLift = ({getFaithLift, editFaithLift, data}) => {
  const [faithLiftHeader1, setFaithLiftHeader1] = useState("");
  const [faithLiftHeader2, setFaithLiftHeader2] = useState("");
  const [playListLink, setPlayList] = useState("");
  const [channelLink, setChannelLink] = useState("");
  useEffect(()=>{
    getFaithLift();
  })
  useEffect(()=>{
    setFaithLiftHeader1(data.faithLiftHeader1);
    setFaithLiftHeader2(data.faithLiftHeader2);
    setPlayList(data.playListLink);
    setChannelLink(data.channelLink)
  }, [data, getFaithLift])

  const updateFaithLiftDone = () =>{
    editFaithLift({faithLiftHeader1, faithLiftHeader2, playListLink, channelLink})
  }
  return (
    <div className={style.faithLift}>
      <Navbar />
      <div className={style.content}>
        <Typography className={style.header}>FaithLift Section</Typography>
        <TextField
          className={style.input}
          variant="outlined"
          label="FaithLift Header 1"
          name="faithLiftHeader1"
          multiline
          rows="3"
          value={faithLiftHeader1}
          size="small"
          onChange={(e) => setFaithLiftHeader1(e.target.value)}
        />
        <TextField
          className={style.input}
          variant="outlined"
          label="FaithLift Header 2"
          name="faithLiftHeader2"
          multiline
          rows="3"
          value={faithLiftHeader2}
          size="small"
          onChange={(e) => setFaithLiftHeader2(e.target.value)}
        />
        <TextField
          className={style.input}
          variant="outlined"
          label="YouTube Playlist Link"
          name="playListLink"
          value={playListLink}
          size="small"
          onChange={(e) => setPlayList(e.target.value)}
        />
        <TextField
          className={style.input}
          variant="outlined"
          label="YouTube Channel Link"
          name="channelLink"
          value={channelLink}
          size="small"
          onChange={(e) => setChannelLink(e.target.value)}
        />
        <Button className={style.btn} variant="contained" color="primary"  onClick={updateFaithLiftDone}>Save</Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    data: state.faithLift.faithLift
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    getFaithLift: ()=>dispatch(actionCreator.fetchFaithLift()),
    editFaithLift: (data)=>dispatch(actionCreator.updateFaithLift(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FaithLift);
