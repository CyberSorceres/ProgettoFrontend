import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavigationBar.css';

const routeTitles: Record<string, string> = {
    '/': 'Progetti',
    '/notifiche': 'Notifiche',
};

const NavigationBar: React.FC = () => {
    const location = useLocation();

    const pageTitle = routeTitles[location.pathname];

  return (
    <nav className="navbar">
      <div className="left">
        <h1>{pageTitle}</h1>
      </div>
      <div className="right">
        <Link to="/" className="button">Progetti</Link>
        <Link to="/notifiche" className="button">Notifiche</Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
