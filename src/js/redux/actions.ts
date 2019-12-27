import * as actions from "./types";
import { Action } from "redux";
import { IApplicationStates, IItem, IServiceRespond, IVIN, IImageRecognizeResponse, IRiaCategories, IRiaSearch, IRiaAds, IRiaSearchData, IPlatesmania, IPlatesmaniaCars, Lang, INotification, ILoggedIn, IUserItem, IUserKeys, IEnvConfig } from "../models/Interfaces";
import { ThunkAction } from "redux-thunk";
import Utils from "../utils/Utils";
import UtilsRia from "../utils/UtilsRia";
import UtilsAsync from "../utils/UtilsAsync";
import { URLs, Headers } from "../data/Data";
/* tslint:disable no-var-requires */
const config: IEnvConfig = require("../../../env.json");

export const fetchDataForPlatesmania = (itemRequest: string): ThunkAction<void, IApplicationStates, null, Action<string>> => (dispatch) => {
    dispatch(imgCarsmaniaLoaded(false));
    const carPlate = Utils.combineConvertedSymbols(
        Utils.trimData(itemRequest).toLocaleUpperCase(),
        Utils.cyrillicRange,
        Utils.cyrillicToLatinToMatrix,
        Utils.reducer);
    const url = /*process.env.AZURE_PLATESMANIA_PROXY ||*/config.AZURE_PLATESMANIA_PROXY || "";
    const options = {
        method: "POST",
        body: Utils.generateBodyForPlatesManiaProxy(carPlate),
        headers: {
            Accept: Headers.Accept,
        },
    };
    fetch(url, options)
    .then(Utils.isResponseOk)
    .then((response) => response.json())
    .then((itemResponse: IPlatesmania) => {
        if (itemResponse.cars.length > 0) {
           const data = itemResponse.cars;
           dispatch(addPlatesmaniaCars(data));
        } else {
            dispatch(addPlatesmaniaCars([]));
        }
        dispatch(imgCarsmaniaLoaded(true));
    })
    .catch((error) => {
        dispatch(addPlatesmaniaCars([]));
        dispatch(imgCarsmaniaLoaded(true));
        Utils.catchError(error);
    });
};

export const fetchDataForRiaModel = (itemResponse: IItem): ThunkAction<void, IApplicationStates, null, Action<string>> => (dispatch) => {
    dispatch(imgRiaLoaded(false));
    const brand = itemResponse.brand.trim();
    const model = itemResponse.model.trim();
    const kind = itemResponse.kind.trim();
    const year = itemResponse.make_year.trim();

    const categoryValue = UtilsRia.detectCategory(kind);
    const brandArray = UtilsRia.detectBrandMatrix(categoryValue);
    const brandWithoutModel = UtilsRia.excludeModelFromBrand(brand, model);
    let brandValue: number;
    if (brandArray.length > 0) {
        brandValue = UtilsRia.detectModelValue(brandArray, brandWithoutModel);
    } else {
        return;
    }
    const key = /*process.env.RIA_KEY ||*/ config.RIA_KEY || "";
    const url = UtilsRia.generateUrlToGetModelValue(URLs.riaUrl, categoryValue, brandValue, key);

    fetch(url, {
        headers: {
          Accept: Headers.Accept,
        },
    })
    .then(Utils.isResponseOk)
    .then((response) => response.json())
    .then((response: IRiaCategories[]) => {
        if (response.length > 0) {
            const modelValue = response.filter((i: IRiaCategories) => {
                if (i.name.toUpperCase() === model.toUpperCase()) {
                    return i.value;
                }
            });
            dispatch(fetchDataForRiaSearch(categoryValue, modelValue[0].value, brandValue, year, key));
        } else {
            return;
        }
    })
    .catch((error) => {
        dispatch(itemHasErrored(true));
        Utils.catchError(error);
    });
};

export const fetchDataForRiaSearch = (categoryValue: number, modelValue: number, brandValue: number, year: string, key: string): ThunkAction<void, IApplicationStates, null, Action<string>> => (dispatch) => {
    const url = UtilsRia.generateUrlToSearchAdsIds(URLs.riaUrl, categoryValue, brandValue, modelValue, year, key);
    fetch(url, {
        headers: {
          Accept: Headers.Accept,
        },
    })
    .then(Utils.isResponseOk)
    .then((response) => response.json())
    .then((itemResponse: IRiaSearch) => {
        if (itemResponse.result.search_result.count > 0) {
            const ads: IRiaSearchData[] = itemResponse.result.search_result_common.data;
            dispatch(fetchDataForRiaAds(key, ads));
        } else {
            return;
        }
    })
    .catch((error) => {
        dispatch(itemHasErrored(true));
        Utils.catchError(error);
    });
};

export const fetchDataForRiaAds = (key: string, ads: IRiaSearchData[]): ThunkAction<void, IApplicationStates, null, Action<string>> => (dispatch) => {
    const urls: string[] = ads.map((url: IRiaSearchData) => url.id);
    Promise.all(urls.map((url: string) =>
        fetch(UtilsRia.generateUrlToGetAdsContent(URLs.riaUrl, key, url), {
            headers: {
              Accept: Headers.Accept,
            },
        })
        .then(Utils.isResponseOk)
        .then((response) => response.json())
        .catch((error) => {
            dispatch(itemHasErrored(true));
            Utils.catchError(error);
        }),
      ))
      .then((imagesRiaResponse: IRiaAds[]) => {
        dispatch(addRiaAds(imagesRiaResponse));
        dispatch(imgRiaLoaded(true));
      });
};

export const itemFetchDataForPlate = (itemRequest: string, url: string): ThunkAction<void, IApplicationStates, null, Action<string>> => async (dispatch) => {
    dispatch(setSearchingItemType(0));
    dispatch(itemIsLoaded(false));
    dispatch(itemIsLoading(true));
    dispatch(itemHasErrored(false));
    fetch(url, {
        headers: {
            Accept: Headers.Accept,
            contentType: Headers["Content-Type"],
        },
    })
    .then(Utils.isResponseOk)
    .then((response) => response.json())
    .then((itemResponse: IServiceRespond) => {
        dispatch(itemIsLoading(false));
        if (itemResponse.value.length > 0) {
            const data = itemResponse.value[0];
            dispatch(itemFetchDataSuccess(data));
            dispatch(addToItemsList({
                item: data,
                timestamp: Utils.generateCurrentDate(),
            }));
            dispatch(setItemRequest(itemRequest));
            dispatch(responseIsEmpty(false));
            dispatch(fetchDataForRiaModel(data));
            dispatch(fetchDataForPlatesmania(itemRequest));
            dispatch(AddBadge());
            UtilsAsync.playNotification();
        } else {
            dispatch(responseIsEmpty(true));
        }
        dispatch(itemIsLoaded(true));
    })
    .catch((error) => {
        dispatch(itemHasErrored(true));
        Utils.catchError(error);
    });
};

export const itemFetchDataForVin = (vinRequest: string, url: string): ThunkAction<void, IApplicationStates, null, Action<string>> => (dispatch) => {
    dispatch(setSearchingItemType(1));
    dispatch(itemIsLoaded(false));
    dispatch(itemIsLoading(true));
    dispatch(itemHasErrored(false));

    fetch(url, {
        headers: {
          Accept: Headers.Accept,
        },
    })
    .then(Utils.isResponseOk)
    .then((response) => response.json())
    .then((itemResponse: IVIN) => {
        dispatch(itemIsLoading(false));
        if (itemResponse.Results && itemResponse.Results.length > 0) {
            const data = itemResponse;
            dispatch(itemFetchDataVinSuccess(data));
            dispatch(addToVinsListList(data));
            dispatch(setVinRequest(vinRequest));
            dispatch(responseIsEmpty(false));
        } else {
            dispatch(responseIsEmpty(true));
        }
        dispatch(itemIsLoaded(true));
    })
    .catch((error) => {
        dispatch(itemHasErrored(true));
        Utils.catchError(error);
    });
};

export const imageFetchData = (file: File, url: string): ThunkAction<void, IApplicationStates, null, Action<string>> => (dispatch) => {
    dispatch(setSearchingItemType(3));
    dispatch(itemIsLoaded(false));
    dispatch(itemIsLoading(true));
    dispatch(itemHasErrored(false));

    const formData = new FormData();
    formData.append("file", file);

    const options = {
        method: "POST",
        body: formData,
    };

    fetch(url, options)
    .then(Utils.isResponseOk)
    .then((response) => response.json())
    .then((imageResponse: IImageRecognizeResponse) => {
        dispatch(itemIsLoading(false));
        if (imageResponse.results.length > 0) {
            const carPlate = Utils.combineConvertedSymbols(
                Utils.changeSymbols1toI(
                    Utils.trimData(imageResponse.results[0].plate),
                ).toLocaleUpperCase(),
                Utils.latinRange,
                Utils.latinToCyrillicMatrix,
                Utils.reducer,
              );
            const serviceUrl = /*process.env.AZURE_TABLE_SERVICE_URL ||*/ config.AZURE_TABLE_SERVICE_URL || "";
            const carPlateUrl = Utils.shapeUrlPlate(serviceUrl, carPlate, Utils.extractPartitionKey(carPlate));
            dispatch(itemFetchDataForPlate(carPlate, carPlateUrl));
            dispatch(responseIsEmpty(false));
        } else {
            dispatch(responseIsEmpty(true));
        }
        dispatch(itemIsLoaded(true));
    })
    .catch((error) => {
        dispatch(itemHasErrored(true));
        Utils.catchError(error);
    });
};

export const authoriseUser = (authStatus: ILoggedIn, favorites: IItem[]): ThunkAction<void, IApplicationStates, null, Action<string>> => (dispatch) => {
    dispatch(login(authStatus));
    if (!Utils.isUserAuthenticated(authStatus.vendor)) {
        return;
    }
    dispatch(ItemsMerging(true));
    dispatch(userSync(authStatus.mail, favorites, null, null));
};
export const addToFavoritesSync = (authStatus: ILoggedIn, favorites: IItem[], item: IItem): ThunkAction<void, IApplicationStates, null, Action<string>> => (dispatch) => {
    if (!Utils.isUserAuthenticated(authStatus.vendor)) {
        dispatch(addToFavorites(item));
        return;
    }
    dispatch(ItemsMerging(true));
    dispatch(userSync(authStatus.mail, favorites, item, true));
};
export const removeFromFavoritesSync = (authStatus: ILoggedIn, favorites: IItem[], item: IItem): ThunkAction<void, IApplicationStates, null, Action<string>> => (dispatch) => {
    if (!Utils.isUserAuthenticated(authStatus.vendor)) {
        dispatch(removeFromFavorites(item));
        return;
    }
    dispatch(ItemsMerging(true));
    dispatch(userSync(authStatus.mail, favorites, item, false));
};
export const manualSync = (authStatus: ILoggedIn, favorites: IItem[]): ThunkAction<void, IApplicationStates, null, Action<string>> => (dispatch) => {
    dispatch(ItemsMerging(true));
    dispatch(userSync(authStatus.mail, favorites, null, null));
};
export const userSync = (email: string, favorites: IItem[], item: IItem | null, addRemoveItem: boolean | null): ThunkAction<void, IApplicationStates, null, Action<string>> => (dispatch) => {
    const userKeys = Utils.generateRowKeyAndPartitionKey(email);
    const serviceUrl = /*`${process.env.AZURE_TABLE_FAVORITES_SERVICE_URL}${process.env.AZURE_TABLE_FAVORITES_SERVICE_URL_QUERY}` ||*/ `${config.AZURE_TABLE_FAVORITES_SERVICE_URL}${config.AZURE_TABLE_FAVORITES_SERVICE_URL_QUERY}` || "";
    const url = Utils.shapeUrlPlate(
        serviceUrl,
        userKeys.RowKey,
        userKeys.PartitionKey,
    );
    fetch(url, {
        headers: {
          Accept: Headers.Accept,
        },
    })
    .then(Utils.isResponseOk)
    .then((response) => response.json())
    .then((itemResponse: IUserItem) => {
        const data = itemResponse.value;
        const items = Utils.mergeItems(data, favorites, item, addRemoveItem);
        if (items === undefined) {
            dispatch(ItemsMerging(false));
            return;
        }
        dispatch(MergeLocalAndCloudFavorites(items));
        dispatch(updateUser(userKeys, items));
    })
    .catch((error) => {
        dispatch(ItemsMerging(false));
        Utils.catchError(error);
    });
};
export const updateUser = (userKeys: IUserKeys, items: IItem[]): ThunkAction<void, IApplicationStates, null, Action<string>> => (dispatch) => {
    const url = Utils.generateUrlToUpdateUser(
        /*process.env.AZURE_TABLE_FAVORITES_SERVICE_URL ||*/ config.AZURE_TABLE_FAVORITES_SERVICE_URL || "",
        /*process.env.AZURE_TABLE_FAVORITES_SERVICE_URL_QUERY ||*/ config.AZURE_TABLE_FAVORITES_SERVICE_URL_QUERY || "",
        userKeys.PartitionKey,
        userKeys.RowKey,
    );
    const options: RequestInit = {
        headers: {
            contentType: Headers["Content-Type"],
        },
        method: "PUT",
        body: Utils.generateBodyForUpdateUser(items),
    };

    fetch(url, options)
    .then(Utils.isResponseOk)
    .then((response) => response)
    .then(() => {
        dispatch(ItemsMerging(false));
    })
    .catch((error) => {
        dispatch(ItemsMerging(false));
        Utils.catchError(error);
    });
};
export const MergeLocalAndCloudFavorites = (items: IItem[]): actions.IMergeLocalAndCloudFavoritesAction => ({
    type: actions.MERGE_LOCAL_AND_CLOUD_FAVORITES,
    payload: items,
});
export const ItemsMerging = (payloadData: boolean): actions.IItemsMergingAction => ({
    type: actions.ITEMS_MERGING,
    payload: payloadData,
});

export const ResetBadge = (): actions.IResetBadgeAction => ({
    type: actions.RESET_BADGE,
});
export const AddBadge = (): actions.IAddBadgeAction => ({
    type: actions.ADD_BADGE,
});
export const removeFromFavorites = (item: IItem): actions.IRemoveFromFavoritesAction => ({
    type: actions.REMOVE_FROM_FAVORITES,
    payload: item,
});
export const addToFavorites = (item: IItem): actions.IAddToFavoritesAction => ({
    type: actions.ADD_TO_FAVORITES,
    payload: item,
});
export const changeLang = (status: Lang): actions.IChangeLangAction => ({
    type: actions.CHANGE_LANG,
    payload: status,
});
export const imgCarsmaniaLoaded = (status: boolean): actions.IImgCarsmaniaLoadedAction => ({
    type: actions.IMG_CARSMANIA_LOADED,
    payload: status,
});
export const imgRiaLoaded = (status: boolean): actions.IImgRiaLoadedAction => ({
    type: actions.IMG_RIA_LOADED,
    payload: status,
});
export const addPlatesmaniaCars = (imagesPlatesmania: IPlatesmaniaCars[]): actions.IAddCarsmaniaCarsAction => ({
    type: actions.ADD_CARSMANIA_CARS,
    payload: imagesPlatesmania,
});
export const addRiaAds = (imagesRia: IRiaAds[]): actions.IAddRiaAdsAction => ({
    type: actions.ADD_RIA_ADS,
    payload: imagesRia,
});
export const login = (authStatus: ILoggedIn): actions.ILoginAction => ({
    type: actions.LOGIN,
    payload: authStatus,
});
export const addToVinsListList = (vinResponse: IVIN): actions.IAddToVinsListListAction => ({
    type: actions.ADD_TO_VINS_LIST,
    payload: vinResponse,
});
export const itemFetchDataVinSuccess = (vinResponse: IVIN): actions.IItemFetchDataVinSuccessAction => ({
    type: actions.ITEM_FETCH_DATA_VIN_SUCCESS,
    payload: vinResponse,
});
export const setVinRequest = (vinRequest: string): actions.ISetVinRequestAction => ({
    type: actions.SET_VIN_REQUEST,
    payload: vinRequest,
});
export const setSearchingItemType = (response: number): actions.ISetSearchingItemTypeAction => ({
    type: actions.SET_SEARCHING_ITEM_TYPE,
    payload: response,
});
export const responseIsEmpty = (response: boolean): actions.IResponseIsEmptyAction => ({
    type: actions.RESPONSE_IS_EMPTY,
    payload: response,
});
export const setItemRequest = (itemRequest: string): actions.ISetItemRequestAction => ({
    type: actions.SET_ITEM_REQUEST,
    payload: itemRequest,
});
export const itemIsLoading = (bool: boolean): actions.IItemsIsLoadingAction => ({
    type: actions.ITEM_IS_LOADING,
    payload: bool,
});
export const itemIsLoaded = (bool: boolean): actions.IItemsIsLoadedAction => ({
    type: actions.ITEM_IS_LOADED,
    payload: bool,
});
export const itemHasErrored = (bool: boolean): actions.IItemsHasErroredAction => ({
    type: actions.ITEM_HAS_ERRORED,
    payload: bool,
});
export const itemFetchDataSuccess = (itemResponse: IItem): actions.IItemFetchDataSuccessAction => ({
    type: actions.ITEM_FETCH_DATA_SUCCESS,
    payload: itemResponse,
});
export const getItems = (): actions.IGetItemAction => ({
    type: actions.GET_ITEMS,
});
export const addToItemsList = (itemResponse: INotification): actions.IAddToItemsListAction => ({
    type: actions.ADD_TO_ITEMS_LIST,
    payload: itemResponse,
});
export const toggleDrawer = (drawerState: boolean): actions.IToggleDrawerAction => ({
    type: actions.TOGGLE_DRAWER,
    payload: drawerState,
});
