import { cleanup, render, screen } from "@testing-library/react";
import NavUp from "./NavUp";
import React from 'react'
import '@testing-library/jest-dom';

afterEach(cleanup);
test("Testing FooterHighlight",()=>{
    render(<NavUp />);
    expect(screen.getByTestId("NavUp")).toBeInTheDocument();
});