import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { BannerOne } from "./BannerOne";
import React from 'react'
import '@testing-library/jest-dom';



it("Testing BannerImage",()=>{
    render(<MemoryRouter>< BannerOne/></MemoryRouter>)
    expect(screen.getByText("Explore Books on entrepreneurship")).toBeInTheDocument();
});