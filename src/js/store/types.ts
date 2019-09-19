import { Item } from "../models/Interfaces";

export const ITEM_FETCH_DATA_SUCCESS: string = "ITEM_FETCH_DATA_SUCCESS";
export const SET_ITEM_REQUEST: string = "SET_ITEM_REQUEST";
export const ITEM_HAS_ERRORED: string = "ITEM_HAS_ERRORED";
export const ITEM_IS_LOADING: string = "ITEM_IS_LOADING";
export const ITEM_IS_LOADED: string = "ITEM_IS_LOADED";
export const GET_ITEMS: string = "GET_ITEMS";
export const ADD_TO_ITEMS_LIST: string = "ADD_TO_ITEMS_LIST";
export const TOGGLE_DRAWER: string = "TOGGLE_DRAWER";
export const RESPONSE_IS_EMPTY: string = "RESPONSE_IS_EMPTY";

export interface ResponseIsEmptyAction{
    type: typeof RESPONSE_IS_EMPTY;
    payload: boolean;
}
export interface ToggleDrawer{
    type: typeof TOGGLE_DRAWER;
    payload: boolean;
}

export interface SetItemRequestAction{
    type: typeof SET_ITEM_REQUEST;
    payload: string;
}
export interface ItemFetchDataSuccessAction{
    type: typeof ITEM_FETCH_DATA_SUCCESS;
    payload: Item;
}
export interface ItemsIsLoadingAction{
    type: typeof ITEM_IS_LOADING;
    payload: boolean;
}
export interface ItemsIsLoadedAction{
    type: typeof ITEM_IS_LOADED;
    payload: boolean;
}
export interface ItemsHasErroredAction{
    type: typeof ITEM_HAS_ERRORED;
    payload: boolean;
}
export interface GetItemAction{
    type: typeof GET_ITEMS;
}

export interface AddToItemsList{
    type: typeof ADD_TO_ITEMS_LIST;
    payload: Item;
}

export type ActionType = SetItemRequestAction | GetItemAction | ItemFetchDataSuccessAction | ItemsIsLoadingAction | ItemsHasErroredAction | AddToItemsList;