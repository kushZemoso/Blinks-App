import { Card, Grid } from '@mui/material';
import React from 'react';
import useStyle from '../../../../Theme';
import CurrentBar from '../../../atoms/current-bar/CurrentBar';
import FinishedBar from '../../../atoms/finished-bar/FinishedBar';
import FinishedButton from '../../../atoms/finished-button/FinishedButton';
import ReadAgainButton from '../../../atoms/readagainbutton/ReadAgainButton';
import CardHead from '../../../molecules/card/CardHead';

interface Mui {
    details: {
      image: string;
      name: string;
      author: string;
      time: string;
      finished:boolean,
    }[];
    handleReadAgain:(item:string)=>void;
    handleFinish:(item:string)=>void;
}
const CardMui = (props : Mui) => {
    const classes = useStyle();
    const bookCards = props.details.map((e)=>(
        <Grid item key={e.name}>
            <Card className={classes.cardMuiCard}>
                <Grid container direction="column">
                    <Grid item>
                    <CardHead image={e.image} bookName={e.name} authorName={e.author} time={e.time}/>
                    </Grid>
                    <Grid item>
                    { !e.finished?(<><FinishedButton name={e.name} handleFinish={props.handleFinish} /><CurrentBar /></>):(<> <ReadAgainButton name={e.name} handleReadAgain={props.handleReadAgain} /><FinishedBar /></>)}
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    ));




  return (
    <Grid  data-testid="CardMui" columnSpacing="32px" className={classes.cardMuiGrid} rowSpacing="32px" container key="name">
      {bookCards}
    </Grid>
  );
};


export default CardMui;
