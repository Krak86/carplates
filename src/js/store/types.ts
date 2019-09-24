import { Item, VIN, Auth, IFacebook, IGoogle, IRiaAds } from "../models/Interfaces";

export const ITEM_FETCH_DATA_SUCCESS: string = "ITEM_FETCH_DATA_SUCCESS";
export const SET_ITEM_REQUEST: string = "SET_ITEM_REQUEST";
export const ITEM_HAS_ERRORED: string = "ITEM_HAS_ERRORED";
export const ITEM_IS_LOADING: string = "ITEM_IS_LOADING";
export const ITEM_IS_LOADED: string = "ITEM_IS_LOADED";
export const GET_ITEMS: string = "GET_ITEMS";
export const ADD_TO_ITEMS_LIST: string = "ADD_TO_ITEMS_LIST";
export const TOGGLE_DRAWER: string = "TOGGLE_DRAWER";
export const RESPONSE_IS_EMPTY: string = "RESPONSE_IS_EMPTY";
export const SET_SEARCHING_ITEM_TYPE: string = "SET_SEARCHING_ITEM_TYPE";
export const SET_VIN_REQUEST: string = "SET_VIN_REQUEST";
export const ITEM_FETCH_DATA_VIN_SUCCESS: string = "ITEM_FETCH_DATA_VIN_SUCCESS";
export const ADD_TO_VINS_LIST: string = "ADD_TO_VINS_LIST";
export const LOGIN: string = "LOGIN";
export const LOGIN_FACEBOOK: string = "LOGIN_FACEBOOK";
export const LOGIN_GOOGLE: string = "LOGIN_GOOGLE";
export const ADD_RIA_ADS: string = "ADD_RIA_ADS";

export interface AddRiaAdsAction{
    type: typeof ADD_RIA_ADS;
    payload: IRiaAds[];
}
export interface LoginFacebookAction{
    type: typeof LOGIN_FACEBOOK;
    payload: IFacebook;
}
export interface LoginGoogleAction{
    type: typeof LOGIN_GOOGLE;
    payload: IGoogle;
}
export interface LoginAction{
    type: typeof LOGIN;
    payload: Auth;
}
export interface AddToVinsListListAction{
    type: typeof ADD_TO_VINS_LIST;
    payload: VIN;
}
export interface ItemFetchDataVinSuccessAction{
    type: typeof ITEM_FETCH_DATA_VIN_SUCCESS;
    payload: VIN;
}
export interface SetVinRequestAction{
    type: typeof SET_VIN_REQUEST;
    payload: string;
}
export interface SetSearchingItemTypeAction{
    type: typeof SET_SEARCHING_ITEM_TYPE;
    payload: number;
}
export interface ResponseIsEmptyAction{
    type: typeof RESPONSE_IS_EMPTY;
    payload: boolean;
}
export interface ToggleDrawerAction{
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
export interface AddToItemsListAction{
    type: typeof ADD_TO_ITEMS_LIST;
    payload: Item;
}

//export type ActionType = SetItemRequestAction | GetItemAction | ItemFetchDataSuccessAction | ItemsIsLoadingAction | ItemsHasErroredAction | AddToItemsList | SetSearchingItemType;
