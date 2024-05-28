import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import DropdownButton from './DropdownButton';

describe('DropdownButton', () => {
  it('renders a button', () => {
    render(<DropdownButton />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('calls the onClick function when the button is clicked', () => {
    const mockOnClick = jest.fn();//FIXME
    render(<DropdownButton onClick={mockOnClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });
});