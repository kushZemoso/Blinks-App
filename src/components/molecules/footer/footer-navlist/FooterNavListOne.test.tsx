import React from "react";
import {screen,cleanup, render} from "@testing-library/react";
import FooterNavListOne from "./FooterNavListOne";
import "@testing-library/jest-dom";
afterEach(cleanup);
test("Checking Footer Nav List One Rendering",()=>{
  render(<FooterNavListOne />);
  expect(screen.getByTestId("FooterNavList1")).toBeInTheDocument();
});
