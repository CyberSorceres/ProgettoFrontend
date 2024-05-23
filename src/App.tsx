// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {API} from 'progettolib';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ProjectsPage from './ProjectsPage';
import NotificationsPage from './NotificationsPage';
import NavigationBar from './NavigationBar';
import ProjectDetails from './ProjectDetails';
import EpicStory from './EpicStory';
import UserStory from './UserStory';
import EpicDetails from './EpicDetails';
import { createContext } from 'react';

export const APIContext = createContext<API|null>(null);

const App: React.FC = () => {
  return (
   <APIContext.Provider 
    value={new API()}>
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<ProjectsPage />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/project/:id/userstory/:id" element={<EpicDetails />} />
        <Route path="/notifiche" element={<NotificationsPage />} />
      </Routes>
    </Router>
  </APIContext.Provider>
  );
};

export default App;