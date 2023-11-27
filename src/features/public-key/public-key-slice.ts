import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  publicKey: "",
  isSetPublicKey: false,
};

const publicKeySlice = createSlice({
  name: "publicKey",
  initialState,
  reducers: {
    setPublicKey: (state, action) => {
      state.publicKey = action.payload;
      state.isSetPublicKey = true;
    },
    removePublicKey: (state) => {
      state.publicKey = "";
      state.isSetPublicKey = false;
    },
  },
});

export const { setPublicKey, removePublicKey } = publicKeySlice.actions;
export default publicKeySlice.reducer;
