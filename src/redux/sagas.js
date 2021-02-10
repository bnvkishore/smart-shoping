import { all } from "redux-saga/effects";
import cart from "./cart/saga";

function* rootSaga() {
  yield all([cart()]);
}

export default rootSaga;
