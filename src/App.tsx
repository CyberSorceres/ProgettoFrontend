// App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { API } from "progettolib";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ProjectsPage from "./ProjectsPage";
import NotificationsPage from "./NotificationsPage";
import NavigationBar from "./NavigationBar";
import ProjectDetails from "./ProjectDetails";
import EpicDetails from "./EpicDetails";
import Registrazione from "./Registrazione";
import { createContext } from "react";
import Login from "./Login";
import { RequireAuth } from "./RequireAuth";

export const APIContext = createContext<API | null>(null);

const App: React.FC = () => {
  const [login, setLogin] = useState(false);
  return (
    <APIContext.Provider value={new API()}>
      <Router>
        <NavigationBar />
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth auth={login}>
                {" "}
                <ProjectsPage />{" "}
              </RequireAuth>
            }
          />
          <Route
            path="/registrazione/*"
            element={<Registrazione></Registrazione>}
          />
          <Route
            path="/project/:id"
            element={
              <RequireAuth auth={login}>
                {" "}
                <ProjectDetails />{" "}
              </RequireAuth>
            }
          />
          <Route
            path="/project/:id/userstory/:id"
            element={
              <RequireAuth auth={login}>
                {" "}
                <EpicDetails />{" "}
              </RequireAuth>
            }
          />
          <Route
            path="/notifiche"
            element={
              <RequireAuth auth={login}>
                {" "}
                <NotificationsPage />{" "}
              </RequireAuth>
            }
          />
          <Route
            path="/login"
            element={
              <Login
                onLogin={() => {
                  setLogin(true);
                }}
              />
            }
          />
        </Routes>
      </Router>
    </APIContext.Provider>
  );
};

export default App;
