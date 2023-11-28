import useAuthCheck from "@/hooks/useAuthenticationCheck";
import routes from "@/routers/application-router";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Loader from "../loader/Loader";

const router = createBrowserRouter(routes);

const LoadRouter = () => {
  const isAuthChecked = useAuthCheck();

  return isAuthChecked ? <RouterProvider router={router} /> : <Loader />;
};

export default LoadRouter;
