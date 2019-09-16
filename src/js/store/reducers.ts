import * as actions from "./types";
import { initialData } from "../data/Data";
import { ApplicationStates } from "../models/Interfaces";

export const getReducer = (
    state = initialData, 
    action: any
  ): ApplicationStates => {
    switch (action.type) {
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
        }
      case actions.ITEM_HAS_ERRORED:
        return {
          ...state,
          itemHasErrored: action.payload
        }
      default:
        return state;
    }
};