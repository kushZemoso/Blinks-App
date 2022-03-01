import { cleanup, render, screen } from "@testing-library/react";
import { KeyIdeas } from "./KeyIdeas";
import React from 'react'
import '@testing-library/jest-dom';

afterEach(cleanup);
test("Testing KeyIdeas",()=>{
    render(<KeyIdeas/>);
    expect(screen.getByTestId("KeyIdeas")).toBeInTheDocument();
});