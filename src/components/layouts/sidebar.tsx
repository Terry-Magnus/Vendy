import { useLocation } from "react-router-dom";
import { ROUTES } from "../../routes";
import NavButton from "./nav-button";

function Sidebar() {
  const location = useLocation();

  const links = [
    { name: "Overview", path: ROUTES.OVERVIEW },
    { name: "User management", path: ROUTES.USER_MANAGEMENT },
    { name: "Help & Support", path: ROUTES.HELP_SUPPORT },
    { name: "Profile", path: ROUTES.PROFILE },
  ];

  return (
    <div className="w-1/4 p-4 h-full">
      {links.map((link) => {
        console.log(link.path);
        return (
          <NavButton
            key={link.name}
            path={link.path}
            isActive={location.pathname === `/admin/${link.path}`}
            name={link.name}
          />
        );
      })}
    </div>
  );
}

export default Sidebar;
