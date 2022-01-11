import * as actionCreators from "./actions";
import { Action } from "redux";
import {
  IApplicationStates,
  IItem,
  IServiceRespond,
  IVIN,
  IImageRecognizeResponse,
  IRiaCategories,
  IRiaSearch,
  IRiaAds,
  IRiaSearchData,
  IPlatesmania,
  ILoggedIn,
  IUserItem,
  IUserKeys,
  IEnvConfig,
} from "../models/Interfaces";
import { ThunkAction } from "redux-thunk";
import Utils from "../utils/Utils";
import UtilsRia from "../utils/UtilsRia";
import UtilsAsync from "../utils/UtilsAsync";
import { URLs } from "../data/Data";
/* tslint:disable no-var-requires */
const config: IEnvConfig = require("../../../env.json");

export const itemFetchDataForPlateThunk =
  (
    itemRequest: string,
    url: string
  ): ThunkAction<void, IApplicationStates, null, Action<string>> =>
  async (dispatch) => {
    dispatch(actionCreators.setSearchingItemType(0));
    dispatch(actionCreators.itemIsLoaded(false));
    dispatch(actionCreators.itemIsLoading(true));
    dispatch(actionCreators.itemHasErrored(false));
    UtilsAsync.fetchDataForPlateApi(url)
      .then((itemResponse: IServiceRespond) => {
        dispatch(actionCreators.itemIsLoading(false));
        if (
          itemResponse.value &&
          itemResponse.value.length &&
          itemResponse.value.length > 0
        ) {
          const data = itemResponse.value[0];
          dispatch(actionCreators.itemFetchDataSuccess(data));
          dispatch(
            actionCreators.addToItemsList({
              item: data,
              timestamp: Utils.generateCurrentDate(),
            })
          );
          dispatch(actionCreators.setItemRequest(itemRequest));
          dispatch(actionCreators.responseIsEmpty(false));
          dispatch(fetchDataForRiaModelThunk(data));
          dispatch(fetchDataForPlatesmaniaThunk(itemRequest));
          dispatch(actionCreators.AddBadge());
        } else {
          dispatch(actionCreators.responseIsEmpty(true));
        }
        dispatch(actionCreators.itemIsLoaded(true));
      })
      .catch((error) => {
        dispatch(actionCreators.itemHasErrored(true));
        Utils.catchError(error);
      });
  };
export const itemFetchDataForVinThunk =
  (
    vinRequest: string,
    url: string
  ): ThunkAction<void, IApplicationStates, null, Action<string>> =>
  (dispatch) => {
    dispatch(actionCreators.setSearchingItemType(1));
    dispatch(actionCreators.itemIsLoaded(false));
    dispatch(actionCreators.itemIsLoading(true));
    dispatch(actionCreators.itemHasErrored(false));
    UtilsAsync.fetchDataForVinApi(url)
      .then((itemResponse: IVIN) => {
        dispatch(actionCreators.itemIsLoading(false));
        if (
          itemResponse.Results &&
          itemResponse.Results.length &&
          itemResponse.Results.length > 0
        ) {
          const data = itemResponse;
          dispatch(actionCreators.itemFetchDataVinSuccess(data));
          dispatch(actionCreators.addToVinsListList(data));
          dispatch(actionCreators.setVinRequest(vinRequest));
          dispatch(actionCreators.responseIsEmpty(false));
        } else {
          dispatch(actionCreators.responseIsEmpty(true));
        }
        dispatch(actionCreators.itemIsLoaded(true));
      })
      .catch((error) => {
        dispatch(actionCreators.itemHasErrored(true));
        Utils.catchError(error);
      });
  };
export const imageFetchDataThunk =
  (
    file: File,
    url: string
  ): ThunkAction<void, IApplicationStates, null, Action<string>> =>
  (dispatch) => {
    dispatch(actionCreators.setSearchingItemType(3));
    dispatch(actionCreators.itemIsLoaded(false));
    dispatch(actionCreators.itemIsLoading(true));
    dispatch(actionCreators.itemHasErrored(false));
    UtilsAsync.imageFetchDataApi(file, url)
      .then((imageResponse: IImageRecognizeResponse) => {
        dispatch(actionCreators.itemIsLoading(false));
        if (
          imageResponse.results &&
          imageResponse.results.length &&
          imageResponse.results.length > 0
        ) {
          const carPlate = Utils.combineConvertedSymbols(
            Utils.changeSymbols1toI(
              Utils.trimData(imageResponse.results[0].plate)
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
          dispatch(actionCreators.itemFetchDataForPlate(carPlate, carPlateUrl));
          dispatch(actionCreators.responseIsEmpty(false));
        } else {
          dispatch(actionCreators.responseIsEmpty(true));
        }
        dispatch(actionCreators.itemIsLoaded(true));
      })
      .catch((error) => {
        dispatch(actionCreators.itemHasErrored(true));
        Utils.catchError(error);
      });
  };

export const fetchDataForPlatesmaniaThunk =
  (
    itemRequest: string
  ): ThunkAction<void, IApplicationStates, null, Action<string>> =>
  (dispatch) => {
    dispatch(actionCreators.imgCarsmaniaLoaded(false));
    const carPlate = Utils.combineConvertedSymbols(
      Utils.trimData(itemRequest).toLocaleUpperCase(),
      Utils.cyrillicRange,
      Utils.cyrillicToLatinToMatrix,
      Utils.reducer
    );
    const url =
      /*process.env.AZURE_PLATESMANIA_PROXY ||*/ config.AZURE_PLATESMANIA_PROXY ||
      "";
    UtilsAsync.fetchDataForPlatesmaniaApi(carPlate, url)
      .then((itemResponse: IPlatesmania) => {
        if (
          itemResponse.cars &&
          itemResponse.cars.length &&
          itemResponse.cars.length > 0
        ) {
          const data = itemResponse.cars;
          dispatch(actionCreators.addPlatesmaniaCars(data));
        } else {
          dispatch(actionCreators.addPlatesmaniaCars([]));
        }
        dispatch(actionCreators.imgCarsmaniaLoaded(true));
      })
      .catch((error) => {
        dispatch(actionCreators.addPlatesmaniaCars([]));
        dispatch(actionCreators.imgCarsmaniaLoaded(true));
        Utils.catchError(error);
      });
  };

export const fetchDataForRiaModelThunk =
  (
    itemResponse: IItem
  ): ThunkAction<void, IApplicationStates, null, Action<string>> =>
  (dispatch) => {
    dispatch(actionCreators.imgRiaLoaded(false));
    const brand = itemResponse.brand.trim();
    const model = itemResponse.model.trim();
    const kind = itemResponse.kind.trim();
    const year = itemResponse.make_year.trim();
    const categoryValue = UtilsRia.detectCategory(kind);
    const brandArray = UtilsRia.detectBrandMatrix(categoryValue);
    const brandWithoutModel = UtilsRia.excludeModelFromBrand(brand, model);
    let brandValue: number;
    if (brandArray.length && brandArray.length > 0) {
      brandValue = UtilsRia.detectModelValue(brandArray, brandWithoutModel);
    } else {
      return;
    }
    const key = /*process.env.RIA_KEY ||*/ config.RIA_KEY || "";
    const url = UtilsRia.generateUrlToGetModelValue(
      URLs.riaUrl,
      categoryValue,
      brandValue,
      key
    );
    UtilsAsync.fetchDataForRiaModelApi(url)
      .then((response: IRiaCategories[]) => {
        if (response.length && response.length > 0) {
          const modelValue = response.filter((i: IRiaCategories) => {
            if (i.name.toUpperCase() === model.toUpperCase()) {
              return i.value;
            }
          });
          if (modelValue.length > 0 && modelValue[0].value) {
            dispatch(
              fetchDataForRiaSearchThunk(
                categoryValue,
                modelValue[0].value,
                brandValue,
                year,
                key
              )
            );
          } else {
            return;
          }
        } else {
          return;
        }
      })
      .catch((error) => {
        dispatch(actionCreators.itemHasErrored(true));
        Utils.catchError(error);
      });
  };
export const fetchDataForRiaSearchThunk =
  (
    categoryValue: number,
    modelValue: number,
    brandValue: number,
    year: string,
    key: string
  ): ThunkAction<void, IApplicationStates, null, Action<string>> =>
  (dispatch) => {
    const url = UtilsRia.generateUrlToSearchAdsIds(
      URLs.riaUrl,
      categoryValue,
      brandValue,
      modelValue,
      year,
      key
    );
    UtilsAsync.fetchDataForRiaSearchApi(url)
      .then((itemResponse: IRiaSearch) => {
        if (
          itemResponse.result &&
          itemResponse.result.search_result &&
          itemResponse.result.search_result.count &&
          itemResponse.result.search_result.count > 0
        ) {
          const ads: IRiaSearchData[] =
            itemResponse.result.search_result_common.data;
          dispatch(fetchDataForRiaAdsThunk(key, ads));
        } else {
          return;
        }
      })
      .catch((error) => {
        dispatch(actionCreators.itemHasErrored(true));
        Utils.catchError(error);
      });
  };
export const fetchDataForRiaAdsThunk =
  (
    key: string,
    ads: IRiaSearchData[]
  ): ThunkAction<void, IApplicationStates, null, Action<string>> =>
  (dispatch) => {
    const urls: string[] = ads.map((url: IRiaSearchData) => url.id);
    Promise.all(
      urls.map((url: string) =>
        UtilsAsync.fetchDataForRiaAdsApi(
          UtilsRia.generateUrlToGetAdsContent(URLs.riaUrl, key, url)
        )
      )
    )
      .then((imagesRiaResponse: IRiaAds[]) => {
        dispatch(actionCreators.addRiaAds(imagesRiaResponse));
        dispatch(actionCreators.imgRiaLoaded(true));
      })
      .catch((error) => {
        dispatch(actionCreators.itemHasErrored(true));
        Utils.catchError(error);
      });
  };

export const authoriseUserThunk =
  (
    authStatus: ILoggedIn,
    favorites: IItem[]
  ): ThunkAction<void, IApplicationStates, null, Action<string>> =>
  (dispatch) => {
    dispatch(actionCreators.login(authStatus));
    if (!Utils.isUserAuthenticated(authStatus.vendor)) {
      return;
    }
    dispatch(actionCreators.ItemsMerging(true));
    dispatch(userSyncThunk(authStatus.mail, favorites, null, null));
  };
export const addToFavoritesSyncThunk =
  (
    authStatus: ILoggedIn,
    favorites: IItem[],
    item: IItem
  ): ThunkAction<void, IApplicationStates, null, Action<string>> =>
  (dispatch) => {
    if (!Utils.isUserAuthenticated(authStatus.vendor)) {
      dispatch(actionCreators.addToFavorites(item));
      return;
    }
    dispatch(actionCreators.ItemsMerging(true));
    dispatch(userSyncThunk(authStatus.mail, favorites, item, true));
  };
export const removeFromFavoritesSyncThunk =
  (
    authStatus: ILoggedIn,
    favorites: IItem[],
    item: IItem
  ): ThunkAction<void, IApplicationStates, null, Action<string>> =>
  (dispatch) => {
    if (!Utils.isUserAuthenticated(authStatus.vendor)) {
      dispatch(actionCreators.removeFromFavorites(item));
      return;
    }
    dispatch(actionCreators.ItemsMerging(true));
    dispatch(userSyncThunk(authStatus.mail, favorites, item, false));
  };
export const manualSyncThunk =
  (
    authStatus: ILoggedIn,
    favorites: IItem[]
  ): ThunkAction<void, IApplicationStates, null, Action<string>> =>
  (dispatch) => {
    dispatch(actionCreators.ItemsMerging(true));
    dispatch(userSyncThunk(authStatus.mail, favorites, null, null));
  };
export const userSyncThunk =
  (
    email: string,
    favorites: IItem[],
    item: IItem | null,
    addRemoveItem: boolean | null
  ): ThunkAction<void, IApplicationStates, null, Action<string>> =>
  (dispatch) => {
    const userKeys = Utils.generateRowKeyAndPartitionKey(email);
    const serviceUrl =
      /*`${process.env.AZURE_TABLE_FAVORITES_SERVICE_URL}${process.env.AZURE_TABLE_FAVORITES_SERVICE_URL_QUERY}` ||*/ `${config.AZURE_TABLE_FAVORITES_SERVICE_URL}${config.AZURE_TABLE_FAVORITES_SERVICE_URL_QUERY}` ||
      "";
    const url = Utils.shapeUrlPlate(
      serviceUrl,
      userKeys.RowKey,
      userKeys.PartitionKey
    );
    UtilsAsync.userSyncApi(url)
      .then((itemResponse: IUserItem) => {
        const data = itemResponse.value;
        const items = Utils.mergeItems(data, favorites, item, addRemoveItem);
        if (items === undefined) {
          dispatch(actionCreators.ItemsMerging(false));
          return;
        }
        dispatch(actionCreators.MergeLocalAndCloudFavorites(items));
        dispatch(updateUserThunk(userKeys, items));
      })
      .catch((error) => {
        dispatch(actionCreators.ItemsMerging(false));
        Utils.catchError(error);
      });
  };
export const updateUserThunk =
  (
    userKeys: IUserKeys,
    items: IItem[]
  ): ThunkAction<void, IApplicationStates, null, Action<string>> =>
  (dispatch) => {
    const url = Utils.generateUrlToUpdateUser(
      /*process.env.AZURE_TABLE_FAVORITES_SERVICE_URL ||*/ config.AZURE_TABLE_FAVORITES_SERVICE_URL ||
        "",
      /*process.env.AZURE_TABLE_FAVORITES_SERVICE_URL_QUERY ||*/ config.AZURE_TABLE_FAVORITES_SERVICE_URL_QUERY ||
        "",
      userKeys.PartitionKey,
      userKeys.RowKey
    );
    UtilsAsync.updateUserApi(url, items)
      .then(() => {
        dispatch(actionCreators.ItemsMerging(false));
      })
      .catch((error) => {
        dispatch(actionCreators.ItemsMerging(false));
        Utils.catchError(error);
      });
  };
