import { Grid } from "@mui/material";
import React from "react";
import { BannerOne } from "../../../atoms/banner/banner-item-one/BannerOne";
import { BannerTwo } from "../../../atoms/banner/banner-item-two/BannerTwo";

export const BannerItem = () => {
  return (
    <Grid container direction='column' rowSpacing='15px'>
      <Grid item><BannerOne/></Grid>
      <Grid item><BannerTwo/></Grid>
    </Grid>
  );
};
