import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import DeleteUser from './DeleteUser';

describe('DeleteUser', () => {
  it('renders a button', () => {
    render(<DeleteUser />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('calls the handleDelete function when the button is clicked', () => {
    const mockHandleDelete = jest.fn();//FIXME
    render(<DeleteUser handleDelete={mockHandleDelete} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockHandleDelete).toHaveBeenCalled();
  });
});