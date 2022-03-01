import React from 'react';
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import CurrentBar from './CurrentBar';

it('Checking the CurrentBar',()=>{
   render(<CurrentBar/>);
   const textContent=screen.getByTestId("CurrentBar");
   expect(textContent).toBeInTheDocument();
});
