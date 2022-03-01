import { Grid, Typography } from "@mui/material";
import React from "react";
import useStyle from "../../../Theme";
import Timer from "../../atoms/timer/Timer";

interface TimeDet {
  time: string;
}
const ReadTime = (props: TimeDet) => {
    const classes = useStyle();
  return (
    <Grid container className={classes.readTimeTopography}>
      <Grid item>
        <Timer />
      </Grid>
      <Grid item>
        <Typography variant="caption">{props.time}</Typography>
      </Grid>
    </Grid>
  );
};

export default ReadTime;
