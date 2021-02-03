import React, { useEffect } from "react";
import { Typography, Button } from "@material-ui/core";
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions";
import SlideshowCard from "../../components/SlideshowCard/SlideshowCard";
import url from "../../assets/images/slideshow_1.jpg" 
import style from "./Slideshow.module.css";

const Slideshow = ({ getslideshow }) => {
  useEffect(() => {
    getslideshow();
  }, [getslideshow]);
  return (
    <div className={style.slideShow}>
      <Typography className={style.header}>Slideshow</Typography>
      <div>
        <Button>Add Image</Button>
        <div className={style.cardContainer}>
            <SlideshowCard url={url}/>
            <SlideshowCard url={url}/>
            <SlideshowCard url={url}/>
            <SlideshowCard url={url}/>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.slideshow.slideshow,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getslideshow: () => dispatch(actionCreator.fetchSlideShow()),
    //   editFaithLift: (data)=>dispatch(actionCreator.updateFaithLift(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Slideshow);
