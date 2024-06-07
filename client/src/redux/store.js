import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
