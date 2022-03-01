import { Typography } from '@mui/material';
import React from 'react';
import useStyle from '../../../Theme';


interface BookDet{
    bookName:string,
}
const BookTitle = (props:BookDet) => {
    const classes = useStyle();
  return (
        <>
            <Typography
                variant='subtitle1'
                className={classes.bookTitleOne}
            >
                {props.bookName}
            </Typography>
        </>
  );
};


export default BookTitle;