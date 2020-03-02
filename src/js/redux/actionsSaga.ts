import * as actions from "./types";
import { IItem, ILoggedIn } from "../models/Interfaces";

export const itemFetchDataForPlate = (value: string, url: string): actions.IItemFetchDataForPlate => ({
    type: actions.ITEM_FETCH_DATA_FOR_PLATE,
    payload: {
        value,
        url,
    },
});
export const itemFetchDataForVin = (value: string, url: string): actions.IItemFetchDataForVin => ({
    type: actions.ITEM_FETCH_DATA_FOR_VIN,
    payload: {
        value,
        url,
    },
});
export const imageFetchData = (value: File, url: string): actions.IImageFetchData => ({
    type: actions.IMAGE_FETCH_DATA,
    payload: {
        value,
        url,
    },
});
export const authoriseUser = (authStatus: ILoggedIn, favorites: IItem[]): actions.IAuthoriseUser => ({
    type: actions.AUTHORISE_USER,
    payload: {
        authStatus,
        favorites,
    },
});
export const addToFavoritesSync = (authStatus: ILoggedIn, favorites: IItem[], item: IItem): actions.IAddToFavoritesSync => ({
    type: actions.ADD_TO_FAVORITES_SYNC,
    payload: {
        authStatus,
        favorites,
        item,
    },
});
export const removeFromFavoritesSync = (authStatus: ILoggedIn, favorites: IItem[], item: IItem): actions.IRemoveFromFavoritesSync => ({
    type: actions.REMOVE_FROM_FAVORITES_SYNC,
    payload: {
        authStatus,
        favorites,
        item,
    },
});
export const manualSync = (authStatus: ILoggedIn, favorites: IItem[]): actions.IManualSync => ({
    type: actions.MANUAL_SYNC,
    payload: {
        authStatus,
        favorites,
    },
});
