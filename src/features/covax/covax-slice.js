import { axiosClient } from "@/lib/helpers/axios-helpers";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Add Covax
export const addCovax = createAsyncThunk(
  "covax/addCovax",
  async (data, thunkAPI) => {
    const response = await axiosClient.post("/covax", data);
    thunkAPI.dispatch(getCovaxByClientId(data?.clientId));
    return response.data;
  }
);

// Get Covax by clientId
export const getCovaxByClientId = createAsyncThunk(
  "covax/getCovaxByClientId",
  async (clientId) => {
    const response = await axiosClient.get("/covax/by-client/" + clientId);
    return response.data;
  }
);

// Update covax
export const updateCovaxByKey = createAsyncThunk(
  "covax/updateCovaxByKey",
  async (data, thunkAPI) => {
    const response = await axiosClient.put(
      "/covax/" + data.interactionId,
      data
    );
    thunkAPI.dispatch(getCovaxByClientId(data?.clientId));
    return response.data;
  }
);

// Add Vaccine
export const addVaccine = createAsyncThunk(
  "covax/addVaccine",
  async (data, thunkAPI) => {
    const response = await axiosClient.post("/vaccine-record", data);
    thunkAPI.dispatch(getVaccineByClientId(data?.clientId));
    return response.data;
  }
);

// Get Vaccine by client
export const getVaccineByClientId = createAsyncThunk(
  "covax/getVaccineByClientId",
  async (encounterId) => {
    const response = await axiosClient.get(
      "/immunization-record/by-client/" + encounterId
    );
    return response.data;
  }
);
// export const getVaccineByClientId = createAsyncThunk(
//   "covax/getVaccineByClientId",
//   async (encounterId) => {
//     const response = await axiosClient.get("/immunization-record/by-encounter/"+ encounterId);
//     return response.data;
//   }
// );

// Update Vaccine
export const updateVaccineByKey = createAsyncThunk(
  "covax/updateVaccineByKey",
  async (data, thunkAPI) => {
    const response = await axiosClient.put(
      "/vaccine-record/" + data.interactionId,
      data
    );
    thunkAPI.dispatch(getVaccineByClientId(data?.clientId));
    return response.data;
  }
);

// Add Adverse Event
export const addAdverseEvent = createAsyncThunk(
  "covax/addAdverseEvent",
  async (data, thunkAPI) => {
    const response = await axiosClient.post("/adverse-event", data);
    thunkAPI.dispatch(getVaccineByClientId(data?.clientId));
    return response.data;
  }
);

// Get Adverse by immunization
export const getAdverseEventByImmunizationId = createAsyncThunk(
  "covax/getAdverseEventByImmunizationId",
  async (immunizationId) => {
    const response = await axiosClient.get(
      "/adverse-event/by-immunization/" + immunizationId
    );
    return response.data;
  }
);

// Update Adverse Event
export const updateAdverseEventByKey = createAsyncThunk(
  "covax/updateAdverseEventByKey",
  async (data, thunkAPI) => {
    const response = await axiosClient.put(
      "/adverse-event/" + data?.interactionId,
      data
    );
    thunkAPI.dispatch(getVaccineByClientId(data?.clientId));
    return response.data;
  }
);

// get vaccines
export const getVaccines = createAsyncThunk(
  "vaccine/getVaccines",
  async (vaccineTypeId) => {
    const response = await axiosClient.get(
      `/vaccine/by-vaccine-type/${vaccineTypeId}`
    );
    return response.data;
  }
);

// get vaccine types
export const getVaccineTypes = createAsyncThunk(
  "vaccine/getVaccineTypes",
  async () => {
    const response = await axiosClient.get("/vaccine-types");
    return response.data;
  }
);

// get vaccine doses
export const getVaccineDoses = createAsyncThunk(
  "vaccine/getVaccineDoses",
  async (vaccineId) => {
    const response = await axiosClient.get(
      `/vaccine-dose/by-vaccinename/${vaccineId}`
    );
    return response.data;
  }
);

// get vaccine doses
export const getAllVaccineDoses = createAsyncThunk(
  "vaccine/getAllVaccineDoses",
  async () => {
    const response = await axiosClient.get(`/vaccines-doses`);
    return response.data;
  }
);

// get vaccine doses
export const getAllVaccines = createAsyncThunk(
  "vaccine/getAllVaccines",
  async () => {
    const response = await axiosClient.get(`/vaccines`);
    return response.data;
  }
);

const initialState = {
  // covax get
  covaxes: [],
  covaxLoading: false,
  covaxError: null,

  // covax add
  addCovax: null,
  addCovaxLoading: false,
  addCovaxError: false,

  // updateCovax
  updateCovax: null,
  updateCovaxLoading: false,
  updateCovaxError: false,

  // Vaccine add
  addVaccine: null,
  addVaccineLoading: false,
  addVaccineError: false,

  // Vaccine Get
  getVaccine: [],
  getVaccineLoading: false,
  getVaccineError: false,

  // Vaccine Update
  updateVaccine: null,
  updateVaccineLoading: false,
  updateVaccineError: false,

  // Adverse Event get
  getAdverseEvent: [],
  getAdverseEventLoading: false,
  getAdverseEventError: null,

  // Adverse Event add
  addAdverse: null,
  addAdverseEventLoading: false,
  addAdverseEventError: false,

  // Update Adverse Event
  updateAdverseEvent: null,
  updateAdverseEventLoading: false,
  updateAdverseEventError: false,
};

const covaxSlice = createSlice({
  name: "covax",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCovaxByClientId.pending, (state) => {
        state.covaxLoading = true;
      })
      .addCase(getCovaxByClientId.fulfilled, (state, action) => {
        state.covaxLoading = false;
        state.covaxes = action.payload;
        state.covaxError = null;
      })
      .addCase(getCovaxByClientId.rejected, (state, action) => {
        state.covaxLoading = false;
        state.covaxError = action.error.message;
      })
      // Add Covax
      .addCase(addCovax.pending, (state) => {
        state.addCovaxLoading = true;
      })
      .addCase(addCovax.fulfilled, (state, action) => {
        state.addCovaxLoading = false;
        state.addCovax = action.payload;
        state.addCovaxError = false;
      })
      .addCase(addCovax.rejected, (state, action) => {
        state.addCovaxLoading = false;
        state.addCovaxError = action.error.message;
      })
      // Update Covax
      .addCase(updateCovaxByKey.pending, (state) => {
        state.updateCovaxLoading = true;
      })
      .addCase(updateCovaxByKey.fulfilled, (state, action) => {
        state.updateCovaxLoading = false;
        state.updateCovax = action.payload;
        state.updateCovaxError = false;
      })
      .addCase(updateCovaxByKey.rejected, (state, action) => {
        state.updateCovaxLoading = false;
        state.updateCovaxError = action.error.message;
      })
      // Add Vaccine
      .addCase(addVaccine.pending, (state) => {
        state.addVaccineLoading = true;
      })
      .addCase(addVaccine.fulfilled, (state, action) => {
        state.addVaccineLoading = false;
        state.addVaccine = action.payload;
        state.addVaccineError = false;
      })
      .addCase(addVaccine.rejected, (state, action) => {
        state.addVaccineLoading = false;
        state.addVaccineError = action.error.message;
      })
      // Get Vaccine
      .addCase(getVaccineByClientId.pending, (state) => {
        state.getVaccineLoading = true;
      })
      .addCase(getVaccineByClientId.fulfilled, (state, action) => {
        state.getVaccineLoading = false;
        state.getVaccine = action.payload;
        state.getVaccineError = false;
      })
      .addCase(getVaccineByClientId.rejected, (state, action) => {
        state.getVaccineLoading = false;
        state.getVaccineError = action.error.message;
      })
      // Update Vaccine
      .addCase(updateVaccineByKey.pending, (state) => {
        state.updateVaccineLoading = true;
      })
      .addCase(updateVaccineByKey.fulfilled, (state, action) => {
        state.updateVaccineLoading = false;
        state.updateVaccine = action.payload;
        state.updateVaccineError = false;
      })
      .addCase(updateVaccineByKey.rejected, (state, action) => {
        state.updateVaccineLoading = false;
        state.updateVaccineError = action.error.message;
      })
      // Add Adverse Event
      .addCase(addAdverseEvent.pending, (state) => {
        state.addAdverseEventLoading = true;
      })
      .addCase(addAdverseEvent.fulfilled, (state, action) => {
        state.addAdverseEventLoading = false;
        state.addAdverse = action.payload;
        state.addAdverseEventError = false;
      })
      .addCase(addAdverseEvent.rejected, (state, action) => {
        state.addAdverseEventLoading = false;
        state.addAdverseEventError = action.error.message;
      })
      // Get Adverse Event
      .addCase(getAdverseEventByImmunizationId.pending, (state) => {
        state.getAdverseEventLoading = true;
      })
      .addCase(getAdverseEventByImmunizationId.fulfilled, (state, action) => {
        state.getAdverseEventLoading = false;
        state.getAdverseEvent = action.payload;
        state.getAdverseEventError = false;
      })
      .addCase(getAdverseEventByImmunizationId.rejected, (state, action) => {
        state.getAdverseEventLoading = false;
        state.getAdverseEventError = action.error.message;
      })
      // Update Adverse Event
      .addCase(updateAdverseEventByKey.pending, (state) => {
        state.updateAdverseEventLoading = true;
      })
      .addCase(updateAdverseEventByKey.fulfilled, (state, action) => {
        state.updateAdverseEventLoading = false;
        state.updateAdverseEvent = action.payload;
        state.updateAdverseEventError = false;
      })
      .addCase(updateAdverseEventByKey.rejected, (state, action) => {
        state.updateAdverseEventLoading = false;
        state.updateAdverseEventError = action.error.message;
      });
  },
});

export default covaxSlice.reducer;
