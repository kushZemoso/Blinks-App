import { CardMedia, Grid } from "@mui/material";
import React from "react";
import useStyle from "../../../Theme";
import AuthorName from "../../atoms/author/AuthorName";
import BookTitle from "../../atoms/booktitle/BookTitle";
import ReadTime from "../read-time/ReadTime";

interface Data {
  image: string;
  bookName: string;
  authorName: string;
  time: string;
}
const CardHead = (props: Data) => {
  const classes = useStyle();
  return (
    <>
      <Grid item data-testid="CardHead">
        <CardMedia
          component="img"
          height="292px"
          width="294.1px"
          image={props.image}
          alt="Book"
        />
      </Grid>
      <Grid item>
        <BookTitle bookName={props.bookName} />
      </Grid>

      <Grid item className={classes.cardGridOne}>
        <AuthorName authName={props.authorName} />
      </Grid>
      <Grid item className={classes.cardGridTwo}>
        <ReadTime time={props.time} />
      </Grid>
    </>
  );
};

export default CardHead;
