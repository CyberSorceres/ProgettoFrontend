import React, { useState } from 'react';
import './NotificationsPage.css';
import { useLoaderData } from 'react-router-dom';
import { api } from './App';
import { Progetto } from 'progettolib';
import { createEpicStoriesFromBR } from './ai';

// Interfaccia per il tipo di dati delle notifiche
interface Notification {
    _id:string;
  title: string;
  message: string;
  read: boolean;
}

// Componente Presentazionale per la notifica
const NotificationComponent: React.FC<{ notification: Notification; onClick: () => void }> = ({ notification, onClick }) => {
  return (
    <div className={`notification ${notification.read ? '' : 'unread'}`} onClick={onClick}>
      <h3 className={notification.read ? '' : 'bold'}>{notification.title}</h3>
      <p>{notification.description}</p>
      {!notification.read && <span className="unread-dot"></span>}
    </div>
  );
};

// Componente Presentazionale per la lista di notifiche
const NotificationListComponent: React.FC<{ notifications: Notification[]; onNotificationClick: (id: string) => void }> = ({ notifications, onNotificationClick }) => {
  const sortedNotifications = [...notifications].sort((a, b) => a.read === b.read ? 0 : a.read ? 1 : -1);
  return (
    <div className="notification-list">
      {sortedNotifications.map((notification, index) => (
        <NotificationComponent
          key={index}
          notification={notification}
          onClick={() => onNotificationClick(notification._id)}
        />
      ))}
    </div>
  );
};

// Componente Presentazionale per la visualizzazione dettagliata della notifica
const NotificationDetailComponent: React.FC<{ notification: Notification}> = ({ notification }) => {
    const handleApprove = async () => {
	const id = await api.addProject({
	    name: 'Health Track',
	    ai: 'chatgpt',
	    cliente: 'MedLife S.r.l',
	} as any)
	await createEpicStoriesFromBR(api, notification.message, id)
    }
  return (
    <div className="notification-detail">
      <h2>{notification.title}</h2>
	  <h4>{notification.message}</h4>
	  {notification.type === 0 && <button className='submit' onClick={handleApprove}>Approva</button>}
      {notification.type === 0 && <button className='submit' onClick={() => {}}>Elimina</button>}
    </div>
  );
};

// Componente Container per gestire lo stato e la logica
const NotificationContainer: React.FC<{ notifications: Notification[] }> = ({ notifications }) => {
  const [notificationsState, setNotificationsState] = useState(notifications);
  const [selectedNotificationId, setSelectedNotificationId] = useState<string | null>(null);

  const handleNotificationClick = async (id: string) => {
    const updatedNotifications = [...notificationsState];
    const index = updatedNotifications.findIndex(notification => notification._id === id);

    if (index !== -1 && !updatedNotifications[index].read) {
      updatedNotifications[index].read = true;
      setNotificationsState(updatedNotifications);
    }

      setSelectedNotificationId(id);
      await api.readNotification(id)
  };

  return (
    <div className="notification-page">
      <div className="notification-column">
        <NotificationListComponent
          notifications={notificationsState}
          onNotificationClick={handleNotificationClick}
        />
      </div>
      {selectedNotificationId && (
        <NotificationDetailComponent
          notification={notificationsState.find(notification => notification._id === selectedNotificationId)!}
        />
      )}
    </div>
  );
};

// Componente principale
const NotificationPage: React.FC = () => {
    const notifications = useLoaderData()
  return <NotificationContainer notifications={notifications} />;
};

export default NotificationPage;
