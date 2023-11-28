import React from "react";

import { useUserAccountReadByKeyQuery } from "@/features/user-accounts/user-accounts-api";
import { cookieManager } from "@/utilities/cookie-manager";

/**
 * @description Custom hook to check if authentication is done
 * @returns {boolean} isLoggedIn
 */

function useAuthCheck() {
  // get user id from cookie

  const userId = cookieManager.getCookie("carepro_token");

  // get updated auth slice
  const { status, isLoading, isFetching } = useUserAccountReadByKeyQuery(
    userId,
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const [isChecked, setIsChecked] = React.useState(false);

  // see auth check status
  React.useEffect(() => {
    if (!isLoading && !isFetching && status !== "pending") {
      setIsChecked(true);
    }
  }, [status, isLoading, isFetching]);

  // return the authentication check status
  return isChecked;
}

export default useAuthCheck;
