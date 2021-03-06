import jwtDecode from "jwt-decode";
import { useContext } from "react";
import { createNewUser } from "../api/auth";
import AuthContext from "./context";
import { deleteToken, storeToken } from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logout = async () => {
    setUser(null);
    await deleteToken();
  };

  const login = async (authToken) => {
    setUser(jwtDecode(authToken));
    await storeToken(authToken);
  };

  const createAccount = async (userData) => {
    const response = await createNewUser(userData);
    return response;
  };

  return { user, setUser, logout, login, createAccount };
};
