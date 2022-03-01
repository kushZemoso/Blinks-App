import React from 'react';
import CardMui from '../../organisms/cards/card-mui/CardMui';

interface Books {
    currentReading : {
        image : string;
        name: string;
        author: string;
        time: string;
        finished:boolean,
    }[];
    handleReadAgain:(item:string)=>void;
    handleFinish:(item:string)=>void;
}

const MainReading = (props : Books) => {
  return (
      <CardMui data-testid="MainReading" handleReadAgain={props.handleReadAgain} handleFinish={props.handleFinish}  details = {props.currentReading}/>
  );
};


export default MainReading;