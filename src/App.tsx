// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ProjectsPage from './ProjectsPage';
import NotificationsPage from './NotificationsPage';
import NavigationBar from './NavigationBar';
import ProjectDetails from './ProjectDetails';
import EpicStory from './EpicStory';
import UserStory from './UserStory';
import EpicDetails from './EpicDetails';
const App: React.FC = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<ProjectsPage />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/project/:id/userstory/:id" element={<EpicDetails />} />
        <Route path="/notifiche" element={<NotificationsPage />} />
      </Routes>
    </Router>
  );
};

export default App;