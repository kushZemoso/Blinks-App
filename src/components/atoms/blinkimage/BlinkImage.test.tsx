import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import  BlinkImage from "./BlinkImage";
import React from 'react'
import '@testing-library/jest-dom';

it("Testing BannerImage",()=>{
    render(<MemoryRouter>< BlinkImage/></MemoryRouter>)
    expect(screen.getByAltText("appname")).toBeInTheDocument();
});