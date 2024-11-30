import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./sagas/appSaga";
import { loadState, saveState } from "../utils/localStorage";

const sagaMiddleware = createSagaMiddleware();

// Load persisted state
const persistedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false, // Disable thunk since we're using saga
    }).concat(sagaMiddleware),
  preloadedState: persistedState, // Initialize with persisted state
});

// Subscribe to store updates and save to localStorage
store.subscribe(() => {
  saveState(store.getState());
});

sagaMiddleware.run(rootSaga);

export default store;
