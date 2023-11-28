import { Provider } from "react-redux";
import { store } from "./app/store";
import LoadRouter from "./components/core/load-router/LoadRouter";
import Loader from "./components/core/loader/Loader";
import useSetPublicKey from "./hooks/useSetPublicKey";

function App() {
  // const isAuthChecked = useAuthCheck();
  // const { loader } = useSelector((state) => state.loader);
  const isSetPublicKey = useSetPublicKey();

  return isSetPublicKey ? (
    <Provider store={store}>
      <LoadRouter />
    </Provider>
  ) : (
    <Loader />
  );
}

export default App;
