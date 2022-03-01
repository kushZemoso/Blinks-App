import { Button } from '@mui/material';
import React from 'react';
import useStyle from '../../../Theme';
import NavDown from '../nav/nav-down/NavDown';
import NavUp from '../nav/nav-up/NavUp';


interface HeaderProps{
    icon:boolean,
    handleChange:()=>void,
  }

const Explore = (props:HeaderProps) => {
    const classes = useStyle();
  return (
      <Button
      endIcon = {props.icon?<NavUp/>:<NavDown/>}
      className={classes.exploreBtn}
      onClick={()=>{props.handleChange()}}
      >
          Explore
      </Button>
  );
};

export default Explore;
