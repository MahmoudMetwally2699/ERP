import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const url = "";
//here to post data from API
export const login = createAsyncThunk("feature/login", async (loginData) => {
  const response = await axios.post(url, loginData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
});
export const loginSlice = createSlice({
  name: "login",
  initialState: {
    data: [],
    status: "null",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    });
    builder.addCase(login.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(login.rejected, (state) => {
      state.status = "rejected";
    });
  },
});

export default loginSlice.reducer;
