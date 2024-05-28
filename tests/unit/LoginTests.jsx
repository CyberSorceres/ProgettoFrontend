import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Login from '../../src/Login';

describe('Login', () => {
  it('renders a form with a username and password input, and a submit button', () => {
    render(<Login />);
    const form = screen.getByRole('form');
    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Login' });
    expect(form).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('calls the handleLogin function when the form is submitted', () => {
    const mockHandleLogin = jest.fn();//FIXME
    render(<Login handleLogin={mockHandleLogin} />);
    const form = screen.getByRole('form');
    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.submit(form);
    expect(mockHandleLogin).toHaveBeenCalledWith('testuser', 'testpassword');
  });
});