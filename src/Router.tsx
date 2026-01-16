import Login from "./Login.tsx";
import Register from "./Register.tsx";
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
