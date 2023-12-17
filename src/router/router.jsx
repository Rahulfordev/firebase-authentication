import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import MainLayout from "../MainLayout/MainLayout";
import Profile from "../components/Profile";
import Wallet from "../components/Wallet";
import ErrorPage from "../components/ErrorPage";
import ForgotPass from "../components/ForgotPass";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

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
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/password_reset",
        element: <ForgotPass />,
      },
    ],
  },
]);
export default router;
