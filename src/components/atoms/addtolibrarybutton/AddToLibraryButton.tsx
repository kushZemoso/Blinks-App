import { Button } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import customStyle from "../../../Theme";
import { Link } from 'react-router-dom';

export const AddToLibraryButton = () => {
    const classes=customStyle();
  return (
      <Link to="/bookdetails">
      <Button startIcon={<AddIcon/>}
      className={classes.addToLibBtn}
      data-testid="AddToLibBtn">
            Add to library
      </Button>
      </Link>
  );
};
