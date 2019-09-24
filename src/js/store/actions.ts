import  * as actions from "./types";
import { Action } from "redux";
import { ApplicationStates, Item, ServiceRespond, VIN, imageRecognizeResponse, Auth, IFacebook, IGoogle, IRiaCategories, IRiaSearch } from "../models/Interfaces";
import { ThunkAction } from "redux-thunk";
import Utils from "../utils/Utils";
import { URLs } from "../data/Data";


export const fetchDataForRiaModel = (itemResponse: Item): ThunkAction<void, ApplicationStates, null, Action<string>> => (dispatch) => {
    const brand = itemResponse.brand;
    const model = itemResponse.model;
    const kind = itemResponse.kind;
    const make_year = itemResponse.make_year;
    const url = "";
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
    .then((response: IRiaCategories[]) => {
        if(response.length > 0){
            const modelValue = response.filter((i: IRiaCategories) => {
                if(i.name === model){
                    return i.value;
                }                
            });
            dispatch(fetchDataForRiaSearch(itemResponse, modelValue[0].value));
        }
        else{
        }
    });
}

export const fetchDataForRiaSearch = (itemResponse: Item, modelValue: number): ThunkAction<void, ApplicationStates, null, Action<string>> => (dispatch) => {
    const url = "";
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

    });
}

export const itemFetchDataForPlate = (itemRequest: string, url: string): ThunkAction<void, ApplicationStates, null, Action<string>> => async (dispatch) => {
    dispatch(setSearchingItemType(0));
    dispatch(itemIsLoaded(false));
    dispatch(itemIsLoading(true));

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