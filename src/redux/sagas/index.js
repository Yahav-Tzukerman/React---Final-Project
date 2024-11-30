// src/sagas/index.js
import { all } from "redux-saga/effects";
import { watchRestoreState } from "./appSaga";

export default function* rootSaga() {
  yield all([
    watchRestoreState(), // Add restore state saga
    // Add other sagas here
  ]);
}
