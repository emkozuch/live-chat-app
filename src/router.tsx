import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { LoginPage } from "./components/pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
