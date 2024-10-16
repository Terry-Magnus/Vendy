import { Navigate } from "react-router-dom";
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";
import { ReactElement } from "react";

interface ProtectedRouteProps {
  children: ReactElement | null;
}

const ProtectedRoutes = ({ children }: ProtectedRouteProps) => {
  const user = useSelector((state: RootState) => state.auth.userData);
  // If we have a user, render the child routes
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If we don't have a user, redirect to the login page
  return children;
};

export default ProtectedRoutes;
