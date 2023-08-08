import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//here get data from API
export const apiReports = createAsyncThunk(
  "feature/apiReports",
  async (token) => {
    try {
      const response = await axios.get(
        "https://test.izocloud.com/api/rct/dashboard?token=" + token
      );
      if (response.status < 200 || response.status >= 300) {
        // Handle non-2xx status codes as errors
        throw new Error(response.data.message);
      }
      return response.data;
    } catch (error) {
      // Handle network errors or other exceptions
      throw new Error("Failed get data. Please try again later.");
    }
  }
);

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
      console.log( "no" + payload );
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
