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
}

// Componente Presentazionale per la notifica
const NotificationComponent: React.FC<{ notification: Notification; onClick: () => void }> = ({ notification, onClick }) => {
  return (
    <div className="notification" onClick={onClick}>
      <h3>{notification.title}</h3>
      <p>{notification.summary}</p>
    </div>
  );
};

// Componente Presentazionale per la lista di notifiche
const NotificationListComponent: React.FC<{ notifications: Notification[]; onNotificationClick: (index: number) => void }> = ({ notifications, onNotificationClick }) => {
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
      <button onClick={onClose}>Chiudi</button>
    </div>
  );
};

// Componente Container per gestire lo stato e la logica
const NotificationContainer: React.FC<{ notifications: Notification[] }> = ({ notifications }) => {
  const [selectedNotificationIndex, setSelectedNotificationIndex] = useState<number | null>(null);

  const handleNotificationClick = (index: number) => {
    setSelectedNotificationIndex(index);
  };

  const handleCloseNotification = () => {
    setSelectedNotificationIndex(null);
  };
  
  return (
    <div className="notification-page">
      <div className="notification-column">
        <NotificationListComponent
          notifications={notifications}
          onNotificationClick={handleNotificationClick}
        />
      </div>
      <div className="notification-column">
        {selectedNotificationIndex !== null && (
          <NotificationDetailComponent
            notification={notifications[selectedNotificationIndex]}
            onClose={handleCloseNotification}
          />
        )}
      </div>
    </div>
  );
};

// Dati di esempio per le notifiche
const notificationsData: Notification[] = [
  { title: 'Notifica 1', summary: 'Sommario della notifica 1', description: 'Descrizione dettagliata della notifica 1' },
  { title: 'Notifica 2', summary: 'Sommario della notifica 2', description: 'Descrizione dettagliata della notifica 2' },
  { title: 'Notifica 3', summary: 'Sommario della notifica 3', description: 'Descrizione dettagliata della notifica 3' },
];

// Componente principale
const NotificationPage: React.FC = () => {
  return <NotificationContainer notifications={notificationsData} />;
};

export default NotificationPage;
