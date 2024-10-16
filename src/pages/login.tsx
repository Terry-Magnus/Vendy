import { useEffect, useState } from "react";
import { TFormEvent } from "../types";
import { useSignInMutation } from "../features/redux/auth/auth.api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../features/redux/auth/auth.slice";
import Toast from "../components/ui/toast";
import useLogout from "../features/hooks/use-logout";
import FormControl from "../components/ui/form-control";
import Text from "../components/ui/text";
import Button from "../components/ui/button";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [inputError, setInputError] = useState(false);

  const [signIn, { isLoading, isSuccess, isError }] = useSignInMutation();

  const closeToast = () => {
    if (isSuccess) navigate("../admin/overview");

    setInputError(false);
    setShowToast(false);
  };

  useEffect(() => {
    if (showToast && !isError) {
      setEmail("");
      setPassword("");
    }
  }, [showToast, isError]);

  const handleLogout = useLogout();

  const handleLogin = async (e: TFormEvent) => {
    e.preventDefault();
    // Logic to handle login

    await signIn({ email, password })
      .unwrap()
      .then((res) => {
        dispatch(setUserData(res.data));
        setToastMessage(res.message);
      })
      .catch((err) => {
        console.error(err);
        setToastMessage(err.data.message || "An error occurred");
        setInputError(true);
      });
    setShowToast(true);
  };

  return (
    <>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <Text size="2xl" variant="bold" color="black">
          Vendy Admin
        </Text>
        <form onSubmit={handleLogin} className="space-y-4 mt-6">
          <FormControl
            type="email"
            label="Email"
            placeholder="Enter your email"
            value={email}
            error={inputError}
            isRequired
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl
            type="password"
            label="Password"
            variant="filled"
            isRequired
            error={inputError}
            placeholder="Enter your password"
            value={password}
            iconPosition="right"
            onChange={(e) => setPassword(e.target.value)}
            subtext="It must contain uppercase, lowercase letters, symbols and numbers"
          />
          <Button
            isLoading={isLoading}
            type="submit"
            variant="primary"
            className="w-full"
            loadingtext="Logging in..."
          >
            Login
          </Button>
        </form>

        <Button
          onClick={handleLogout}
          variant="secondary"
          className="w-full bg-red-600"
        >
          Logout
        </Button>

        {showToast && (
          <Toast
            message={toastMessage}
            variant={isSuccess ? "success" : "error"}
            onClose={closeToast}
          />
        )}
      </div>
    </>
  );
};

export default Login;
