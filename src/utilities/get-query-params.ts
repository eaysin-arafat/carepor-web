import { useLocation } from "react-router-dom";
const getQueryParams = (key) => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const keyParams = params.get(key);
  return keyParams;
};

export default getQueryParams;
