import { createStore } from "redux";
import systemConfigReducer from "./reducers/systemConfigReducer";

const store = createStore(systemConfigReducer);

export type StoreType = ReturnType<typeof store.getState>;

export default store;
