import { RouterProvider, createBrowserRouter } from "react-router-dom";
import useSetPublicKey from "./hooks/useSetPublicKey";
import routes from "./routers/application-router";

// create browser router
const router = createBrowserRouter(routes);

function App() {
  // const isAuthChecked = useAuthCheck();
  // const { loader } = useSelector((state) => state.loader);
  const isSetPublicKey = useSetPublicKey();

  return isSetPublicKey ? (
    <RouterProvider router={router} />
  ) : (
    <div>loading...</div>
  );
}

export default App;
