import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import BackButton from './BackButton';

describe('BackButton', () => {
  it('renders a button', () => {
    render(<BackButton />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('navigates back when the button is clicked', () => {
    const mockNavigate = jest.fn();// FIXME
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(mockNavigate);
    render(<BackButton />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});