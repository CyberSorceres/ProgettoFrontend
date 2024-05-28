import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import EpicStory from './EpicStory';

describe('EpicStory', () => {
  it('renders a table', () => {
    render(<EpicStory />);
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  });

  it('renders a title in the table header', () => {
    render(<EpicStory />);
    const header = screen.getByRole('columnheader', { name: 'Title' });
    expect(header).toBeInTheDocument();
  });

  it('renders a description in the table header', () => {
    render(<EpicStory />);
    const header = screen.getByRole('columnheader', { name: 'Description' });
    expect(header).toBeInTheDocument();
  });

  

  it('renders a button to add a new story', () => {
    render(<EpicStory />);
    const button = screen.getByRole('button', { name: 'Add Story' });
    expect(button).toBeInTheDocument();
  });

  it('calls the handleAddStory function when the button is clicked', () => {
    const mockHandleAddStory = jest.fn();//FIXME
    render(<EpicStory handleAddStory={mockHandleAddStory} />);
    const button = screen.getByRole('button', { name: 'Add Story' });
    fireEvent.click(button);
    expect(mockHandleAddStory).toHaveBeenCalled();
  });
});