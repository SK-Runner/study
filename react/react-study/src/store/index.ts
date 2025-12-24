import { configureStore } from "@reduxjs/toolkit";
import systemConfigReducer from "./slice/systemConfigSlice";

const store = configureStore({
  reducer: {
    systemConfig: systemConfigReducer,
  },
});

export type StoreType = ReturnType<typeof store.getState>;

export default store;
