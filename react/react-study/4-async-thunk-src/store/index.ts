import { configureStore } from "@reduxjs/toolkit";
import systemConfigReducer from "./slice/systemConfigSlice";
import asyncConfigReducer from "./slice/asyncConfigSlice";

const store = configureStore({
  reducer: {
    systemConfig: systemConfigReducer,
    asyncConfig: asyncConfigReducer,
  },
});

export type StoreType = ReturnType<typeof store.getState>;

export type DispatchType = typeof store.dispatch;

export default store;
