import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Password from '../../src/Password';

describe('Password', () => {
  it('renders a password input with a visibility toggle', () => {
    render(<Password password="" setPassword={() => {}} label="Password" onBlur={() => {}} />);
    const passwordInput = screen.getByLabelText('Password');
    const visibilityToggle = screen.getByTestId('password-visibility-toggle');
    expect(passwordInput).toBeInTheDocument();
    expect(visibilityToggle).toBeInTheDocument();
  });

  it('toggles the visibility of the password input when the visibility toggle is clicked', () => {
    render(<Password password="" setPassword={() => {}} label="Password" onBlur={() => {}} />);
    const visibilityToggle = screen.getByTestId('password-visibility-toggle');
    fireEvent.click(visibilityToggle);
    const passwordInput = screen.getByLabelText('Password');
    expect(passwordInput).toHaveAttribute('type', 'text');
    fireEvent.click(visibilityToggle);
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  it('calls the setPassword function when the password input is changed', () => {
    const mockSetPassword = jest.fn();
    render(<Password password="" setPassword={mockSetPassword} label="Password" onBlur={() => {}} />);
    const passwordInput = screen.getByLabelText('Password');
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    expect(mockSetPassword).toHaveBeenCalledWith('testpassword');
  });
});