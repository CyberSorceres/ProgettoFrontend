import React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationPage from '../../src/NotificationPage';

describe('NotificationPage', () => {
  it('renders a notification container', () => {
    render(<NotificationPage />);
    const notificationContainer = screen.getByTestId('notification-container');
    expect(notificationContainer).toBeInTheDocument();
  });

  it('renders the correct number of notifications', () => {
    const notificationsData = [
      { title: 'Notification 1', summary: 'Summary 1' },
      { title: 'Notification 2', summary: 'Summary 2' },
    ];
    render(<NotificationPage notifications={notificationsData} />);
    const notificationComponents = screen.getAllByTestId('notification-component');
    expect(notificationComponents).toHaveLength(2);
  });

  it('calls the handleNotificationClick function when a notification is clicked', () => {
    const mockHandleNotificationClick = jest.fn();//FIXME
    const notificationsData = [
      { title: 'Notification 1', summary: 'Summary 1' },
      { title: 'Notification 2', summary: 'Summary 2' },
    ];
    render(<NotificationPage notifications={notificationsData} handleNotificationClick={mockHandleNotificationClick} />);
    const notificationComponents = screen.getAllByTestId('notification-component');
    fireEvent.click(notificationComponents[0]);
    expect(mockHandleNotificationClick).toHaveBeenCalledWith(0);
  });
});