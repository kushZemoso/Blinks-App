import React from "react";
import {MemoryRouter} from 'react-router-dom';
import { cleanup, render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import book1 from "../../../atoms/assets/book1.png";
import { CardAdd } from "./CardAdd";
afterEach(cleanup);
test("Checking card Add Rendering", () => {
 render(<MemoryRouter>
    <CardAdd
      details={[
        { image: book1, name: "Harry", author: "Potter", time: "24 minutes" },
      ]}
    /></MemoryRouter>
  );
  expect(screen.getByTestId("CardAdd")).toBeInTheDocument();
});
