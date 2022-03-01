import { Button } from '@mui/material';
import React from 'react';
import useStyle from '../../../Theme';

interface Handle{
    handleReadAgain:(item:string)=>void;
    name:string,
}

const ReadAgainButton = (props:Handle) => {
    const classes = useStyle();
  return (
    <Button
    variant="text"
    className={classes.readAgain}
    onClick={()=>{props.handleReadAgain(props.name)}}
  >
    Read Again
  </Button>
  );
};
export default ReadAgainButton;
