import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import { createBrowserRouter, Outlet } from "react-router";
import HomePage from "./pages/HomePage.tsx";
import Header from "./components/Header.tsx";
import Pedidos from "./components/Pedidos.tsx";

const OutletLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-red-100">
      <Header />
      <Outlet />
    </div>
  );
};

export const Router = createBrowserRouter([
  {
    element: <OutletLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/pedidos",
        element: <Pedidos />,
      },
    ],
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
