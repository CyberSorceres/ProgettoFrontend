import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AddProjectButton from '../../src/AddProject';

describe('AddProjectButton', () => {
  it('renders a button', () => {
    render(<AddProjectButton />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('opens the modal when the button is clicked', () => {
    render(<AddProjectButton />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();
  });

  it('closes the modal when the close button is clicked', () => {
    render(<AddProjectButton />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const closeButton = screen.getByRole('button', { name: 'Close' });
    fireEvent.click(closeButton);
    const modal = screen.queryByRole('dialog');
    expect(modal).not.toBeInTheDocument();
  });

  it('submits the form when the submit button is clicked', async () => {
    render(<AddProjectButton />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const titleInput = screen.getByLabelText('Titolo');
    fireEvent.change(titleInput, { target: { value: 'Test Project' } });
    const submitButton = screen.getByRole('button', { name: 'Crea' });
    fireEvent.click(submitButton);
    await new Promise(resolve => setTimeout(resolve, 0)); // Wait for the API call to complete
    expect(api.addProject).toHaveBeenCalledWith({
      title: 'Test Project',
      description: '',
      ai: 'chatgpt',
    });
  });
});