import { Card, CardMedia } from '@mui/material';
import React from 'react';
import appname from "../assets/appname.png"
const BlinkImage = () => {
  return (
      <Card>
          <CardMedia
            component="img"
            height="26px"
            width="124px"
            image={appname}
            alt="appname"
          />
      </Card>
  );
};

export default BlinkImage
