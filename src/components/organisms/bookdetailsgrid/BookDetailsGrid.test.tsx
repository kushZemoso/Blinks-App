import React from "react";
import {cleanup, render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import {MemoryRouter} from 'react-router-dom';
import { BookDetailsGrid } from "./BookDetailsGrid";
afterEach(cleanup);
test("Checking Book Details Rendering",()=>{
  render(<MemoryRouter><BookDetailsGrid btn={true} handleFinish={()=>console.log("Hello")} /></MemoryRouter>);
  expect( screen.getByText("Finished Reading")).toBeInTheDocument();
});
