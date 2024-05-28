import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Registrazione from '../../src/Registrazione';

describe('Registrazione', () => {
  it('renders the registration form', () => {
    render(<Registrazione />);
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const registerButton = screen.getByRole('button', { name: 'Register' });
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });

  it('calls the handleSubmit function when the register button is clicked', () => {
    const mockHandleSubmit = jest.fn();//FIXME
    render(<Registrazione handleSubmit={mockHandleSubmit} />);
    const registerButton = screen.getByRole('button', { name: 'Register' });
    fireEvent.click(registerButton);
    expect(mockHandleSubmit).toHaveBeenCalled();
  });

  it('calls the updateFormData function when the email input is changed', () => {
    const mockUpdateFormData = jest.fn();//FIXME
    render(<Registrazione updateFormData={mockUpdateFormData} />);
    const emailInput = screen.getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(mockUpdateFormData).toHaveBeenCalledWith({ email: 'test@example.com' });
  });

  it('calls the updateFormData function when the password input is changed', () => {
    const mockUpdateFormData = jest.fn();//FIXME
    render(<Registrazione updateFormData={mockUpdateFormData} />);
    const passwordInput = screen.getByLabelText('Password');
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    expect(mockUpdateFormData).toHaveBeenCalledWith({ password: 'testpassword' });
  });
});