import * as actions from "./types";
import { Action } from "redux";
import { Item } from "../models/Interfaces";
import { ThunkAction } from "redux-thunk";
import { AppState } from ".";

export const getItem = () => ({
    type: actions.GET_ITEM
});

export const itemsIsLoading = (bool: boolean) => ({
    type: actions.ITEM_IS_LOADING,
    isLoading: bool    
});

export const itemsHasErrored = (bool: boolean) => ({    
    type: actions.ITEM_HAS_ERRORED,
    hasErrored: bool    
});
  
export const itemFetchDataSuccess = (item: Item) => ({
    type: actions.ITEM_FETCH_DATA_SUCCESS,
    item
});

export const itemsFetchData = (url: string): ThunkAction<void, AppState, null, Action<string>> => (dispatch, getState) => {
    dispatch(itemsIsLoading(true));
    fetch(url)
    .then((response) => {
        if (!response.ok){
            throw Error(response.statusText);
        }
        dispatch(itemsIsLoading(false));
        return response;
    })
    .then((response) => response.json())
    .then((item: Item) => dispatch(itemFetchDataSuccess(item)))
    .catch(() => dispatch(itemsHasErrored(true)));
};