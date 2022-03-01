import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { BannerTwo } from "./BannerTwo";
import React from 'react'
import '@testing-library/jest-dom';



it("Testing BannerImage",()=>{
    render(<MemoryRouter>< BannerTwo/></MemoryRouter>)
    expect(screen.getByText("Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start.")).toBeInTheDocument();
});