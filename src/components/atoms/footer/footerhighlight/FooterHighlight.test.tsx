import { cleanup, render, screen } from "@testing-library/react";
import FooterHighlight from "./FooterHighlight";
import React from 'react'
import '@testing-library/jest-dom';

afterEach(cleanup);
test("Testing FooterHighlight",()=>{
    render(<FooterHighlight />);
    expect(screen.getByTestId("highlight")).toBeInTheDocument();
});