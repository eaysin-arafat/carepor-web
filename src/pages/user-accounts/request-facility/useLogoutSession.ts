import { logout } from "@/features/authentication/authentication-slice";
import { cookieManager } from "@/utilities/cookie-manager";
import { useDispatch } from "react-redux";

const useLogoutSession = () => {
  const dispatch = useDispatch();

  const removeLogins = () => {
    dispatch(logout());
    cookieManager.removeCookie("client");
    cookieManager.removeCookie("carepro_token");
    cookieManager.removeCookie("facility");
    cookieManager.removeCookie("opdVisitSession");
  };

  return {
    removeLogins,
  };
};

export default useLogoutSession;
