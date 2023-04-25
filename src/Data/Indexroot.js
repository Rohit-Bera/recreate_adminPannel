import { combineReducers } from "redux";
import adminReducer from "./Reducers/adminData.reducer";

const rootReducer = combineReducers({
  adminReducer,
});

export default rootReducer;
