import { Grid } from '@mui/material';
import React from 'react';
import customStyle from '../../../../Theme';
import { BannerImage } from '../../../atoms/banner/banner-image/BannerImage';
import { BannerItem } from '../banner-item/BannerItem';

export const MainBanner = () => {
    const classes=customStyle();
  return (
      <Grid container className={classes.mainBanner} >
          <Grid item className={classes.mainBannerItem}>
                <BannerItem/>
          </Grid>
          <Grid item>
                <BannerImage/>
          </Grid>

      </Grid>
  );
};
