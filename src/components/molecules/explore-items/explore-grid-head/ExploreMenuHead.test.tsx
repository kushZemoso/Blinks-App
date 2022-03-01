import React from "react";
import {cleanup, render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import { ExploreMenuHead } from "./ExploreMenuHead";
afterEach(cleanup);
test("Checking ExploreMenuHead",()=>{
  render(<ExploreMenuHead />);
  const text=screen.getByText("Explore by category");
  expect(text).toBeInTheDocument();
});
