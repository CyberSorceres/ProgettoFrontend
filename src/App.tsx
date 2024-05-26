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
import UserStoryDetail from './UserStoryDetail';
const App: React.FC = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<ProjectsPage />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/project/:id/userstory/:id" element={<EpicDetails />} />
        <Route path="/notifiche" element={<NotificationsPage />} />
        <Route path="/" element={<UserStory epicStory={{ id: 1, name: '', desc: '', progress: 0, userStoryArray: [] }} />} />
        <Route path="/userstory/:id" element={<UserStoryDetail />} />
      </Routes>
    </Router>
  );
};

export default App;