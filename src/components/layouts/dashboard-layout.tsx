import { Outlet } from "react-router-dom";
import Container from "../ui/container";
import Sidebar from "./sidebar";
import useGetUser from "../../features/hooks/use-get-user";

const DashboardLayout = () => {
  useGetUser();

  return (
    <Container>
      <Sidebar />
      <Outlet />
    </Container>
  );
};

export default DashboardLayout;
