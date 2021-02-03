import React from "react";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions";
import style from "./SlideshowCard.module.css";

const SlideshowCard = ({ url, deleteSlideShow}) => {
  return (
    <div className={style.slideshowCard}>
      <div className={style.imageContainer}>
      <img src={url} alt="slideshow" />
      </div>
      <div className={style.action}>
        <IconButton size="small" onClick={()=>deleteSlideShow(url)}>
          <DeleteIcon style={{ color: "white" }} />
        </IconButton>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteSlideShow: (name) => dispatch(actionCreator.deleteSlideShow(name)),
  };
};

export default connect(null, mapDispatchToProps)(SlideshowCard);
