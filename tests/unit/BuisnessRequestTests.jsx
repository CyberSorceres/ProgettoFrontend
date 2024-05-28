import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import BusinessRequest from './BusinessRequest';

describe('BusinessRequest', () => {
  it('renders a form with a textarea and a submit button', () => {
    render(<BusinessRequest />);
    const form = screen.getByRole('form');
    const textarea = screen.getByLabelText('Requisiti di Business');
    const submitButton = screen.getByRole('button', { name: 'Invia Requisiti' });
    expect(form).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('calls the handleSubmit function when the form is submitted', () => {
    const mockHandleSubmit = jest.fn();//FIXME
    render(<BusinessRequest handleSubmit={mockHandleSubmit} />);
    const form = screen.getByRole('form');
    const textarea = screen.getByLabelText('Requisiti di Business');
    fireEvent.change(textarea, { target: { value: 'Test Requisiti' } });
    fireEvent.submit(form);
    expect(mockHandleSubmit).toHaveBeenCalledWith('Test Requisiti');
  });
});