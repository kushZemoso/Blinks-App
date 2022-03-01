
import React from "react";
import { cleanup, render,screen} from "@testing-library/react";
import HeaderLeft from "./HeaderLeft";
import "@testing-library/jest-dom";
import {MemoryRouter} from 'react-router-dom';
afterEach(cleanup);
test("Checking header left Rendering", () => {
  render(<MemoryRouter>
    <HeaderLeft
        icon={true}
        handleChange={()=>console.log("hello from header Left")}
    /></MemoryRouter>
  );
  expect(screen. getByTestId("HeaderLeft")).toBeInTheDocument();
});
