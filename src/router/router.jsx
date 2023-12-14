import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import MainLayout from "../MainLayout/MainLayout";
import Profile from "../components/Profile";
import Wallet from "../components/Wallet";
import Register from "../components/Register";
import Login from "../components/Login";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
export default router;
