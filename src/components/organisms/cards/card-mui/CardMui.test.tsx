/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { cleanup, render,screen } from "@testing-library/react";
import CardMui from "./CardMui";
import "@testing-library/jest-dom";
import {MemoryRouter} from 'react-router-dom';
import book1 from "../../../atoms/assets/book1.png";
afterEach(cleanup);
test("Checking card Mui Rendering", () => {
  render(<MemoryRouter>
    <CardMui
      details={[
        { image: book1, name: "Harry", author: "Potter", time: "24 minutes" ,finished:true},
      ]}
      handleReadAgain={()=>console.log("hello from card mui")}
      handleFinish={()=>console.log("hello from card mui")}
    /></MemoryRouter>
  );
  
  expect(screen.getByTestId("CardMui")).toBeInTheDocument();
});
