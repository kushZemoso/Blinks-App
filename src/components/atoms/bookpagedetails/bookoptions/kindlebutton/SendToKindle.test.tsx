import React from 'react';
import {cleanup, render,screen} from '@testing-library/react';
import SendToKindle from './SendToKindle';
import '@testing-library/jest-dom';

afterEach(cleanup);
it('Checking the SendToKindle',()=>{
    render(<SendToKindle />);
    const btn=screen.getByRole("button");

    expect(btn).toBeInTheDocument();
});
