import { Typography } from '@mui/material';
import React from 'react';
import useStyle from '../../../../../Theme';

interface NavHeadName{
    name:string
}

const NavHead = (props: NavHeadName) => {
    const classes = useStyle();
  return (
    <>
        <Typography
        variant = "body1"
        className={classes.navHead}
        >
            {props.name}
        </Typography>
    </>
  );
};

export default NavHead;
