import ProjectsPage from "./ProjectsPage";
import NotificationsPage from "./NotificationsPage";
import NavigationBar from "./NavigationBar";
import ProjectDetails from "./ProjectDetails";
import EpicDetails from "./EpicDetails";
import Registrazione from "./Registrazione";
import { RequireAuth } from "./RequireAuth";
import UserStory from "./UserStory";
import { Suspense, useState } from "react";
import { API } from "progettolib";
import Login from "./Login";
import { Outlet } from "react-router-dom";

export const RouterBuilder = (api: API) => {
  const [login, setLogin] = useState(false);
  const generalRoutes = [
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
      loader: ({ params }) => {
        return api?.getProgetto(params.id);
      },
    },
    {
      path: "project/:id/epic/:epicId",
      element: (
        <RequireAuth auth={login}>
          {" "}
          <UserStory />{" "}
        </RequireAuth>
      ),
      loader: ({ params }) => {
        return api?.getEpicStory(params.epicId, params.id);
      },
    },
    {
      path: "/notifiche",
      element: (
        <RequireAuth auth={login}>
          {" "}
          <NotificationsPage />{" "}
        </RequireAuth>
      ),
      loader: ({ params }) => {
        return null;
      },
    },
    {
      path: "login",
      element: (
        <Login
          onLogin={async () => {
            setLogin(true);
          }}
        />
      ),
    },
  ];
  const routes = [
    {
      element: (
        <Suspense fallback={null}>
          <NavigationBar />
          <Outlet />
        </Suspense>
      ),
      children: generalRoutes,
    },
  ];
    return routes
};
