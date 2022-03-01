import { Typography } from "@mui/material";
import customStyle from "../../../../Theme";
import React from 'react';
const BookDetailsTitle = () => {
  const classes=customStyle();
  return (
      <Typography
        className={classes.bookTitle}
        variant="h1"
        data-testid="BookDetails"
      >
        Beyond Entrepreneurship 2.0
      </Typography>
  );
};

export default BookDetailsTitle;
