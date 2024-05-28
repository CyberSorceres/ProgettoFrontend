import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Step2 from '../../src/Step2';

describe('Step2', () => {
  it('renders the form with correct labels and inputs', () => {
    render(<Step2 />);
    const nameLabel = screen.getByLabelText('Name');
    const nameInput = screen.getByRole('textbox', { name: 'Name' });
    const surnameLabel = screen.getByLabelText('Surname');
    const surnameInput = screen.getByRole('textbox', { name: 'Surname' });
    const submitButton = screen.getByRole('button', { name: 'Continue' });
    expect(nameLabel).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(surnameLabel).toBeInTheDocument();
    expect(surnameInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('calls the onSubmit function when the form is submitted', () => {
    const mockOnSubmit = jest.fn();//FIXME
    render(<Step2 onSubmit={mockOnSubmit} />);
    const nameInput = screen.getByRole('textbox', { name: 'Name' });
    const surnameInput = screen.getByRole('textbox', { name: 'Surname' });
    const submitButton = screen.getByRole('button', { name: 'Continue' });
    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.change(surnameInput, { target: { value: 'Doe' } });
    fireEvent.click(submitButton);
    expect(mockOnSubmit).toHaveBeenCalledWith({ name: 'John', surname: 'Doe' });
  });

  it('calls the updateData function when the name input is changed', () => {
    const mockUpdateData = jest.fn();//FIXME
    render(<Step2 updateData={mockUpdateData} />);
    const nameInput = screen.getByRole('textbox', { name: 'Name' });
    fireEvent.change(nameInput, { target: { value: 'John' } });
    expect(mockUpdateData).toHaveBeenCalledWith({ name: 'John' });
  });

  it('calls the updateData function when the surname input is changed', () => {
    const mockUpdateData = jest.fn();//FIXME
    render(<Step2 updateData={mockUpdateData} />);
    const surnameInput = screen.getByRole('textbox', { name: 'Surname' });
    fireEvent.change(surnameInput, { target: { value: 'Doe' } });
    expect(mockUpdateData).toHaveBeenCalledWith({ surname: 'Doe' });
  });
});