import React from "react";
import { Grid } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import SlideshowIcon from '@material-ui/icons/Slideshow';
// import MenuBookIcon from '@material-ui/icons/MenuBook';
import MovieIcon from '@material-ui/icons/Movie';
// import PhotoIcon from '@material-ui/icons/Photo';
import ForumIcon from '@material-ui/icons/Forum';
import MenuCard from "../../components/MenuCard/MenuCard";
import style from "./Home.module.css";
const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.content}>
        <Grid container justify="center" className={style.grid}>
          <MenuCard title="Slideshow" icon={SlideshowIcon} url="/slideshow"/>
          <MenuCard title="About" icon={PersonIcon} url="/about"/>
          {/* <MenuCard title="Books" icon={MenuBookIcon} url="/books"/> */}
          <MenuCard title="Faith Lift" icon={MovieIcon} url="/faithlift" />
          {/* <MenuCard title="Gallery" icon={PhotoIcon} url="/gallery"/> */}
          <MenuCard title="Socials" icon={ForumIcon} url="/socials"/>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
