import { all, take, select, fork } from "redux-saga/effects";
import * as fetchingData from "../sagas/fetchingData";
export function* watchAndLog() {
    if (process.env.NODE_ENV === "development") {
        while (true) {
            const action = yield take("*");
            const state = yield select();
            /* tslint:disable no-console */
            console.log("action", action);
            console.log("state", state);
        }
    }

}
export const rootSaga = function* root() {
   yield all([
       fork(fetchingData.watchNewRequestFetchDataForPlateStart),
       fork(fetchingData.watchNewRequestFetchDataForVinStart),
       fork(fetchingData.watchNewRequestImageFetchDataStart),
       watchAndLog(),
    ]);
};
