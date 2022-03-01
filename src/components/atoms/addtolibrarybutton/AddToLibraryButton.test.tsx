import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { AddToLibraryButton } from "./AddToLibraryButton"
import React from 'react'
import '@testing-library/jest-dom';


it("Testing AddToLibraryButton",()=>{
    render(<MemoryRouter><AddToLibraryButton/></MemoryRouter>)
    expect(screen.getByTestId("AddToLibBtn")).toBeInTheDocument();
})