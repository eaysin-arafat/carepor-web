import { UserAccountsState } from "@/interface/user-accounts";
import { createSlice } from "@reduxjs/toolkit";

const initialState: UserAccountsState = {
  accounts: [],
  loading: false,
  error: null,
};

export const userAccountsSlice = createSlice({
  name: "userAccounts",
  initialState,
  reducers: {
    action: () => {},
  },
});

// export actions
export const { action } = userAccountsSlice.actions;

// export reducer
export default userAccountsSlice.reducer;
