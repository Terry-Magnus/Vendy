import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { ROUTES } from "../../routes"; // Import your routes object
import { useGetCurrentUserQuery } from "../../features/redux/auth/auth.api";

const RootWrapper = () => {
  const navigate = useNavigate();
  const { isLoading, error } = useGetCurrentUserQuery();

  useEffect(() => {
    if (error) {
      // Handle error, e.g., redirect to login page
      alert("Session Expired. Please login again");
      navigate(ROUTES.LOGIN);
    }
  }, [error, navigate]);

  if (isLoading) {
    // You can render a loading spinner or placeholder here
    return <div>Loading...</div>;
  }

  return <Outlet />;
};

export default RootWrapper;
