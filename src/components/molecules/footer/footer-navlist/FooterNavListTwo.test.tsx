import React from "react";
import {screen,cleanup, render} from "@testing-library/react";
import "@testing-library/jest-dom";
import FooterNavListTwo from "./FooterNavListTwo";
afterEach(cleanup);
test("Checking Footer Nav List Two Rendering",()=>{
  render(<FooterNavListTwo />);
  expect(screen.getByTestId("FooterNavList2")).toBeInTheDocument();
});
