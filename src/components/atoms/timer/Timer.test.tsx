import { cleanup, render, screen } from "@testing-library/react";
import Timer from "./Timer";
import React from 'react'
import '@testing-library/jest-dom';

afterEach(cleanup);
test("Testing Timer",()=>{
    render(<Timer/>);
    expect(screen.getByTestId("Timer")).toBeInTheDocument();
});