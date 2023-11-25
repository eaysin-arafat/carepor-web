import { configureStore } from "@reduxjs/toolkit";
import { API } from "../features/API";

export const store = configureStore({
  reducer: {
    [API.reducerPath]: API.reducer,
  },

  devTools: import.meta.env.MODE !== "production",

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(API.middleware),
});
