import { configureStore } from "@reduxjs/toolkit";

import applyReducer from "./lib/slices/applySlice";

export default configureStore({
  reducer: {
    apply: applyReducer,
  },
  devTools: true,
});
