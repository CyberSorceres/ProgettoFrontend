import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RejectProject from '../../src/RejectProject';

describe('RejectProject', () => {
  it('calls the handleClick function when the button is clicked', () => {
    const mockHandleClick = jest.fn();//FIXME
    render(<RejectProject handleClick={mockHandleClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockHandleClick).toHaveBeenCalled();
  });
});