import { useDispatch } from "react-redux";
import { setUserData } from "../redux/auth/auth.slice";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import { useSignOutMutation } from "../redux/auth/auth.api";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signOut] = useSignOutMutation();

  const handleLogout = async () => {
    await signOut("")
      .unwrap()
      .then(() => {
        dispatch(setUserData(null));
        navigate(ROUTES.LOGIN);
      })
      .catch((err) => console.error(err));
  };

  return handleLogout;
};

export default useLogout;
