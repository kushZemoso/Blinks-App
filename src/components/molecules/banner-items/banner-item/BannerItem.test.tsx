import React from "react";
import {cleanup, render,screen} from "@testing-library/react";

import '@testing-library/jest-dom';
import { BannerItem } from "./BannerItem";

afterEach(cleanup);
test("Testing BannerItems",()=>{
  render(<BannerItem />);
  const text=screen.getByText("Explore Books on entrepreneurship");
  expect(text).toBeInTheDocument();
});
