import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { SkeletonTheme } from "react-loading-skeleton";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster />
    <SkeletonTheme baseColor="#F2F0F2" highlightColor="#c7cbf2">
      <App />
    </SkeletonTheme>
  </React.StrictMode>
);
