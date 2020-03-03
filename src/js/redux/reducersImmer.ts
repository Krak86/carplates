import * as actionTypess from "./types";
import { initialData } from "../data/Data";
import { IApplicationStates } from "../models/Interfaces";
import produce, { Draft } from "immer";

export const getReducer = produce((
     state: Draft<IApplicationStates> = initialData,
     action: any,
    ): Draft<IApplicationStates> => {
    switch (action.type) {
      case actionTypess.FORCE_UPDATES:
        state.updatesAvailable = action.payload;
        return state;
      case actionTypess.ITEMS_MERGING:
        state.itemsMerging = action.payload;
        return state;
      case actionTypess.MERGE_LOCAL_AND_CLOUD_FAVORITES:
        state.favorites = action.payload;
        return state;
      case actionTypess.ADD_BADGE:
        state.badges += 1;
        return state;
      case actionTypess.RESET_BADGE:
        state.badges = 0;
        return state;
      case actionTypess.REMOVE_FROM_FAVORITES:
        state.favorites = state.favorites.filter((item) => item !== action.payload);
        return state;
      case actionTypess.ADD_TO_FAVORITES:
        state.favorites = [action.payload, ...state.favorites];
        return state;
      case actionTypess.CHANGE_LANG:
        state.lang = action.payload;
        return state;
      case actionTypess.IMG_CARSMANIA_LOADED:
        state.imageCarsmaniaLoaded = action.payload;
        return state;
      case actionTypess.IMG_RIA_LOADED:
        state.imageRiaLoaded = action.payload;
        return state;
      case actionTypess.ADD_CARSMANIA_CARS:
        state.imagesPlatesMania = action.payload;
        return state;
      case actionTypess.ADD_RIA_ADS:
        state.imagesRia = action.payload;
        return state;
      case actionTypess.LOGIN:
        state.loggedIn = action.payload;
        return state;
      case actionTypess.ITEM_FETCH_DATA_VIN_SUCCESS:
        state.vinResponse = action.payload;
        return state;
      case actionTypess.SET_VIN_REQUEST:
        state.vinRequest = action.payload;
        return state;
      case actionTypess.SET_SEARCHING_ITEM_TYPE:
        state. itemSearching = action.payload;
        return state;
      case actionTypess.RESPONSE_IS_EMPTY:
        state.responseIsEmpty = action.payload;
        return state;
      case actionTypess.SET_ITEM_REQUEST:
        state.itemRequest = action.payload;
        return state;
      case actionTypess.ITEM_FETCH_DATA_SUCCESS:
        state.itemResponse = action.payload;
        return state;
      case actionTypess.GET_ITEMS:
        return state;
      case actionTypess.ADD_TO_ITEMS_LIST:
        state.itemsList = [action.payload, ...state.itemsList];
        return state;
      case actionTypess.ITEM_IS_LOADING:
        state.itemIsLoading = action.payload;
        return state;
      case actionTypess.ITEM_IS_LOADED:
        state.itemIsLoaded = action.payload;
        return state;
      case actionTypess.ITEM_HAS_ERRORED:
        state.itemHasErrored = action.payload;
        return state;
      case actionTypess.TOGGLE_DRAWER:
        state.drawerToogled = action.payload;
        return state;
      default:
        return state;
    }
});
