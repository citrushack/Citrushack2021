import { configureStore } from "@reduxjs/toolkit";

import applyReducer from "./lib/slices/applySlice";
import accountReducer from "./lib/slices/accountSlice";

export default configureStore({
  reducer: {
    apply: applyReducer,
    account: accountReducer,
  },
  devTools: true,
});
