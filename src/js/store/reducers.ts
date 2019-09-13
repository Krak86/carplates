import * as actions from "./types";
import { initialData } from "../data/Data";

export const getReducer = (
  state = initialData, 
  action: actions.ActionType) => {
    switch (action.type) {
      case actions.GET_ITEM:
        return {
          ...state
        };
      default:
        return state;
    }
};