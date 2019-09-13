export const GET_ITEM: string = "GET_ITEM";
export const ITEM_HAS_ERRORED: string = "ITEM_HAS_ERRORED";
export const ITEM_IS_LOADING: string = "ITEM_IS_LOADING";
export const ITEM_FETCH_DATA_SUCCESS: string = "ITEM_FETCH_DATA_SUCCESS";

interface GetItemAction{
    type: typeof GET_ITEM;
}

export type ActionType = GetItemAction;