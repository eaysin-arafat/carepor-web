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
  isRegistered: boolean;
}

interface LoginPayload {
  user: User;
  token: string;
  isRegistered?: boolean;
}

const initialState: AuthenticationState = {
  user: null,
  isLoggedIn: false,
  token: null,
  isRegistered: false,
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.isRegistered = action.payload.isRegistered || false;
    },
    setIsRegisteredFalse: (state) => {
      state.isRegistered = false;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.token = null;
      state.isRegistered = false;
    },
    updateUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
});

export const { login, logout, updateUser, setIsRegisteredFalse } =
  authenticationSlice.actions;

export default authenticationSlice.reducer;
