import { createBrowserRouter } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";
import Dashboard from "./components/dashboard/Dashboard";
import ProtectedRoutes from "./components/auth/ProtectedRoutes";

const router = createBrowserRouter([
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  { path: "forgot-password", element: <ForgotPassword /> },
  {
    element: <ProtectedRoutes />,
    children: [{ path: "/", element: <Dashboard /> }],
  },
]);

export default router;
