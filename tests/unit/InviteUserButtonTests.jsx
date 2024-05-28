import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import InviteUserButton from './InviteUserButton';

describe('InviteUserButton', () => {
  it('renders a button', () => {
    render(<InviteUserButton />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('calls the handleInviteUser function when the button is clicked', () => {
    const mockHandleInviteUser = jest.fn();//FIXME
    render(<InviteUserButton handleInviteUser={mockHandleInviteUser} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockHandleInviteUser).toHaveBeenCalled();
  });
});