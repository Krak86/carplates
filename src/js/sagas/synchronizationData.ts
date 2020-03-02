import { put, call, takeLatest, fork } from "redux-saga/effects";
import { IEnvConfig, IItem, IUserItem, IUserKeys } from "../models/Interfaces";
import * as actionTypes from "../redux/types";
import * as actionCreators from "../redux/actions";
import Utils from "../utils/Utils";
import UtilsAsync from "../utils/UtilsAsync";
/* tslint:disable no-var-requires */
const config: IEnvConfig = require("../../../env.json");
export function* watchNewRequestAuthoriseUserStart() {
    yield takeLatest(actionTypes.AUTHORISE_USER, requestAuthoriseUser);
}
export function* watchNewRequestAddToFavoritesSyncStart() {
    yield takeLatest(actionTypes.ADD_TO_FAVORITES_SYNC, requestAddToFavoritesSync);
}
export function* watchNewRequestRemoveFromFavoritesSyncStart() {
    yield takeLatest(actionTypes.REMOVE_FROM_FAVORITES_SYNC, requestRemoveFromFavoritesSync);
}
export function* watchNewRequestManualSyncStart() {
    yield takeLatest(actionTypes.MANUAL_SYNC, requestManualSync);
}

function* requestAuthoriseUser(action: actionTypes.IAuthoriseUser) {
    try {
        yield put(actionCreators.login(action.payload.authStatus));
        if (!Utils.isUserAuthenticated(action.payload.authStatus.vendor)) {
            return;
        }
        yield put(actionCreators.ItemsMerging(true));
        yield fork(userSync, action.payload.authStatus.mail, action.payload.favorites, null, null);

    } catch (error) {
        yield put(actionCreators.itemHasErrored(true));
        Utils.catchError(error);
    }
}
function* requestAddToFavoritesSync(action: actionTypes.IAddToFavoritesSync) {
    try {
        if (!Utils.isUserAuthenticated(action.payload.authStatus.vendor)) {
            yield put(actionCreators.addToFavorites(action.payload.item));
            return;
        }
        yield put(actionCreators.ItemsMerging(true));
        yield fork(userSync, action.payload.authStatus.mail, action.payload.favorites, action.payload.item, true);

    } catch (error) {
        yield put(actionCreators.itemHasErrored(true));
        Utils.catchError(error);
    }
}
function* requestRemoveFromFavoritesSync(action: actionTypes.IRemoveFromFavoritesSync) {
    try {
        if (!Utils.isUserAuthenticated(action.payload.authStatus.vendor)) {
            yield put(actionCreators.removeFromFavorites(action.payload.item));
            return;
        }
        yield put(actionCreators.ItemsMerging(true));
        yield fork(userSync, action.payload.authStatus.mail, action.payload.favorites, action.payload.item, false);

    } catch (error) {
        yield put(actionCreators.itemHasErrored(true));
        Utils.catchError(error);
    }
}
function* requestManualSync(action: actionTypes.IManualSync) {
    try {
        yield put(actionCreators.ItemsMerging(true));
        yield fork(userSync, action.payload.authStatus.mail, action.payload.favorites, null, null);

    } catch (error) {
        yield put(actionCreators.itemHasErrored(true));
        Utils.catchError(error);
    }
}
function* userSync(email: string, favorites: IItem[], item: IItem | null, addRemoveItem: boolean | null) {
    try {
        const userKeys = Utils.generateRowKeyAndPartitionKey(email);
        const serviceUrl = /*`${process.env.AZURE_TABLE_FAVORITES_SERVICE_URL}${process.env.AZURE_TABLE_FAVORITES_SERVICE_URL_QUERY}` ||*/ `${config.AZURE_TABLE_FAVORITES_SERVICE_URL}${config.AZURE_TABLE_FAVORITES_SERVICE_URL_QUERY}` || "";
        const url = Utils.shapeUrlPlate(
            serviceUrl,
            userKeys.RowKey,
            userKeys.PartitionKey,
        );
        const itemResponse: IUserItem = yield call(UtilsAsync.userSyncApi, url);
        const data = itemResponse.value;
        const items = Utils.mergeItems(data, favorites, item, addRemoveItem);
        if (items === undefined) {
            yield put(actionCreators.ItemsMerging(false));
            return;
        }
        yield put(actionCreators.MergeLocalAndCloudFavorites(items));
        const urlToUpdateUser = Utils.generateUrlToUpdateUser(
            /*process.env.AZURE_TABLE_FAVORITES_SERVICE_URL ||*/ config.AZURE_TABLE_FAVORITES_SERVICE_URL || "",
            /*process.env.AZURE_TABLE_FAVORITES_SERVICE_URL_QUERY ||*/ config.AZURE_TABLE_FAVORITES_SERVICE_URL_QUERY || "",
            userKeys.PartitionKey,
            userKeys.RowKey,
        );
        yield call(UtilsAsync.updateUserApi, urlToUpdateUser, items);
        yield put(actionCreators.ItemsMerging(false));
    } catch (error) {
        yield put(actionCreators.ItemsMerging(false));
        Utils.catchError(error);
    }
}
