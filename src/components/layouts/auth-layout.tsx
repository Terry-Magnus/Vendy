import { Outlet } from "react-router-dom";
import Container from "../ui/container";

const AuthLayout = () => {
  return (
    <Container className="bg-gray-50">
      <Outlet />
    </Container>
  );
};

export default AuthLayout;
