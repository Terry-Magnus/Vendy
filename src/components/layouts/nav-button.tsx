import { Link } from "react-router-dom";
import Text from "../ui/text";

export interface NavButtonProps {
  name: string;
  path: string;
  isActive: boolean;
}

function NavButton({ name, path, isActive }: NavButtonProps) {
  return (
    <Link to={path}>
      <div
        className={`
            w-100 border-r-2 p-2 ${isActive ? "bg-rose-400" : "text-red-700"}
          `}
      >
        <Text className="font-bold">{name}</Text>
      </div>
    </Link>
  );
}

export default NavButton;
