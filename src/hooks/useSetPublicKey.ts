import { setPublicKey } from "@/features/public-key/public-key-slice";
import { cookieManager } from "@/utilities/cookie-manager";
import React from "react";
import { useDispatch } from "react-redux";

const useSetPublicKey = () => {
  const [isSetPublicKey, setIsSetPublicKey] = React.useState<boolean>(false);

  // hooks
  const dispatch = useDispatch();

  // fetch api key
  React.useEffect(() => {
    const fetchApiKey = async () => {
      try {
        const response = await fetch("/public_key.txt"); // Adjust the path accordingly
        const key = await response.text();
        cookieManager.saveCookie("carepro_public_key", key as string, {
          path: "/",
        });
        dispatch(setPublicKey(key as string));
        setIsSetPublicKey(true);
      } catch (error) {
        console.error("Error fetching API key:", error);
      }
    };
    fetchApiKey();
  }, [dispatch]);

  // return
  return isSetPublicKey;
};

export default useSetPublicKey;
