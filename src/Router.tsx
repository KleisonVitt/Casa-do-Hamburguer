import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage.tsx";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
