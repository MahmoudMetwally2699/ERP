import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("feature/login", async (loginData) => {
  try {
    const response = await axios.post(
      "https://test.izocloud.com/api/rct/login",
      loginData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status < 200 || response.status >= 300) {
      // Handle non-2xx status codes as errors
      throw new Error(response.data.message);
    }

    return response.data;
  } catch (error) {
    // Handle network errors or other exceptions
    throw new Error("Failed to log in. Please try again later.");
  }
});

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    data: [],
    userType: "",
    token: "",
    status: "null",
  },
  reducers: {
    getToken: (state, action) => {
      state.token = localStorage.getItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.data = action.payload;
      state.userType = action.payload.authorisation.type;
      state.token = action.payload.authorisation.token;
      // state.token = action.payload.token;
      state.status = "success";
      localStorage.setItem(
        "token",
        JSON.stringify(action.payload.authorisation.token)
      );
      console.log("from reducer login action:", action);
    });
    builder.addCase(login.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = "rejected";
      console.error("Login rejected:", action.error);
    });
  },
});
export const { getToken } = loginSlice.actions;
export default loginSlice.reducer;
