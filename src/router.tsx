import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { SettingsPage, LoginPage, ProfilePage } from "components";
import { routes } from "utils";
import { Layout } from "components/templates/Layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: routes.root,
        element: <App />,
        children: [
          {
            path: "/conversation/:id",
            element: <App />,
          },
        ],
      },
      {
        path: routes.settings,
        element: <SettingsPage />,
      },
      {
        path: routes.profile,
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: routes.login,
    element: <LoginPage />,
  },
]);
