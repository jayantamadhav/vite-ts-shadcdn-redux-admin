import { createBrowserRouter } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/auth/Login";

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/login", element: <Login /> },
]);

export default router;
