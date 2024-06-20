import { lazy } from "react";

const Login = lazy(() => import("../../views/auth/Login"));
const Signup = lazy(() => import("../../views/auth/Signup"));
const AdminLogin = lazy(() => import("../../views/auth/AdminLogin"));

const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
];

export default publicRoutes;
