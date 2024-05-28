import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Step1 from '../../src/Step1';

describe('Step1', () => {
  it('renders the form with correct labels and inputs', () => {
    render(<Step1 />);
    const emailLabel = screen.getByLabelText('Email');
    const emailInput = screen.getByRole('textbox', { name: 'Email' });
    const submitButton = screen.getByRole('button', { name: 'Continue' });
    expect(emailLabel).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('calls the onSubmit function when the form is submitted', () => {
    const mockOnSubmit = jest.fn();//FIXME
    render(<Step1 onSubmit={mockOnSubmit} />);
    const emailInput = screen.getByRole('textbox', { name: 'Email' });
    const submitButton = screen.getByRole('button', { name: 'Continue' });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);
    expect(mockOnSubmit).toHaveBeenCalledWith({ email: 'test@example.com' });
  });

  it('calls the updateData function when the email input is changed', () => {
    const mockUpdateData = jest.fn();//FIXME
    render(<Step1 updateData={mockUpdateData} />);
    const emailInput = screen.getByRole('textbox', { name: 'Email' });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(mockUpdateData).toHaveBeenCalledWith({ email: 'test@example.com' });
  });
});