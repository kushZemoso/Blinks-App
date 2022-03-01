import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyle from '../../../../Theme';

const MyLibrary = () => {
    const classes = useStyle();
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Typography variant = "body1" className={classes.myLibrary} data-testid="library">
          My Library
      </Typography>
      </Link>
  );
};


export default MyLibrary;