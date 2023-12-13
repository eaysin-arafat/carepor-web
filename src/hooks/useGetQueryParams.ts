import { useLocation } from "react-router-dom";

const useGetQueryParams = (key: string) => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const keyParams = params.get(key);
  return keyParams;
};

export default useGetQueryParams;
