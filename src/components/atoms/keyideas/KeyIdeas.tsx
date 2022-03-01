import { Typography } from '@mui/material';
import React from 'react';
import customStyle from "../../../Theme";

export const KeyIdeas = () => {
    const classes=customStyle();
  return (
    <Typography
    variant="body2"
    className={classes.keyIdeas}
    data-testid="KeyIdeas"
  >
    Get the key ideas from
  </Typography>
);
};
