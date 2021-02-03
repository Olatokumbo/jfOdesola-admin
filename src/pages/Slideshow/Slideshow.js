import React, { useEffect, useState } from "react";
import { Typography, Button } from "@material-ui/core";
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions";
import SlideshowCard from "../../components/SlideshowCard/SlideshowCard";
import CircularProgress from '@material-ui/core/CircularProgress';
// import url from "../../assets/images/slideshow_1.jpg";
import style from "./Slideshow.module.css";

const Slideshow = ({ getslideshow, addSlideShow, data, isLoading }) => {
  const [imageUpload, setImageUpload] = useState(null);
  useEffect(() => {
    getslideshow();
  }, [getslideshow]);
  const submitImage = (e) =>{
      e.preventDefault();
      addSlideShow(imageUpload);
      e.target.elements.imageUpload.value=null;
     setImageUpload(null)
  }
  return (
    <div className={style.slideShow}>
      <Typography className={style.header}>Slideshow</Typography>
      <form className={style.uploadContainer} onSubmit={submitImage}>
        <input
          type="file"
          name="imageUpload"
          accept="image/x-png,image/gif,image/jpeg"
          onChange={(e) => setImageUpload(e.target.files[0])}
        />
        <Button type="submit" disabled={!imageUpload} variant="contained" color="primary">
          Upload
        </Button>
        { isLoading ? <CircularProgress/> : <div></div>}
      </form>
      <div className={style.cardContainer}>
       {data.map((images, index)=><SlideshowCard key={index} url={images}/>)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.slideshow.slideshow,
    isLoading: state.slideshow.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getslideshow: () => dispatch(actionCreator.fetchSlideShow()),
    addSlideShow: (image) => dispatch(actionCreator.addSlideShow(image))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Slideshow);
