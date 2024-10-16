import Errorpage from "./pages/404-page";
import Login from "./pages/login";
import UserManagement from "./pages/user-management";
import Profile from "./pages/profile";
import AuthLayout from "./components/layouts/auth-layout";
import Overview from "./pages/overview";
import ForgotPassword from "./pages/forgot-password";
import ResetPassword from "./pages/reset-password";
import DashboardLayout from "./components/layouts/dashboard-layout";
import { createBrowserRouter } from "react-router-dom";
import HelpCenter from "./pages/help-center";
import VerifyEmail from "./pages/verify-email";
import SplashScreen from "./pages/splash-screen";
import ProtectedRoutes from "./features/protected-routes";
import RootWrapper from "./components/layouts/root-wrapper";

export const ROUTES = {
  LOGIN: "/login",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  OVERVIEW: "/overview",
  USER_MANAGEMENT: "/user-management",
  PROFILE: "/profile",
  VERIFY_EMAIL: "/verify-email",
  HELP_SUPPORT: "/help-center",
};

const appRoutes = [
  {
    element: <RootWrapper />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <SplashScreen />,
      },
      {
        path: "/",
        element: <AuthLayout />,
        children: [
          { path: "login", element: <Login /> },
          { path: "forgot-password", element: <ForgotPassword /> },
          { path: "password-reset/:email", element: <ResetPassword /> },
          { path: "verify-email", element: <VerifyEmail /> },
          // { path: "check-email/:email", element: <CheckMail /> },
          // { path: "team-invite", element: <TeamInvite /> },
        ],
      },
      {
        path: "admin",
        element: (
          <ProtectedRoutes>
            <DashboardLayout />
          </ProtectedRoutes>
        ),
        children: [
          { path: "overview", element: <Overview /> },
          {
            path: "user-management",
            element: <UserManagement />,
          },
          { path: "help-center", element: <HelpCenter /> },
          { path: "profile", element: <Profile /> },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(appRoutes);

export default router;
