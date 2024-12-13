import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import appReducer from "./appReducer";
import authReducer from "./authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
  // theme: themeReducer,
});

export default rootReducer;
