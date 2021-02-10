import { all, takeLatest } from "redux-saga/effects";

import { getCart } from "./action";

export default function* cartManagerSaga() {
  yield all([takeLatest(getCart)]);
}
