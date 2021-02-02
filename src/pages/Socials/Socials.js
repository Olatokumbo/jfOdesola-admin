import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import Navbar from "../../components/Navbar/Navbar";
import { connect } from "react-redux"; 
import * as actionCreator from "../../store/actions";
import style from "./Socials.module.css";
const Socials = ({getSocials, editSocials, data }) => {
  const [facebookUrl, setFacebookUrl] = useState("");
  const [instagramUrl, setInstagramUrl] = useState("");

  useEffect(()=>{
    getSocials();
  }, [getSocials]);

  useEffect(()=>{
    setFacebookUrl(data.facebookUrl);
    setInstagramUrl(data.instagramUrl);
  }, [data, getSocials])

  const updateSocialsDone = () =>{
    editSocials({facebookUrl, instagramUrl})
  }
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
            name="igUrl"
            className={style.input}
            variant="outlined"
            label="Instagram Post URL"
            value={instagramUrl}
            size="small"
            onChange={(e) => setInstagramUrl(e.target.value)}
          />
          <Button variant="contained" className={style.btn} color="primary" onClick={updateSocialsDone}>
            Save
          </Button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    data: state.socials.socials
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    getSocials: ()=>dispatch(actionCreator.fetchSocials()),
    editSocials: (data)=>dispatch(actionCreator.updateSocials(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Socials);
