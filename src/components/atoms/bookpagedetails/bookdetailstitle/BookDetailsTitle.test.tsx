import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookDetailsTitle from "./BookDetailsTitle";
import '@testing-library/jest-dom';
import React from 'react'

it("Testing BookDetailsTitle",()=>{
    render(<BookDetailsTitle />);
   const textContent=screen.getByText("Beyond Entrepreneurship 2.0");

   expect(textContent).toBeInTheDocument();
});