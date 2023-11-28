import { cookieManager } from "@/utilities/cookie-manager";
import React from "react";

const useSetPublicKey = () => {
  const [isSetPublicKey, setIsSetPublicKey] = React.useState<boolean>(false);

  // hooks
  // const dispatch = useDispatch();

  // fetch api key
  React.useEffect(() => {
    const fetchApiKey = async () => {
      try {
        const response = await fetch("/public_key.json"); // Adjust the path accordingly

        console.log(response);

        const key = await response.json();
        console.log("key", key);
        cookieManager.saveCookie("carepro_public_key", JSON.stringify(key), {
          path: "/",
        });
        // dispatch(setPublicKey(key));
        setIsSetPublicKey(true);
      } catch (error) {
        console.error("Error fetching API key:", error);
      }
    };
    fetchApiKey();
  }, []);

  // return
  return isSetPublicKey;
};

export default useSetPublicKey;
