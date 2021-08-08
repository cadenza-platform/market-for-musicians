import { configureStore } from "@reduxjs/toolkit";
import { viewReducer } from "./features/viewSlice";

export const store = configureStore({
  reducer: {
    view: viewReducer,
  },
  devtools: false,
});
