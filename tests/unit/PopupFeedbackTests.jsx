import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import PopupFeedback from '../../src/PopupFeedback';

describe('PopupFeedback', () => {
  it('renders a button with a feedback message', () => {
    render(<PopupFeedback message="Test message" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Test message');
  });

  it('calls the handleClick function when the button is clicked', () => {
    const mockHandleClick = jest.fn();//FIXME
    render(<PopupFeedback message="Test message" handleClick={mockHandleClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockHandleClick).toHaveBeenCalled();
  });
});