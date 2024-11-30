import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import appReducer from "./appReducer";

const rootReducer = combineReducers({
  app: appReducer,
  // theme: themeReducer,
});

export default rootReducer;
