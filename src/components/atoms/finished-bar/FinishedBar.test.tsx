import React from 'react';
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import FinishedBar from './FinishedBar';

it('Checking the FinishedBar',()=>{
   render(<FinishedBar/>);
   const textContent=screen.getByTestId("FinishedBar");
   expect(textContent).toBeInTheDocument();
});
