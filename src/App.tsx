import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import useSetPublicKey from "./hooks/useSetPublicKey";
import routes from "./routers/application-router";

// create browser router
const router = createBrowserRouter(routes);

function App() {
  // const isAuthChecked = useAuthCheck();
  // const { loader } = useSelector((state) => state.loader);
  const isSetPublicKey = useSetPublicKey();

  return isSetPublicKey ? (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  ) : (
    <div>loading...</div>
  );
}

export default App;
