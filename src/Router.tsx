import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import { createBrowserRouter } from "react-router";

export const Router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
