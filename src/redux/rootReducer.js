import { combineReducers } from "redux";

const initialState = {
  state: "initial state",
};

// const rootReducer = combineReducers({});
const rootReducer = (state = { initialState }, action) => {
  switch (action.type) {
    // Define your action types and corresponding state updates here
    default:
      return state;
  }
};

export default rootReducer;
