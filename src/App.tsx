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
import { API, API_interface } from "progettolib";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { LoadingProvider } from './LoadingContext';
import { createContext } from "react";

import NotFound from "./NotFound";
import BusinessRequest from "./BusinessRequest";
import { RouterBuilder } from "./Routes";
export const APIContext = createContext<API | null>(null);

export let api = createAPI();
function createAPI() {
    const api = new API() as (API_interface & {token: string});
    if(localStorage.getItem('token')) {
	api.token = localStorage.getItem('token')
	api.role =  localStorage.getItem('role')
    }
    return api
}

const App: React.FC = () => {
  const router = createBrowserRouter(RouterBuilder(api));
  return (
    <APIContext.Provider value={api}>
      <LoadingProvider>
	  <RouterProvider router={router} />
    </LoadingProvider>
    </APIContext.Provider>
  );
};

export default App;
