import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials, logout as logoutAction } from "../slices/authSlice";
import { useLoginMutation, useLogoutMutation } from "../slices/userApiSlice";
import { toast } from "react-toastify";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const [login, { isLoading: isLoggingIn }] = useLoginMutation();
  const [logoutMutation, { isLoading: isLoggingOut }] = useLogoutMutation();

  const handleLogin = async (email, password) => {
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials(res));
      toast.success("Connexion réussie!");
      navigate("/dashboard");
      return { success: true };
    } catch (error) {
      const message = error?.data?.message || error?.error || "Erreur de connexion";
      toast.error(message);
      return { success: false, error: message };
    }
  };

  const handleLogout = async () => {
    try {
      await logoutMutation().unwrap();
      dispatch(logoutAction());
      toast.info("Déconnexion réussie");
      navigate("/");
      return { success: true };
    } catch (error) {
      const message = error?.data?.message || error?.error || "Erreur de déconnexion";
      toast.error(message);
      return { success: false, error: message };
    }
  };

  return {
    userInfo,
    isAuthenticated: !!userInfo,
    isLoggingIn,
    isLoggingOut,
    login: handleLogin,
    logout: handleLogout,
  };
};
