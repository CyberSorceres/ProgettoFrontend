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