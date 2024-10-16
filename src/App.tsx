import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import ProtectedRoutes from "./features/protected-routes";
import useGetUser from "./features/hooks/use-get-user";
import OverviewPage from "./pages/overview";
import DashboardLayout from "./components/layouts/dashboard-layout";
import VerifyEmail from "./pages/verify-email";
import ForgotPassword from "./pages/forgot-password";
import ResetPassword from "./pages/reset-password";
import Login from "./pages/login";

function App() {
  useGetUser();

  return (
    <Routes>
      <Route path="/">
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={ROUTES.RESET_PASSWORD} element={<ResetPassword />} />
        <Route path={ROUTES.VERIFY_EMAIL} element={<VerifyEmail />} />
      </Route>
      <Route
        element={
          <ProtectedRoutes>
            <DashboardLayout />
          </ProtectedRoutes>
        }
      >
        <Route path={ROUTES.OVERVIEW} element={<OverviewPage />} />
      </Route>
    </Routes>
  );
}

export default App;
