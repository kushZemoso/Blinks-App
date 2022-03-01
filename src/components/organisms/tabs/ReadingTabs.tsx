import { TabContext, TabPanel } from "@mui/lab";
import { Tab, Tabs } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import useStyle, { theme } from "../../../Theme";
import MainFinished from "../../templates/finished-books/MainFinished";
import MainReading from "../../templates/reading-books/MainReading";



interface Books{
  currentReading : {
    image : string;
    name : string;
    author : string;
    time : string;
    finished : boolean;
  }[],
  finishedReading:{
    image : string;
    name : string;
    author : string;
    time : string;
    finished : boolean;
  }[],
  handleFinish : (item:string)=>void;
  handleReadAgain : (item:string)=>void;
}


const ReadingTabs = (props : Books) => {
  const classes = useStyle();
  const [value, setValue] = useState("0");
  const [bool, setBool] = useState(false);

  const handleTabs = (event: React.SyntheticEvent, newValue: string) => {
    console.log(newValue);
    setValue(newValue);
    setBool(!bool);
  };
  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <Tabs
          value={value}
          onChange={handleTabs}
          className={classes.tabs}
          TabIndicatorProps={{ style: { backgroundColor: "#22C870" } }}
        >
          <Tab
            label="Currently reading"
            value="0"
            className={bool === false ? classes.activeTab : classes.tabStyle}
          />
          <Tab
            label="Finished"
            value="1"
            className={bool === true ? classes.activeTab : classes.tabStyle}
          />
        </Tabs>
        <TabPanel value="0" className={classes.tabPanel}>
            <MainReading 
            handleReadAgain = {props.handleReadAgain}
            handleFinish = {props.handleFinish}
            currentReading={props.currentReading}/>
        </TabPanel>
        <TabPanel value="1" className={classes.tabPanel}>
            <MainFinished
              handleReadAgain = {props.handleReadAgain}
              handleFinish = {props.handleFinish}
              finishedReading={props.finishedReading}
            />
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
};

export default ReadingTabs;
