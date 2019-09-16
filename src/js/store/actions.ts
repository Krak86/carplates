import  * as actions from "./types";
import { Action } from "redux";
import { Item } from "../models/Interfaces";
import { ThunkAction } from "redux-thunk";
import { ApplicationStates } from "../models/Interfaces";

export const itemFetchData = (itemRequest: string, url: string): ThunkAction<void, ApplicationStates, null, Action<string>> => (dispatch, getState) => {
    dispatch(setItemRequest(itemRequest));
    dispatch(itemIsLoading(true));
    fetch(url)
    .then((response) => {
        if (!response.ok){
            throw Error(response.statusText);
        }
        dispatch(itemIsLoading(false));
        return response;
    })
    .then((response) => response.json())
    .then((itemResponse: Item) => {
        dispatch(itemFetchDataSuccess(itemResponse));
        dispatch(addToItemsList(itemResponse));
    })
    .catch(() => dispatch(itemHasErrored(true)));
};

export const setItemRequest = (itemRequest: string): actions.SetItemRequestAction => ({
    type: actions.SET_ITEM_REQUEST,
    payload: itemRequest
});

export const itemIsLoading = (bool: boolean): actions.ItemsIsLoadingAction => ({
    type: actions.ITEM_IS_LOADING,
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

export const addToItemsList = (itemResponse: Item) => ({
    type: actions.ADD_TO_ITEMS_LIST,
    payload: itemResponse
})