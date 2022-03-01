import React from "react";
import { Typography } from "@mui/material";
import useStyle from "../../../../../Theme";
interface NavItemName {
  name: string;
}
const NavItem = (props: NavItemName) => {
  const classes=useStyle();
  return (
    <>
      <Typography
        variant="body2"
        className={classes.navItem}
      >
        {props.name}
      </Typography>
    </>
  );
};

export default NavItem;