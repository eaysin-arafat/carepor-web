import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { SkeletonTheme } from "react-loading-skeleton";
import { Provider } from "react-redux";
import App from "./App.tsx";
import { store } from "./app/store.ts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster />
    <SkeletonTheme baseColor="#F2F0F2" highlightColor="#c7cbf2">
      <Provider store={store}>
        <App />
      </Provider>
    </SkeletonTheme>
  </React.StrictMode>
);
