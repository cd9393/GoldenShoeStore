import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../store/auth-context";

const PrivateRoutes = () => {
  const authCtx = useContext(AuthContext);

  return authCtx.isLoggedIn ? <Outlet /> : <Navigate to="/account/login" />;
};

export default PrivateRoutes;
