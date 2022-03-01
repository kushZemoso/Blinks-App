import React from 'react';
import {render,screen} from '@testing-library/react';
import BookTitle from './BookTitle';
import '@testing-library/jest-dom';

it('Checking the BookTitle',()=>{
   render(<BookTitle bookName="Harry potter" />);
   const textContent=screen.getByText("Harry potter");
   expect(textContent).toBeInTheDocument();
});
