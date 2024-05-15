// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProjectsPage from './ProjectsPage';
import NotificationsPage from './NotificationsPage';
import NavigationBar from './NavigationBar';

const App: React.FC = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<ProjectsPage />} />
        <Route path="/notifiche" element={<NotificationsPage />} />
      </Routes>
    </Router>
  );
};

export default App;