import * as actions from "./types";
import { IItem, IVIN, IRiaAds, IPlatesmaniaCars, Lang, INotification, ILoggedIn } from "../models/Interfaces";
/* tslint:disable no-commented-code */
/*
 * needed for thunk
 *
    import * as actionsThunk from "./actionsThunk";
    export const fetchDataForPlatesmania = actionsThunk.fetchDataForPlatesmaniaThunk;
    export const fetchDataForRiaModel = actionsThunk.fetchDataForRiaModelThunk;
    export const fetchDataForRiaSearch = actionsThunk.fetchDataForRiaSearchThunk;
    export const fetchDataForRiaAds = actionsThunk.fetchDataForRiaAdsThunk;
    export const itemFetchDataForPlate = actionsThunk.itemFetchDataForPlateThunk;
    export const itemFetchDataForVin = actionsThunk.itemFetchDataForVinThunk;
    export const imageFetchData = actionsThunk.imageFetchDataThunk;
    export const authoriseUser = actionsThunk.authoriseUserThunk;
    export const addToFavoritesSync = actionsThunk.addToFavoritesSyncThunk;
    export const removeFromFavoritesSync = actionsThunk.removeFromFavoritesSyncThunk;
    export const manualSync = actionsThunk.manualSyncThunk;
    export const userSync = actionsThunk.userSyncThunk;
    export const updateUser = actionsThunk.updateUserThunk;
*/
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

export const ForceUpdates = (response: boolean): actions.IForceUpdatesAction => ({
    type: actions.FORCE_UPDATES,
    payload: response,
});
export const MergeLocalAndCloudFavorites = (items: IItem[]): actions.IMergeLocalAndCloudFavoritesAction => ({
    type: actions.MERGE_LOCAL_AND_CLOUD_FAVORITES,
    payload: items,
});
export const ItemsMerging = (payloadData: boolean): actions.IItemsMergingAction => ({
    type: actions.ITEMS_MERGING,
    payload: payloadData,
});
export const ResetBadge = (): actions.IResetBadgeAction => ({
    type: actions.RESET_BADGE,
});
export const AddBadge = (): actions.IAddBadgeAction => ({
    type: actions.ADD_BADGE,
});
export const removeFromFavorites = (item: IItem): actions.IRemoveFromFavoritesAction => ({
    type: actions.REMOVE_FROM_FAVORITES,
    payload: item,
});
export const addToFavorites = (item: IItem): actions.IAddToFavoritesAction => ({
    type: actions.ADD_TO_FAVORITES,
    payload: item,
});
export const changeLang = (status: Lang): actions.IChangeLangAction => ({
    type: actions.CHANGE_LANG,
    payload: status,
});
export const imgCarsmaniaLoaded = (status: boolean): actions.IImgCarsmaniaLoadedAction => ({
    type: actions.IMG_CARSMANIA_LOADED,
    payload: status,
});
export const imgRiaLoaded = (status: boolean): actions.IImgRiaLoadedAction => ({
    type: actions.IMG_RIA_LOADED,
    payload: status,
});
export const addPlatesmaniaCars = (imagesPlatesmania: IPlatesmaniaCars[]): actions.IAddCarsmaniaCarsAction => ({
    type: actions.ADD_CARSMANIA_CARS,
    payload: imagesPlatesmania,
});
export const addRiaAds = (imagesRia: IRiaAds[]): actions.IAddRiaAdsAction => ({
    type: actions.ADD_RIA_ADS,
    payload: imagesRia,
});
export const login = (authStatus: ILoggedIn): actions.ILoginAction => ({
    type: actions.LOGIN,
    payload: authStatus,
});
export const addToVinsListList = (vinResponse: IVIN): actions.IAddToVinsListListAction => ({
    type: actions.ADD_TO_VINS_LIST,
    payload: vinResponse,
});
export const itemFetchDataVinSuccess = (vinResponse: IVIN): actions.IItemFetchDataVinSuccessAction => ({
    type: actions.ITEM_FETCH_DATA_VIN_SUCCESS,
    payload: vinResponse,
});
export const setVinRequest = (vinRequest: string): actions.ISetVinRequestAction => ({
    type: actions.SET_VIN_REQUEST,
    payload: vinRequest,
});
export const setSearchingItemType = (response: number): actions.ISetSearchingItemTypeAction => ({
    type: actions.SET_SEARCHING_ITEM_TYPE,
    payload: response,
});
export const responseIsEmpty = (response: boolean): actions.IResponseIsEmptyAction => ({
    type: actions.RESPONSE_IS_EMPTY,
    payload: response,
});
export const setItemRequest = (itemRequest: string): actions.ISetItemRequestAction => ({
    type: actions.SET_ITEM_REQUEST,
    payload: itemRequest,
});
export const itemIsLoading = (bool: boolean): actions.IItemsIsLoadingAction => ({
    type: actions.ITEM_IS_LOADING,
    payload: bool,
});
export const itemIsLoaded = (bool: boolean): actions.IItemsIsLoadedAction => ({
    type: actions.ITEM_IS_LOADED,
    payload: bool,
});
export const itemHasErrored = (bool: boolean): actions.IItemsHasErroredAction => ({
    type: actions.ITEM_HAS_ERRORED,
    payload: bool,
});
export const itemFetchDataSuccess = (itemResponse: IItem): actions.IItemFetchDataSuccessAction => ({
    type: actions.ITEM_FETCH_DATA_SUCCESS,
    payload: itemResponse,
});
export const getItems = (): actions.IGetItemAction => ({
    type: actions.GET_ITEMS,
});
export const addToItemsList = (itemResponse: INotification): actions.IAddToItemsListAction => ({
    type: actions.ADD_TO_ITEMS_LIST,
    payload: itemResponse,
});
export const toggleDrawer = (drawerState: boolean): actions.IToggleDrawerAction => ({
    type: actions.TOGGLE_DRAWER,
    payload: drawerState,
});
