/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import {render,screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
 import "@testing-library/jest-dom";
import { EnterprenurReading } from './EnterprenurReading';
it('Checking the Enterprenur Reading',()=>{
  render(<MemoryRouter> <EnterprenurReading value='to' /> </MemoryRouter>);
   expect(screen.getByTestId("Enterprenur")).toBeInTheDocument();
});
