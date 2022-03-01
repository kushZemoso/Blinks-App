import React from "react";
import {cleanup, render,screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import { MainBanner } from "./MainBanner";

afterEach(cleanup);
test("Checking MainBanner",()=>{
  render(<MainBanner />);
  const text=screen.getByText("Explore Books on entrepreneurship");
  expect(text).toBeInTheDocument();
});
