import { cookieManager } from "@/utilities/cookie-manager";
import React from "react";

const useFacility = () => {
  const [facility, setFacility] = React.useState(null);

  React.useEffect(() => {
    const facility = cookieManager.parseCookie("facility");
    setFacility(facility);
  }, []);

  return { facility };
};

export default useFacility;
