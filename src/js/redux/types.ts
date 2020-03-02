import { IItem, IVIN, IRiaAds, IPlatesmaniaCars, Lang, INotification, ILoggedIn, IFetchData, IFetchFile, IAuthorise, IFavorites } from "../models/Interfaces";

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
export const ADD_RIA_ADS: string = "ADD_RIA_ADS";
export const ADD_CARSMANIA_CARS: string = "ADD_CARSMANIA_CARS";
export const IMG_RIA_LOADED: string = "IMG_RIA_LOADED";
export const IMG_CARSMANIA_LOADED: string = "IMG_CARSMANIA_LOADED";
export const CHANGE_LANG: string = "CHANGE_LANG";
export const ADD_TO_FAVORITES: string = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES: string = "REMOVE_FROM_FAVORITES";
export const ADD_BADGE: string = "ADD_BADGE";
export const RESET_BADGE: string = "RESET_BADGE";
export const GET_USER_DATA: string = "GET_USER_DATA";
export const PUT_USER_DATA: string = "PUT_USER_DATA";
export const MERGE_LOCAL_AND_CLOUD_FAVORITES: string = "MERGE_LOCAL_AND_CLOUD_FAVORITES";
export const ITEMS_MERGING: string = "ITEMS_MERGING";
export const FORCE_UPDATES: string = "FORCE_UPDATES";
/* tslint:disable no-commented-code */
// saga's action types
export const ITEM_FETCH_DATA_FOR_PLATE: string = "ITEM_FETCH_DATA_FOR_PLATE";
export const ITEM_FETCH_DATA_FOR_VIN: string = "ITEM_FETCH_DATA_FOR_VIN";
export const IMAGE_FETCH_DATA: string = "IMAGE_FETCH_DATA";
export const AUTHORISE_USER: string = "AUTHORISE_USER";
export const ADD_TO_FAVORITES_SYNC: string = "ADD_TO_FAVORITES_SYNC";
export const REMOVE_FROM_FAVORITES_SYNC: string = "REMOVE_FROM_FAVORITES_SYNC";
export const MANUAL_SYNC: string = "MANUAL_SYNC";

export interface IItemFetchDataForPlate {
    type: typeof ITEM_FETCH_DATA_FOR_PLATE;
    payload: IFetchData;
}
export interface IItemFetchDataForVin {
    type: typeof ITEM_FETCH_DATA_FOR_VIN;
    payload: IFetchData;
}
export interface IImageFetchData {
    type: typeof ITEM_FETCH_DATA_FOR_VIN;
    payload: IFetchFile;
}
export interface IAuthoriseUser {
    type: typeof AUTHORISE_USER;
    payload: IAuthorise;
}
export interface IAddToFavoritesSync {
    type: typeof ADD_TO_FAVORITES_SYNC;
    payload: IFavorites;
}
export interface IRemoveFromFavoritesSync {
    type: typeof REMOVE_FROM_FAVORITES_SYNC;
    payload: IFavorites;
}
export interface IManualSync {
    type: typeof MANUAL_SYNC;
    payload: IAuthorise;
}

export interface IForceUpdatesAction {
    type: typeof FORCE_UPDATES;
    payload: boolean;
}

export interface IItemsMergingAction {
    type: typeof ITEMS_MERGING;
    payload: boolean;
}
export interface IMergeLocalAndCloudFavoritesAction {
    type: typeof MERGE_LOCAL_AND_CLOUD_FAVORITES;
    payload: IItem[];
}
export interface IPutUserDataAction {
    type: typeof PUT_USER_DATA;
}
export interface IGetUserDataAction {
    type: typeof GET_USER_DATA;
}
export interface IResetBadgeAction {
    type: typeof RESET_BADGE;
}
export interface IAddBadgeAction {
    type: typeof ADD_BADGE;
}
export interface IRemoveFromFavoritesAction {
    type: typeof REMOVE_FROM_FAVORITES;
    payload: IItem;
}
export interface IAddToFavoritesAction {
    type: typeof ADD_TO_FAVORITES;
    payload: IItem;
}
export interface IChangeLangAction {
    type: typeof CHANGE_LANG;
    payload: Lang;
}
export interface IImgCarsmaniaLoadedAction {
    type: typeof IMG_CARSMANIA_LOADED;
    payload: boolean;
}
export interface IImgRiaLoadedAction {
    type: typeof IMG_RIA_LOADED;
    payload: boolean;
}
export interface IAddCarsmaniaCarsAction {
    type: typeof ADD_CARSMANIA_CARS;
    payload: IPlatesmaniaCars[];
}
export interface IAddRiaAdsAction {
    type: typeof ADD_RIA_ADS;
    payload: IRiaAds[];
}
export interface ILoginAction {
    type: typeof LOGIN;
    payload: ILoggedIn;
}
export interface IAddToVinsListListAction {
    type: typeof ADD_TO_VINS_LIST;
    payload: IVIN;
}
export interface IItemFetchDataVinSuccessAction {
    type: typeof ITEM_FETCH_DATA_VIN_SUCCESS;
    payload: IVIN;
}
export interface ISetVinRequestAction {
    type: typeof SET_VIN_REQUEST;
    payload: string;
}
export interface ISetSearchingItemTypeAction {
    type: typeof SET_SEARCHING_ITEM_TYPE;
    payload: number;
}
export interface IResponseIsEmptyAction {
    type: typeof RESPONSE_IS_EMPTY;
    payload: boolean;
}
export interface IToggleDrawerAction {
    type: typeof TOGGLE_DRAWER;
    payload: boolean;
}
export interface ISetItemRequestAction {
    type: typeof SET_ITEM_REQUEST;
    payload: string;
}
export interface IItemFetchDataSuccessAction {
    type: typeof ITEM_FETCH_DATA_SUCCESS;
    payload: IItem;
}
export interface IItemsIsLoadingAction {
    type: typeof ITEM_IS_LOADING;
    payload: boolean;
}
export interface IItemsIsLoadedAction {
    type: typeof ITEM_IS_LOADED;
    payload: boolean;
}
export interface IItemsHasErroredAction {
    type: typeof ITEM_HAS_ERRORED;
    payload: boolean;
}
export interface IGetItemAction {
    type: typeof GET_ITEMS;
}
export interface IAddToItemsListAction {
    type: typeof ADD_TO_ITEMS_LIST;
    payload: INotification;
}
