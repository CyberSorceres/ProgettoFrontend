import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import NavigationBar from '../../src/NavigationBar';

describe('NavigationBar', () => {
  it('renders a navbar with links to different pages', () => {
    render(<NavigationBar />);
    const navbar = screen.getByRole('navigation');
   
    const projectsLink = screen.getByRole('link', { name: 'Projects' });

    const notificationsLink = screen.getByRole('link', { name: 'Notifications' });
    expect(navbar).toBeInTheDocument();

    expect(projectsLink).toBeInTheDocument();

    expect(notificationsLink).toBeInTheDocument();
  });

  it('calls the handlePageChange function when a link is clicked', () => {
    const mockHandlePageChange = jest.fn();//FIXME
    render(<NavigationBar handlePageChange={mockHandlePageChange} />);
    const projectsLink = screen.getByRole('link', { name: 'Projects' });
    fireEvent.click(projectsLink);
    expect(mockHandlePageChange).toHaveBeenCalledWith('projects');
  });
});