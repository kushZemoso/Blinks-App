import { Typography } from '@mui/material';
import React from 'react';
import customStyle from "../../../Theme";

export const Heading = () => {
    const classes=customStyle();
    return (
        <Typography
          className={classes.head}
          variant="h3"
        >
          Trending blinks
        </Typography>
    );
};
