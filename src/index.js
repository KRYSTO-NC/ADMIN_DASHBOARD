import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Team from "./scenes/private/team";
import Contacts from "./scenes/private/contacts";
import Invoices from "./scenes/private/invoices";
import Login from "./scenes/Login";
import PrivateRoute from "./components/PrivateRoutes";
import AdminRoute from "./components/AdminRoutes";
import Dashboard from "./scenes/private/dashboard";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Login />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/invoices" element={<Invoices />} />
      </Route>
      <Route path="" element={<AdminRoute />}></Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
