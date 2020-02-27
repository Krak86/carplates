import { put, call, takeLatest } from "redux-saga/effects";
import { IFetchData, IServiceRespond } from "../models/Interfaces";
import * as actionTypes from "../redux/types";
import * as actionCreators from "../redux/actions";
import Utils from "../utils/Utils";
import UtilsAsync from "../utils/UtilsAsync";
export function* watchNewrRequestFetchDataStart() {
    yield takeLatest(actionTypes.ITEM_FETCH_DATA_FOR_PLATE, requestFetchData);
}

function* requestFetchData(action: IFetchData) {
    try {
        const itemResponse: IServiceRespond = yield call(UtilsAsync.fetchDataForPlateApi, action.url);
        yield put(actionCreators.itemIsLoading(false));
        if (itemResponse.value && itemResponse.value.length && itemResponse.value.length > 0) {
            const data = itemResponse.value[0];
            yield put(actionCreators.itemFetchDataSuccess(data));
            yield put(actionCreators.addToItemsList({
                item: data,
                timestamp: Utils.generateCurrentDate(),
            }));
            yield put(actionCreators.setItemRequest(action.itemRequest));
            yield put(actionCreators.responseIsEmpty(false));
            // yield put(actionCreators.fetchDataForRiaModel(data));
            // yield put(actionCreators.fetchDataForPlatesmania(action.itemRequest));
            yield put(actionCreators.AddBadge());
            UtilsAsync.playNotification();
        } else {
            yield put(actionCreators.responseIsEmpty(true));
        }
        yield put(actionCreators.itemIsLoaded(true));
    } catch (error) {
        yield put(actionCreators.itemHasErrored(true));
        Utils.catchError(error);
    }
}
