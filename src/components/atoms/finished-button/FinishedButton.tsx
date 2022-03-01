import { Button } from '@mui/material';
import React from 'react';
import useStyle from '../../../Theme';


interface Handle{
    handleFinish:(item:string)=>void;
    name:string,
}
const FinishedButton = (props: Handle) => {
    const classes = useStyle();
  return (
    <Button
    variant="text"
    className={classes.readAgain}
    onClick={()=>{props.handleFinish(props.name)}}
    component="button"
    >
        Finished
    </Button>
  );
};

export default FinishedButton;
