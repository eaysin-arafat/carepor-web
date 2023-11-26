import { FacilityAccessState } from "@/interface/facility-access";
import { createSlice } from "@reduxjs/toolkit";

const initialState: FacilityAccessState = {
  facilityAccess: [],
  loading: false,
  error: null,
};

// create slice
export const facilityAccessSlice = createSlice({
  name: "facilityAccess",
  initialState,
  reducers: {
    action: () => {},
  },
});

// export actions
export const { action } = facilityAccessSlice.actions;

// export reducer
export default facilityAccessSlice.reducer;
