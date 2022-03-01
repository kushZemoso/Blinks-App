import { Typography } from '@mui/material';
import React from 'react';
import useStyle from '../../../../Theme';

const FooterHighlight = () => {
    const classes = useStyle();
  return (
    <>
      <Typography
        variant="subtitle1"
        className={classes.footerHighlight}
        data-testid="highlight"
      >
        Big ideas in small packages Start learnign now
      </Typography>
    </>
  );
};


export default FooterHighlight;