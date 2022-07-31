import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../store/auth-context";

const PrivateRoutes = () => {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const checkToken = async () => {
      const response = await fetch(`http://localhost:4000/auth/is-verify`, {
        method: "GET",
        headers: { "Content-Type": "application/json", token: authCtx.token },
      });

      const isVerified = await response.json();

      if (!response.ok) {
        authCtx.logout();
      }

      if (!isVerified) {
        authCtx.logout();
      }
    };

    if (localStorage.getItem("token")) {
      checkToken();
    }
  }, [authCtx]);

  return authCtx.isLoggedIn ? <Outlet /> : <Navigate to="/account/login" />;
};

export default PrivateRoutes;
