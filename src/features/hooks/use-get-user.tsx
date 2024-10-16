import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/auth/auth.slice";
import { useNavigate } from "react-router-dom";

function useGetUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically send the HttpOnly cookie (e.g., session token) with the request
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/auth/profile`, {
        withCredentials: true, // Send HttpOnly cookies with the request
      })
      .then((res) => {
        // Dispatch the user data to Redux
        dispatch(setUserData(res.data.data));
      })
      .catch((err) => {
        // If the session has expired, redirect to login
        alert("Session expired. Please log in again.");
        console.error("Failed to fetch current user:", err);
      });
  }, [dispatch, navigate]);

  return null;
}

export default useGetUser;
