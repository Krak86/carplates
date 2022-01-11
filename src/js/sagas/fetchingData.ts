import { put, call, takeLatest, fork, all } from "redux-saga/effects";
import {
  IVIN,
  IServiceRespond,
  IImageRecognizeResponse,
  IEnvConfig,
  IPlatesmania,
  IItem,
  IRiaCategories,
  IRiaSearch,
  IRiaSearchData,
  IRiaAds,
} from "../models/Interfaces";
import * as actionTypes from "../redux/types";
import * as actionCreators from "../redux/actions";
import Utils from "../utils/Utils";
import UtilsRia from "../utils/UtilsRia";
import UtilsAsync from "../utils/UtilsAsync";
import { URLs } from "../data/Data";
/* tslint:disable no-var-requires */
const config: IEnvConfig = require("../../../env.json");
export function* watchNewRequestFetchDataForPlateStart() {
  yield takeLatest(
    actionTypes.ITEM_FETCH_DATA_FOR_PLATE,
    requestFetchDataForPlate
  );
}
export function* watchNewRequestFetchDataForVinStart() {
  yield takeLatest(actionTypes.ITEM_FETCH_DATA_FOR_VIN, requestFetchDataForVin);
}
export function* watchNewRequestImageFetchDataStart() {
  yield takeLatest(actionTypes.IMAGE_FETCH_DATA, requestImageFetchData);
}

function* requestFetchDataForPlate(action: actionTypes.IItemFetchDataForPlate) {
  try {
    yield put(actionCreators.itemIsLoading(true));
    const itemResponse: IServiceRespond = yield call(
      UtilsAsync.fetchDataForPlateApi,
      action.payload.url
    );
    yield put(actionCreators.setSearchingItemType(0));
    yield put(actionCreators.itemIsLoaded(false));
    yield put(actionCreators.itemHasErrored(false));
    if (
      itemResponse.value &&
      itemResponse.value.length &&
      itemResponse.value.length > 0
    ) {
      const data: IItem = itemResponse.value[0];
      yield put(actionCreators.itemFetchDataSuccess(data));
      yield put(
        actionCreators.addToItemsList({
          item: data,
          timestamp: Utils.generateCurrentDate(),
        })
      );
      yield put(actionCreators.setItemRequest(action.payload.value));
      yield put(actionCreators.responseIsEmpty(false));
      yield put(actionCreators.AddBadge());
      /* tslint:disable no-commented-code */
      // UtilsAsync.playNotification();

      yield fork(fetchDataForRiaModel, data);
      yield fork(fetchDataForPlatesmania, action.payload.value);
    } else {
      yield put(actionCreators.responseIsEmpty(true));
    }
    yield put(actionCreators.itemIsLoaded(true));
    yield put(actionCreators.itemIsLoading(false));
  } catch (error) {
    yield put(actionCreators.itemHasErrored(true));
    yield put(actionCreators.itemIsLoaded(true));
    yield put(actionCreators.itemIsLoading(false));
    Utils.catchError(error);
  }
}
function* requestFetchDataForVin(action: actionTypes.IItemFetchDataForVin) {
  try {
    yield put(actionCreators.setSearchingItemType(1));
    yield put(actionCreators.itemIsLoaded(false));
    yield put(actionCreators.itemIsLoading(true));
    yield put(actionCreators.itemHasErrored(false));
    const itemResponse: IVIN = yield call(
      UtilsAsync.fetchDataForVinApi,
      action.payload.url
    );
    yield put(actionCreators.itemIsLoading(false));
    if (
      itemResponse.Results &&
      itemResponse.Results.length &&
      itemResponse.Results.length > 0
    ) {
      const data = itemResponse;
      yield put(actionCreators.itemFetchDataVinSuccess(data));
      yield put(actionCreators.addToVinsListList(data));
      yield put(actionCreators.setVinRequest(action.payload.value));
      yield put(actionCreators.responseIsEmpty(false));
    } else {
      yield put(actionCreators.responseIsEmpty(true));
    }
    yield put(actionCreators.itemIsLoaded(true));
  } catch (error) {
    yield put(actionCreators.itemHasErrored(true));
    Utils.catchError(error);
  }
}
function* requestImageFetchData(action: actionTypes.IImageFetchData) {
  try {
    yield put(actionCreators.setSearchingItemType(3));
    yield put(actionCreators.itemIsLoaded(false));
    yield put(actionCreators.itemIsLoading(true));
    yield put(actionCreators.itemHasErrored(false));
    const itemResponse: IImageRecognizeResponse = yield call(
      UtilsAsync.imageFetchDataApi,
      action.payload.value,
      action.payload.url
    );
    yield put(actionCreators.itemIsLoading(false));
    if (
      itemResponse.results &&
      itemResponse.results.length &&
      itemResponse.results.length > 0
    ) {
      const carPlate = Utils.combineConvertedSymbols(
        Utils.changeSymbols1toI(
          Utils.trimData(itemResponse.results[0].plate)
        ).toLocaleUpperCase(),
        Utils.latinRange,
        Utils.latinToCyrillicMatrix,
        Utils.reducer
      );
      const serviceUrl =
        /*process.env.AZURE_TABLE_SERVICE_URL ||*/ config.AZURE_TABLE_SERVICE_URL ||
        "";
      const carPlateUrl = Utils.shapeUrlPlate(
        serviceUrl,
        carPlate,
        Utils.extractPartitionKey(carPlate)
      );
      yield put(actionCreators.itemFetchDataForPlate(carPlate, carPlateUrl));
      yield put(actionCreators.responseIsEmpty(false));
    } else {
      yield put(actionCreators.responseIsEmpty(true));
    }
    yield put(actionCreators.itemIsLoaded(true));
  } catch (error) {
    yield put(actionCreators.itemHasErrored(true));
    Utils.catchError(error);
  }
}
function* fetchDataForPlatesmania(value: string) {
  try {
    yield put(actionCreators.imgCarsmaniaLoaded(false));
    const carPlate = Utils.combineConvertedSymbols(
      Utils.trimData(value).toLocaleUpperCase(),
      Utils.cyrillicRange,
      Utils.cyrillicToLatinToMatrix,
      Utils.reducer
    );
    const url =
      /*process.env.AZURE_PLATESMANIA_PROXY ||*/ config.AZURE_PLATESMANIA_PROXY ||
      "";
    const itemResponse: IPlatesmania = yield call(
      UtilsAsync.fetchDataForPlatesmaniaApi,
      carPlate,
      url
    );
    if (
      itemResponse.cars &&
      itemResponse.cars.length &&
      itemResponse.cars.length > 0
    ) {
      const data = itemResponse.cars;
      yield put(actionCreators.addPlatesmaniaCars(data));
    } else {
      yield put(actionCreators.addPlatesmaniaCars([]));
    }
    yield put(actionCreators.imgCarsmaniaLoaded(true));
  } catch (error) {
    yield put(actionCreators.addPlatesmaniaCars([]));
    yield put(actionCreators.imgCarsmaniaLoaded(true));
    Utils.catchError(error);
  }
}
function* fetchDataForRiaModel(value: IItem) {
  try {
    yield put(actionCreators.imgRiaLoaded(false));
    const brand = value.brand.trim();
    const model = value.model.trim();
    const kind = value.kind.trim();
    const year = value.make_year.trim();
    const categoryValue = UtilsRia.detectCategory(kind);
    const brandArray = UtilsRia.detectBrandMatrix(categoryValue);
    const brandWithoutModel = UtilsRia.excludeModelFromBrand(brand, model);
    let brandValue: number;
    if (brandArray.length && brandArray.length === 0) {
      return;
    } else {
      brandValue = UtilsRia.detectModelValue(brandArray, brandWithoutModel);
    }
    const key = /*process.env.RIA_KEY ||*/ config.RIA_KEY || "";
    const urlRiaModel = UtilsRia.generateUrlToGetModelValue(
      URLs.riaUrl,
      categoryValue,
      brandValue,
      key
    );
    const response: IRiaCategories[] = yield call(
      UtilsAsync.fetchDataForRiaModelApi,
      urlRiaModel
    );
    if (response.length && response.length === 0) {
      return;
    }
    const modelValue = response.filter((i: IRiaCategories) => {
      if (i.name.toUpperCase() === model.toUpperCase()) {
        return i.value;
      }
    });
    if (modelValue.length === 0 && modelValue[0].value) {
      return;
    }
    const urlRiaSearch = UtilsRia.generateUrlToSearchAdsIds(
      URLs.riaUrl,
      categoryValue,
      brandValue,
      modelValue[0].value,
      year,
      key
    );
    const responseRiaSearch: IRiaSearch = yield call(
      UtilsAsync.fetchDataForRiaSearchApi,
      urlRiaSearch
    );
    if (
      responseRiaSearch.result &&
      responseRiaSearch.result.search_result &&
      responseRiaSearch.result.search_result.count &&
      responseRiaSearch.result.search_result.count === 0
    ) {
      return;
    }
    const ads: IRiaSearchData[] =
      responseRiaSearch.result.search_result_common.data;
    const urls: string[] = ads.map((url: IRiaSearchData) => url.id);
    const imagesRiaResponse: IRiaAds[] = yield all(
      urls.map((url: string) =>
        call(
          UtilsAsync.fetchDataForRiaAdsApi,
          UtilsRia.generateUrlToGetAdsContent(URLs.riaUrl, key, url)
        )
      )
    );
    yield put(actionCreators.addRiaAds(imagesRiaResponse));
    yield put(actionCreators.imgRiaLoaded(true));
  } catch (error) {
    yield put(actionCreators.itemHasErrored(true));
    Utils.catchError(error);
  }
}
