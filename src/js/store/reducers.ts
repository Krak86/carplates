import * as actions from "./types";
import { initialData } from "../data/Data";
import { ApplicationStates } from "../models/Interfaces";

export const getReducer = (
    state = initialData, 
    action: any
  ): ApplicationStates => {
    switch (action.type) {
      case actions.ADD_RIA_ADS:
        return {
            ...state,
            imagesRia: action.payload
          };
      case actions.LOGIN_GOOGLE:
        return {
          ...state,
          googleResponse: action.payload
        };
      case actions.LOGIN_FACEBOOK:
        return {
          ...state,
          facebookResponse: action.payload
        };
      case actions.LOGIN:
        return {
          ...state,
          signedIn: action.payload
        };
      case actions.ITEM_FETCH_DATA_VIN_SUCCESS:
        return {
          ...state,
          vinResponse: action.payload
        };
      case actions.SET_VIN_REQUEST:
        return {
          ...state,
          vinRequest: action.payload
        };
      case actions.SET_SEARCHING_ITEM_TYPE:
        return {
          ...state,
          itemSearching: action.payload
        };
      case actions.RESPONSE_IS_EMPTY:
        return {
          ...state,
          responseIsEmpty: action.payload
        };
      case actions.SET_ITEM_REQUEST:
        return {
          ...state,
          itemRequest: action.payload
        };
      case actions.ITEM_FETCH_DATA_SUCCESS:
        return {
          ...state,
          itemResponse: action.payload
        };
      case actions.GET_ITEMS:
        return {
          ...state
        };
      case actions.ADD_TO_ITEMS_LIST:
        return {
          ...state,
          itemsList: [...state.itemsList, action.payload]
        };
      case actions.ITEM_IS_LOADING:
        return {
          ...state,
          itemIsLoading: action.payload
        };        
      case actions.ITEM_IS_LOADED:
        return {
          ...state,
          itemIsLoaded: action.payload
        };
      case actions.ITEM_HAS_ERRORED:
        return {
          ...state,
          itemHasErrored: action.payload
        };
      case actions.TOGGLE_DRAWER:
        return {
          ...state,
          drawerToogled: action.payload
        }
      default:
        return state;
    }
};