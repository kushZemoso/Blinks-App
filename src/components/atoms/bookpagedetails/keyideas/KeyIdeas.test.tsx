import React from 'react';
import {render,screen} from '@testing-library/react';
import KeyIdeas from './KeyIdeas';
import '@testing-library/jest-dom';

it('Checking the KeyIdeas',()=>{
   render(<KeyIdeas />);
   const textContent=screen.getByText("Get the key ideas from");
   expect(textContent).toBeInTheDocument();
});
