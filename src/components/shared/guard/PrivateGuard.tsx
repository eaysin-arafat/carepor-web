import useAuthentication from "@/hooks/useAuthentication";
import { Navigate, Outlet } from "react-router-dom";

function PrivateGuard() {
  const isLoggedIn = useAuthentication();
  // const isLoggedIn = true;

  // protected route
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
}

// export private route
export default PrivateGuard;
