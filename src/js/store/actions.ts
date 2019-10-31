import  * as actions from "./types";
import { Action } from "redux";
import { ApplicationStates, Item, ServiceRespond, VIN, imageRecognizeResponse, Auth, IFacebook, IGoogle, IRiaCategories, IRiaSearch, 
    IRiaAds, IRiaSearchData, IPlatesmania, IPlatesmaniaCars, Lang } from "../models/Interfaces";
import { ThunkAction } from "redux-thunk";
import Utils from "../utils/Utils";
import UtilsRia from "../utils/UtilsRia";
import { URLs, platesManiaDataTest } from "../data/Data";

export const fetchDataForPlatesmania = (itemRequest: string): ThunkAction<void, ApplicationStates, null, Action<string>> => (dispatch) => {
    dispatch(imgCarsmaniaLoaded(false));
    const url = Utils.generateUrlforPlatesmania(URLs.getImagesByCarplateUrl, itemRequest);
    fetch(url, {
        headers:{
          'Accept': 'application/json'
        }
    })
    .then((response) => {
        if (!response.ok){
            throw Error(response.statusText);
        }
        return response;
    })
    .then(response => response.json())
    .then((itemResponse: IPlatesmania) => {
        if(itemResponse.cars.length > 0){
           const data = itemResponse.cars;
           dispatch(addPlatesmaniaCars(data));
        }
        dispatch(imgCarsmaniaLoaded(true));
    })
    .catch((error) => {
        dispatch(addPlatesmaniaCars(platesManiaDataTest));
        dispatch(imgCarsmaniaLoaded(true));
        console.log(error);
    });
}

export const fetchDataForRiaModel = (itemResponse: Item): ThunkAction<void, ApplicationStates, null, Action<string>> => (dispatch) => {
    dispatch(imgRiaLoaded(false));
    const brand = itemResponse.brand.trim();
    const model = itemResponse.model.trim();
    const kind = itemResponse.kind.trim();
    const year = itemResponse.make_year.trim();

    const categoryValue = UtilsRia.detectCategory(kind);
    const brandArray = UtilsRia.detectBrandMatrix(categoryValue);
    const brandWithoutModel = UtilsRia.excludeModelFromBrand(brand, model);
    let brandValue: number;
    if(brandArray.length > 0){
        brandValue = UtilsRia.detectModelValue(brandArray, brandWithoutModel);
    }
    else{
        return;
    }
    const key = process.env.RIA_KEY || "";
    const url = UtilsRia.generateUrlToGetModelValue(URLs.riaUrl, categoryValue, brandValue, key);

    fetch(url, {
        headers:{
          'Accept': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok){
            throw Error(response.statusText);
        }
        return response;
    })
    .then(response => response.json())
    .then((response: IRiaCategories[]) => {
        if(response.length > 0){
            const modelValue = response.filter((i: IRiaCategories) => {
                if(i.name.toUpperCase() === model.toUpperCase()){
                    return i.value;
                }
            });
            dispatch(fetchDataForRiaSearch(categoryValue, modelValue[0].value, brandValue, year, key));
        }
        else{
            return;
        }
    })
    .catch((error) => {
        dispatch(itemHasErrored(true));
        console.log(error);
    });
}

export const fetchDataForRiaSearch = (categoryValue: number, modelValue: number, brandValue: number, year: string, key: string): ThunkAction<void, ApplicationStates, null, Action<string>> => (dispatch) => {
    const url = UtilsRia.generateUrlToSearchAdsIds(URLs.riaUrl, categoryValue, brandValue, modelValue, year, key);
    fetch(url, {
        headers:{
          'Accept': 'application/json'
        }
    })
    .then((response) => {
        if (!response.ok){
            throw Error(response.statusText);
        }
        return response;
    })
    .then((response) => {
        return response.json(); })
    .then((itemResponse: IRiaSearch) => {
        if(itemResponse.result.search_result.count > 0){
            const ads: IRiaSearchData[] = itemResponse.result.search_result_common.data;
            dispatch(fetchDataForRiaAds(key, ads));
        }
        else{
            return;
        }
    })
    .catch((error) => {
        dispatch(itemHasErrored(true));
        console.log(error);
    });
}

export const fetchDataForRiaAds = (key: string, ads: IRiaSearchData[]): ThunkAction<void, ApplicationStates, null, Action<string>> => (dispatch) => {
    const urls: string[] = ads.map((url: IRiaSearchData) => url.id);
    Promise.all(urls.map((url: string) =>
        fetch(UtilsRia.generateUrlToGetAdsContent(URLs.riaUrl, key, url), {
            headers:{
              'Accept': 'application/json'
            }
        })
        .then((response) => {
            if (!response.ok){
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) =>  response.json())
        .catch((error) => {
            dispatch(itemHasErrored(true));
            console.log(error);
        })
      ))
      .then((imagesRiaResponse: IRiaAds[]) => {
        dispatch(addRiaAds(imagesRiaResponse));
        dispatch(imgRiaLoaded(true));
        console.log(imagesRiaResponse);
      });
}

export const itemFetchDataForPlate = (itemRequest: string, url: string): ThunkAction<void, ApplicationStates, null, Action<string>> => async (dispatch) => {
    dispatch(setSearchingItemType(0));
    dispatch(itemIsLoaded(false));
    dispatch(itemIsLoading(true));
    dispatch(itemHasErrored(false));

    fetch(url, {
        headers:{
          'Accept': 'application/json'
        }
    })
    .then((response) => {
        if (!response.ok){
            throw Error(response.statusText);
        }
        dispatch(itemIsLoading(false));
        return response;
    })
    .then((response) => {
        return response.json(); })
    .then((itemResponse: ServiceRespond) => {
        if(itemResponse.value.length > 0){
            const data = itemResponse.value[0];
            dispatch(itemFetchDataSuccess(data));
            dispatch(addToItemsList(data));
            dispatch(setItemRequest(itemRequest));
            dispatch(responseIsEmpty(false));
            dispatch(fetchDataForRiaModel(data));
            dispatch(fetchDataForPlatesmania(itemRequest));
        }
        else{
            dispatch(responseIsEmpty(true));
        }
        dispatch(itemIsLoaded(true));
    })
    .catch((error) => {
        dispatch(itemHasErrored(true));
        console.log(error);
    });
};

export const itemFetchDataForVin = (vinRequest: string, url: string): ThunkAction<void, ApplicationStates, null, Action<string>> => (dispatch) => {
    dispatch(setSearchingItemType(1));
    dispatch(itemIsLoaded(false));
    dispatch(itemIsLoading(true));
    dispatch(itemHasErrored(false));

    fetch(url, {
        headers:{
          'Accept': 'application/json'
        }
    })
    .then((response) => {
        if (!response.ok){
            throw Error(response.statusText);
        }
        dispatch(itemIsLoading(false));
        return response;
    })
    .then((response) => {
        return response.json(); })
    .then((itemResponse: VIN) => {
        if(itemResponse.Results.length > 0){
            const data = itemResponse;
            dispatch(itemFetchDataVinSuccess(data));
            dispatch(addToVinsListList(data));
            dispatch(setVinRequest(vinRequest));
            dispatch(responseIsEmpty(false));
        }
        else{
            dispatch(responseIsEmpty(true));
        }
        dispatch(itemIsLoaded(true));
    })
    .catch((error) => {
        dispatch(itemHasErrored(true));
        console.log(error);
    });
};

export const imageFetchData = (file: File, url: string): ThunkAction<void, ApplicationStates, null, Action<string>> => (dispatch) => {
    dispatch(setSearchingItemType(3));
    dispatch(itemIsLoaded(false));
    dispatch(itemIsLoading(true));
    dispatch(itemHasErrored(false));

    let formData = new FormData();
    formData.append('file', file);

    const options = {
        method: 'POST',
        body: formData,
    };

    fetch(url, options)
    .then((response) => {
        if (!response.ok){
            throw Error(response.statusText);
        }
        dispatch(itemIsLoading(false));
        return response;
    })
    .then((response) => {
        return response.json(); })
    .then((imageResponse: imageRecognizeResponse) => {        
        if(imageResponse.results.length > 0){
            const carPlate = Utils.convertToCyrillic(                
                Utils.changeSymbols1toI(
                    Utils.trimData(imageResponse.results[0].plate)
                ).toLocaleUpperCase(),
                Utils.latinRange, 
                Utils.latinToCyrillicMatrix, 
                Utils.reducer
              );

            const serviceUrl = process.env.AZURE_TABLE_SERVICE_URL || URLs.getDataByPlateUrl;
            const url = Utils.shapeUrlPlate(serviceUrl, carPlate, Utils.extractPartitionKey(carPlate));
            dispatch(itemFetchDataForPlate(carPlate, url));
            dispatch(responseIsEmpty(false));
        }
        else{
            dispatch(responseIsEmpty(true));
        }
        dispatch(itemIsLoaded(true));
        
    })
    .catch((error) => {
        dispatch(itemHasErrored(true));
        console.log(error);
    });
};

export const removeFromFavorites = (item: Item): actions.RemoveFromFavoritesAction => ({
    type: actions.REMOVE_FROM_FAVORITES,
    payload: item
});
export const addToFavorites = (item: Item): actions.AddToFavoritesAction => ({
    type: actions.ADD_TO_FAVORITES,
    payload: item
});

export const changeLang = (status: Lang): actions.ChangeLangAction => ({
    type: actions.CHANGE_LANG,
    payload: status
});

export const imgCarsmaniaLoaded = (status: boolean): actions.ImgCarsmaniaLoadedAction => ({
    type: actions.IMG_CARSMANIA_LOADED,
    payload: status
});

export const imgRiaLoaded = (status: boolean): actions.ImgRiaLoadedAction => ({
    type: actions.IMG_RIA_LOADED,
    payload: status
});

export const addPlatesmaniaCars = (imagesPlatesmania: IPlatesmaniaCars[]): actions.AddCarsmaniaCarsAction => ({
    type: actions.ADD_CARSMANIA_CARS,
    payload: imagesPlatesmania
});

export const addRiaAds = (imagesRia: IRiaAds[]): actions.AddRiaAdsAction => ({
    type: actions.ADD_RIA_ADS,
    payload: imagesRia
});

export const loginGoogle = (login: IGoogle): actions.LoginGoogleAction => ({
    type: actions.LOGIN_GOOGLE,
    payload: login
});

export const loginFacebook = (login: IFacebook): actions.LoginFacebookAction => ({
    type: actions.LOGIN_FACEBOOK,
    payload: login
});

export const login = (authStatus: Auth): actions.LoginAction => ({
    type: actions.LOGIN,
    payload: authStatus
});

export const addToVinsListList = (vinResponse: VIN): actions.AddToVinsListListAction => ({
    type: actions.ADD_TO_VINS_LIST,
    payload: vinResponse
});

export const itemFetchDataVinSuccess = (vinResponse: VIN): actions.ItemFetchDataVinSuccessAction => ({
    type: actions.ITEM_FETCH_DATA_VIN_SUCCESS,
    payload: vinResponse
});

export const setVinRequest = (vinRequest: string): actions.SetVinRequestAction => ({
    type: actions.SET_VIN_REQUEST,
    payload: vinRequest
});

export const setSearchingItemType = (response: number): actions.SetSearchingItemTypeAction => ({
    type: actions.SET_SEARCHING_ITEM_TYPE,
    payload: response
});

export const responseIsEmpty = (response: boolean): actions.ResponseIsEmptyAction => ({
    type: actions.RESPONSE_IS_EMPTY,
    payload: response
});

export const setItemRequest = (itemRequest: string): actions.SetItemRequestAction => ({
    type: actions.SET_ITEM_REQUEST,
    payload: itemRequest
});

export const itemIsLoading = (bool: boolean): actions.ItemsIsLoadingAction => ({
    type: actions.ITEM_IS_LOADING,
    payload: bool
});

export const itemIsLoaded = (bool: boolean): actions.ItemsIsLoadedAction => ({
    type: actions.ITEM_IS_LOADED,
    payload: bool
});

export const itemHasErrored = (bool: boolean): actions.ItemsHasErroredAction => ({   
    type: actions.ITEM_HAS_ERRORED,
    payload: bool
});
  
export const itemFetchDataSuccess = (itemResponse: Item): actions.ItemFetchDataSuccessAction => ({
    type: actions.ITEM_FETCH_DATA_SUCCESS,
    payload: itemResponse
});

export const getItems = (): actions.GetItemAction => ({
    type: actions.GET_ITEMS
});

export const addToItemsList = (itemResponse: Item): actions.AddToItemsListAction => ({
    type: actions.ADD_TO_ITEMS_LIST,
    payload: itemResponse
});

export const toggleDrawer = (drawerState: boolean): actions.ToggleDrawerAction => ({
    type: actions.TOGGLE_DRAWER,
    payload: drawerState
});