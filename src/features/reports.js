import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const url = "";
//here get data from API
const apiReports = createAsyncThunk("feature/apiReports", async () => {
  const response = await axios.get(url, { params: { token: "" } });
  return response.data;
});

//here create a reducer
const apiReportsSlice = createSlice({
  name: "apiReports",
  initialState: {
    data: [],
    status: "null",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(apiReports.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    });
    builder.addCase(apiReports.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(apiReports.rejected, (state) => {
      state.status = "rejected";
    });
  },
});

export default apiReportsSlice.reducer;
