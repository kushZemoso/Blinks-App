import { Typography } from '@mui/material';
import React from 'react';
import useStyle from '../../../Theme';

const FinishedBar = () => {
    const classes=useStyle();
  return (
    <Typography
      className={classes.finishedBar}
      data-testid="FinishedBar"
    />
  );
};
export default FinishedBar;
