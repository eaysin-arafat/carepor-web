import { RootState } from "@/app/store";
import { useSelector } from "react-redux";

/**
 * @description Custom hook to check if the user is logged in
 * @returns {boolean} isLoggedIn
 */

function useAuthentication() {
  // get the auth state from redux store
  const { isLoggedIn, token } =
    useSelector((state: RootState) => state.authentication) || {};

  // return the auth state
  if (isLoggedIn && token) return true;
  else return false;
}

// export the custom hook
export default useAuthentication;
