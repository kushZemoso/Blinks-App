import { Typography } from '@mui/material';
import React from 'react';
import useStyle from '../../../Theme';


interface AuthDet{
    authName:string,
}
const AuthorName = (props: AuthDet) => {
    const classes=useStyle();
    return (<>
         <Typography 
         variant='body1'
         className={classes.authorNameTypography}
         data-testid="AuthorName"
         >
               {props.authName}
            </Typography>
    </>);
};

export default AuthorName;
