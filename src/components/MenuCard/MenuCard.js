import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import style from "./MenuCard.module.css";
const MenuCard = ({title, icon}) => {
    const TheIcon = icon;
  return (
    <Grid item component={Card} xs={12} md={3} className={style.card}>
      <CardContent className={style}>
            <Typography className={style.title}>{title}</Typography>
            <TheIcon className={style.icon}/>
      </CardContent>
    </Grid>
  );
};

export default MenuCard;
