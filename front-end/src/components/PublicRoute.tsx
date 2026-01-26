import { Navigate } from "react-router";
import { type ReactNode } from "react";

const PublicRoute = ({ children }: { children: ReactNode }) => {
  const cookies = document.cookie.split("; ");
  const userCookie = cookies.find((c) => c.startsWith("user="));

  // verifica se o usuario esta logado por meio dos cookies e redireciona para a pagina Home
  if (userCookie) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;
