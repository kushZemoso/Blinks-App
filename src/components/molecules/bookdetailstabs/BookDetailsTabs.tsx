import { TabContext, TabPanel } from "@mui/lab";
import { Tab, Tabs, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import customStyle, { theme } from "../../../Theme";

export const BookDetailsTabs = () => {
  const classes = customStyle();
  const [bool, setbool] = useState(false);
  const [value, setvalue] = useState("0");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setvalue(newValue);
    setbool(!bool);
  };
  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <Tabs
          value={value}
          onChange={handleChange}
          className={classes.bookDetalisTabsOne}
          TabIndicatorProps={{style:{backgroundColor:"#22C870"}}}
        >
          <Tab
            label="Synopsis"
            value="0"
            className={value==="0"? classes.activeTab : classes.tabStyle}
          />
          <Tab
            label="Who is it for?"
            value="1"
            className={value==="1" ? classes.activeTab : classes.tabStyle}
          />
          <Tab
            label="About the author"
            value="2"
            className={value==="2" ? classes.activeTab : classes.tabStyle}
          />
        </Tabs>
        <TabPanel value="0" className={classes.bookDetalisTabsTwo}>
        <Typography
            variant="body2"
            className={classes.bookDetalisTabsTypo}
          >
            Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.
          </Typography>
        </TabPanel>
        <TabPanel value="1" className={classes.bookDetalisTabsTwo}>
        <Typography
            variant="body2"
            className={classes.bookDetalisTabsTypo}
          >
            This book is for Entrepreneurs who are intrested in learning new things regarding Starups and all that they wanted to know about it.
          </Typography>
        </TabPanel>
        <TabPanel value="2" className={classes.bookDetalisTabsTwo}>
        <Typography
            variant="body2"
            className={classes.bookDetalisTabsTypo}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit officia quos, dolorum incidunt ratione facilis debitis ab qui, cumque exercitationem architecto amet voluptatem, 
          </Typography>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
};
