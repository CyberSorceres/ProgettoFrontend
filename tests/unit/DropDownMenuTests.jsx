import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import DropdownMenu from './DropDownMenuTests';

describe('DropdownMenu', () => {
  it('renders a button', () => {
    render(<DropdownMenu />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('opens the dropdown menu when the button is clicked', () => {
    render(<DropdownMenu />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const dropdownMenu = screen.getByRole('menu');
    expect(dropdownMenu).toBeInTheDocument();
  });

  it('closes the dropdown menu when the button is clicked again', () => {
    render(<DropdownMenu />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    fireEvent.click(button);
    const dropdownMenu = screen.queryByRole('menu');
    expect(dropdownMenu).not.toBeInTheDocument();
  });

  it('calls the handleClick function when an item is clicked', () => {
    const mockHandleClick = jest.fn();//FIXME
    render(<DropdownMenu handleClick={mockHandleClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const item = screen.getByRole('menuitem');
    fireEvent.click(item);
    expect(mockHandleClick).toHaveBeenCalledWith(expect.any(Object));
  });
});