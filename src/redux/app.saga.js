import { takeLatest, delay, put } from "redux-saga/effects";

export function* onIncrement() {
  yield console.log("onIncrement called");
  yield delay(500);
  yield put({ type: "INCREMENT_FROM_SAGA" });
}

export function* incrementSaga() {
  yield takeLatest("INCREMENT", onIncrement);
}
