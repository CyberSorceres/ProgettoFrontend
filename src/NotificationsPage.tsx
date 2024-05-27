/*
import React from "react";
import { Link } from "react-router-dom";

const NotificationsPage: React.FC = () => {
    return (
        <div>
            <h1>Notifiche</h1>
            <Link to="/">Torna indietro</Link>
        </div>
    );
};

export default NotificationsPage;
*/

import React, { useState } from 'react';

import './NotificationsPage.css'

// Interfaccia per il tipo di dati delle notifiche
interface Notification {
  title: string;
  summary: string;
  description: string;
  read: boolean;
}

// Componente Presentazionale per la notifica
const NotificationComponent: React.FC<{ notification: Notification; onClick: () => void }> = ({ notification, onClick }) => {
  return (
    <div className= {`notification ${notification.read ? '' : 'unread'}`} onClick={onClick}>
      <h3 className={notification.read ? '' : 'bold'}>{notification.title}</h3>
      <p>{notification.summary}</p>
      {notification.read && <span className="unread-dot"></span>}
    </div>
  );
};

// Componente Presentazionale per la lista di notifiche
const NotificationListComponent: React.FC<{ notifications: Notification[]; onNotificationClick: (index: number) => void }> = ({ notifications, onNotificationClick }) => {
  const sortNotifications = [...notifications].sort((a, b) => a.read === b.read ? 0 : a.read ? 1 : -1);
  return (
    <div className="notification-list">
      <h2>Notifiche</h2>
      {notifications.map((notification, index) => (
        <NotificationComponent
          key={index}
          notification={notification}
          onClick={() => onNotificationClick(index)}
        />
      ))}
    </div>
  );
};

// Componente Presentazionale per la visualizzazione dettagliata della notifica
const NotificationDetailComponent: React.FC<{ notification: Notification; onClose: () => void }> = ({ notification, onClose }) => {
  return (
    <div className="notification-detail">
      <h2>{notification.title}</h2>
      <p>{notification.description}</p>
      
    </div>
  );
};

// Componente Container per gestire lo stato e la logica
const NotificationContainer: React.FC<{ notifications: Notification[] }> = ({ notifications }) => {
  const [notificationsState, setNotificationsState] = useState(notifications);
  const [selectedNotificationIndex, setSelectedNotificationIndex] = useState<number | null>(null);

  const handleNotificationClick = async (index: number) => {
    const updatedNotifications = [...notificationsState];
    if(!updatedNotifications[index].read) {
      await fetch(''), {   //ci andrebbe il path della lambda?
        method: 'POST',
        body :JSON.stringify({notificationID: updatedNotifications[index].title}),
  };

  updatedNotifications[index].read = true;
  setNotificationsState(updatedNotifications);
    }}

  return (
    <div className="notification-page">
      <div className="notification-column">
        <NotificationListComponent
          notifications={notifications}
          onNotificationClick={handleNotificationClick}
        />
      </div>
    </div>
  );
};

// Dati di esempio per le notifiche
const notificationsData: Notification[] = [
  { title: 'Notifica 1', summary: 'Sommario della notifica 1', description: 'Descrizione dettagliata della notifica 1', read: true },
  { title: 'Notifica 2', summary: 'Sommario della notifica 2', description: 'Descrizione dettagliata della notifica 2', read: true },
  { title: 'Notifica 3', summary: 'Sommario della notifica 3', description: 'Descrizione dettagliata della notifica 3', read: false },
];

// Componente principale
const NotificationPage: React.FC = () => {
  return <NotificationContainer notifications={notificationsData} />;
};

export default NotificationPage;


