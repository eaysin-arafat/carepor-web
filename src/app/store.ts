import sidebar from "@/features/sidebar/sidebar";
import { configureStore } from "@reduxjs/toolkit";
import { API } from "../features/API/API";
import authenticationReducer from "../features/authentication/authentication-slice";
import facilityAccessReducer from "../features/facility-access/facility-access-slice";
import publicKeyReducer from "../features/public-key/public-key-slice";
import userAccountsReducer from "../features/user-accounts/user-accounts-slice";
import clientFormSlice from "@/features/client/client-form-slice";

export const store = configureStore({
  reducer: {
    [API.reducerPath]: API.reducer,
    userAccounts: userAccountsReducer,
    facilityAccess: facilityAccessReducer,
    publicKey: publicKeyReducer,
    authentication: authenticationReducer,
    sidebar: sidebar,
    clientForm: clientFormSlice,
  },

  devTools: import.meta.env.MODE !== "production",

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(API.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
