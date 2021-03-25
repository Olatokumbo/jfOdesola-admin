import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import style from "./MenuCard.module.css";
const MenuCard = ({ title, icon, url }) => {
  const TheIcon = icon;
  return (
    <Link to={url} style={{display: "contents"}}>
      <Grid item  xs={12} component={Card} className={style.card}>
        <CardContent className={style.cardContent}>
          <Typography className={style.title}>{title}</Typography>
          <TheIcon className={style.icon} />
        </CardContent>
      </Grid>
    </Link>
  );
};

export default MenuCard;
