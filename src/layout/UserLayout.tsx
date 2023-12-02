import Header from "@/components/shared/header/Header";
import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default UserLayout;
