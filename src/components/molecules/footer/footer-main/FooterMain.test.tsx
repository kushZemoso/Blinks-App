import React from "react";
import {cleanup, render,screen} from "@testing-library/react";
import FooterMain from "./FooterMain"; 
import { MemoryRouter } from 'react-router-dom';
import "@testing-library/jest-dom";
afterEach(cleanup);
test("Checking FooterMain",()=>{
  render(<MemoryRouter><FooterMain /></MemoryRouter>);
  expect(screen.getByTestId("FooterMain")).toBeInTheDocument();
});