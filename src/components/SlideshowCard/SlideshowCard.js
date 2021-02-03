import React from "react";
import { IconButton } from "@material-ui/core"; 
import style from "./SlideshowCard.module.css";


const SlideshowCard = ({url}) =>{
    return(
        <div className={style.slideshowCard}>
            <img src={url} alt="slideshow"/>
            <div className={style.action}>
                <IconButton></IconButton>
            </div>
        </div>
    )
}

export default SlideshowCard;