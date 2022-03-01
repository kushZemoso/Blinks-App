import { cleanup, render, screen } from "@testing-library/react";
import NavDown from "./NavDown";
import React from 'react'
import '@testing-library/jest-dom';

afterEach(cleanup);
test("Testing NavDown",()=>{
    render(<NavDown/>);
    expect(screen.getByTestId("NavDown")).toBeInTheDocument();
});