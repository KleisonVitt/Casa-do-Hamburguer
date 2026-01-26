import { useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router";

const PublicRoute = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const cookie = document.cookie;

    if (cookie) {
      const cookies = cookie.split("; ");
      const userCokie = cookies.find((c) => c.startsWith("user="));

      if (userCokie) {
        navigate("/", { replace: true });
      }
    }
  }, [navigate]);

  return <>{children}</>;
};

export default PublicRoute;
