import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  sidebar: boolean;
}

interface SidebarPayload {
  sidebar?: boolean;
}

const initialState: SidebarState = {
  sidebar: false,
};

export const sidebar = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    sidebarState: (state, action: PayloadAction<SidebarPayload>) => {
      state.sidebar = action.payload.sidebar;
    },
  },
});

export const { sidebarState } = sidebar.actions;

export default sidebar.reducer;
