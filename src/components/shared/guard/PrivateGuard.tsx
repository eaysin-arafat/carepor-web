import { RootState } from "@/app/store";
import useAuthentication from "@/hooks/useAuthentication";
import { URLRequestFacility } from "@/routers/application-router";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateGuard() {
  const isLoggedIn = useAuthentication();
  const { isRegistered } = useSelector(
    (state: RootState) => state.authentication
  );

  if (isLoggedIn && isRegistered) {
    return <Navigate to={URLRequestFacility()} />;
  }

  // protected route
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
}

// export private route
export default PrivateGuard;
