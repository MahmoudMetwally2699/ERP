import { configureStore } from "@reduxjs/toolkit";
//import reducers
import apiReports from "../features/reports";
import login from "../features/login";
//configuration of redux toolkit store
export const store = configureStore({
  reducer: {
    apiReports,
    login,
  },
});
