import useAuthentication from "@/hooks/useAuthentication";
import { URLSelectFacility } from "@/routers/facility";
import { Navigate, Outlet } from "react-router-dom";

/**
 * @description if user is logged he can't public routes
 * @param {object} props.children
 */

function PublicGuard() {
  // login status
  const isLoggedIn = useAuthentication();

  // public route
  return !isLoggedIn ? <Outlet /> : <Navigate to={URLSelectFacility()} />;
}

// export public route
export default PublicGuard;
