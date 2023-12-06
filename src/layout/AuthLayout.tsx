import AuthHeader from "@/components/shared/header/AuthHeader";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div>
      <AuthHeader />
      <Outlet />
    </div>
  );
}

export default AuthLayout;
