import { configureStore } from "@reduxjs/toolkit";
import { API } from "../features/API/API";
import facilityAccessReducer from "../features/facility-access/facility-access-slice";
import userAccountsReducer from "../features/user-accounts/user-accounts-slice";

export const store = configureStore({
  reducer: {
    [API.reducerPath]: API.reducer,
    userAccounts: userAccountsReducer,
    facilityAccess: facilityAccessReducer,
  },

  devTools: import.meta.env.MODE !== "production",

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(API.middleware),
});
