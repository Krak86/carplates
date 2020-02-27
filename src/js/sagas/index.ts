import { all, take, select, fork } from "redux-saga/effects";
import { watchNewrRequestFetchDataStart } from "../sagas/fetchingData";

export function* watchAndLog() {
    while (true) {
      const action = yield take("*");
      const state = yield select();
      /* tslint:disable no-console */
      console.log("action", action);
      console.log("state after", state);
    }
}
export const rootSaga = function* root() {
   yield all([fork(watchNewrRequestFetchDataStart), watchAndLog()]);
};
