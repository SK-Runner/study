import { createStore } from "redux";
import systemConfigReducer from "./reducers/systemConfigReducer";

const store = createStore(systemConfigReducer);

export default store;
