import { Card, Grid } from '@mui/material';
import React from 'react';
import CardHead from '../../../molecules/card/CardHead';
import customStyle from "../../../../Theme";
import { AddToLibraryButton } from '../../../atoms/addtolibrarybutton/AddToLibraryButton';

interface Mui{
    details:{
        image: string;
        name: string;
        author: string;
        time: string;
    }[];
}

export const CardAdd = (props:Mui) => {
 const classes=customStyle();
  const bookCards=props.details.map((e)=>(

    <Grid item xs={4}>
            <Card className={classes.cardStyle}>
                <Grid container direction="column">
                    <Grid item>         
                        <CardHead
                        image={e.image}
                        bookName={e.name}
                        authorName={e.author}
                        time={e.time}/>
                    </Grid>
                    <Grid item className={classes.cardAddGridTwo}>
                        <AddToLibraryButton/>
                    </Grid>
                </Grid>
            </Card>
    </Grid>
   ) );
    return(
        <Grid
      columnSpacing="20px"
      rowSpacing="25px"
      container
      className={classes.cardAddGridOne}
      data-testid="CardAdd"
    >
      {bookCards}
    </Grid>
  );
};
