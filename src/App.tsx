import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./router";

const router = createBrowserRouter(routes);

function App() {
  // const isAuthChecked = useAuthCheck();
  // const { loader } = useSelector((state) => state.loader);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
