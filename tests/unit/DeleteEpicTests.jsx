import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import DeleteEpic from './DeleteEpic';

describe('DeleteEpic', () => {
  it('renders a button', () => {
    render(<DeleteEpic />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('calls the handleDelete function when the button is clicked', () => {
    const mockHandleDelete = jest.fn();//FIXME
    render(<DeleteEpic handleDelete={mockHandleDelete} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockHandleDelete).toHaveBeenCalled();
  });
});