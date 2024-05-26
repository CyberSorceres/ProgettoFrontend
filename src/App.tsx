// App.tsx
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { API } from "progettolib";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ProjectsPage from "./ProjectsPage";
import NotificationsPage from "./NotificationsPage";
import NavigationBar from "./NavigationBar";
import ProjectDetails from "./ProjectDetails";
import EpicDetails from "./EpicDetails";
import { createContext } from "react";
import Login from "./Login";
import { RequireAuth } from "./RequireAuth";
import UserStory from './UserStory'

export const APIContext = createContext<()=>API | null>(()=>null);

function loadProjects(api: API) {}
export const api = new API();
const App: React.FC = () => {
    const [login, setLogin] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <RequireAuth auth={login}>
          {" "}
          <ProjectsPage />{" "}
        </RequireAuth>
      ),
      loader: () => {
          return login ? api?.getProgettiOfUser() : null;
      },
    },
      {
        path: "project/:id",
        element: (
            <RequireAuth auth={login}>
		{" "}
		<ProjectDetails />{" "}
            </RequireAuth>
        ),
	loader: ({params}) => {
	    return api?.getProgetto(params.id)
	}
    },
      {
        path: "project/:id/epic/:epicId",
        element: (
            <RequireAuth auth={login}>
		{" "}
		<UserStory />{" "}
            </RequireAuth>
        ),
	loader: ({params}) => {
	    return api?.getEpicStory(params.epicId, params.id)
	}
    },
      {
	path: "/notifiche",
	element: (              <RequireAuth auth={login}>
                {" "}
                <NotificationsPage />{" "}
				</RequireAuth>),
	loader: ({params}) => {
	    return null
	}
    },
    {
      path: "login",
      element: (
        <Login
          onLogin={async (mail, password) => {
            if (await api.login(mail, password)) {
              setLogin(true);
              router.navigate("/");
            }
          }}
        />
      ),
    },

  ]);
  return (
      <APIContext.Provider value={() => new API()}>
      <RouterProvider router={router} />
    </APIContext.Provider>
  );
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
            loader={() => (login ? api?.getProgetto("") : null)}
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
