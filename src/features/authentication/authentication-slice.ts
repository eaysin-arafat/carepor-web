// authentication state

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type User = {
  oid: string;
  firstName: string;
  surname: string;
  dob: string;
  sex: number;
  designation: string;
  nrc: string;
  noNRC: boolean;
  contactAddress: string;
  countryCode: string;
  cellphone: string;
  username: string;
  userType: number;
  isAccountActive: boolean;
};

interface AuthenticationState {
  user: User | null;
  isLoggedIn: boolean;
  token: string | null;
}

interface LoginPayload {
  user: User;
  token: string;
}

const initialState: AuthenticationState = {
  user: null,
  isLoggedIn: false,
  token: null,
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const { login, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
