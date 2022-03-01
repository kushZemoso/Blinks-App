import React from "react";
import {cleanup, render,screen} from "@testing-library/react";
import BlinkHighlight from "./BlinkHighlight";
import { MemoryRouter } from 'react-router-dom';
import "@testing-library/jest-dom";

afterEach(cleanup);
test("Checking BlinkHighlight",()=>{
  render( <BlinkHighlight />);
   expect(screen.getByTestId("blinkHighlight")).toBeInTheDocument();
});
