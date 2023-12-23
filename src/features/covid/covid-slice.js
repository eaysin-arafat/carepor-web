import { axiosClient } from "@/lib/helpers/axios-helpers";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Add Covid
export const addCovid = createAsyncThunk(
  "covid/addCovid",
  async (data , thunkAPI) => {
    const response = await axiosClient.post("/covid", data);
    thunkAPI.dispatch(getCovidByClientId(data?.clientId));
    return response.data;
  }
);

// Get Covid by clientId
export const getCovidByClientId = createAsyncThunk(
  "covid/getCovidByClientId",
  async (clientId) => {
    const response = await axiosClient.get("/covid/by-client/"+ clientId);
    return response.data;
  }
);

// Get Covid by clientId
export const getCovidSymptom = createAsyncThunk(
  "covid/getCovidSymptom",
  async () => {
    const response = await axiosClient.get("/covid-symptoms/");
    return response.data;
  }
);

// Update covid
export const updateCovidByKey = createAsyncThunk(
  "covid/updateCovidByKey",
  async (data, thunkAPI) => {
    const response = await axiosClient.put("/covid/"+data.interactionId, data); 
    thunkAPI.dispatch(getCovidByClientId(data?.clientId));
    return response.data;
  }
);


const initialState = {

// covid add
  addCovid : null,
  addCovidLoading : false,
  addCovidError : false,

// covid get
  covid : [],
  covidLoading : false,
  covidError : null,

// covidSymptom get
  covidSymptom : [],
  covidSymptomLoading : false,
  covidSymptomError : null,

  // updateCovid
  updateCovid : null,
  updateCovidLoading : false,
  updateCovidError : false,
};

const covidSlice = createSlice({
  name: "covid",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCovidByClientId.pending, (state) => {
        state.covidLoading = true;
      })
      .addCase(getCovidByClientId.fulfilled, (state, action) => {
        state.covidLoading = false;
        state.covid = action.payload;
        state.covidError = null
      })
      .addCase(getCovidByClientId.rejected, (state, action) => {
        state.covidLoading = false;
        state.covidError = action.error.message;
      })
      // Add Covid
      .addCase(addCovid.pending, (state) => {
        state.addCovidLoading = true;
      })
      .addCase(addCovid.fulfilled, (state, action) => {
        state.addCovidLoading = false;
        state.addCovid = action.payload;
        state.addCovidError = false
      })
      .addCase(addCovid.rejected, (state, action) => {
        state.addCovidLoading = false;
        state.addCovidError = action.error.message;
      })
      // get covidSymptom
      .addCase(getCovidSymptom.pending, (state) => {
        state.covidSymptomLoading = true;
      })
      .addCase(getCovidSymptom.fulfilled, (state, action) => {
        state.covidSymptomLoading = false;
        state.covidSymptom = action.payload;
        state.covidSymptomError = false
      })
      .addCase(getCovidSymptom.rejected, (state, action) => {
        state.covidSymptomLoading = false;
        state.covidSymptomError = action.error.message;
      })
      // Update Covid
      .addCase(updateCovidByKey.pending, (state) => {
        state.updateCovidLoading = true;
      })
      .addCase(updateCovidByKey.fulfilled, (state, action) => {
        state.updateCovidLoading = false;
        state.updateCovid = action.payload;
        state.updateCovidError = false;
      })
      .addCase(updateCovidByKey.rejected, (state, action) => {
        state.updateCovidLoading = false;
        state.updateCovidError = action.error.message;
      })
  },
});

export default covidSlice.reducer;
