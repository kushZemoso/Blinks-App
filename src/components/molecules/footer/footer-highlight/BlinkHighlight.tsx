import { Grid } from '@mui/material';
import React from 'react';
import useStyle from '../../../../Theme';
import BlinkImage from '../../../atoms/blinkimage/BlinkImage';
import FooterHighlight from '../../../atoms/footer/footerhighlight/FooterHighlight';

const BlinkHighlight = () => {
    const classes = useStyle();
  return (
    <Grid
    container
    className={classes.blinkHighlightGridOne}
    data-testid="blinkHighlight"
    >
        <Grid item className={classes.blinkHighlightGridTwo}>
            <BlinkImage/>
        </Grid>
        <Grid item className={classes.blinkHighlightGridThree}>
            <FooterHighlight/>
        </Grid>


    </Grid>
  );
};


export default BlinkHighlight;