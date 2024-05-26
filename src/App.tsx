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

import { createContext } from "react";

import NotFound from "./NotFound";
import BusinessRequest from "./BusinessRequest";
import { RouterBuilder } from "./Routes";
export const APIContext = createContext<API | null>(null);

export const api = new API();

const App: React.FC = () => {
  const router = createBrowserRouter(RouterBuilder(api));
  return (
    <APIContext.Provider value={api}>
      <RouterProvider router={router} />
    </APIContext.Provider>
  );
};

export default App;
