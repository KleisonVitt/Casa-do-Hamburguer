import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { Router } from "./Router";
import { UserProvider } from "./providers/UserProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={Router} />
    </UserProvider>
  </StrictMode>,
);
