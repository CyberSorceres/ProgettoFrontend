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
import Step2 from "./Step2";
import { ChangePassword } from './ChangePassword'

export let isPm = false

export function setIsPm(value: boolean) {
    isPm = value
}

export const RouterBuilder = (api: API) => {
    const [login, setLogin] = useState(api.loggedIn());
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
      loader: async ({ params }) => {
        const res = (await api?.getEpicStory(params.epicId, params.id)) as any;
        res.projectId = params.id;
        return res;
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
      loader: async ({ params }) => {
          return await api.getNotifications();
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
      {
	path: 'acceptInvite/:inviteId',
	element: (
	    <Registrazione />
	),
	loader: ({params}) => {return params.inviteId}
    },
      {
	path: 'changePassword/:email',
	element: <ChangePassword onChangePassword={() => {
	    setLogin(true)
	}}/>
    }
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
  return routes;
};
