import {Grid, Toolbar } from '@mui/material';
import React from 'react';
import AvatarDrop from "../../../molecules/avatar/AvatarDrop"
import HeaderLeft from '../header-left/HeaderLeft';

interface ToolbarHeaderProps{
  icon:boolean,
  handleChange:()=>void,
}

const ToolBarHeader = (props:ToolbarHeaderProps) => {
  return (
      <Toolbar>
          <Grid container columnGap='160px' justifyContent='center'  data-testid="ToolBarHeader">
            <Grid item>
                <HeaderLeft icon={props.icon} handleChange={props.handleChange} />
            </Grid>
            <Grid item>
                <AvatarDrop/>
            </Grid>
          </Grid>
      </Toolbar>
  );
};

export default ToolBarHeader;