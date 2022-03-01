import React from "react";
import {screen,cleanup, render} from "@testing-library/react";
import "@testing-library/jest-dom";
import FooterNavListThree from "./FooterNavListThree";
afterEach(cleanup);
test("Checking Footer Nav List Three Rendering",()=>{
  render(<FooterNavListThree />);
  expect(screen.getByTestId("FooterNavList3")).toBeInTheDocument();
});
