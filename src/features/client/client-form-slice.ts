// Client Locla state state

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  formStep: 1,
  //   formTotalSteps: 6,
};

export const clientFormSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    clientFormStepNext: (state) => {
      state.formStep = Math.min(state.formStep + 1, 6);
    },
    clientFormStepBack: (state) => {
      state.formStep = Math.max(state.formStep - 1, 1);
    },
    setClientFormStep: (state, action: PayloadAction<number>) => {
      state.formStep = Math.min(Math.max(action.payload, 1), 6);
    },
  },
});

export const { clientFormStepNext, clientFormStepBack, setClientFormStep } =
  clientFormSlice.actions;

export default clientFormSlice.reducer;
