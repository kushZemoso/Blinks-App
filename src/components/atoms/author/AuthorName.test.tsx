import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AuthorName from "./AuthorName";
import React from 'react'
import '@testing-library/jest-dom';



it("Testing AddToLibraryButton",()=>{
    render(<MemoryRouter><AuthorName authName="Ram"/></MemoryRouter>)
    expect(screen.getByTestId("AuthorName")).toBeInTheDocument();
})