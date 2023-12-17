import { cookieManager } from "@/utilities/cookie-manager";
import { CookieClient } from "./useClientAge";

const useClient = () => {
  const client = cookieManager.parseCookie<CookieClient>("client");
  return client;
};

export default useClient;
