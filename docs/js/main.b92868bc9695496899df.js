(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return ITEM_FETCH_DATA_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return SET_ITEM_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return ITEM_HAS_ERRORED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return ITEM_IS_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return ITEM_IS_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GET_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_TO_ITEMS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return TOGGLE_DRAWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return RESPONSE_IS_EMPTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return SET_SEARCHING_ITEM_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return SET_VIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return ITEM_FETCH_DATA_VIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ADD_TO_VINS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_RIA_ADS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_CARSMANIA_CARS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return IMG_RIA_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return IMG_CARSMANIA_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CHANGE_LANG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_TO_FAVORITES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return REMOVE_FROM_FAVORITES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_BADGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return RESET_BADGE; });
/* unused harmony export GET_USER_DATA */
/* unused harmony export PUT_USER_DATA */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return MERGE_LOCAL_AND_CLOUD_FAVORITES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return ITEMS_MERGING; });
var ITEM_FETCH_DATA_SUCCESS = "ITEM_FETCH_DATA_SUCCESS";
var SET_ITEM_REQUEST = "SET_ITEM_REQUEST";
var ITEM_HAS_ERRORED = "ITEM_HAS_ERRORED";
var ITEM_IS_LOADING = "ITEM_IS_LOADING";
var ITEM_IS_LOADED = "ITEM_IS_LOADED";
var GET_ITEMS = "GET_ITEMS";
var ADD_TO_ITEMS_LIST = "ADD_TO_ITEMS_LIST";
var TOGGLE_DRAWER = "TOGGLE_DRAWER";
var RESPONSE_IS_EMPTY = "RESPONSE_IS_EMPTY";
var SET_SEARCHING_ITEM_TYPE = "SET_SEARCHING_ITEM_TYPE";
var SET_VIN_REQUEST = "SET_VIN_REQUEST";
var ITEM_FETCH_DATA_VIN_SUCCESS = "ITEM_FETCH_DATA_VIN_SUCCESS";
var ADD_TO_VINS_LIST = "ADD_TO_VINS_LIST";
var LOGIN = "LOGIN";
var ADD_RIA_ADS = "ADD_RIA_ADS";
var ADD_CARSMANIA_CARS = "ADD_CARSMANIA_CARS";
var IMG_RIA_LOADED = "IMG_RIA_LOADED";
var IMG_CARSMANIA_LOADED = "IMG_CARSMANIA_LOADED";
var CHANGE_LANG = "CHANGE_LANG";
var ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
var REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
var ADD_BADGE = "ADD_BADGE";
var RESET_BADGE = "RESET_BADGE";
var GET_USER_DATA = "GET_USER_DATA";
var PUT_USER_DATA = "PUT_USER_DATA";
var MERGE_LOCAL_AND_CLOUD_FAVORITES = "MERGE_LOCAL_AND_CLOUD_FAVORITES";
var ITEMS_MERGING = "ITEMS_MERGING";
//export type ActionType = SetItemRequestAction | GetItemAction | ItemFetchDataSuccessAction | ItemsIsLoadingAction | ItemsHasErroredAction | AddToItemsList | SetSearchingItemType;


/***/ }),

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnackbarContentWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(170);
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(171);
/* harmony import */ var _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(172);
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(101);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(271);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(272);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(115);
/* harmony import */ var _material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(273);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(110);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(function (theme) { return ({
    success: {
        backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"][600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    warning: {
        backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"][700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}); });
var variantIcon = {
    success: _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_2___default.a,
    warning: _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_3___default.a,
    error: _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_4___default.a,
    info: _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_5___default.a,
};
var SnackbarContentWrapper = function (props) {
    var classes = useStyles({});
    var className = props.className, message = props.message, onClose = props.onClose, variant = props.variant, other = __rest(props, ["className", "message", "onClose", "variant"]);
    var Icon = variantIcon[variant];
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], __assign({ className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(classes[variant], className), "aria-describedby": "client-snackbar", message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { id: "client-snackbar", className: classes.message },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, { className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(classes.icon, classes.iconVariant) }),
            message), action: [
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], { key: "close", "aria-label": "close", color: "inherit", onClick: onClose },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6___default.a, { className: classes.icon })),
        ] }, other)));
};


/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fetchDataForPlatesmania */
/* unused harmony export fetchDataForRiaModel */
/* unused harmony export fetchDataForRiaSearch */
/* unused harmony export fetchDataForRiaAds */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return itemFetchDataForPlate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return itemFetchDataForVin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return imageFetchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return authoriseUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addToFavoritesSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return removeFromFavoritesSync; });
/* unused harmony export userSync */
/* unused harmony export updateUser */
/* unused harmony export MergeLocalAndCloudFavorites */
/* unused harmony export ItemsMerging */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetBadge; });
/* unused harmony export AddBadge */
/* unused harmony export removeFromFavorites */
/* unused harmony export addToFavorites */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return changeLang; });
/* unused harmony export imgCarsmaniaLoaded */
/* unused harmony export imgRiaLoaded */
/* unused harmony export addPlatesmaniaCars */
/* unused harmony export addRiaAds */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return login; });
/* unused harmony export addToVinsListList */
/* unused harmony export itemFetchDataVinSuccess */
/* unused harmony export setVinRequest */
/* unused harmony export setSearchingItemType */
/* unused harmony export responseIsEmpty */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return setItemRequest; });
/* unused harmony export itemIsLoading */
/* unused harmony export itemIsLoaded */
/* unused harmony export itemHasErrored */
/* unused harmony export itemFetchDataSuccess */
/* unused harmony export getItems */
/* unused harmony export addToItemsList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return toggleDrawer; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _utils_UtilsRia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var _utils_UtilsAsync__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47);
/* harmony import */ var _data_Data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;





var fetchDataForPlatesmania = function (itemRequest) { return function (dispatch) {
    dispatch(imgCarsmaniaLoaded(false));
    var carPlate = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].combineConvertedSymbols(_utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].trimData(itemRequest).toLocaleUpperCase(), _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].cyrillicRange, _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].cyrillicToLatinToMatrix, _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].reducer);
    var key = "Yd7Cvs9Nw3" || false;
    var url = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].generateUrlforPlatesmania(_data_Data__WEBPACK_IMPORTED_MODULE_4__[/* URLs */ "a"].getImagesByCarplateUrl_2, key, carPlate);
    fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    })
        .then(function (response) { return response.json(); })
        .then(function (itemResponse) {
        if (itemResponse.cars.length > 0) {
            var data = itemResponse.cars;
            dispatch(addPlatesmaniaCars(data));
        }
        dispatch(imgCarsmaniaLoaded(true));
    })
        .catch(function (error) {
        //dispatch(addPlatesmaniaCars(platesManiaDataTest));
        dispatch(imgCarsmaniaLoaded(true));
        console.log(error);
    });
}; };
var fetchDataForRiaModel = function (itemResponse) { return function (dispatch) {
    dispatch(imgRiaLoaded(false));
    var brand = itemResponse.brand.trim();
    var model = itemResponse.model.trim();
    var kind = itemResponse.kind.trim();
    var year = itemResponse.make_year.trim();
    var categoryValue = _utils_UtilsRia__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].detectCategory(kind);
    var brandArray = _utils_UtilsRia__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].detectBrandMatrix(categoryValue);
    var brandWithoutModel = _utils_UtilsRia__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].excludeModelFromBrand(brand, model);
    var brandValue;
    if (brandArray.length > 0) {
        brandValue = _utils_UtilsRia__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].detectModelValue(brandArray, brandWithoutModel);
    }
    else {
        return;
    }
    var key = "UswqYgYawCC7WNAy17KhuVeGtpu85mJ1IVn2Dknj" || false;
    var url = _utils_UtilsRia__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].generateUrlToGetModelValue(_data_Data__WEBPACK_IMPORTED_MODULE_4__[/* URLs */ "a"].riaUrl, categoryValue, brandValue, key);
    fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    })
        .then(function (response) { return response.json(); })
        .then(function (response) {
        if (response.length > 0) {
            var modelValue = response.filter(function (i) {
                if (i.name.toUpperCase() === model.toUpperCase()) {
                    return i.value;
                }
            });
            dispatch(fetchDataForRiaSearch(categoryValue, modelValue[0].value, brandValue, year, key));
        }
        else {
            return;
        }
    })
        .catch(function (error) {
        dispatch(itemHasErrored(true));
        console.log(error);
    });
}; };
var fetchDataForRiaSearch = function (categoryValue, modelValue, brandValue, year, key) { return function (dispatch) {
    var url = _utils_UtilsRia__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].generateUrlToSearchAdsIds(_data_Data__WEBPACK_IMPORTED_MODULE_4__[/* URLs */ "a"].riaUrl, categoryValue, brandValue, modelValue, year, key);
    fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    })
        .then(function (response) {
        return response.json();
    })
        .then(function (itemResponse) {
        if (itemResponse.result.search_result.count > 0) {
            var ads = itemResponse.result.search_result_common.data;
            dispatch(fetchDataForRiaAds(key, ads));
        }
        else {
            return;
        }
    })
        .catch(function (error) {
        dispatch(itemHasErrored(true));
        console.log(error);
    });
}; };
var fetchDataForRiaAds = function (key, ads) { return function (dispatch) {
    var urls = ads.map(function (url) { return url.id; });
    Promise.all(urls.map(function (url) {
        return fetch(_utils_UtilsRia__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].generateUrlToGetAdsContent(_data_Data__WEBPACK_IMPORTED_MODULE_4__[/* URLs */ "a"].riaUrl, key, url), {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
            .then(function (response) { return response.json(); })
            .catch(function (error) {
            dispatch(itemHasErrored(true));
            console.log(error);
        });
    }))
        .then(function (imagesRiaResponse) {
        dispatch(addRiaAds(imagesRiaResponse));
        dispatch(imgRiaLoaded(true));
    });
}; };
var itemFetchDataForPlate = function (itemRequest, url) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        dispatch(setSearchingItemType(0));
        dispatch(itemIsLoaded(false));
        dispatch(itemIsLoading(true));
        dispatch(itemHasErrored(false));
        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            dispatch(itemIsLoading(false));
            return response;
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (itemResponse) {
            if (itemResponse.value.length > 0) {
                var data = itemResponse.value[0];
                dispatch(itemFetchDataSuccess(data));
                dispatch(addToItemsList({
                    item: data,
                    timestamp: _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].generateCurrentDate()
                }));
                dispatch(setItemRequest(itemRequest));
                dispatch(responseIsEmpty(false));
                dispatch(fetchDataForRiaModel(data));
                dispatch(fetchDataForPlatesmania(itemRequest));
                dispatch(AddBadge());
                _utils_UtilsAsync__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].playNotification();
            }
            else {
                dispatch(responseIsEmpty(true));
            }
            dispatch(itemIsLoaded(true));
        })
            .catch(function (error) {
            dispatch(itemHasErrored(true));
            console.log(error);
        });
        return [2 /*return*/];
    });
}); }; };
var itemFetchDataForVin = function (vinRequest, url) { return function (dispatch) {
    dispatch(setSearchingItemType(1));
    dispatch(itemIsLoaded(false));
    dispatch(itemIsLoading(true));
    dispatch(itemHasErrored(false));
    fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        dispatch(itemIsLoading(false));
        return response;
    })
        .then(function (response) {
        return response.json();
    })
        .then(function (itemResponse) {
        if (itemResponse.Results.length > 0) {
            var data = itemResponse;
            dispatch(itemFetchDataVinSuccess(data));
            dispatch(addToVinsListList(data));
            dispatch(setVinRequest(vinRequest));
            dispatch(responseIsEmpty(false));
        }
        else {
            dispatch(responseIsEmpty(true));
        }
        dispatch(itemIsLoaded(true));
    })
        .catch(function (error) {
        dispatch(itemHasErrored(true));
        console.log(error);
    });
}; };
var imageFetchData = function (file, url) { return function (dispatch) {
    dispatch(setSearchingItemType(3));
    dispatch(itemIsLoaded(false));
    dispatch(itemIsLoading(true));
    dispatch(itemHasErrored(false));
    var formData = new FormData();
    formData.append('file', file);
    var options = {
        method: 'POST',
        body: formData,
    };
    fetch(url, options)
        .then(function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        dispatch(itemIsLoading(false));
        return response;
    })
        .then(function (response) {
        return response.json();
    })
        .then(function (imageResponse) {
        if (imageResponse.results.length > 0) {
            var carPlate = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].combineConvertedSymbols(_utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].changeSymbols1toI(_utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].trimData(imageResponse.results[0].plate)).toLocaleUpperCase(), _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].latinRange, _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].latinToCyrillicMatrix, _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].reducer);
            var serviceUrl = "https://krak86.table.core.windows.net/CarsPartitions?sv=2018-03-28&si=CarsPartitions-AccessPolicy&tn=carspartitions&sig=XMI5pg9woSni13q9E%2BHH0wUkvcQ3bJtv8Hiny0a6xVM%3D" || false;
            var url_1 = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].shapeUrlPlate(serviceUrl, carPlate, _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].extractPartitionKey(carPlate));
            dispatch(itemFetchDataForPlate(carPlate, url_1));
            dispatch(responseIsEmpty(false));
        }
        else {
            dispatch(responseIsEmpty(true));
        }
        dispatch(itemIsLoaded(true));
    })
        .catch(function (error) {
        dispatch(itemHasErrored(true));
        console.log(error);
    });
}; };
var authoriseUser = function (authStatus, favorites) { return function (dispatch) {
    dispatch(login(authStatus));
    if (!_utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].isUserAuthenticated(authStatus.vendor)) {
        return;
    }
    dispatch(ItemsMerging(true));
    dispatch(userSync(authStatus.mail, favorites, null, null));
}; };
var addToFavoritesSync = function (authStatus, favorites, item) { return function (dispatch) {
    if (!_utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].isUserAuthenticated(authStatus.vendor)) {
        dispatch(addToFavorites(item));
        return;
    }
    dispatch(ItemsMerging(true));
    dispatch(userSync(authStatus.mail, favorites, item, true));
}; };
var removeFromFavoritesSync = function (authStatus, favorites, item) { return function (dispatch) {
    if (!_utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].isUserAuthenticated(authStatus.vendor)) {
        dispatch(removeFromFavorites(item));
        return;
    }
    dispatch(ItemsMerging(true));
    dispatch(userSync(authStatus.mail, favorites, item, false));
}; };
var userSync = function (email, favorites, item, addRemoveItem) { return function (dispatch) {
    var userKeys = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].generateRowKeyAndPartitionKey(email);
    var serviceUrl = "" + "https://krak86.table.core.windows.net/Favorites" + "?sv=2018-03-28&si=Favorites-AccessPolicy&tn=favorites&sig=f%2BS%2BVnAZi1Hw9wioc6dS2MsI60ZMEAosTp2U3l2P94w%3D" || false;
    var url = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].shapeUrlPlate(serviceUrl, userKeys.RowKey, userKeys.PartitionKey);
    fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    })
        .then(function (response) {
        return response.json();
    })
        .then(function (itemResponse) {
        var data = itemResponse.value;
        var items = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].mergeItems(data, favorites, item, addRemoveItem);
        dispatch(MergeLocalAndCloudFavorites(items));
        dispatch(updateUser(userKeys, items));
    })
        .catch(function (error) {
        console.log(error);
        dispatch(ItemsMerging(false));
    });
}; };
var updateUser = function (userKeys, items) { return function (dispatch) {
    var url = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].generateUrlToUpdateUser("https://krak86.table.core.windows.net/Favorites" || false, "?sv=2018-03-28&si=Favorites-AccessPolicy&tn=favorites&sig=f%2BS%2BVnAZi1Hw9wioc6dS2MsI60ZMEAosTp2U3l2P94w%3D" || false, userKeys.PartitionKey, userKeys.RowKey);
    var options = {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].generateBodyForUpdateUser(items),
    };
    fetch(url, options)
        .then(function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    })
        .then(function (response) { return response; })
        .then(function (response) {
        dispatch(ItemsMerging(false));
    })
        .catch(function (error) {
        console.log(error);
        dispatch(ItemsMerging(false));
    });
}; };
var MergeLocalAndCloudFavorites = function (items) { return ({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* MERGE_LOCAL_AND_CLOUD_FAVORITES */ "r"],
    payload: items
}); };
var ItemsMerging = function (payload) { return ({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* ITEMS_MERGING */ "k"],
    payload: payload
}); };
var ResetBadge = function () { return ({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* RESET_BADGE */ "t"]
}); };
var AddBadge = function () { return ({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* ADD_BADGE */ "a"]
}); };
var removeFromFavorites = function (item) { return ({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* REMOVE_FROM_FAVORITES */ "s"],
    payload: item
}); };
var addToFavorites = function (item) { return ({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* ADD_TO_FAVORITES */ "d"],
    payload: item
}); };
var changeLang = function (status) { return ({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* CHANGE_LANG */ "g"],
    payload: status
}); };
var imgCarsmaniaLoaded = function (status) { return ({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* IMG_CARSMANIA_LOADED */ "i"],
    payload: status
}); };
var imgRiaLoaded = function (status) { return ({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* IMG_RIA_LOADED */ "j"],
    payload: status
}); };
var addPlatesmaniaCars = function (imagesPlatesmania) { return ({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* ADD_CARSMANIA_CARS */ "b"],
    payload: imagesPlatesmania
}); };
var addRiaAds = function (imagesRia) { return ({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* ADD_RIA_ADS */ "c"],
    payload: imagesRia
}); };
var login = function (authStatus) { return ({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* LOGIN */ "q"],
    payload: authStatus
}); };
var addToVinsListList = function (vinResponse) { return ({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* ADD_TO_VINS_LIST */ "f"],
    payload: vinResponse
}); };
var itemFetchDataVinSuccess = function (vinResponse) { return ({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* ITEM_FETCH_DATA_VIN_SUCCESS */ "m"],
    payload: vinResponse
}); };
var setVinRequest = function (vinRequest) { return ({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* SET_VIN_REQUEST */ "x"],
    payload: vinRequest
}); };
var setSearchingItemType = function (response) { return ({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* SET_SEARCHING_ITEM_TYPE */ "w"],
    payload: response
}); };
var responseIsEmpty = function (response) { return ({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* RESPONSE_IS_EMPTY */ "u"],
    payload: response
}); };
var setItemRequest = function (itemRequest) { return ({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* SET_ITEM_REQUEST */ "v"],
    payload: itemRequest
}); };
var itemIsLoading = function (bool) { return ({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* ITEM_IS_LOADING */ "p"],
    payload: bool
}); };
var itemIsLoaded = function (bool) { return ({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* ITEM_IS_LOADED */ "o"],
    payload: bool
}); };
var itemHasErrored = function (bool) { return ({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* ITEM_HAS_ERRORED */ "n"],
    payload: bool
}); };
var itemFetchDataSuccess = function (itemResponse) { return ({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* ITEM_FETCH_DATA_SUCCESS */ "l"],
    payload: itemResponse
}); };
var getItems = function () { return ({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* GET_ITEMS */ "h"]
}); };
var addToItemsList = function (itemResponse) { return ({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* ADD_TO_ITEMS_LIST */ "e"],
    payload: itemResponse
}); };
var toggleDrawer = function (drawerState) { return ({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* TOGGLE_DRAWER */ "y"],
    payload: drawerState
}); };


/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return favoritsItemsLimit; });
/* unused harmony export facebookInit */
/* unused harmony export googleInit */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return loggedInDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return initialData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return regions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URLs; });
/* unused harmony export platesManiaDataTest */
/* unused harmony export items */
/* harmony import */ var _models_Interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);

var favoritsItemsLimit = 50;
var itemResponse = {
    "PartitionKey": "",
    "RowKey": "",
    "body": "",
    "brand": "",
    "capacity": "",
    "color": "",
    "d_reg": "",
    "dep": "",
    "dep_code": "",
    "fuel": "",
    "kind": "",
    "make_year": "",
    "model": "",
    "n_reg_new": "",
    "oper_code": "",
    "oper_name": "",
    "own_weight": "",
    "person": "",
    "purpose": "",
    "reg_addr_koatuu": "",
    "total_weight": "",
    "region": "",
};
var vinResponse = {
    "Count": 0,
    "Message": "",
    "SearchCriteria": "",
    "Results": [],
};
var facebookInit = {
    email: "",
    name: "",
    picture: {
        data: {
            url: "",
        }
    },
};
var googleInit = {
    profileObj: {
        email: "",
        imageUrl: "",
        name: "",
    }
};
var loggedInDefault = {
    vendor: 0,
    profileName: "",
    avatar: "",
    mail: "",
};
var initialData = {
    itemRequest: "",
    imageRequest: "",
    itemResponse: itemResponse,
    itemsList: [],
    imagesPlatesMania: [],
    imagesRia: [],
    navigation: {
        url: "home"
    },
    drawerToogled: false,
    itemIsLoading: false,
    itemHasErrored: false,
    itemIsLoaded: false,
    responseIsEmpty: true,
    itemSearching: _models_Interfaces__WEBPACK_IMPORTED_MODULE_0__[/* itemSearching */ "b"].plate,
    vinRequest: "",
    vinResponse: vinResponse,
    vinsList: [],
    loggedIn: loggedInDefault,
    imageRiaLoaded: false,
    imageCarsmaniaLoaded: false,
    lang: 0,
    favorites: [],
    badges: 0,
    itemsMerging: false,
};
var regions = {
    "АА": "Київ",
    "КА": "Київ",
    "АІ": "Київська область",
    "КІ": "Київська область",
    "АВ": "Вінницька область",
    "КВ": "Вінницька область",
    "АС": "Волинська область",
    "КС": "Волинська область",
    "АЕ": "Дніпропетровська область",
    "КЕ": "Дніпропетровська область",
    "АК": "АР Крим",
    "КК": "АР Крим",
    "АН": "Донецька область",
    "КН": "Донецька область",
    "АМ": "Житомирська область",
    "КМ": "Житомирська область",
    "АО": "Закарпатська область",
    "КО": "Закарпатська область",
    "АР": "Запоріжська область",
    "КР": "Запоріжська область",
    "АТ": "Івано-Франківська область",
    "КТ": "Івано-Франківська область",
    "ВА": "Кіровоградська область",
    "НА": "Кіровоградська область",
    "ВВ": "Луганська область",
    "НВ": "Луганська область",
    "ВС": "Львівська область",
    "НС": "Львівська область",
    "ВЕ": "Миколаївська область",
    "НЕ": "Миколаївська область",
    "ВН": "Одеська область",
    "НН": "Одеська область",
    "ВІ": "Полтавська область",
    "НІ": "Полтавська область",
    "ВК": "Рівненська область",
    "НК": "Рівненська область",
    "СН": "Севастополь",
    "ІН": "Севастополь",
    "ВМ": "Сумська область",
    "НМ": "Сумська область",
    "ВО": "Тернопільська область",
    "НО": "Тернопільська область",
    "АХ": "Харьківська область",
    "КХ": "Харьківська область",
    "ВТ": "Херсонська область",
    "НТ": "Херсонська область",
    "ВХ": "Хмельницька область",
    "НХ": "Хмельницька область",
    "СА": "Черкаська область",
    "ІА": "Черкаська область",
    "СВ": "Чернігівська область",
    "ІВ": "Чернігівська область",
    "СЕ": "Черновіцька область",
    "ІЕ": "Черновіцька область",
};
var URLs = {
    "getDataByPlateUrl": "",
    "getDataByVinUrl": "https://vpic.nhtsa.dot.gov/api/vehicles/decodevin",
    "getImageByNameUrl": "https://pixabay.com/api/?key=",
    "getImagesByCarplateUrl_1": "https://platesmania.com/mobile/api_photo.php",
    "getImagesByCarplateUrl_2": "http://avto-nomer.ru/mobile/api_photo.php",
    "CarPlatesUrl": "https://platesmania.com",
    "CarPlatesUrl_2": "https://avto-nomer.ru",
    "carPlateRecMlApiUrl": "",
    "riaUrl": "https://developers.ria.com/auto",
    "riaUrlPublic": "https://auto.ria.com",
};
var platesManiaDataTest = [
    {
        "make": "Audi",
        "model": "A8",
        "date": "2013-12-21 19:38:20",
        "photo": {
            "link": "http://avto-nomer.ru/ru/nomer4079960",
            "small": "http://img02.avto-nomer.ru/131221/s/ru4079960.jpg",
            "medium": "http://img02.avto-nomer.ru/131221/m/ru4079960.jpg",
            "original": "http://img02.avto-nomer.ru/131221/o/ru4079960.jpg"
        }
    },
    {
        "make": "Audi",
        "model": "Q7",
        "date": "2016-05-11 19:00:27",
        "photo": {
            "link": "http://avto-nomer.ru/ru/nomer8424417",
            "small": "http://img03.platesmania.com/160511/s/8424417.jpg",
            "medium": "http://img03.platesmania.com/160511/m/8424417.jpg",
            "original": "http://img03.platesmania.com/160511/o/8424417.jpg"
        }
    }
];
var items = [
    {
        "PartitionKey": "АХ",
        "RowKey": "АХ0168АА",
        "body": "АВТОБУС-D",
        "brand": "ХАЗ  3250.02",
        "capacity": "3857",
        "color": "ЗЕЛЕНИЙ",
        "d_reg": "2014-12-12",
        "dep": "(6301) ВРЕР ДАІ з обслуговування м. Харків № 1 ГУМВС України в Харківській області",
        "dep_code": "1363301",
        "fuel": "ДИЗЕЛЬНЕ ПАЛИВО",
        "kind": "АВТОБУС",
        "make_year": "2006",
        "model": "3250.02",
        "n_reg_new": "АХ0168АА",
        "oper_code": "390",
        "oper_name": "390 - ПЕРЕРЕЄСТРАЦIЯ У ЗВ`ЯЗКУ ЗI ЗМIНОЮ КОЛЬОРУ ТЗ",
        "own_weight": "4380",
        "person": "P",
        "purpose": "ЗАГАЛЬНИЙ",
        "reg_addr_koatuu": "6310138500",
        "total_weight": "6800"
    }
];


/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _utils_UtilsAsync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(110);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(277);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12);
/* harmony import */ var _data_Data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15);
/* harmony import */ var _snackbar_SnackbarContentWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(100);
/* harmony import */ var _video_DialogVideoWindow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(188);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(270);
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(278);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(115);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(276);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(268);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(97);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(173);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(102);
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(279);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;





















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(function (theme) { return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])({
    root: {
        padding: '0px 0px',
        display: 'flex',
        alignItems: 'center',
        maxWidth: 500,
        marginBottom: '20px'
    },
    input: {
        marginLeft: theme.spacing(1),
        padding: 5,
        flex: 1,
    },
    iconButton: {
        padding: 5,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    depositContext: {
        flex: 1,
    },
    upload: {
        display: 'none',
    },
    margin: {
        margin: theme.spacing(1),
    },
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}); });
var isEmpty = function (value) {
    if (_utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].trimData(value) === "" ||
        _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].trimData(value) === undefined) {
        return true;
    }
    else {
        return false;
    }
};
var isVin = function (value) {
    return (_utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].trimData(value).length === 17);
};
var shapeDataPlate = function (value) {
    return _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].combineConvertedSymbols(_utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].trimData(value).toLocaleUpperCase(), _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].latinRange, _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].latinToCyrillicMatrix, _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].reducer);
};
var shapeUrlPlate = function (value, url) {
    return _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].shapeUrlPlate(url, value, _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].extractPartitionKey(value));
};
var shapeDataVin = function (value) {
    return _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].trimData(value);
};
var shapeUrlVin = function (value, url) {
    return _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].shapeUrlVin(url, value);
};
var SearchField = function () {
    //constructor
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({ value: "" }), inputValue = _a[0], setInputValue = _a[1];
    var _b = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var open = Boolean(anchorEl);
    var _c = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false), openSnackbar = _c[0], setOpenSnackbar = _c[1];
    var _d = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(""), snackbarMessage = _d[0], setSnackbarMessage = _d[1];
    var _e = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false), openDialog = _e[0], setOpenDialog = _e[1];
    var _f = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({ value: [] }), videoDevices = _f[0], setVideoDevices = _f[1];
    //mapStateToProps
    var state = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[/* useSelector */ "d"])(function (state) { return state.Item; }, react_redux__WEBPACK_IMPORTED_MODULE_4__[/* shallowEqual */ "b"]);
    //mapDispatchToProps
    var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[/* useDispatch */ "c"])();
    //componentDidMounted, componentDidUpdated
    var searchInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        document.title = Object(_locale__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(state.lang).documentTitle + " " + state.itemRequest;
    });
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        searchInput.current.focus();
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var hashValue = decodeURIComponent(window.location.hash.split("#/")[1].trim());
        if (hashValue !== "") {
            if (isVin(hashValue)) {
                var value = shapeDataVin(hashValue);
                var url = shapeUrlVin(value, serviceUrlVIN);
                dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_8__[/* itemFetchDataForVin */ "g"])(value, url));
            }
            else {
                var value = shapeDataPlate(hashValue);
                var url = shapeUrlPlate(value, serviceUrl);
                dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_8__[/* itemFetchDataForPlate */ "f"])(value, url));
            }
        }
        ;
    }, []);
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[/* useHistory */ "f"])();
    //hook styles
    var classes = useStyles({});
    //init
    var serviceUrl = "https://krak86.table.core.windows.net/CarsPartitions?sv=2018-03-28&si=CarsPartitions-AccessPolicy&tn=carspartitions&sig=XMI5pg9woSni13q9E%2BHH0wUkvcQ3bJtv8Hiny0a6xVM%3D" || false;
    var serviceUrlVIN = process.env.VIN_SERVICE_URL || _data_Data__WEBPACK_IMPORTED_MODULE_9__[/* URLs */ "a"].getDataByVinUrl;
    var serviceRecognizeImageUrl = "https://carsdatabase.azurewebsites.net/api/platerecognizerservice?code=Gh3DFiMDDdQ9/b6edFSQSuz2MGaWeQG7nKOjaxK7pbdO3Hlb0EBXtQ==" || false;
    var options = Object(_locale__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(state.lang).cameraActions;
    var ITEM_HEIGHT = 48;
    var attachImageID = "attachImage";
    var takeAPhoto = function () { return __awaiter(_this, void 0, void 0, function () {
        var videoDevices_1, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices)) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, navigator.mediaDevices.getUserMedia({ video: true })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, _utils_UtilsAsync__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].getVideoDevices()];
                case 3:
                    videoDevices_1 = _a.sent();
                    handleDevicesChange(videoDevices_1);
                    handleClickOpenDialog();
                    return [3 /*break*/, 5];
                case 4:
                    e_1 = _a.sent();
                    setOpenSnackbar(true);
                    handleSnackbarMessage(Object(_locale__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(state.lang).messageTurnOnCamera);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var handleDevicesChange = function (values) {
        setVideoDevices(__assign({}, videoDevices, { value: values }));
    };
    var handleClickOpenDialog = function () {
        setOpenDialog(true);
    };
    var handleClickCloseDialog = function () {
        setOpenDialog(false);
    };
    var handleChange = function (value) { return function (event) {
        var _a;
        setInputValue(__assign({}, inputValue, (_a = {}, _a[value] = event.target.value, _a)));
    }; };
    var handleSearchClick = function () {
        var value = "";
        if (isEmpty(inputValue.value)) {
            return;
        }
        if (isVin(inputValue.value)) {
            value = shapeDataVin(inputValue.value);
            var url = shapeUrlVin(value, serviceUrlVIN);
            dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_8__[/* itemFetchDataForVin */ "g"])(value, url));
        }
        else {
            value = shapeDataPlate(inputValue.value);
            var url = shapeUrlPlate(value, serviceUrl);
            dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_8__[/* itemFetchDataForPlate */ "f"])(value, url));
        }
        searchInput.current.focus();
        handleAddResultToHash(value);
    };
    var handleAddResultToHash = function (value) {
        history.push("/" + value);
    };
    var handleClearClick = function () {
        setInputValue(__assign({}, inputValue, { value: "" }));
        dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_8__[/* setItemRequest */ "j"])(""));
        searchInput.current.focus();
    };
    var handlerKeyPress = function (e) {
        if (e.charCode == 13) {
            handleSearchClick();
        }
    };
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var handleCameraClick = function (option) {
        setAnchorEl(null);
        if (options[0] === option) {
            takeAPhoto();
        }
        else if (options[1] === option) {
            document.getElementById(attachImageID).click();
        }
        handleClearClick();
    };
    var handleFiles = function (value) {
        if (value.length === 0) {
            return;
        }
        var file = value[0];
        if (!_utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].checkFileType(file.type)) {
            setOpenSnackbar(true);
            handleSnackbarMessage(Object(_locale__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(state.lang).messageChooseImage);
            return;
        }
        if (!_utils_Utils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].checkImageSize(file.size)) {
            setOpenSnackbar(true);
            handleSnackbarMessage(Object(_locale__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(state.lang).messageImageLimit);
            return;
        }
        dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_8__[/* imageFetchData */ "e"])(file, serviceRecognizeImageUrl));
    };
    var handleCloseSnackBar = function (event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };
    var handleSnackbarMessage = function (message) {
        setSnackbarMessage(message);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], { className: classes.root },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], { className: classes.input, placeholder: Object(_locale__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(state.lang).searchInputPlaceholderText, inputProps: { 'aria-label': Object(_locale__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(state.lang).searchInputPlaceholderText }, onChange: handleChange('value'), value: inputValue.value, onKeyPress: handlerKeyPress, inputRef: searchInput }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], { className: classes.iconButton, "aria-label": "search", onClick: handleSearchClick },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_18___default.a, null)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], { className: classes.iconButton, "aria-label": "clear", onClick: handleClearClick },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_19___default.a, null)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], { className: classes.divider, orientation: "vertical" }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], { color: "primary", className: classes.iconButton, "aria-label": "camera", "aria-haspopup": "true", onClick: handleClick },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_20___default.a, null)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], { id: "menu", anchorEl: anchorEl, keepMounted: true, open: open, onClose: handleClose, PaperProps: {
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: 200,
                    },
                } }, options.map(function (option) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], { key: option, onClick: function () { handleCameraClick(option); } }, option)); })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { accept: "image/*", className: classes.upload, id: attachImageID, type: "file", onChange: function (e) { return handleFiles(e.target.files); } })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], { anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
            }, open: openSnackbar, autoHideDuration: 6000, onClose: handleCloseSnackBar },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_snackbar_SnackbarContentWrapper__WEBPACK_IMPORTED_MODULE_10__[/* SnackbarContentWrapper */ "a"], { onClose: handleCloseSnackBar, variant: "error", message: snackbarMessage })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_video_DialogVideoWindow__WEBPACK_IMPORTED_MODULE_11__[/* DialogVideoWindow */ "a"], { title: options[0], openDialog: openDialog, handleClickCloseDialog: handleClickCloseDialog })));
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(145)))

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(110);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js + 1 modules
var createStyles = __webpack_require__(277);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Dialog/Dialog.js
var Dialog = __webpack_require__(323);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AppBar/AppBar.js
var AppBar = __webpack_require__(324);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js
var Toolbar = __webpack_require__(325);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(115);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Close.js
var Close = __webpack_require__(101);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Slide/Slide.js
var Slide = __webpack_require__(274);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(7);

// EXTERNAL MODULE: ./src/js/redux/actions.ts
var actions = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(313);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/PhotoCamera.js
var PhotoCamera = __webpack_require__(102);
var PhotoCamera_default = /*#__PURE__*/__webpack_require__.n(PhotoCamera);

// EXTERNAL MODULE: ./src/js/data/Data.ts
var Data = __webpack_require__(15);

// EXTERNAL MODULE: ./src/js/utils/UtilsAsync.ts
var UtilsAsync = __webpack_require__(47);

// EXTERNAL MODULE: ./src/js/locale/index.ts + 3 modules
var locale = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(322);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Radio/Radio.js + 5 modules
var Radio = __webpack_require__(361);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/RadioGroup/RadioGroup.js + 1 modules
var RadioGroup = __webpack_require__(362);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControl/FormControl.js
var FormControl = __webpack_require__(320);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormLabel/FormLabel.js
var FormLabel = __webpack_require__(321);

// CONCATENATED MODULE: ./src/js/components/video/Camera.tsx



var useStyles = Object(makeStyles["a" /* default */])(function (theme) { return Object(createStyles["a" /* default */])({}); });
var Camera = function () {
    var classes = useStyles({});
    var defaultProps = {
        audio: true,
        imageSmoothing: true,
        mirrored: false,
        onUserMedia: function () { },
        onUserMediaError: function () { },
        screenshotFormat: "image/webp",
        screenshotQuality: 0.92,
    };
    var _a = react_default.a.useState(""), deviceId = _a[0], setDeviceId = _a[1];
    var _b = react_default.a.useState(""), streamObj = _b[0], setStream = _b[1];
    var _c = react_default.a.useState(""), errorObj = _c[0], setError = _c[1];
    var canvas = null;
    var ctx = null;
    var stream = null;
    var video = null;
    var src = null;
    var videoSource = "";
    var getDevices = function () {
        return UtilsAsync["a" /* default */].getVideoDevices();
    };
    var getStream = function (deviceInfos) {
        window.deviceInfos = deviceInfos;
        if (window.stream) {
            window.stream.getTracks().forEach(function (track) {
                track.stop();
            });
        }
        videoSource = deviceInfos[deviceInfos.length - 1].deviceId;
        var constraints = {
            video: {
                deviceId: {
                    exact: videoSource
                }
            }
        };
        return navigator.mediaDevices.getUserMedia(constraints);
    };
    var gotStream = function (stream) {
        window.stream = stream;
        video.srcObject = stream;
        /*try{
          if(stream && video){
            video.srcObject = stream;
          }
          setStream(`${streamObj}`);
          setDeviceId(`'Available devices:' ${JSON.stringify(window.deviceInfos)}`);
          setError("");
          console.log('Available devices:', window.deviceInfos);
          console.log('MediaStream: ', window.stream);
        }
        catch(error){
          console.error('Error: ', error);
          setError(`Error: ${JSON.stringify(error)}`);
        }*/
    };
    var handleError = function (error) {
        console.error('Error: ', error);
    };
    getDevices()
        .then(getStream)
        .then(gotStream)
        .catch(handleError);
    return (react_default.a.createElement(react["Fragment"], null,
        react_default.a.createElement("video", { autoPlay: true, muted: true, 
            //src={src}
            playsInline: true, ref: function (ref) {
                video = ref;
            }, style: {
                height: "50vh",
                width: "100%",
            } }),
        react_default.a.createElement("p", null, deviceId),
        react_default.a.createElement("p", null, streamObj),
        react_default.a.createElement("p", null, errorObj)));
};

// CONCATENATED MODULE: ./src/js/components/video/WebcamCapture.tsx
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;














//import Webcam from "react-webcam";

var WebcamCapture_useStyles = Object(makeStyles["a" /* default */])(function (theme) { return Object(createStyles["a" /* default */])({
    button: {
        margin: theme.spacing(1),
        width: '50px'
    },
    formControl: {
        margin: theme.spacing(3),
    },
}); });
var WebcamCapture = function (props) {
    var close = props.close;
    var serviceRecognizeImageUrl = "https://carsdatabase.azurewebsites.net/api/platerecognizerservice?code=Gh3DFiMDDdQ9/b6edFSQSuz2MGaWeQG7nKOjaxK7pbdO3Hlb0EBXtQ==" || false;
    var state = Object(es["d" /* useSelector */])(function (state) { return state.Item; }, es["b" /* shallowEqual */]);
    var _a = react_default.a.useState('3991eaf37b0a338f952e799f6c5c1fbf597bea79a397ba8401543510c2baa593'), deviceId = _a[0], setDeviceId = _a[1];
    var classes = WebcamCapture_useStyles({});
    var dispatch = Object(es["c" /* useDispatch */])();
    var webcamRef = react_default.a.useRef(null);
    var _b = react_default.a.useState({ value: [] }), devices = _b[0], setVideoDevices = _b[1];
    var handleDevicesChange = function (values) {
        setVideoDevices(__assign({}, devices, { value: values }));
    };
    var takeAPhoto = function () { return __awaiter(_this, void 0, void 0, function () {
        var vDevices;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, UtilsAsync["a" /* default */].getVideoDevices()];
                case 1:
                    vDevices = _a.sent();
                    handleDevicesChange(vDevices);
                    return [2 /*return*/];
            }
        });
    }); };
    var videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: { exact: "environment" }
    };
    var capture = react_default.a.useCallback(function () {
        var imageSrc = webcamRef.current.getScreenshot();
        //console.log(imageSrc);
        fetch(imageSrc)
            .then(function (res) {
            return res.blob();
        })
            .then(function (blob) {
            var file = new File([blob], "File name");
            dispatch(Object(actions["e" /* imageFetchData */])(file, serviceRecognizeImageUrl));
            close();
        });
    }, [webcamRef]);
    var handleChange = function (event) {
        setDeviceId(event.target.value);
    };
    return (react_default.a.createElement(react["Fragment"], null,
        react_default.a.createElement(Camera, null),
        react_default.a.createElement(Button["a" /* default */], { variant: "contained", color: "primary", className: classes.button, onClick: capture },
            react_default.a.createElement(PhotoCamera_default.a, null)),
        react_default.a.createElement(FormControl["a" /* default */], { component: "fieldset", className: classes.formControl, key: Math.random() },
            react_default.a.createElement(FormLabel["a" /* default */], { key: Math.random(), component: "legend" }, Object(locale["a" /* default */])(state.lang).messageTurnOnFrontCamera),
            react_default.a.createElement(RadioGroup["a" /* default */], { "aria-label": "gender", name: "gender1", value: deviceId, onChange: handleChange, key: Math.random() }, devices !== undefined
                ? devices.value.map(function (d) { return react_default.a.createElement(FormControlLabel["a" /* default */], { key: Math.random(), value: d.deviceId, control: react_default.a.createElement(Radio["a" /* default */], { key: Math.random() }), label: d.label + " " + d.deviceId }); })
                : null))));
};

// CONCATENATED MODULE: ./src/js/components/video/DialogVideoWindow.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogVideoWindow; });
var DialogVideoWindow_assign = (undefined && undefined.__assign) || function () {
    DialogVideoWindow_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return DialogVideoWindow_assign.apply(this, arguments);
};










var DialogVideoWindow_useStyles = Object(makeStyles["a" /* default */])(function (theme) { return Object(createStyles["a" /* default */])({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    button: {
        margin: theme.spacing(1),
        width: '50px'
    },
}); });
var DialogVideoWindow_Transition = react_default.a.forwardRef(function Transition(props, ref) {
    return react_default.a.createElement(Slide["a" /* default */], DialogVideoWindow_assign({ direction: "up", ref: ref }, props));
});
var DialogVideoWindow = function (props) {
    var openDialog = props.openDialog, handleClickCloseDialog = props.handleClickCloseDialog, title = props.title;
    var classes = DialogVideoWindow_useStyles({});
    return (react_default.a.createElement(react["Fragment"], null,
        react_default.a.createElement(Dialog["a" /* default */], { fullScreen: true, open: openDialog, onClose: handleClickCloseDialog, TransitionComponent: DialogVideoWindow_Transition },
            react_default.a.createElement(AppBar["a" /* default */], { className: classes.appBar },
                react_default.a.createElement(Toolbar["a" /* default */], null,
                    react_default.a.createElement(IconButton["a" /* default */], { edge: "start", color: "inherit", onClick: handleClickCloseDialog, "aria-label": "close" },
                        react_default.a.createElement(Close_default.a, null)),
                    react_default.a.createElement(Typography["a" /* default */], { variant: "h6", className: classes.title }, title))),
            react_default.a.createElement(WebcamCapture, { close: handleClickCloseDialog }))));
};


/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(267);


/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(110);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(313);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Avatar/Avatar.js
var Avatar = __webpack_require__(316);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(268);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Menu/Menu.js + 2 modules
var Menu = __webpack_require__(276);

// EXTERNAL MODULE: ./src/js/locale/index.ts + 3 modules
var locale = __webpack_require__(5);

// EXTERNAL MODULE: ./src/js/redux/actions.ts
var actions = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/react-facebook-login/dist/facebook-login-with-button.js
var facebook_login_with_button = __webpack_require__(160);
var facebook_login_with_button_default = /*#__PURE__*/__webpack_require__.n(facebook_login_with_button);

// EXTERNAL MODULE: ./node_modules/react-google-login/dist/google-login.js
var google_login = __webpack_require__(161);
var google_login_default = /*#__PURE__*/__webpack_require__.n(google_login);

// EXTERNAL MODULE: ./src/js/data/Data.ts
var Data = __webpack_require__(15);

// CONCATENATED MODULE: ./src/js/components/login/Login.tsx













var useStyles = Object(makeStyles["a" /* default */])({
    avatar: {
        margin: 10,
        cursor: 'pointer',
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    glHeight: {
        width: '100%',
        height: '40px',
    },
    fbHeight: {
        backgroundColor: '#4267b2',
        color: '#fff',
        textAlign: 'center',
        margin: '5px 0',
        width: '100%',
        height: '40px',
        fontSize: '17px',
        borderRadius: '5px',
        padding: '12px',
        border: 'none',
        opacity: 0.9,
        display: 'inline-block',
        lineHeight: '20px',
        textDecoration: 'none',
    }
});
var Login = function () {
    var state = Object(es["d" /* useSelector */])(function (state) { return state.Item; }, es["b" /* shallowEqual */]);
    var _a = react_default.a.useState(null), anchorEl1 = _a[0], setAnchorEl = _a[1];
    var open = Boolean(anchorEl1);
    var _b = react_default.a.useState(null), anchorEl2 = _b[0], setAnchorEl2 = _b[1];
    var openSettingsMenu = Boolean(anchorEl2);
    var dispatch = Object(es["c" /* useDispatch */])();
    var classes = useStyles({});
    var appIdFacebook = "";
    var appIdGoogle = "";
    if (false) {}
    else {
        appIdFacebook = "375628430041511" || false;
        appIdGoogle = "1051056471320-ma9n9tk7elf3hjpin6947846hqid17i9.apps.googleusercontent.com" || false;
    }
    var handleMenu1 = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose1 = function () {
        setAnchorEl(null);
    };
    var responseFacebook = function (response) {
        dispatch(Object(actions["c" /* authoriseUser */])({
            vendor: 1,
            avatar: response.picture.data.url,
            profileName: response.name,
            mail: response.email,
        }, state.favorites));
    };
    var responseGoogle = function (response) {
        dispatch(Object(actions["c" /* authoriseUser */])({
            vendor: 2,
            avatar: response.profileObj.imageUrl,
            profileName: response.profileObj.name,
            mail: response.profileObj.email,
        }, state.favorites));
    };
    var handleFailure = function () {
        dispatch(Object(actions["c" /* authoriseUser */])(Data["d" /* loggedInDefault */], state.favorites));
    };
    var handleLogoutMenuClick = function () {
        setAnchorEl2(null);
        dispatch(Object(actions["h" /* login */])(Data["d" /* loggedInDefault */]));
    };
    var handleMenu2 = function (event) {
        setAnchorEl2(event.currentTarget);
    };
    var handleClose2 = function () {
        setAnchorEl2(null);
    };
    return (react_default.a.createElement(react["Fragment"], null, state.loggedIn.vendor === 0 ?
        react_default.a.createElement("div", null,
            react_default.a.createElement(Button["a" /* default */], { color: "inherit", "aria-label": "account of current user", "aria-controls": "menu-appbar", "aria-haspopup": "true", onClick: handleMenu1 }, Object(locale["a" /* default */])(state.lang).login),
            react_default.a.createElement(Menu["a" /* default */], { id: "menu-appbar", anchorEl: anchorEl1, anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                }, keepMounted: true, transformOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                }, open: open, onClose: handleClose1 },
                react_default.a.createElement(MenuItem["a" /* default */], { onClick: handleClose1 },
                    react_default.a.createElement(facebook_login_with_button_default.a, { appId: appIdFacebook, fields: "name,email,picture", callback: responseFacebook, onFailure: handleFailure, textButton: Object(locale["a" /* default */])(state.lang).login_facebook, cssClass: classes.fbHeight, cookie: true, autoLoad: false })),
                react_default.a.createElement(MenuItem["a" /* default */], { onClick: handleClose1 },
                    react_default.a.createElement(google_login_default.a, { clientId: appIdGoogle, buttonText: Object(locale["a" /* default */])(state.lang).login_google, onSuccess: responseGoogle, onFailure: handleFailure }))))
        :
            react_default.a.createElement("div", null,
                react_default.a.createElement(Avatar["a" /* default */], { alt: state.loggedIn.profileName, src: state.loggedIn.avatar, className: classes.avatar, onClick: handleMenu2 }),
                react_default.a.createElement(Menu["a" /* default */], { id: "menu-appbar", anchorEl: anchorEl2, anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    }, keepMounted: true, transformOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    }, open: openSettingsMenu, onClose: handleClose2 },
                    react_default.a.createElement(MenuItem["a" /* default */], { onClick: handleLogoutMenuClick }, Object(locale["a" /* default */])(state.lang).logout)))));
};

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js + 1 modules
var createStyles = __webpack_require__(277);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(269);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__(315);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(317);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(318);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Collapse/Collapse.js
var Collapse = __webpack_require__(319);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Search.js
var Search = __webpack_require__(97);
var Search_default = /*#__PURE__*/__webpack_require__.n(Search);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Info.js
var Info = __webpack_require__(99);
var Info_default = /*#__PURE__*/__webpack_require__.n(Info);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Chat.js
var Chat = __webpack_require__(166);
var Chat_default = /*#__PURE__*/__webpack_require__.n(Chat);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/GTranslate.js
var GTranslate = __webpack_require__(164);
var GTranslate_default = /*#__PURE__*/__webpack_require__.n(GTranslate);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Favorite.js
var Favorite = __webpack_require__(98);
var Favorite_default = /*#__PURE__*/__webpack_require__.n(Favorite);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/VerticalAlignBottom.js
var VerticalAlignBottom = __webpack_require__(168);
var VerticalAlignBottom_default = /*#__PURE__*/__webpack_require__.n(VerticalAlignBottom);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/PermIdentity.js
var PermIdentity = __webpack_require__(163);
var PermIdentity_default = /*#__PURE__*/__webpack_require__.n(PermIdentity);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Shop.js
var Shop = __webpack_require__(167);
var Shop_default = /*#__PURE__*/__webpack_require__.n(Shop);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ExpandLess.js
var ExpandLess = __webpack_require__(165);
var ExpandLess_default = /*#__PURE__*/__webpack_require__.n(ExpandLess);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ExpandMore.js
var ExpandMore = __webpack_require__(65);
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Language.js
var Language = __webpack_require__(71);
var Language_default = /*#__PURE__*/__webpack_require__.n(Language);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Divider/Divider.js
var Divider = __webpack_require__(270);

// CONCATENATED MODULE: ./src/js/components/pwa/useAddToHomescreenPrompt.tsx

function useAddToHomescreenPrompt() {
    var _a = react["useState"](null), prompt = _a[0], setState = _a[1];
    var promptToInstall = function () {
        if (prompt) {
            return prompt.prompt();
        }
        return Promise.reject(new Error('Tried installing before browser sent "beforeinstallprompt" event'));
    };
    react["useEffect"](function () {
        var ready = function (e) {
            e.preventDefault();
            setState(e);
        };
        window.addEventListener("beforeinstallprompt", ready);
        return function () {
            window.removeEventListener("beforeinstallprompt", ready);
        };
    }, []);
    return [prompt, promptToInstall];
}

// CONCATENATED MODULE: ./src/js/components/routes/routesLinks.tsx
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
























var ListItemLink = function (props) {
    var icon = props.icon, primary = props.primary, to = props.to, callbackFunc = props.callbackFunc, nestedElement = props.nestedElement;
    var renderLink = Object(react["useMemo"])(function () { return Object(react["forwardRef"])(function (itemProps, ref) { return (react_default.a.createElement(react_router_dom["b" /* Link */], __assign({ to: to }, itemProps, { innerRef: ref }))); }); }, [to]);
    return (react_default.a.createElement("li", null,
        react_default.a.createElement(ListItem["a" /* default */], { button: true, component: renderLink, onClick: function () { return callbackFunc(); } },
            icon ? react_default.a.createElement(ListItemIcon["a" /* default */], null, icon) : null,
            react_default.a.createElement(ListItemText["a" /* default */], { primary: primary }),
            nestedElement)));
};
var routesLinks_useStyles = Object(makeStyles["a" /* default */])(function (theme) { return Object(createStyles["a" /* default */])({
    nested: {
        paddingLeft: theme.spacing(4),
    },
}); });
var routesLinks = function () {
    var state = Object(es["d" /* useSelector */])(function (state) { return state.Item; }, es["b" /* shallowEqual */]);
    var _a = react_default.a.useState(1), selectedIndex = _a[0], setSelectedIndex = _a[1];
    var _b = react_default.a.useState(false), open = _b[0], setOpen = _b[1];
    //dispatch action creators
    var dispatch = Object(es["c" /* useDispatch */])();
    var classes = routesLinks_useStyles({});
    var _c = useAddToHomescreenPrompt(), prompt = _c[0], promptToInstall = _c[1];
    var _d = react_default.a.useState(false), isVisible = _d[0], setVisibleState = _d[1];
    var hide = function () { return setVisibleState(false); };
    react_default.a.useEffect(function () {
        if (prompt) {
            setVisibleState(true);
        }
    }, [prompt]);
    var handleInstallClick = function (event, index) {
        setSelectedIndex(index);
        promptToInstall();
    };
    var handleDrawerClose = function () {
        dispatch(Object(actions["k" /* toggleDrawer */])(false));
    };
    var toggleSubMenu = function () {
        setOpen(!open);
    };
    var handleChangeLang = function (val) {
        dispatch(Object(actions["d" /* changeLang */])(val));
    };
    return (react_default.a.createElement(react["Fragment"], null,
        react_default.a.createElement(List["a" /* default */], null,
            react_default.a.createElement(ListItemLink, { to: "/", primary: Object(locale["a" /* default */])(state.lang).url_search, icon: react_default.a.createElement(Search_default.a, null), callbackFunc: handleDrawerClose }),
            react_default.a.createElement(ListItemLink, { to: "/favorites", primary: Object(locale["a" /* default */])(state.lang).url_favs, icon: react_default.a.createElement(Favorite_default.a, null), callbackFunc: handleDrawerClose }),
            react_default.a.createElement(ListItemLink, { to: "/about", primary: Object(locale["a" /* default */])(state.lang).url_about, icon: react_default.a.createElement(Info_default.a, null), callbackFunc: handleDrawerClose })),
        react_default.a.createElement(Divider["a" /* default */], null),
        react_default.a.createElement(List["a" /* default */], null,
            react_default.a.createElement(ListItemLink, { to: "/profile", primary: Object(locale["a" /* default */])(state.lang).url_profile, icon: react_default.a.createElement(PermIdentity_default.a, null), callbackFunc: handleDrawerClose }),
            react_default.a.createElement(ListItem["a" /* default */], { button: true, onClick: toggleSubMenu },
                react_default.a.createElement(ListItemIcon["a" /* default */], null,
                    react_default.a.createElement(GTranslate_default.a, null)),
                react_default.a.createElement(ListItemText["a" /* default */], { primary: Object(locale["a" /* default */])(state.lang).url_lang }),
                open ? react_default.a.createElement(ExpandLess_default.a, null) : react_default.a.createElement(ExpandMore_default.a, null)),
            react_default.a.createElement(Collapse["a" /* default */], { in: open, timeout: "auto", unmountOnExit: true },
                react_default.a.createElement(List["a" /* default */], { component: "div", disablePadding: true },
                    react_default.a.createElement(ListItem["a" /* default */], { button: true, className: classes.nested, onClick: function () { return handleChangeLang(0); } },
                        react_default.a.createElement(ListItemIcon["a" /* default */], null,
                            react_default.a.createElement(Language_default.a, null)),
                        react_default.a.createElement(ListItemText["a" /* default */], { primary: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430" })),
                    react_default.a.createElement(ListItem["a" /* default */], { button: true, className: classes.nested, onClick: function () { return handleChangeLang(1); } },
                        react_default.a.createElement(ListItemIcon["a" /* default */], null,
                            react_default.a.createElement(Language_default.a, null)),
                        react_default.a.createElement(ListItemText["a" /* default */], { primary: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439" })),
                    react_default.a.createElement(ListItem["a" /* default */], { button: true, className: classes.nested, onClick: function () { return handleChangeLang(2); } },
                        react_default.a.createElement(ListItemIcon["a" /* default */], null,
                            react_default.a.createElement(Language_default.a, null)),
                        react_default.a.createElement(ListItemText["a" /* default */], { primary: "English" })))),
            react_default.a.createElement(ListItemLink, { to: "/disqus", primary: Object(locale["a" /* default */])(state.lang).url_disqus, icon: react_default.a.createElement(Chat_default.a, null), callbackFunc: handleDrawerClose })),
        react_default.a.createElement(Divider["a" /* default */], null),
        react_default.a.createElement(List["a" /* default */], null,
            react_default.a.createElement(ListItemLink, { to: "/store", primary: Object(locale["a" /* default */])(state.lang).url_store, icon: react_default.a.createElement(Shop_default.a, null), callbackFunc: handleDrawerClose }),
            window.matchMedia('(display-mode: standalone)').matches === true
                ? null
                : react_default.a.createElement(ListItem["a" /* default */], { button: true, selected: selectedIndex === 0, onClick: function (event) { return handleInstallClick(event, 0); } },
                    react_default.a.createElement(ListItemIcon["a" /* default */], null,
                        react_default.a.createElement(VerticalAlignBottom_default.a, null)),
                    react_default.a.createElement(ListItemText["a" /* default */], { primary: Object(locale["a" /* default */])(state.lang).url_install })))));
};

// EXTERNAL MODULE: ./src/js/components/search/SearchField.tsx
var SearchField = __webpack_require__(169);

// EXTERNAL MODULE: ./src/js/utils/UtilsRia.ts + 4 modules
var UtilsRia = __webpack_require__(38);

// EXTERNAL MODULE: ./src/js/utils/Utils.ts
var Utils = __webpack_require__(8);

// CONCATENATED MODULE: ./src/js/data/DataStylesRia.ts
var bodyStyles = [
    {
        "name": "Седан",
        "value": 3
    },
    {
        "name": "Внедорожник / Кроссовер",
        "value": 5
    },
    {
        "name": "Минивэн",
        "value": 8
    },
    {
        "name": "Хэтчбек",
        "value": 4
    },
    {
        "name": "Универсал",
        "value": 2
    },
    {
        "name": "Купе",
        "value": 6
    },
    {
        "name": "Легковой фургон (до 1,5 т)",
        "value": 254
    },
    {
        "name": "Кабриолет",
        "value": 7
    },
    {
        "name": "Пикап",
        "value": 9
    },
    {
        "name": "Лифтбек",
        "value": 307
    },
    {
        "name": "Лимузин",
        "value": 252
    },
    {
        "name": "Другой",
        "value": 28
    },
    {
        "name": "Родстер",
        "value": 315
    },
    {
        "name": "Вездеход-амфибия",
        "value": 43
    },
    {
        "name": "Гольф-кар",
        "value": 44
    },
    {
        "name": "Другое",
        "value": 56
    },
    {
        "name": "Картинг",
        "value": 45
    },
    {
        "name": "Квадроцикл  утилитарный",
        "value": 41
    },
    {
        "name": "Квадроцикл детский",
        "value": 36
    },
    {
        "name": "Квадроцикл спортивный",
        "value": 39
    },
    {
        "name": "Квадроциклы",
        "value": 35
    },
    {
        "name": "Макси-скутер",
        "value": 12
    },
    {
        "name": "Мини крос (Питбайк)",
        "value": 33
    },
    {
        "name": "Мини мотоциклы",
        "value": 31
    },
    {
        "name": "Мини спорт",
        "value": 32
    },
    {
        "name": "Мопеды",
        "value": 58
    },
    {
        "name": "Мотовездеход",
        "value": 42
    },
    {
        "name": "Мотоцикл Без обтекателей (Naked bike)",
        "value": 15
    },
    {
        "name": "Мотоцикл Внедорожный (Enduro)",
        "value": 21
    },
    {
        "name": "Мотоцикл Кастом",
        "value": 30
    },
    {
        "name": "Мотоцикл Классик",
        "value": 14
    },
    {
        "name": "Мотоцикл Кросс",
        "value": 19
    },
    {
        "name": "Мотоцикл Круизер",
        "value": 24
    },
    {
        "name": "Мотоцикл Многоцелевой (All-round)",
        "value": 25
    },
    {
        "name": "Мотоцикл с коляской",
        "value": 29
    },
    {
        "name": "Мотоцикл Спорт-туризм",
        "value": 17
    },
    {
        "name": "Мотоцикл Супермото (Motard)",
        "value": 22
    },
    {
        "name": "Мотоцикл Триал",
        "value": 20
    },
    {
        "name": "Мотоцикл Туризм",
        "value": 16
    },
    {
        "name": "Мотоцикл Чоппер",
        "value": 23
    },
    {
        "name": "Мотоциклы",
        "value": 13
    },
    {
        "name": "Скутер / Мотороллер",
        "value": 11
    },
    {
        "name": "Снегоход",
        "value": 46
    },
    {
        "name": "Спортбайк",
        "value": 18
    },
    {
        "name": "Трайк",
        "value": 57
    },
    {
        "name": "Трицикл",
        "value": 34
    },
    {
        "name": "Автовоз",
        "value": 178
    },
    {
        "name": "Бетономешалка (Миксер) полуприцеп",
        "value": 172
    },
    {
        "name": "Борт",
        "value": 150
    },
    {
        "name": "Бортовой полуприцеп",
        "value": 165
    },
    {
        "name": "Для перевозки животных - полуприцеп",
        "value": 176
    },
    {
        "name": "Для перевозки животных - прицеп",
        "value": 159
    },
    {
        "name": "Другое",
        "value": 251
    },
    {
        "name": "Зерновоз - полуприцеп",
        "value": 387
    },
    {
        "name": "Зерновоз - прицеп",
        "value": 386
    },
    {
        "name": "Изотермическая будка",
        "value": 303
    },
    {
        "name": "Контейнеровоз",
        "value": 154
    },
    {
        "name": "Контейнеровоз полуприцеп",
        "value": 169
    },
    {
        "name": "Лафет",
        "value": 256
    },
    {
        "name": "Легковой прицеп",
        "value": 179
    },
    {
        "name": "Лесовоз / Сортиментовоз - полуприцеп",
        "value": 175
    },
    {
        "name": "Лесовоз / Сортиментовоз - прицеп",
        "value": 160
    },
    {
        "name": "Низкорамная платформа",
        "value": 164
    },
    {
        "name": "Платформа",
        "value": 149
    },
    {
        "name": "Платформа полуприцеп",
        "value": 163
    },
    {
        "name": "Плитовоз",
        "value": 177
    },
    {
        "name": "Полуприцеп",
        "value": 161
    },
    {
        "name": "Прицеп",
        "value": 147
    },
    {
        "name": "Прицеп дача",
        "value": 255
    },
    {
        "name": "Рефрижератор",
        "value": 157
    },
    {
        "name": "Рефрижератор полуприцеп",
        "value": 173
    },
    {
        "name": "Самосвал полуприцеп",
        "value": 168
    },
    {
        "name": "Самосвал прицеп",
        "value": 152
    },
    {
        "name": "Тентованный борт (штора) - полуприцеп",
        "value": 167
    },
    {
        "name": "Тентованный борт (штора) - прицеп",
        "value": 151
    },
    {
        "name": "Фургон",
        "value": 153
    },
    {
        "name": "Фургон полуприцеп",
        "value": 170
    },
    {
        "name": "Цистерна",
        "value": 155
    },
    {
        "name": "Цистерна полуприцеп",
        "value": 171
    },
    {
        "name": "Шасси",
        "value": 148
    },
    {
        "name": "Шасси полуприцеп",
        "value": 162
    },
    {
        "name": "Автовоз",
        "value": 207
    },
    {
        "name": "Бортовой",
        "value": 194
    },
    {
        "name": "Вахтовый автобус / Кунг",
        "value": 228
    },
    {
        "name": "Грузовик",
        "value": 190
    },
    {
        "name": "Для перевозки животных",
        "value": 203
    },
    {
        "name": "Другое",
        "value": 213
    },
    {
        "name": "Зерновоз",
        "value": 385
    },
    {
        "name": "Контейнеровоз",
        "value": 200
    },
    {
        "name": "Кормовоз",
        "value": 314
    },
    {
        "name": "Легковой фургон (до 1,5 т)",
        "value": 254
    },
    {
        "name": "Лесовоз / Сортиментовоз",
        "value": 204
    },
    {
        "name": "Микроавтобус грузовой (до 3,5т)",
        "value": 210
    },
    {
        "name": "Мультилифт",
        "value": 205
    },
    {
        "name": "Мусоровоз",
        "value": 211
    },
    {
        "name": "Платформа",
        "value": 193
    },
    {
        "name": "Рефрижератор",
        "value": 198
    },
    {
        "name": "Самосвал",
        "value": 196
    },
    {
        "name": "Стекловоз",
        "value": 206
    },
    {
        "name": "Тентованый",
        "value": 195
    },
    {
        "name": "Тягач",
        "value": 212
    },
    {
        "name": "Фургон",
        "value": 197
    },
    {
        "name": "Цистерна",
        "value": 201
    },
    {
        "name": "Шасси",
        "value": 192
    },
    {
        "name": "Эвакуатор",
        "value": 208
    },
    {
        "name": "Автобус",
        "value": 220
    },
    {
        "name": "Городской автобус",
        "value": 221
    },
    {
        "name": "Другое",
        "value": 229
    },
    {
        "name": "Микроавтобус (от 10 до 22 пас.)",
        "value": 219
    },
    {
        "name": "Пригородный автобус",
        "value": 224
    },
    {
        "name": "Туристический / Междугородний автобус",
        "value": 227
    }
];

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(327);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Drawer/Drawer.js
var Drawer = __webpack_require__(326);

// EXTERNAL MODULE: ./node_modules/react-share/es/FacebookShareButton.js
var FacebookShareButton = __webpack_require__(328);

// EXTERNAL MODULE: ./node_modules/react-share/es/FacebookIcon.js
var FacebookIcon = __webpack_require__(329);

// EXTERNAL MODULE: ./node_modules/react-share/es/WhatsappShareButton.js
var WhatsappShareButton = __webpack_require__(330);

// EXTERNAL MODULE: ./node_modules/react-share/es/WhatsappIcon.js
var WhatsappIcon = __webpack_require__(331);

// EXTERNAL MODULE: ./node_modules/react-share/es/LinkedinShareButton.js
var LinkedinShareButton = __webpack_require__(332);

// EXTERNAL MODULE: ./node_modules/react-share/es/LinkedinIcon.js
var LinkedinIcon = __webpack_require__(333);

// EXTERNAL MODULE: ./node_modules/react-share/es/TwitterShareButton.js
var TwitterShareButton = __webpack_require__(334);

// EXTERNAL MODULE: ./node_modules/react-share/es/TwitterIcon.js
var TwitterIcon = __webpack_require__(335);

// EXTERNAL MODULE: ./node_modules/react-share/es/TelegramShareButton.js
var TelegramShareButton = __webpack_require__(336);

// EXTERNAL MODULE: ./node_modules/react-share/es/TelegramIcon.js
var TelegramIcon = __webpack_require__(337);

// EXTERNAL MODULE: ./node_modules/react-share/es/ViberShareButton.js
var ViberShareButton = __webpack_require__(338);

// EXTERNAL MODULE: ./node_modules/react-share/es/ViberIcon.js
var ViberIcon = __webpack_require__(339);

// EXTERNAL MODULE: ./node_modules/react-share/es/EmailShareButton.js
var EmailShareButton = __webpack_require__(340);

// EXTERNAL MODULE: ./node_modules/react-share/es/EmailIcon.js
var EmailIcon = __webpack_require__(341);

// CONCATENATED MODULE: ./src/js/components/share/ShareDrawerBottom.tsx







var ShareDrawerBottom_useStyles = Object(makeStyles["a" /* default */])(function (theme) { return Object(createStyles["a" /* default */])({
    network: {
        verticalAlign: "top",
        display: 'inline-block',
        margin: '0',
        padding: '0 0 30px 30px',
        textAlign: 'center',
    },
    network_sharebutton: {
        cursor: 'pointer',
    },
}); });
var ShareDrawerBottom = function (props) {
    var url = props.url, open = props.open, onClose = props.onClose;
    var state = Object(es["d" /* useSelector */])(function (state) { return state.Item; }, es["b" /* shallowEqual */]);
    var classes = ShareDrawerBottom_useStyles({});
    var handleClose = function () {
        onClose();
    };
    return (react_default.a.createElement(Drawer["a" /* default */], { anchor: "bottom", onClose: handleClose, "aria-labelledby": "dialog-title", open: open },
        react_default.a.createElement(DialogTitle["a" /* default */], { id: "dialog-title" }, Object(locale["a" /* default */])(state.lang).card_share),
        react_default.a.createElement("div", null,
            react_default.a.createElement("div", { className: classes.network },
                react_default.a.createElement(FacebookShareButton["a" /* default */], { url: url, className: classes.network_sharebutton },
                    react_default.a.createElement(FacebookIcon["a" /* default */], { size: 32, round: true }))),
            react_default.a.createElement("div", { className: classes.network },
                react_default.a.createElement(WhatsappShareButton["a" /* default */], { url: url, className: classes.network_sharebutton },
                    react_default.a.createElement(WhatsappIcon["a" /* default */], { size: 32, round: true }))),
            react_default.a.createElement("div", { className: classes.network },
                react_default.a.createElement(LinkedinShareButton["a" /* default */], { url: url, className: classes.network_sharebutton },
                    react_default.a.createElement(LinkedinIcon["a" /* default */], { size: 32, round: true }))),
            react_default.a.createElement("div", { className: classes.network },
                react_default.a.createElement(TwitterShareButton["a" /* default */], { url: url, className: classes.network_sharebutton },
                    react_default.a.createElement(TwitterIcon["a" /* default */], { size: 32, round: true }))),
            react_default.a.createElement("div", { className: classes.network },
                react_default.a.createElement(TelegramShareButton["a" /* default */], { url: url, className: classes.network_sharebutton },
                    react_default.a.createElement(TelegramIcon["a" /* default */], { size: 32, round: true }))),
            react_default.a.createElement("div", { className: classes.network },
                react_default.a.createElement(ViberShareButton["a" /* default */], { url: url, className: classes.network_sharebutton },
                    react_default.a.createElement(ViberIcon["a" /* default */], { size: 32, round: true }))),
            react_default.a.createElement("div", { className: classes.network },
                react_default.a.createElement(EmailShareButton["a" /* default */], { url: url, className: classes.network_sharebutton },
                    react_default.a.createElement(EmailIcon["a" /* default */], { size: 32, round: true }))))));
};

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(342);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js
var CardHeader = __webpack_require__(343);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardMedia/CardMedia.js
var CardMedia = __webpack_require__(344);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(345);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__(346);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(115);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/colors/red.js
var red = __webpack_require__(113);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Share.js
var Share = __webpack_require__(107);
var Share_default = /*#__PURE__*/__webpack_require__.n(Share);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/MoreVert.js
var MoreVert = __webpack_require__(48);
var MoreVert_default = /*#__PURE__*/__webpack_require__.n(MoreVert);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Send.js
var Send = __webpack_require__(106);
var Send_default = /*#__PURE__*/__webpack_require__.n(Send);

// CONCATENATED MODULE: ./src/js/components/search/ResultRiaCard.tsx
























var ResultRiaCard_useStyles = Object(makeStyles["a" /* default */])(function (theme) { return Object(createStyles["a" /* default */])({
    card: {
        maxWidth: 500,
        marginTop: theme.spacing(2),
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red["a" /* default */][400],
    },
    link: {
        display: 'none',
    },
    pos: {
        marginBottom: 12,
    },
}); });
var ResultRiaCard = function (props) {
    var _a;
    var classes = ResultRiaCard_useStyles({});
    var state = Object(es["d" /* useSelector */])(function (state) { return state.Item; }, es["b" /* shallowEqual */]);
    var _b = react_default.a.useState(false), expanded = _b[0], setExpanded = _b[1];
    var _c = react_default.a.useState(false), open = _c[0], setOpen = _c[1];
    var title = Utils["a" /* default */].checkIsUndefinedOrNull(props.item.title) ? "" : props.item.title;
    var year = Utils["a" /* default */].checkIsUndefinedOrNull(props.item.autoData.year) ? "" : "(" + props.item.autoData.year + ")";
    var USD = Utils["a" /* default */].checkIsUndefinedOrNull(props.item.USD) ? "" : props.item.USD + " $, ";
    var stateData = Utils["a" /* default */].checkIsUndefinedOrNull(props.item.stateData.name) ? "" : props.item.stateData.name;
    var image = Utils["a" /* default */].checkIsUndefinedOrNull(props.item.photoData.seoLinkB) ? "" : props.item.photoData.seoLinkB;
    var description = Utils["a" /* default */].checkIsUndefinedOrNull(props.item.autoData.description) ? "" : props.item.autoData.description;
    var race = Utils["a" /* default */].checkIsUndefinedOrNull(props.item.autoData.race) ? "" : props.item.autoData.race;
    var category = Utils["a" /* default */].checkIsUndefinedOrNull(props.item.autoData.categoryId) ? "" : UtilsRia["a" /* default */].detectTypeByCategory(props.item.autoData.categoryId);
    var fuelName = Utils["a" /* default */].checkIsUndefinedOrNull(props.item.autoData.fuelName) ? "" : props.item.autoData.fuelName;
    var gearboxName = Utils["a" /* default */].checkIsUndefinedOrNull(props.item.autoData.gearboxName) ? "" : props.item.autoData.gearboxName;
    var body = Utils["a" /* default */].checkIsUndefinedOrNull(props.item.autoData.bodyId) ? "" : UtilsRia["a" /* default */].detectBodyStyleByValue(bodyStyles, props.item.autoData.bodyId);
    var phone = Utils["a" /* default */].checkIsUndefinedOrNull(props.item.userPhoneData.phone) ? "" : "+380" + props.item.userPhoneData.phone;
    var url = Utils["a" /* default */].checkIsUndefinedOrNull(props.item.linkToView) ? "" : "" + Data["a" /* URLs */].riaUrlPublic + props.item.linkToView;
    var handleClose = function () {
        setOpen(false);
    };
    var handleExpandClick = function () {
        setExpanded(!expanded);
    };
    var handleShareClick = function () {
        setOpen(true);
    };
    var handleRedirectClick = function () {
        window.open(url);
    };
    return (react_default.a.createElement(react["Fragment"], null,
        react_default.a.createElement(Card["a" /* default */], { className: classes.card },
            react_default.a.createElement(CardHeader["a" /* default */], { avatar: react_default.a.createElement(Avatar["a" /* default */], { "aria-label": "recipe", className: classes.avatar }, "RIA"), action: react_default.a.createElement(IconButton["a" /* default */], { "aria-label": "settings", title: Object(locale["a" /* default */])(state.lang).card_settings, onClick: handleShareClick },
                    react_default.a.createElement(MoreVert_default.a, null)), title: title + " " + year, subheader: "" + USD + stateData }),
            react_default.a.createElement(CardMedia["a" /* default */], { className: classes.media, image: image, title: title + " " + year }),
            react_default.a.createElement(CardContent["a" /* default */], null,
                react_default.a.createElement(Typography["a" /* default */], { variant: "body2", color: "textSecondary", component: "p" }, description)),
            react_default.a.createElement(CardActions["a" /* default */], { disableSpacing: true },
                react_default.a.createElement(IconButton["a" /* default */], { "aria-label": "open original ads", title: Object(locale["a" /* default */])(state.lang).card_openOriginalAds, onClick: handleRedirectClick },
                    react_default.a.createElement(Send_default.a, null)),
                react_default.a.createElement(IconButton["a" /* default */], { "aria-label": "share", title: Object(locale["a" /* default */])(state.lang).card_share, onClick: handleShareClick },
                    react_default.a.createElement(Share_default.a, null)),
                react_default.a.createElement(IconButton["a" /* default */], { className: Object(clsx_m["a" /* default */])(classes.expand, (_a = {},
                        _a[classes.expandOpen] = expanded,
                        _a)), onClick: handleExpandClick, "aria-expanded": expanded, "aria-label": "show more", title: Object(locale["a" /* default */])(state.lang).card_showMore },
                    react_default.a.createElement(ExpandMore_default.a, null))),
            react_default.a.createElement(Collapse["a" /* default */], { in: expanded, timeout: "auto", unmountOnExit: true },
                react_default.a.createElement(CardContent["a" /* default */], null,
                    react_default.a.createElement(Typography["a" /* default */], { variant: "body2", component: "p" }, Object(locale["a" /* default */])(state.lang).race + ": " + race),
                    react_default.a.createElement(Typography["a" /* default */], { className: classes.pos, color: "textSecondary" }, Object(locale["a" /* default */])(state.lang).kind + ": " + category),
                    react_default.a.createElement(Typography["a" /* default */], { variant: "body2", component: "p" }, Object(locale["a" /* default */])(state.lang).fuel + ": " + fuelName),
                    react_default.a.createElement(Typography["a" /* default */], { className: classes.pos, color: "textSecondary" }, Object(locale["a" /* default */])(state.lang).gearbox + ": " + gearboxName),
                    react_default.a.createElement(Typography["a" /* default */], { variant: "body2", component: "p" }, Object(locale["a" /* default */])(state.lang).body + ": " + body),
                    react_default.a.createElement(Typography["a" /* default */], { className: classes.pos, color: "textSecondary" },
                        Object(locale["a" /* default */])(state.lang).phone,
                        ": ",
                        react_default.a.createElement("a", { href: "tel:" + phone }, phone))))),
        react_default.a.createElement(ShareDrawerBottom, { open: open, onClose: handleClose, url: url })));
};

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/DirectionsCar.js
var DirectionsCar = __webpack_require__(108);
var DirectionsCar_default = /*#__PURE__*/__webpack_require__.n(DirectionsCar);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/colors/orange.js
var orange = __webpack_require__(347);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/colors/grey.js
var grey = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/colors/yellow.js
var yellow = __webpack_require__(348);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/colors/green.js
var green = __webpack_require__(271);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/colors/brown.js
var brown = __webpack_require__(349);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/colors/blue.js
var blue = __webpack_require__(350);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/colors/purple.js
var purple = __webpack_require__(351);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/FavoriteBorder.js
var FavoriteBorder = __webpack_require__(180);
var FavoriteBorder_default = /*#__PURE__*/__webpack_require__.n(FavoriteBorder);

// EXTERNAL MODULE: ./src/js/components/snackbar/SnackbarContentWrapper.tsx
var SnackbarContentWrapper = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Snackbar/Snackbar.js + 1 modules
var Snackbar = __webpack_require__(279);

// CONCATENATED MODULE: ./src/js/components/search/ResultCard.tsx






























var ResultCard_useStyles = Object(makeStyles["a" /* default */])(function (theme) { return Object(createStyles["a" /* default */])({
    card: {
        maxWidth: 500,
        marginTop: theme.spacing(2),
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    link: {
        display: 'none',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    avatarBeige: {
        backgroundColor: orange["a" /* default */][100],
    },
    avatarWhite: {
        backgroundColor: grey["a" /* default */][200],
    },
    avatarYellow: {
        backgroundColor: yellow["a" /* default */][500],
    },
    avatarGreen: {
        backgroundColor: green["a" /* default */][500],
    },
    avatarBrown: {
        backgroundColor: brown["a" /* default */][500],
    },
    avatarOrange: {
        backgroundColor: orange["a" /* default */][500],
    },
    avatarBlue: {
        backgroundColor: blue["a" /* default */][500],
    },
    avatarGrey: {
        backgroundColor: grey["a" /* default */][500],
    },
    avatarPurple: {
        backgroundColor: purple["a" /* default */][500],
    },
    avatarRed: {
        backgroundColor: red["a" /* default */][500],
    },
    avatarBlack: {
        backgroundColor: grey["a" /* default */][900],
    },
}); });
var shapeUrlPlate = function (value, url) {
    return Utils["a" /* default */].shapeUrlPlate(url, value, Utils["a" /* default */].extractPartitionKey(value));
};
var ResultCard = function (props) {
    var _a;
    var state = Object(es["d" /* useSelector */])(function (state) { return state.Item; }, es["b" /* shallowEqual */]);
    var classes = ResultCard_useStyles({});
    var _b = react_default.a.useState(false), expanded = _b[0], setExpanded = _b[1];
    var _c = react_default.a.useState(false), open = _c[0], setOpen = _c[1];
    var _d = react_default.a.useState(null), anchorEl1 = _d[0], setAnchorEl = _d[1];
    var openSettingsMenu = Boolean(anchorEl1);
    var isItemAlreadyAdded = Utils["a" /* default */].isItemAlreadyAdded(state.favorites, props.item.n_reg_new);
    var _e = react_default.a.useState(isItemAlreadyAdded), favorite = _e[0], setFavorite = _e[1];
    var _f = react_default.a.useState(false), openSnackbar = _f[0], setOpenSnackbar = _f[1];
    var _g = react_default.a.useState(""), snackbarMessage = _g[0], setSnackbarMessage = _g[1];
    var dispatch = Object(es["c" /* useDispatch */])();
    var history = Object(react_router["f" /* useHistory */])();
    var primary = props.item.brand + "/" + props.item.model + " (" + props.item.make_year + ")";
    var secondary = props.item.n_reg_new + ", " + Data["e" /* regions */][props.item.PartitionKey];
    var body = Object(locale["a" /* default */])(state.lang).body + ": " + props.item.body;
    var capacity = Object(locale["a" /* default */])(state.lang).capacity + ": " + props.item.capacity;
    var color = Object(locale["a" /* default */])(state.lang).color + ": " + props.item.color;
    var weight = Object(locale["a" /* default */])(state.lang).weight + ": " + props.item.own_weight + "/" + props.item.total_weight;
    var fuel = Object(locale["a" /* default */])(state.lang).fuel + ": " + props.item.fuel;
    var kind = Object(locale["a" /* default */])(state.lang).kind + ": " + props.item.kind;
    var purpose = Object(locale["a" /* default */])(state.lang).purpose + ": " + props.item.purpose;
    var person = Object(locale["a" /* default */])(state.lang).person + ": " + (props.item.person === "P" ? Object(locale["a" /* default */])(state.lang).person_private : Object(locale["a" /* default */])(state.lang).person_company);
    var d_reg = Object(locale["a" /* default */])(state.lang).d_reg + ": " + props.item.d_reg;
    var oper_name = Object(locale["a" /* default */])(state.lang).oper_name + ": " + props.item.dep + " (" + props.item.dep_code + "), " + props.item.oper_name + " (" + props.item.oper_code + ")";
    var reg_addr_koatuu = Object(locale["a" /* default */])(state.lang).reg_addr_koatuu + ": " + props.item.reg_addr_koatuu;
    var url = window.location.origin + "/#/" + props.item.n_reg_new;
    var serviceUrl = "https://krak86.table.core.windows.net/CarsPartitions?sv=2018-03-28&si=CarsPartitions-AccessPolicy&tn=carspartitions&sig=XMI5pg9woSni13q9E%2BHH0wUkvcQ3bJtv8Hiny0a6xVM%3D" || false;
    var colorClass = Utils["a" /* default */].detectColor(props.item.color, classes);
    var handleClose = function () {
        setOpen(false);
    };
    var handleExpandClick = function () {
        setExpanded(!expanded);
    };
    var handleShareClick = function () {
        setAnchorEl(null);
        setOpen(true);
    };
    var handleAddToFavs = function () {
        setAnchorEl(null);
        if (Utils["a" /* default */].isLimitExceeded(state.favorites.length, Data["b" /* favoritsItemsLimit */]) === true) {
            setOpenSnackbar(true);
            handleSnackbarMessage(Object(locale["a" /* default */])(state.lang).messageMaxFavsLimit);
            return;
        }
        favorite === true
            ? dispatch(Object(actions["i" /* removeFromFavoritesSync */])(state.loggedIn, state.favorites, props.item))
            : dispatch(Object(actions["b" /* addToFavoritesSync */])(state.loggedIn, state.favorites, props.item));
    };
    var handleClose1 = function () {
        setAnchorEl(null);
    };
    var handleSearchMenuClick = function () {
        setAnchorEl(null);
        var value = props.item.n_reg_new;
        var url = shapeUrlPlate(value, serviceUrl);
        dispatch(Object(actions["f" /* itemFetchDataForPlate */])(value, url));
        handleAddResultToHash(value);
    };
    var handleSettingsClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleAddResultToHash = function (value) {
        history.push("/");
    };
    var handleCloseSnackBar = function (event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };
    var handleSnackbarMessage = function (message) {
        setSnackbarMessage(message);
    };
    return (react_default.a.createElement(react["Fragment"], null,
        react_default.a.createElement(Card["a" /* default */], { className: classes.card },
            react_default.a.createElement(CardHeader["a" /* default */], { avatar: react_default.a.createElement(Avatar["a" /* default */], { "aria-label": "recipe", className: colorClass },
                    react_default.a.createElement(DirectionsCar_default.a, null)), action: react_default.a.createElement(IconButton["a" /* default */], { "aria-label": "settings", title: Object(locale["a" /* default */])(state.lang).card_settings, onClick: handleSettingsClick },
                    react_default.a.createElement(MoreVert_default.a, null)), title: "" + primary, subheader: "" + secondary }),
            react_default.a.createElement(Menu["a" /* default */], { id: "menu-appbar", anchorEl: anchorEl1, anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                }, keepMounted: true, transformOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                }, open: openSettingsMenu, onClose: handleClose1 },
                react_default.a.createElement(MenuItem["a" /* default */], { onClick: handleSearchMenuClick }, Object(locale["a" /* default */])(state.lang).url_search),
                react_default.a.createElement(MenuItem["a" /* default */], { onClick: handleAddToFavs }, favorite === true
                    ? Object(locale["a" /* default */])(state.lang).card_removeFromToFavs
                    : Object(locale["a" /* default */])(state.lang).card_addToFavs),
                react_default.a.createElement(MenuItem["a" /* default */], { onClick: handleShareClick }, Object(locale["a" /* default */])(state.lang).card_share)),
            react_default.a.createElement(CardContent["a" /* default */], null,
                react_default.a.createElement(Typography["a" /* default */], { className: classes.title, color: "textSecondary", gutterBottom: true }, body),
                react_default.a.createElement(Typography["a" /* default */], { variant: "h6", component: "h2" }, capacity),
                react_default.a.createElement(Typography["a" /* default */], { className: classes.pos, color: "textSecondary" }, weight),
                react_default.a.createElement(Typography["a" /* default */], { variant: "body2", component: "p" }, fuel),
                react_default.a.createElement(Typography["a" /* default */], { variant: "button", color: "textSecondary", gutterBottom: true }, color)),
            react_default.a.createElement(CardActions["a" /* default */], { disableSpacing: true },
                react_default.a.createElement(IconButton["a" /* default */], { "aria-label": "share", title: favorite === true
                        ? Object(locale["a" /* default */])(state.lang).card_removeFromToFavs
                        : Object(locale["a" /* default */])(state.lang).card_addToFavs, onClick: handleAddToFavs }, favorite === true
                    ? react_default.a.createElement(Favorite_default.a, null)
                    : react_default.a.createElement(FavoriteBorder_default.a, null)),
                react_default.a.createElement(IconButton["a" /* default */], { "aria-label": "share", title: Object(locale["a" /* default */])(state.lang).card_share, onClick: handleShareClick },
                    react_default.a.createElement(Share_default.a, null)),
                react_default.a.createElement(IconButton["a" /* default */], { className: Object(clsx_m["a" /* default */])(classes.expand, (_a = {},
                        _a[classes.expandOpen] = expanded,
                        _a)), onClick: handleExpandClick, "aria-expanded": expanded, "aria-label": "show more", title: Object(locale["a" /* default */])(state.lang).card_showMore },
                    react_default.a.createElement(ExpandMore_default.a, null))),
            react_default.a.createElement(Collapse["a" /* default */], { in: expanded, timeout: "auto", unmountOnExit: true },
                react_default.a.createElement(CardContent["a" /* default */], null,
                    react_default.a.createElement(Typography["a" /* default */], { variant: "body2", component: "p" }, kind),
                    react_default.a.createElement(Typography["a" /* default */], { className: classes.pos, color: "textSecondary" }, purpose),
                    react_default.a.createElement(Typography["a" /* default */], { variant: "body2", component: "p" }, person),
                    react_default.a.createElement(Typography["a" /* default */], { className: classes.pos, color: "textSecondary" }, d_reg),
                    react_default.a.createElement(Typography["a" /* default */], { variant: "body2", component: "p" }, oper_name),
                    react_default.a.createElement(Typography["a" /* default */], { className: classes.pos, color: "textSecondary" }, reg_addr_koatuu)))),
        react_default.a.createElement(Snackbar["a" /* default */], { anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
            }, open: openSnackbar, autoHideDuration: 6000, onClose: handleCloseSnackBar },
            react_default.a.createElement(SnackbarContentWrapper["a" /* SnackbarContentWrapper */], { onClose: handleCloseSnackBar, variant: "error", message: snackbarMessage })),
        react_default.a.createElement(ShareDrawerBottom, { open: open, onClose: handleClose, url: url })));
};

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/colors/indigo.js
var indigo = __webpack_require__(112);

// CONCATENATED MODULE: ./src/js/components/search/ResultPlatesmaniaCard.tsx

















var ResultPlatesmaniaCard_useStyles = Object(makeStyles["a" /* default */])(function (theme) { return Object(createStyles["a" /* default */])({
    card: {
        maxWidth: 500,
        marginTop: theme.spacing(2),
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: indigo["a" /* default */][400],
    },
    link: {
        display: 'none',
    },
    pos: {
        marginBottom: 12,
    },
    title: {
        fontSize: 14,
    },
}); });
var ResultPlatesmaniaCard = function (props) {
    var item = props.item;
    var state = Object(es["d" /* useSelector */])(function (state) { return state.Item; }, es["b" /* shallowEqual */]);
    var classes = ResultPlatesmaniaCard_useStyles({});
    var siteUrl = Data["a" /* URLs */].CarPlatesUrl;
    var handleRedirectClick = function (url) {
        window.open(Utils["a" /* default */].replaceHttpWithHttps(url));
    };
    var handleSiteClick = function () {
        window.open(Utils["a" /* default */].replaceHttpWithHttps(item.photo.link));
    };
    return (react_default.a.createElement(Card["a" /* default */], { className: classes.card },
        react_default.a.createElement(CardHeader["a" /* default */], { avatar: react_default.a.createElement(Avatar["a" /* default */], { "aria-label": "recipe", className: classes.avatar }, "PM"), title: Object(locale["a" /* default */])(state.lang).card_ResultImagesFrom, subheader: siteUrl }),
        react_default.a.createElement(CardMedia["a" /* default */], { className: classes.media, image: item.photo.medium }),
        react_default.a.createElement(CardContent["a" /* default */], null,
            react_default.a.createElement(Typography["a" /* default */], { className: classes.title, color: "textSecondary", gutterBottom: true },
                Object(locale["a" /* default */])(state.lang).card_ImgDate,
                ": ",
                item.date)),
        react_default.a.createElement(CardActions["a" /* default */], { disableSpacing: true },
            react_default.a.createElement(IconButton["a" /* default */], { "aria-label": "open original image", title: Object(locale["a" /* default */])(state.lang).card_openOriginalImage, onClick: function () { return handleRedirectClick(item.photo.original); } },
                react_default.a.createElement(Send_default.a, null)),
            react_default.a.createElement(IconButton["a" /* default */], { "aria-label": "go to web site", title: Object(locale["a" /* default */])(state.lang).card_openOriginalWebSite, onClick: function () { return handleSiteClick(); } },
                react_default.a.createElement(Language_default.a, null)))));
};

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemAvatar/ListItemAvatar.js
var ListItemAvatar = __webpack_require__(352);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/SentimentVeryDissatisfied.js
var SentimentVeryDissatisfied = __webpack_require__(114);
var SentimentVeryDissatisfied_default = /*#__PURE__*/__webpack_require__.n(SentimentVeryDissatisfied);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/HourglassEmpty.js
var HourglassEmpty = __webpack_require__(181);
var HourglassEmpty_default = /*#__PURE__*/__webpack_require__.n(HourglassEmpty);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Table/Table.js
var Table = __webpack_require__(353);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableBody/TableBody.js
var TableBody = __webpack_require__(354);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableCell/TableCell.js
var TableCell = __webpack_require__(356);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableRow/TableRow.js
var TableRow = __webpack_require__(355);

// CONCATENATED MODULE: ./src/js/components/search/Result.tsx


















var Result_useStyles = Object(makeStyles["a" /* default */])(function (theme) { return Object(createStyles["a" /* default */])({
    root: {
        padding: '0px 0px',
        margin: "0px",
        maxWidth: 500,
    },
    table: {
        minWidth: 300,
        padding: "0px",
        margin: "0px",
    },
    container: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        maxWidth: 600,
    },
}); });
var Result = function () {
    //mapStateToProps
    var state = Object(es["d" /* useSelector */])(function (state) { return state.Item; });
    var classes = Result_useStyles({});
    return (react_default.a.createElement(react["Fragment"], null,
        react_default.a.createElement(Paper["a" /* default */], { className: classes.root },
            state.itemIsLoaded === true && state.responseIsEmpty === false && state.itemSearching === 0 &&
                react_default.a.createElement(ResultCard, { item: state.itemResponse, key: Math.random() }),
            state.itemIsLoaded === true && state.responseIsEmpty === true && state.itemSearching === 0 &&
                react_default.a.createElement(ListItem["a" /* default */], null,
                    react_default.a.createElement(ListItemAvatar["a" /* default */], null,
                        react_default.a.createElement(Avatar["a" /* default */], null,
                            react_default.a.createElement(SentimentVeryDissatisfied_default.a, null))),
                    react_default.a.createElement(ListItemText["a" /* default */], { primary: Object(locale["a" /* default */])(state.lang).noResultMessage })),
            state.itemIsLoaded === true && state.responseIsEmpty === false && state.itemSearching === 1 &&
                react_default.a.createElement(Table["a" /* default */], { className: classes.table, size: "small" },
                    react_default.a.createElement(TableBody["a" /* default */], null,
                        react_default.a.createElement(TableRow["a" /* default */], { key: "1000_" + Date.now() },
                            react_default.a.createElement(TableCell["a" /* default */], null, "VIN number"),
                            react_default.a.createElement(TableCell["a" /* default */], null, state.vinResponse.SearchCriteria)),
                        react_default.a.createElement(TableRow["a" /* default */], { key: "1001_" + Date.now() },
                            react_default.a.createElement(TableCell["a" /* default */], null, "Message"),
                            react_default.a.createElement(TableCell["a" /* default */], null, state.vinResponse.Message)),
                        state.vinResponse.Results.map(function (item) {
                            if (item.Value !== "" &&
                                item.Value !== null) {
                                return react_default.a.createElement(TableRow["a" /* default */], { key: Math.random() },
                                    react_default.a.createElement(TableCell["a" /* default */], null, item.Variable),
                                    react_default.a.createElement(TableCell["a" /* default */], { align: "justify" }, item.Value));
                            }
                        }))),
            state.itemIsLoaded === true && state.responseIsEmpty === true && state.itemSearching === 1 &&
                react_default.a.createElement(ListItem["a" /* default */], null,
                    react_default.a.createElement(ListItemAvatar["a" /* default */], null,
                        react_default.a.createElement(Avatar["a" /* default */], null,
                            react_default.a.createElement(SentimentVeryDissatisfied_default.a, null))),
                    react_default.a.createElement(ListItemText["a" /* default */], { primary: Object(locale["a" /* default */])(state.lang).noResultMessage })),
            state.itemIsLoaded === false && state.itemIsLoading === true && state.itemSearching === 3 &&
                react_default.a.createElement(ListItem["a" /* default */], null,
                    react_default.a.createElement(ListItemAvatar["a" /* default */], null,
                        react_default.a.createElement(Avatar["a" /* default */], null,
                            react_default.a.createElement(HourglassEmpty_default.a, null))),
                    react_default.a.createElement(ListItemText["a" /* default */], { primary: Object(locale["a" /* default */])(state.lang).imgRecognizingMessage })),
            state.itemIsLoaded === true && state.responseIsEmpty === true && state.itemSearching === 3 &&
                react_default.a.createElement(ListItem["a" /* default */], null,
                    react_default.a.createElement(ListItemAvatar["a" /* default */], null,
                        react_default.a.createElement(Avatar["a" /* default */], null,
                            react_default.a.createElement(SentimentVeryDissatisfied_default.a, null))),
                    react_default.a.createElement(ListItemText["a" /* default */], { primary: Object(locale["a" /* default */])(state.lang).noResultMessage }))),
        state.itemIsLoaded === true && state.responseIsEmpty === false && state.itemSearching === 0 &&
            state.imageCarsmaniaLoaded === true && state.imagesPlatesMania.length > 0 &&
            react_default.a.createElement("div", { className: classes.container }, state.imagesPlatesMania.map(function (i) {
                return react_default.a.createElement(ResultPlatesmaniaCard, { item: i, key: Math.random() });
            })),
        state.itemIsLoaded === true && state.responseIsEmpty === false && state.itemSearching === 0 &&
            state.imageRiaLoaded === true && state.imagesRia.length > 0 &&
            react_default.a.createElement("div", { className: classes.container }, state.imagesRia.map(function (i) {
                return i.status !== 404 ? react_default.a.createElement(ResultRiaCard, { item: i, key: Math.random() }) : null;
            }))));
};

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/LinearProgress/LinearProgress.js
var LinearProgress = __webpack_require__(357);

// CONCATENATED MODULE: ./src/js/components/routes/SearchPage.tsx






var SearchPage_useStyles = Object(makeStyles["a" /* default */])(function (theme) { return Object(createStyles["a" /* default */])({
    linear: {
        maxWidth: 500,
    },
}); });
var SearchPage = function () {
    var state = Object(es["d" /* useSelector */])(function (state) { return state.Item; }, es["b" /* shallowEqual */]);
    var itemIsLoading = state.itemIsLoading;
    var classes = SearchPage_useStyles({});
    return (react_default.a.createElement(react["Fragment"], null,
        react_default.a.createElement(SearchField["a" /* SearchField */], null),
        itemIsLoading === true && react_default.a.createElement(LinearProgress["a" /* default */], { className: classes.linear }),
        react_default.a.createElement(Result, null)));
};

// CONCATENATED MODULE: ./src/js/components/routes/FavoritesPage.tsx







var FavoritesPage_useStyles = Object(makeStyles["a" /* default */])(function (theme) { return Object(createStyles["a" /* default */])({
    linear: {
        maxWidth: 500,
    },
}); });
var FavoritesPage = function () {
    var state = Object(es["d" /* useSelector */])(function (state) { return state.Item; }, es["b" /* shallowEqual */]);
    var classes = FavoritesPage_useStyles({});
    return (react_default.a.createElement(react["Fragment"], null,
        react_default.a.createElement(Typography["a" /* default */], { variant: "h6", color: "textSecondary", align: "center" }, Object(locale["a" /* default */])(state.lang).url_favs),
        state.itemsMerging === true && react_default.a.createElement(LinearProgress["a" /* default */], { className: classes.linear }),
        state.favorites.map(function (i) {
            return react_default.a.createElement(ResultCard, { item: i, key: Math.random() });
        })));
};

// CONCATENATED MODULE: ./src/js/components/routes/AboutPage.tsx





var AboutPage_useStyles = Object(makeStyles["a" /* default */])(function (theme) { return ({
    blocks: {
        padding: 0,
        marginBottom: 10,
    },
}); });
var AboutPage = function () {
    var state = Object(es["d" /* useSelector */])(function (state) { return state.Item; }, es["b" /* shallowEqual */]);
    var classes = AboutPage_useStyles({});
    return (react_default.a.createElement(react["Fragment"], null,
        react_default.a.createElement(Typography["a" /* default */], { variant: "body1", color: "textSecondary", align: "justify", className: classes.blocks }, Object(locale["a" /* default */])(state.lang).about_1_app),
        react_default.a.createElement(Typography["a" /* default */], { variant: "body1", color: "textSecondary", align: "justify", className: classes.blocks }, Object(locale["a" /* default */])(state.lang).about_2_mvd),
        react_default.a.createElement(Typography["a" /* default */], { variant: "body1", color: "textSecondary", align: "justify", className: classes.blocks }, Object(locale["a" /* default */])(state.lang).about_3_kabMin),
        react_default.a.createElement(Typography["a" /* default */], { variant: "body1", color: "textSecondary", align: "justify", className: classes.blocks }, Object(locale["a" /* default */])(state.lang).about_4_portal),
        react_default.a.createElement(Typography["a" /* default */], { variant: "body1", color: "textSecondary", align: "justify", className: classes.blocks }, Object(locale["a" /* default */])(state.lang).about_5_sharing),
        react_default.a.createElement(Typography["a" /* default */], { variant: "body1", color: "textSecondary", align: "justify", className: classes.blocks }, Object(locale["a" /* default */])(state.lang).about_6_mit),
        react_default.a.createElement(Typography["a" /* default */], { variant: "body1", color: "textSecondary", align: "justify", className: classes.blocks },
            Object(locale["a" /* default */])(state.lang).copyright,
            ' ',
            new Date().getFullYear(),
            ' ',
            "https://carsua.app" || false),
        react_default.a.createElement(Typography["a" /* default */], { variant: "body1", color: "textSecondary", align: "justify", className: classes.blocks }, Object(locale["a" /* default */])(state.lang).about_7_mit_1),
        react_default.a.createElement(Typography["a" /* default */], { variant: "body1", color: "textSecondary", align: "justify", className: classes.blocks }, Object(locale["a" /* default */])(state.lang).about_8_mit_2),
        react_default.a.createElement(Typography["a" /* default */], { variant: "body1", color: "textSecondary", align: "justify", className: classes.blocks }, Object(locale["a" /* default */])(state.lang).about_9_mit_3)));
};

// CONCATENATED MODULE: ./src/js/components/login/Profile.tsx
















var Profile_useStyles = Object(makeStyles["a" /* default */])(function (theme) { return Object(createStyles["a" /* default */])({
    card: {
        maxWidth: 500,
        marginTop: theme.spacing(2),
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    link: {
        display: 'none',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}); });
var Profile = function () {
    var state = Object(es["d" /* useSelector */])(function (state) { return state.Item; }, es["b" /* shallowEqual */]);
    var _a = react_default.a.useState(null), anchorEl1 = _a[0], setAnchorEl = _a[1];
    var openSettingsMenu = Boolean(anchorEl1);
    var dispatch = Object(es["c" /* useDispatch */])();
    var classes = Profile_useStyles({});
    var handleClose1 = function () {
        setAnchorEl(null);
    };
    var handleSettingsClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleLogoutMenuClick = function () {
        setAnchorEl(null);
        dispatch(Object(actions["h" /* login */])(Data["d" /* loggedInDefault */]));
    };
    return (react_default.a.createElement(react["Fragment"], null, state.loggedIn.vendor === 0 ?
        react_default.a.createElement(Login, null)
        :
            react_default.a.createElement(Card["a" /* default */], { className: classes.card },
                react_default.a.createElement(CardHeader["a" /* default */], { avatar: react_default.a.createElement(Avatar["a" /* default */], { alt: state.loggedIn.profileName, src: state.loggedIn.avatar }), action: react_default.a.createElement(IconButton["a" /* default */], { "aria-label": "settings", title: Object(locale["a" /* default */])(state.lang).card_settings, onClick: handleSettingsClick },
                        react_default.a.createElement(MoreVert_default.a, null)), title: state.loggedIn.profileName, subheader: state.loggedIn.mail }),
                react_default.a.createElement(Menu["a" /* default */], { id: "menu-appbar", anchorEl: anchorEl1, anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    }, keepMounted: true, transformOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    }, open: openSettingsMenu, onClose: handleClose1 },
                    react_default.a.createElement(MenuItem["a" /* default */], { onClick: handleLogoutMenuClick }, Object(locale["a" /* default */])(state.lang).logout)),
                react_default.a.createElement(CardContent["a" /* default */], null,
                    react_default.a.createElement(Typography["a" /* default */], { className: classes.title, color: "textSecondary" },
                        Object(locale["a" /* default */])(state.lang).loggedInText,
                        ' ',
                        state.loggedIn.vendor === 1
                            ? "Facebook"
                            : "Google",
                        ".")))));
};

// CONCATENATED MODULE: ./src/js/components/routes/ProfilePage.tsx





var ProfilePage = function () {
    var state = Object(es["d" /* useSelector */])(function (state) { return state.Item; }, es["b" /* shallowEqual */]);
    return (react_default.a.createElement(react["Fragment"], null,
        react_default.a.createElement(Typography["a" /* default */], { variant: "h6", color: "textSecondary", align: "center" }, Object(locale["a" /* default */])(state.lang).url_profile),
        react_default.a.createElement(Profile, null)));
};

// EXTERNAL MODULE: ./node_modules/disqus-react/lib/index.js
var lib = __webpack_require__(182);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./src/js/components/disqus/Disqus.tsx




var Disqus_useStyles = Object(makeStyles["a" /* default */])(function (theme) { return ({}); });
var DisqusComponent = function () {
    var state = Object(es["d" /* useSelector */])(function (state) { return state.Item; }, es["b" /* shallowEqual */]);
    var classes = Disqus_useStyles({});
    var disqusShortname = "carsua" || false;
    var disqusConfig = {
        url: "https://carsua.app" || false,
        identifier: "https://carsua.app" || false,
        title: disqusShortname
    };
    return (react_default.a.createElement(lib_default.a.DiscussionEmbed, { shortname: disqusShortname, config: disqusConfig }));
};

// CONCATENATED MODULE: ./src/js/components/routes/DisqusPage.tsx






var DisqusPage_useStyles = Object(makeStyles["a" /* default */])(function (theme) { return ({
    blocks: {
        padding: 0,
        marginBottom: 10,
    },
}); });
var DisqusPage = function () {
    var state = Object(es["d" /* useSelector */])(function (state) { return state.Item; }, es["b" /* shallowEqual */]);
    var classes = DisqusPage_useStyles({});
    return (react_default.a.createElement(react["Fragment"], null,
        react_default.a.createElement(Typography["a" /* default */], { variant: "body1", color: "textSecondary", align: "justify", className: classes.blocks }, Object(locale["a" /* default */])(state.lang).url_disqus),
        react_default.a.createElement(DisqusComponent, null)));
};

// CONCATENATED MODULE: ./src/js/components/routes/StorePage.tsx


var StorePage = function () {
    //connect to state
    var state = Object(es["d" /* useSelector */])(function (state) { return state.Item; }, es["b" /* shallowEqual */]);
    //constructor, componentDidMounted, componentDidUpdated
    return (react_default.a.createElement(react["Fragment"], null, "Store Page"));
};

// CONCATENATED MODULE: ./src/js/components/search/ResultNotificationCard.tsx




















var ResultNotificationCard_useStyles = Object(makeStyles["a" /* default */])(function (theme) { return Object(createStyles["a" /* default */])({
    card: {
        maxWidth: 500,
        marginTop: theme.spacing(2),
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    link: {
        display: 'none',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    avatarBeige: {
        backgroundColor: orange["a" /* default */][100],
    },
    avatarWhite: {
        backgroundColor: grey["a" /* default */][200],
    },
    avatarYellow: {
        backgroundColor: yellow["a" /* default */][500],
    },
    avatarGreen: {
        backgroundColor: green["a" /* default */][500],
    },
    avatarBrown: {
        backgroundColor: brown["a" /* default */][500],
    },
    avatarOrange: {
        backgroundColor: orange["a" /* default */][500],
    },
    avatarBlue: {
        backgroundColor: blue["a" /* default */][500],
    },
    avatarGrey: {
        backgroundColor: grey["a" /* default */][500],
    },
    avatarPurple: {
        backgroundColor: purple["a" /* default */][500],
    },
    avatarRed: {
        backgroundColor: red["a" /* default */][500],
    },
    avatarBlack: {
        backgroundColor: grey["a" /* default */][900],
    },
}); });
var ResultNotificationCard_shapeUrlPlate = function (value, url) {
    return Utils["a" /* default */].shapeUrlPlate(url, value, Utils["a" /* default */].extractPartitionKey(value));
};
var ResultNotificationCard = function (props) {
    var state = Object(es["d" /* useSelector */])(function (state) { return state.Item; }, es["b" /* shallowEqual */]);
    var classes = ResultNotificationCard_useStyles({});
    var _a = react_default.a.useState(null), anchorEl1 = _a[0], setAnchorEl = _a[1];
    var openSettingsMenu = Boolean(anchorEl1);
    var dispatch = Object(es["c" /* useDispatch */])();
    var history = Object(react_router["f" /* useHistory */])();
    var primary = props.item.brand + "/" + props.item.model + " (" + props.item.make_year + ")";
    var secondary = props.item.n_reg_new + ", " + Data["e" /* regions */][props.item.PartitionKey];
    var serviceUrl = "https://krak86.table.core.windows.net/CarsPartitions?sv=2018-03-28&si=CarsPartitions-AccessPolicy&tn=carspartitions&sig=XMI5pg9woSni13q9E%2BHH0wUkvcQ3bJtv8Hiny0a6xVM%3D" || false;
    var colorClass = Utils["a" /* default */].detectColor(props.item.color, classes);
    var handleClose1 = function () {
        setAnchorEl(null);
    };
    var handleSearchMenuClick = function () {
        setAnchorEl(null);
        var value = props.item.n_reg_new;
        var url = ResultNotificationCard_shapeUrlPlate(value, serviceUrl);
        dispatch(Object(actions["f" /* itemFetchDataForPlate */])(value, url));
        handleAddResultToHash(value);
    };
    var handleSettingsClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleAddResultToHash = function (value) {
        history.push("/");
    };
    return (react_default.a.createElement(react["Fragment"], null,
        react_default.a.createElement(Card["a" /* default */], { className: classes.card },
            react_default.a.createElement(CardHeader["a" /* default */], { avatar: react_default.a.createElement(Avatar["a" /* default */], { "aria-label": "recipe", className: colorClass },
                    react_default.a.createElement(DirectionsCar_default.a, null)), action: react_default.a.createElement(IconButton["a" /* default */], { "aria-label": "settings", title: Object(locale["a" /* default */])(state.lang).card_settings, onClick: handleSettingsClick },
                    react_default.a.createElement(MoreVert_default.a, null)), title: "" + primary, subheader: "" + secondary }),
            react_default.a.createElement(Menu["a" /* default */], { id: "menu-appbar", anchorEl: anchorEl1, anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                }, keepMounted: true, transformOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                }, open: openSettingsMenu, onClose: handleClose1 },
                react_default.a.createElement(MenuItem["a" /* default */], { onClick: handleSearchMenuClick }, Object(locale["a" /* default */])(state.lang).url_search)),
            react_default.a.createElement(CardContent["a" /* default */], null,
                react_default.a.createElement(Typography["a" /* default */], { className: classes.title, color: "textSecondary" }, props.timestamp)))));
};

// CONCATENATED MODULE: ./src/js/components/routes/NotificationPage.tsx






var NotificationPage = function () {
    var state = Object(es["d" /* useSelector */])(function (state) { return state.Item; }, es["b" /* shallowEqual */]);
    var dispatch = Object(es["c" /* useDispatch */])();
    dispatch(Object(actions["a" /* ResetBadge */])());
    return (react_default.a.createElement(react["Fragment"], null,
        react_default.a.createElement(Typography["a" /* default */], { variant: "h6", color: "textSecondary", align: "center" }, Object(locale["a" /* default */])(state.lang).url_notifications),
        state.itemsList.map(function (i) {
            return react_default.a.createElement(ResultNotificationCard, { item: i.item, timestamp: i.timestamp, key: Math.random() });
        })));
};

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(358);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AppBar/AppBar.js
var AppBar = __webpack_require__(324);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js
var Toolbar = __webpack_require__(325);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Badge/Badge.js
var Badge = __webpack_require__(359);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(360);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Menu.js
var icons_Menu = __webpack_require__(183);
var Menu_default = /*#__PURE__*/__webpack_require__.n(icons_Menu);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ChevronLeft.js
var ChevronLeft = __webpack_require__(185);
var ChevronLeft_default = /*#__PURE__*/__webpack_require__.n(ChevronLeft);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Notifications.js
var Notifications = __webpack_require__(184);
var Notifications_default = /*#__PURE__*/__webpack_require__.n(Notifications);

// CONCATENATED MODULE: ./src/js/components/App.tsx
var App_assign = (undefined && undefined.__assign) || function () {
    App_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return App_assign.apply(this, arguments);
};




























var drawerWidth = 240;
var App_useStyles = Object(makeStyles["a" /* default */])(function (theme) {
    var _a;
    return ({
        root: {
            display: 'flex',
        },
        toolbar: {
            paddingRight: 24,
            color: "#fff",
        },
        toolbarIcon: App_assign({ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 8px' }, theme.mixins.toolbar, { color: "#fff" }),
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: "calc(100% - " + drawerWidth + "px)",
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        menuButtonHidden: {
            display: 'none',
        },
        drawerPaper: {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerPaperClose: (_a = {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7)
            },
            _a[theme.breakpoints.up('sm')] = {
                width: theme.spacing(9),
            },
            _a),
        appBarSpacer: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
        },
        container: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
            maxWidth: 600,
        },
        paper: {
            padding: theme.spacing(2),
            //marginBottom: theme.spacing(2),
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',
        },
        paperCenter: {
            padding: theme.spacing(2),
            display: 'center',
            overflow: 'auto',
            flexDirection: 'column',
        },
        fixedHeight: {
            height: 240,
        },
        title: {
            flexGrow: 1,
            cursor: 'pointer',
        },
    });
});
function App() {
    var state = Object(es["d" /* useSelector */])(function (state) { return state.Item; }, es["b" /* shallowEqual */]);
    var open = state.drawerToogled;
    var dispatch = Object(es["c" /* useDispatch */])();
    var classes = App_useStyles({});
    var history = Object(react_router["f" /* useHistory */])();
    var handleDrawerOpen = function () {
        dispatch(Object(actions["k" /* toggleDrawer */])(true));
    };
    var handleDrawerClose = function () {
        dispatch(Object(actions["k" /* toggleDrawer */])(false));
    };
    var handleOnBadgeClick = function () {
        dispatch(Object(actions["a" /* ResetBadge */])());
    };
    var handleClickHome = function () {
        history.push("/");
    };
    var badges = state.badges;
    return (react_default.a.createElement("main", { className: classes.root },
        react_default.a.createElement(CssBaseline["a" /* default */], null),
        react_default.a.createElement(AppBar["a" /* default */], { position: "absolute", className: Object(clsx_m["a" /* default */])(classes.appBar, open && classes.appBarShift) },
            react_default.a.createElement(Toolbar["a" /* default */], { className: classes.toolbar },
                react_default.a.createElement(IconButton["a" /* default */], { edge: "end", color: "inherit", "aria-label": "open drawer", onClick: handleDrawerOpen, className: Object(clsx_m["a" /* default */])(classes.menuButton, open && classes.menuButtonHidden) },
                    react_default.a.createElement(Menu_default.a, null)),
                react_default.a.createElement(Typography["a" /* default */], { component: "h1", display: "initial", variant: "h6", noWrap: true, className: classes.title, onClick: handleClickHome }, Object(locale["a" /* default */])(state.lang).dashBoradTitle),
                react_default.a.createElement(react_router_dom["b" /* Link */], { to: "/notifications" },
                    react_default.a.createElement(IconButton["a" /* default */], null,
                        react_default.a.createElement(Badge["a" /* default */], { badgeContent: badges, color: "secondary" },
                            react_default.a.createElement(Notifications_default.a, { color: "action" })))),
                react_default.a.createElement(Login, null))),
        react_default.a.createElement(Drawer["a" /* default */], { variant: "temporary", classes: {
                paper: Object(clsx_m["a" /* default */])(classes.drawerPaper, !open && classes.drawerPaperClose),
            }, open: open, onClose: handleDrawerClose },
            react_default.a.createElement("div", { className: classes.toolbarIcon },
                react_default.a.createElement(IconButton["a" /* default */], { onClick: handleDrawerClose },
                    react_default.a.createElement(ChevronLeft_default.a, null))),
            react_default.a.createElement(Divider["a" /* default */], null),
            routesLinks()),
        react_default.a.createElement("section", { className: classes.content },
            react_default.a.createElement("div", { className: classes.appBarSpacer }),
            react_default.a.createElement(Container["a" /* default */], { maxWidth: "lg", className: classes.container },
                react_default.a.createElement(react_router["c" /* Switch */], null,
                    react_default.a.createElement(react_router["a" /* Route */], { exact: true, path: "/", component: SearchPage }),
                    react_default.a.createElement(react_router["a" /* Route */], { path: "/favorites", component: FavoritesPage }),
                    react_default.a.createElement(react_router["a" /* Route */], { path: "/notifications", component: NotificationPage }),
                    react_default.a.createElement(react_router["a" /* Route */], { path: "/about", component: AboutPage }),
                    react_default.a.createElement(react_router["a" /* Route */], { path: "/profile", component: ProfilePage }),
                    react_default.a.createElement(react_router["a" /* Route */], { path: "/disqus", component: DisqusPage }),
                    react_default.a.createElement(react_router["a" /* Route */], { path: "/store", component: StorePage }),
                    react_default.a.createElement(react_router["a" /* Route */], { component: SearchPage }))))));
}

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/redux-thunk/es/index.js
var redux_thunk_es = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/redux-devtools-extension/index.js
var redux_devtools_extension = __webpack_require__(187);

// EXTERNAL MODULE: ./src/js/models/Interfaces.ts
var Interfaces = __webpack_require__(94);

// CONCATENATED MODULE: ./src/js/utils/UtilsStorage.ts


var UtilsStorage_UtilsStorage = /** @class */ (function () {
    function UtilsStorage() {
    }
    /**
     * Function to get data from localStorage
     * localStorage name: "carPlateFavoritesState"
     */
    UtilsStorage.loadState = function () {
        var defaultData = {
            favorites: [],
            lang: Interfaces["a" /* Lang */].ua,
            itemsList: [],
            loggedIn: Data["d" /* loggedInDefault */],
        };
        try {
            var serializedState = localStorage.getItem(UtilsStorage.localStorageState);
            if (serializedState === null) {
                return JSON.parse(JSON.stringify(defaultData));
            }
            else {
                return JSON.parse(serializedState);
            }
        }
        catch (err) {
            console.log(err);
            return JSON.parse(JSON.stringify(defaultData));
        }
    };
    /**
     * Function to save data to localStorage
     * localStorage name: "carPlateFavoritesState"
     */
    UtilsStorage.saveState = function (favorites) {
        try {
            var serializedState = JSON.stringify(favorites);
            localStorage.setItem(UtilsStorage.localStorageState, serializedState);
        }
        catch (err) {
            console.log(err);
        }
    };
    UtilsStorage.localStorageState = "carPlateFavoritesState";
    return UtilsStorage;
}());
/* harmony default export */ var utils_UtilsStorage = (UtilsStorage_UtilsStorage);

// EXTERNAL MODULE: ./src/js/redux/types.ts
var types = __webpack_require__(10);

// CONCATENATED MODULE: ./src/js/redux/reducers.ts
var reducers_assign = (undefined && undefined.__assign) || function () {
    reducers_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return reducers_assign.apply(this, arguments);
};


var getReducer = function (state, action) {
    if (state === void 0) { state = Data["c" /* initialData */]; }
    switch (action.type) {
        case types["k" /* ITEMS_MERGING */]:
            return reducers_assign({}, state, { itemsMerging: action.payload });
        case types["r" /* MERGE_LOCAL_AND_CLOUD_FAVORITES */]:
            return reducers_assign({}, state, { favorites: action.payload });
        case types["a" /* ADD_BADGE */]:
            return reducers_assign({}, state, { badges: state.badges + 1 });
        case types["t" /* RESET_BADGE */]:
            return reducers_assign({}, state, { badges: 0 });
        case types["s" /* REMOVE_FROM_FAVORITES */]:
            return reducers_assign({}, state, { favorites: state.favorites.filter(function (item) { return item !== action.payload; }) });
        case types["d" /* ADD_TO_FAVORITES */]:
            return reducers_assign({}, state, { favorites: [action.payload].concat(state.favorites) });
        case types["g" /* CHANGE_LANG */]:
            return reducers_assign({}, state, { lang: action.payload });
        case types["i" /* IMG_CARSMANIA_LOADED */]:
            return reducers_assign({}, state, { imageCarsmaniaLoaded: action.payload });
        case types["j" /* IMG_RIA_LOADED */]:
            return reducers_assign({}, state, { imageRiaLoaded: action.payload });
        case types["b" /* ADD_CARSMANIA_CARS */]:
            return reducers_assign({}, state, { imagesPlatesMania: action.payload });
        case types["c" /* ADD_RIA_ADS */]:
            return reducers_assign({}, state, { imagesRia: action.payload });
        case types["q" /* LOGIN */]:
            return reducers_assign({}, state, { loggedIn: action.payload });
        case types["m" /* ITEM_FETCH_DATA_VIN_SUCCESS */]:
            return reducers_assign({}, state, { vinResponse: action.payload });
        case types["x" /* SET_VIN_REQUEST */]:
            return reducers_assign({}, state, { vinRequest: action.payload });
        case types["w" /* SET_SEARCHING_ITEM_TYPE */]:
            return reducers_assign({}, state, { itemSearching: action.payload });
        case types["u" /* RESPONSE_IS_EMPTY */]:
            return reducers_assign({}, state, { responseIsEmpty: action.payload });
        case types["v" /* SET_ITEM_REQUEST */]:
            return reducers_assign({}, state, { itemRequest: action.payload });
        case types["l" /* ITEM_FETCH_DATA_SUCCESS */]:
            return reducers_assign({}, state, { itemResponse: action.payload });
        case types["h" /* GET_ITEMS */]:
            return reducers_assign({}, state);
        case types["e" /* ADD_TO_ITEMS_LIST */]:
            return reducers_assign({}, state, { itemsList: [action.payload].concat(state.itemsList) });
        case types["p" /* ITEM_IS_LOADING */]:
            return reducers_assign({}, state, { itemIsLoading: action.payload });
        case types["o" /* ITEM_IS_LOADED */]:
            return reducers_assign({}, state, { itemIsLoaded: action.payload });
        case types["n" /* ITEM_HAS_ERRORED */]:
            return reducers_assign({}, state, { itemHasErrored: action.payload });
        case types["y" /* TOGGLE_DRAWER */]:
            return reducers_assign({}, state, { drawerToogled: action.payload });
        default:
            return state;
    }
};

// CONCATENATED MODULE: ./src/js/redux/index.ts
var redux_assign = (undefined && undefined.__assign) || function () {
    redux_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return redux_assign.apply(this, arguments);
};






var persistedState = utils_UtilsStorage.loadState();
var rootReducer = Object(redux["combineReducers"])({
    Item: getReducer
});
var configureStore = function () {
    var middlewares = [redux_thunk_es["a" /* default */]];
    var middleWareEnhancer = redux["applyMiddleware"].apply(void 0, middlewares);
    var store = Object(redux["createStore"])(rootReducer, {
        Item: redux_assign({}, Data["c" /* initialData */], persistedState)
    }, Object(redux_devtools_extension["composeWithDevTools"])(middleWareEnhancer));
    store.subscribe(function () {
        utils_UtilsStorage.saveState({
            favorites: store.getState().Item.favorites,
            lang: store.getState().Item.lang,
            itemsList: store.getState().Item.itemsList,
            loggedIn: store.getState().Item.loggedIn,
        });
    });
    return store;
};
//https://codesandbox.io/s/redux-typescript-example-5bw4y

// CONCATENATED MODULE: ./src/js/registerServiceWorker.ts
function register() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
                //console.log('SW registered: ', registration);
            }).catch(function (registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
        });
    }
}
function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(function (registration) {
            registration.unregister();
        });
    }
}

// CONCATENATED MODULE: ./src/js/index.tsx







var js_store = configureStore();
var Root = function () { return (react_default.a.createElement(es["a" /* Provider */], { store: js_store },
    react_default.a.createElement(react_router_dom["a" /* HashRouter */], null,
        react_default.a.createElement(App, null)))); };
Object(react_dom["render"])(react_default.a.createElement(Root, null), document.getElementById("root"));
register();


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/js/data/DataCarsRia.ts
var cars = [
    {
        "name": "Armstrong Siddeley",
        "value": 5276,
    },
    {
        "name": "Alfa Romeo",
        "value": 3
    },
    {
        "name": "Aston Martin",
        "value": 5
    },
    {
        "name": "Austin Healey",
        "value": 4355
    },
    {
        "name": "BMW Alpina",
        "value": 99
    },
    {
        "name": "Fiat Abarth",
        "value": 4459
    },
    {
        "name": "Bio Auto",
        "value": 3127
    },
    {
        "name": "Detroit Electric",
        "value": 4883
    },
    {
        "name": "De Lorean",
        "value": 3071
    },
    {
        "name": "Dr Motor",
        "value": 5051
    },
    {
        "name": "Iran Khodro",
        "value": 3821
    },
    {
        "name": "Great Wall",
        "value": 124
    },
    {
        "name": "Jinbei Minibusus",
        "value": 4549
    },
    {
        "name": "King Long",
        "value": 2676
    },
    {
        "name": "Land Rover",
        "value": 37
    },
    {
        "name": "Praga Baby",
        "value": 2728
    },
    {
        "name": "Ssang Yong",
        "value": 73
    },
    {
        "name": "Think Global",
        "value": 4237
    },
    {
        "name": "Thunder Tiger",
        "value": 4033
    },
    {
        "name": "Van Hool",
        "value": 206
    },
    {
        "name": "Abarth",
        "value": 5166
    },
    {
        "name": "Acura",
        "value": 98
    },
    {
        "name": "Adler",
        "value": 2396
    },
    {
        "name": "Aero",
        "value": 5165
    },
    {
        "name": "Aixam",
        "value": 2
    },
    {
        "name": "Alpine",
        "value": 100
    },
    {
        "name": "Altamarea",
        "value": 3988
    },
    {
        "name": "AMC",
        "value": 5821
    },
    {
        "name": "Anaig",
        "value": 5769
    },
    {
        "name": "Aro",
        "value": 101
    },
    {
        "name": "Artega",
        "value": 3105
    },
    {
        "name": "Asia",
        "value": 4
    },
    {
        "name": "AsiaStar",
        "value": 5793
    },
    {
        "name": "Audi",
        "value": 6
    },
    {
        "name": "Austin",
        "value": 7
    },
    {
        "name": "Autobianchi",
        "value": 102
    },
    {
        "name": "Avia",
        "value": 2077
    },
    {
        "name": "Baoya",
        "value": 5245
    },
    {
        "name": "Barkas",
        "value": 103
    },
    {
        "name": "Баркас",
        "value": 103
    },
    {
        "name": "Baw",
        "value": 1540
    },
    {
        "name": "Beijing",
        "value": 105
    },
    {
        "name": "Bentley",
        "value": 8
    },
    {
        "name": "Bertone",
        "value": 106
    },
    {
        "name": "Blonell",
        "value": 108
    },
    {
        "name": "BMW",
        "value": 9
    },
    {
        "name": "Borgward",
        "value": 5240
    },
    {
        "name": "Brilliance",
        "value": 329
    },
    {
        "name": "Bristol",
        "value": 10
    },
    {
        "name": "Bugatti",
        "value": 109
    },
    {
        "name": "Buick",
        "value": 110
    },
    {
        "name": "BYD",
        "value": 386
    },
    {
        "name": "Cadillac",
        "value": 11
    },
    {
        "name": "Caterham",
        "value": 3221
    },
    {
        "name": "Chana",
        "value": 407
    },
    {
        "name": "Changan",
        "value": 1580
    },
    {
        "name": "Changhe",
        "value": 1567
    },
    {
        "name": "Chery",
        "value": 190
    },
    {
        "name": "Chevrolet",
        "value": 13
    },
    {
        "name": "Chrysler",
        "value": 14
    },
    {
        "name": "Citroen",
        "value": 15
    },
    {
        "name": "Dacia",
        "value": 17
    },
    {
        "name": "Dadi",
        "value": 198
    },
    {
        "name": "Daewoo",
        "value": 18
    },
    {
        "name": "DAF",
        "value": 115
    },
    {
        "name": "VDL",
        "value": 1441
    },
    {
        "name": "Dagger",
        "value": 3717
    },
    {
        "name": "Daihatsu",
        "value": 19
    },
    {
        "name": "Daimler",
        "value": 20
    },
    {
        "name": "Datsun",
        "value": 4206
    },
    {
        "name": "Derways",
        "value": 4328
    },
    {
        "name": "DKW",
        "value": 2243
    },
    {
        "name": "Dodge",
        "value": 118
    },
    {
        "name": "Dongfeng",
        "value": 308
    },
    {
        "name": "DS",
        "value": 4495
    },
    {
        "name": "Eagle",
        "value": 120
    },
    {
        "name": "Auwarter",
        "value": 1413
    },
    {
        "name": "Estrima",
        "value": 3921
    },
    {
        "name": "FAW",
        "value": 121
    },
    {
        "name": "Ferrari",
        "value": 22
    },
    {
        "name": "Fiat",
        "value": 23
    },
    {
        "name": "Fisker",
        "value": 3444
    },
    {
        "name": "Ford",
        "value": 24
    },
    {
        "name": "Fornasari",
        "value": 3104
    },
    {
        "name": "FSO",
        "value": 25
    },
    {
        "name": "FUQI",
        "value": 197
    },
    {
        "name": "Gac",
        "value": 4506
    },
    {
        "name": "Geely",
        "value": 185
    },
    {
        "name": "Geo",
        "value": 2790
    },
    {
        "name": "GMC",
        "value": 123
    },
    {
        "name": "Gonow",
        "value": 183
    },
    {
        "name": "Groz",
        "value": 1575
    },
    {
        "name": "Hafei",
        "value": 191
    },
    {
        "name": "Haima",
        "value": 3674
    },
    {
        "name": "Hanomag",
        "value": 1784
    },
    {
        "name": "Hansa",
        "value": 2053
    },
    {
        "name": "Haval",
        "value": 5456
    },
    {
        "name": "Hawtai",
        "value": 5791
    },
    {
        "name": "Hindustan",
        "value": 3411
    },
    {
        "name": "Honda",
        "value": 28
    },
    {
        "name": "HongXing",
        "value": 5572
    },
    {
        "name": "Horch",
        "value": 5624
    },
    {
        "name": "Huabei",
        "value": 2595
    },
    {
        "name": "Huanghai",
        "value": 388
    },
    {
        "name": "Humber",
        "value": 3002
    },
    {
        "name": "Hummer",
        "value": 127
    },
    {
        "name": "Humvee",
        "value": 4663
    },
    {
        "name": "Hyundai",
        "value": 29
    },
    {
        "name": "Infiniti",
        "value": 128
    },
    {
        "name": "Innocenti",
        "value": 4273
    },
    {
        "name": "Isuzu",
        "value": 30
    },
    {
        "name": "ItalCar",
        "value": 3757
    },
    {
        "name": "Iveco",
        "value": 175
    },
    {
        "name": "JAC",
        "value": 317
    },
    {
        "name": "Jaguar",
        "value": 31
    },
    {
        "name": "JCB",
        "value": 1590
    },
    {
        "name": "Jeep",
        "value": 32
    },
    {
        "name": "Jiangnan",
        "value": 335
    },
    {
        "name": "Jinbei",
        "value": 2231
    },
    {
        "name": "JMC",
        "value": 3018
    },
    {
        "name": "Jonway",
        "value": 1574
    },
    {
        "name": "Karosa",
        "value": 412
    },
    {
        "name": "Kia",
        "value": 33
    },
    {
        "name": "KingWoo",
        "value": 4606
    },
    {
        "name": "Kirkham",
        "value": 4843
    },
    {
        "name": "Koenigsegg",
        "value": 2643
    },
    {
        "name": "Konecranes",
        "value": 4000
    },
    {
        "name": "Lada",
        "value": 5553
    },
    {
        "name": "Lamborghini",
        "value": 35
    },
    {
        "name": "Lancia",
        "value": 36
    },
    {
        "name": "Landwind",
        "value": 406
    },
    {
        "name": "LDV",
        "value": 134
    },
    {
        "name": "Lexus",
        "value": 38
    },
    {
        "name": "Lichi",
        "value": 5339
    },
    {
        "name": "Lifan",
        "value": 334
    },
    {
        "name": "Lincoln",
        "value": 135
    },
    {
        "name": "Lotus",
        "value": 41
    },
    {
        "name": "LTI",
        "value": 136
    },
    {
        "name": "Luxgen",
        "value": 4269
    },
    {
        "name": "Marshell",
        "value": 4064
    },
    {
        "name": "Maruti",
        "value": 139
    },
    {
        "name": "Maserati",
        "value": 45
    },
    {
        "name": "Maybach",
        "value": 46
    },
    {
        "name": "Mazda",
        "value": 47
    },
    {
        "name": "McLaren",
        "value": 3101
    },
    {
        "name": "MEGA",
        "value": 1904
    },
    {
        "name": "Mercedes-Benz",
        "value": 48
    },
    {
        "name": "Mercury",
        "value": 144
    },
    {
        "name": "Merkur",
        "value": 3948
    },
    {
        "name": "MG",
        "value": 49
    },
    {
        "name": "Microcar",
        "value": 6055
    },
    {
        "name": "Miles",
        "value": 4528
    },
    {
        "name": "MINI",
        "value": 147
    },
    {
        "name": "Mitsubishi",
        "value": 52
    },
    {
        "name": "Mitsuoka",
        "value": 402
    },
    {
        "name": "Morgan",
        "value": 53
    },
    {
        "name": "Morris",
        "value": 54
    },
    {
        "name": "MPM",
        "value": 5039
    },
    {
        "name": "MYBRO",
        "value": 5138
    },
    {
        "name": "Nissan",
        "value": 55
    },
    {
        "name": "Norster",
        "value": 2489
    },
    {
        "name": "Nysa",
        "value": 2045
    },
    {
        "name": "Oldsmobile",
        "value": 148
    },
    {
        "name": "Oltcit",
        "value": 2963
    },
    {
        "name": "Opel",
        "value": 56
    },
    {
        "name": "Packard",
        "value": 3193
    },
    {
        "name": "Pagani",
        "value": 2644
    },
    {
        "name": "Peerless",
        "value": 1852
    },
    {
        "name": "Peg-Perego",
        "value": 3446
    },
    {
        "name": "Peterbilt",
        "value": 346
    },
    {
        "name": "Peugeot",
        "value": 58
    },
    {
        "name": "Pininfarina",
        "value": 3590
    },
    {
        "name": "Pinzgauer",
        "value": 3215
    },
    {
        "name": "Plymouth",
        "value": 181
    },
    {
        "name": "Pontiac",
        "value": 149
    },
    {
        "name": "Porsche",
        "value": 59
    },
    {
        "name": "Proton",
        "value": 60
    },
    {
        "name": "Qifeng",
        "value": 5340
    },
    {
        "name": "Quicksilver",
        "value": 1332
    },
    {
        "name": "Ram",
        "value": 4369
    },
    {
        "name": "Ravon",
        "value": 4681
    },
    {
        "name": "Renault",
        "value": 62
    },
    {
        "name": "Renault Samsung",
        "value": 4698
    },
    {
        "name": "Rezvani",
        "value": 4466
    },
    {
        "name": "Rimac",
        "value": 3330
    },
    {
        "name": "Robeta",
        "value": 5761
    },
    {
        "name": "Rolls-Royce",
        "value": 63
    },
    {
        "name": "Rover",
        "value": 64
    },
    {
        "name": "Saab",
        "value": 65
    },
    {
        "name": "Saipa",
        "value": 3437
    },
    {
        "name": "Saleen",
        "value": 196
    },
    {
        "name": "Samand",
        "value": 192
    },
    {
        "name": "Samson",
        "value": 3972
    },
    {
        "name": "Samsung",
        "value": 325
    },
    {
        "name": "Saturn",
        "value": 331
    },
    {
        "name": "Sceo",
        "value": 2734
    },
    {
        "name": "Scion",
        "value": 3268
    },
    {
        "name": "SEAT",
        "value": 67
    },
    {
        "name": "Secma",
        "value": 2492
    },
    {
        "name": "Selena",
        "value": 1726
    },
    {
        "name": "Shelby",
        "value": 3100
    },
    {
        "name": "Shuanghuan",
        "value": 195
    },
    {
        "name": "Sidetracker",
        "value": 4003
    },
    {
        "name": "Skoda",
        "value": 70
    },
    {
        "name": "SMA",
        "value": 311
    },
    {
        "name": "Smart",
        "value": 71
    },
    {
        "name": "SouEast",
        "value": 194
    },
    {
        "name": "Soyat",
        "value": 3212
    },
    {
        "name": "Spyker",
        "value": 411
    },
    {
        "name": "Star",
        "value": 214
    },
    {
        "name": "Studebaker",
        "value": 3228
    },
    {
        "name": "Subaru",
        "value": 75
    },
    {
        "name": "Sunbeam",
        "value": 385
    },
    {
        "name": "Suzuki",
        "value": 76
    },
    {
        "name": "T-King",
        "value": 5341
    },
    {
        "name": "Talbot",
        "value": 77
    },
    {
        "name": "Tarpan",
        "value": 2497
    },
    {
        "name": "TATA",
        "value": 78
    },
    {
        "name": "Tatra",
        "value": 204
    },
    {
        "name": "Tazzari",
        "value": 3922
    },
    {
        "name": "Tesla",
        "value": 2233
    },
    {
        "name": "Think",
        "value": 6092
    },
    {
        "name": "Tianma",
        "value": 1578
    },
    {
        "name": "Tiger",
        "value": 2050
    },
    {
        "name": "Tofas",
        "value": 2552
    },
    {
        "name": "Toyota",
        "value": 79
    },
    {
        "name": "Trabant",
        "value": 345
    },
    {
        "name": "Triumph",
        "value": 80
    },
    {
        "name": "TVR",
        "value": 81
    },
    {
        "name": "Ultima",
        "value": 3017
    },
    {
        "name": "Vantage",
        "value": 5873
    },
    {
        "name": "Vauxhall",
        "value": 82
    },
    {
        "name": "Venturi",
        "value": 83
    },
    {
        "name": "Vepr",
        "value": 3320
    },
    {
        "name": "Volkswagen",
        "value": 84
    },
    {
        "name": "Volvo",
        "value": 85
    },
    {
        "name": "Wanderer",
        "value": 2021
    },
    {
        "name": "Wanfeng",
        "value": 2403
    },
    {
        "name": "Wartburg",
        "value": 339
    },
    {
        "name": "Wiesmann",
        "value": 1992
    },
    {
        "name": "Willys",
        "value": 1820
    },
    {
        "name": "Wuling",
        "value": 2653
    },
    {
        "name": "Xiaolong",
        "value": 3452
    },
    {
        "name": "Xinkai",
        "value": 338
    },
    {
        "name": "Yogomo",
        "value": 5285
    },
    {
        "name": "Yugo",
        "value": 87
    },
    {
        "name": "Zastava",
        "value": 2309
    },
    {
        "name": "Zimmer",
        "value": 2958
    },
    {
        "name": "Zotye",
        "value": 3610
    },
    {
        "name": "Zuk",
        "value": 3089
    },
    {
        "name": "ZX",
        "value": 322
    },
    {
        "name": "Богдан",
        "value": 188
    },
    {
        "name": "Бронто",
        "value": 3000
    },
    {
        "name": "ВАЗ",
        "value": 88
    },
    {
        "name": "ВИС",
        "value": 90
    },
    {
        "name": "ГАЗ",
        "value": 91
    },
    {
        "name": "ГолАЗ",
        "value": 410
    },
    {
        "name": "ЕРАЗ",
        "value": 170
    },
    {
        "name": "Жук",
        "value": 169
    },
    {
        "name": "ЗАЗ",
        "value": 89
    },
    {
        "name": "ЗИЛ",
        "value": 168
    },
    {
        "name": "ЗИМ",
        "value": 1544
    },
    {
        "name": "ЗИС",
        "value": 186
    },
    {
        "name": "ИЖ",
        "value": 92
    },
    {
        "name": "ЛуАЗ",
        "value": 189
    },
    {
        "name": "Москвич",
        "value": 94
    },
    {
        "name": "АЗЛК",
        "value": 94
    },
    {
        "name": "Прицеп",
        "value": 154
    },
    {
        "name": "РАФ",
        "value": 327
    },
    {
        "name": "СеАЗ",
        "value": 96
    },
    {
        "name": "СМЗ",
        "value": 2491
    },
    {
        "name": "SPEV",
        "value": 1351
    },
    {
        "name": "ТагАЗ",
        "value": 4537
    },
    {
        "name": "ТАМ",
        "value": 341
    },
    {
        "name": "ТогАЗ",
        "value": 2638
    },
    {
        "name": "Тренер",
        "value": 4038
    },
    {
        "name": "УАЗ",
        "value": 93
    },
    {
        "name": "Циклон",
        "value": 4021
    },
    {
        "name": "Эстония",
        "value": 2307
    }
];

// CONCATENATED MODULE: ./src/js/data/DataMotoRia.ts
var motos = [
    {
        "name": "ABM",
        "value": 3875
    },
    {
        "name": "Access",
        "value": 1463
    },
    {
        "name": "Acxa",
        "value": 2282
    },
    {
        "name": "Adler",
        "value": 2396
    },
    {
        "name": "Adly",
        "value": 1569
    },
    {
        "name": "Aeon",
        "value": 1004
    },
    {
        "name": "AGT",
        "value": 1770
    },
    {
        "name": "Aie motor",
        "value": 1465
    },
    {
        "name": "AIMA",
        "value": 4945
    },
    {
        "name": "Aisle-Master",
        "value": 3986
    },
    {
        "name": "Akumoto",
        "value": 2762
    },
    {
        "name": "Alesin",
        "value": 4103
    },
    {
        "name": "Alfa",
        "value": 2393
    },
    {
        "name": "Alfacore Seev",
        "value": 5350
    },
    {
        "name": "Alfamoto",
        "value": 1558
    },
    {
        "name": "Alpha",
        "value": 2108
    },
    {
        "name": "Alphasports",
        "value": 1009
    },
    {
        "name": "Amazing Scooter",
        "value": 5009
    },
    {
        "name": "American ironhorse",
        "value": 1012
    },
    {
        "name": "Apollo",
        "value": 4164
    },
    {
        "name": "Aprilia",
        "value": 1014
    },
    {
        "name": "Arctic cat",
        "value": 1581
    },
    {
        "name": "Argo",
        "value": 389
    },
    {
        "name": "Ariel",
        "value": 404
    },
    {
        "name": "Armada Moto",
        "value": 3151
    },
    {
        "name": "Arora",
        "value": 4968
    },
    {
        "name": "Asia Wing",
        "value": 5857
    },
    {
        "name": "Asia-moto",
        "value": 4567
    },
    {
        "name": "Atala",
        "value": 2834
    },
    {
        "name": "Atk",
        "value": 1015
    },
    {
        "name": "atMoto",
        "value": 4364
    },
    {
        "name": "ATV",
        "value": 2521
    },
    {
        "name": "Auto Moto",
        "value": 2659
    },
    {
        "name": "Avantis",
        "value": 4209
    },
    {
        "name": "Azimut",
        "value": 1662
    },
    {
        "name": "Baja",
        "value": 1741
    },
    {
        "name": "Bajaj",
        "value": 3662
    },
    {
        "name": "Baltmotors",
        "value": 4030
    },
    {
        "name": "BAODIAO",
        "value": 4317
    },
    {
        "name": "Baotian",
        "value": 2232
    },
    {
        "name": "Barracuda",
        "value": 6085
    },
    {
        "name": "Bashan",
        "value": 2431
    },
    {
        "name": "Baumann",
        "value": 3976
    },
    {
        "name": "Benelli",
        "value": 1020
    },
    {
        "name": "Benyco",
        "value": 4464
    },
    {
        "name": "Benzhou",
        "value": 5397
    },
    {
        "name": "Beta",
        "value": 1021
    },
    {
        "name": "Big Bear Choppers",
        "value": 4564
    },
    {
        "name": "Big Sam G",
        "value": 4443
    },
    {
        "name": "Bimota",
        "value": 3031
    },
    {
        "name": "Birel",
        "value": 2637
    },
    {
        "name": "Blata",
        "value": 2377
    },
    {
        "name": "Bluera",
        "value": 4981
    },
    {
        "name": "BMW",
        "value": 9
    },
    {
        "name": "Board",
        "value": 5545
    },
    {
        "name": "Bobcat",
        "value": 1618
    },
    {
        "name": "Bombardier",
        "value": 4789
    },
    {
        "name": "Bonez",
        "value": 3058
    },
    {
        "name": "Boom Trikes",
        "value": 2574
    },
    {
        "name": "Booster",
        "value": 3911
    },
    {
        "name": "BPG-Werks",
        "value": 3615
    },
    {
        "name": "Bravis",
        "value": 5431
    },
    {
        "name": "Bravo",
        "value": 2987
    },
    {
        "name": "BRIG",
        "value": 1665
    },
    {
        "name": "Brixton Motorcycles",
        "value": 6086
    },
    {
        "name": "BRP",
        "value": 1471
    },
    {
        "name": "BSA",
        "value": 3761
    },
    {
        "name": "BT",
        "value": 4909
    },
    {
        "name": "Buell",
        "value": 1031
    },
    {
        "name": "Bugtrail",
        "value": 3506
    },
    {
        "name": "BWK",
        "value": 2536
    },
    {
        "name": "BWS",
        "value": 4800
    },
    {
        "name": "Cagiva",
        "value": 1033
    },
    {
        "name": "Campagna",
        "value": 3781
    },
    {
        "name": "Cannondale",
        "value": 5018
    },
    {
        "name": "CARGO",
        "value": 4327
    },
    {
        "name": "Carroli",
        "value": 5852
    },
    {
        "name": "Catran",
        "value": 2820
    },
    {
        "name": "Cectek",
        "value": 2079
    },
    {
        "name": "Celebrity",
        "value": 2228
    },
    {
        "name": "Cezet",
        "value": 2002
    },
    {
        "name": "Cezeta",
        "value": 5644
    },
    {
        "name": "Cf moto",
        "value": 1037
    },
    {
        "name": "Challenger",
        "value": 2262
    },
    {
        "name": "Chenlon",
        "value": 4363
    },
    {
        "name": "Chongqing Wonjan",
        "value": 3782
    },
    {
        "name": "Citycoco",
        "value": 5568
    },
    {
        "name": "Club Сar",
        "value": 2372
    },
    {
        "name": "Comman",
        "value": 3469
    },
    {
        "name": "Commandor",
        "value": 2847
    },
    {
        "name": "Corrado",
        "value": 1547
    },
    {
        "name": "Corsa",
        "value": 5571
    },
    {
        "name": "Cougar",
        "value": 3952
    },
    {
        "name": "CPI",
        "value": 1043
    },
    {
        "name": "Crafter",
        "value": 4099
    },
    {
        "name": "CRG",
        "value": 2674
    },
    {
        "name": "Crosser",
        "value": 3026
    },
    {
        "name": "Custom Culture",
        "value": 5406
    },
    {
        "name": "D-MONIAK",
        "value": 1692
    },
    {
        "name": "Dabra",
        "value": 5699
    },
    {
        "name": "Daelim",
        "value": 1047
    },
    {
        "name": "Dafier",
        "value": 3653
    },
    {
        "name": "DASY",
        "value": 3118
    },
    {
        "name": "Dayun",
        "value": 3473
    },
    {
        "name": "Defiant",
        "value": 1542
    },
    {
        "name": "Delta",
        "value": 1560
    },
    {
        "name": "Derbi",
        "value": 1938
    },
    {
        "name": "Df motor",
        "value": 1054
    },
    {
        "name": "DFL",
        "value": 3816
    },
    {
        "name": "Diamo",
        "value": 1057
    },
    {
        "name": "DINLI",
        "value": 2660
    },
    {
        "name": "Dirtbike",
        "value": 5066
    },
    {
        "name": "Discovery",
        "value": 2437
    },
    {
        "name": "DKW",
        "value": 2243
    },
    {
        "name": "Drift Trike",
        "value": 4907
    },
    {
        "name": "Drive King",
        "value": 5908
    },
    {
        "name": "Ducati",
        "value": 1060
    },
    {
        "name": "E - ATV",
        "value": 3183
    },
    {
        "name": "E-Cult",
        "value": 4872
    },
    {
        "name": "E-Kross",
        "value": 5607
    },
    {
        "name": "E-Madix",
        "value": 4809
    },
    {
        "name": "E-Ton",
        "value": 4279
    },
    {
        "name": "E-Twow",
        "value": 4602
    },
    {
        "name": "E-Z-GO",
        "value": 2490
    },
    {
        "name": "Eagle",
        "value": 120
    },
    {
        "name": "East Dragon",
        "value": 2310
    },
    {
        "name": "Eco-Extreme",
        "value": 3924
    },
    {
        "name": "EcoMoto",
        "value": 5483
    },
    {
        "name": "EF-TK",
        "value": 4641
    },
    {
        "name": "Eglem",
        "value": 4952
    },
    {
        "name": "Eglmoto",
        "value": 5490
    },
    {
        "name": "EH Line",
        "value": 5472
    },
    {
        "name": "Electric Scooter",
        "value": 5973
    },
    {
        "name": "Electrowin",
        "value": 5476
    },
    {
        "name": "Elwinn",
        "value": 5469
    },
    {
        "name": "Emco",
        "value": 6082
    },
    {
        "name": "EMU Alltrack",
        "value": 2467
    },
    {
        "name": "Epella",
        "value": 5659
    },
    {
        "name": "Eriskay",
        "value": 1548
    },
    {
        "name": "ESO",
        "value": 6032
    },
    {
        "name": "Espero",
        "value": 2558
    },
    {
        "name": "Eurotex",
        "value": 4624
    },
    {
        "name": "EvoBike",
        "value": 5595
    },
    {
        "name": "Exdrive",
        "value": 5067
    },
    {
        "name": "Explorer",
        "value": 4964
    },
    {
        "name": "Fada",
        "value": 1549
    },
    {
        "name": "Falcon",
        "value": 1732
    },
    {
        "name": "Fantic",
        "value": 2438
    },
    {
        "name": "Farmer",
        "value": 3163
    },
    {
        "name": "Favorit",
        "value": 3298
    },
    {
        "name": "Feishen",
        "value": 3919
    },
    {
        "name": "Flybo",
        "value": 1550
    },
    {
        "name": "Flyer",
        "value": 5098
    },
    {
        "name": "Forte",
        "value": 3164
    },
    {
        "name": "Fortune",
        "value": 2759
    },
    {
        "name": "Forward",
        "value": 2275
    },
    {
        "name": "Fosti",
        "value": 1069
    },
    {
        "name": "Foton",
        "value": 187
    },
    {
        "name": "FoxWell",
        "value": 4210
    },
    {
        "name": "Freedomotor",
        "value": 2321
    },
    {
        "name": "FreeGo",
        "value": 5594
    },
    {
        "name": "Futong",
        "value": 1941
    },
    {
        "name": "FYM",
        "value": 1573
    },
    {
        "name": "G&A",
        "value": 1566
    },
    {
        "name": "G-max",
        "value": 1561
    },
    {
        "name": "GAMAX",
        "value": 4134
    },
    {
        "name": "Garelli",
        "value": 1071
    },
    {
        "name": "Gas gas",
        "value": 1570
    },
    {
        "name": "Geeli",
        "value": 5559
    },
    {
        "name": "Geely",
        "value": 185
    },
    {
        "name": "Genata",
        "value": 3844
    },
    {
        "name": "Generic",
        "value": 3205
    },
    {
        "name": "Gentoya",
        "value": 5897
    },
    {
        "name": "Geon",
        "value": 1976
    },
    {
        "name": "Gepard",
        "value": 2280
    },
    {
        "name": "GerioMobil",
        "value": 2509
    },
    {
        "name": "Gibbs",
        "value": 4058
    },
    {
        "name": "Gilera",
        "value": 1077
    },
    {
        "name": "Gladiator",
        "value": 4560
    },
    {
        "name": "GM",
        "value": 3220
    },
    {
        "name": "Godzilla",
        "value": 3828
    },
    {
        "name": "Goes",
        "value": 1230
    },
    {
        "name": "Gogoro",
        "value": 4301
    },
    {
        "name": "Golf Car",
        "value": 4316
    },
    {
        "name": "Goped",
        "value": 5690
    },
    {
        "name": "Groz",
        "value": 1575
    },
    {
        "name": "Guzzi",
        "value": 1128
    },
    {
        "name": "Haibike",
        "value": 5410
    },
    {
        "name": "Hamer",
        "value": 2621
    },
    {
        "name": "Hammer",
        "value": 2432
    },
    {
        "name": "Hammerhead",
        "value": 4527
    },
    {
        "name": "Hanway",
        "value": 4151
    },
    {
        "name": "Haobon",
        "value": 3872
    },
    {
        "name": "Haojin",
        "value": 6012
    },
    {
        "name": "Harley-Davidson",
        "value": 1078
    },
    {
        "name": "Harlo",
        "value": 4049
    },
    {
        "name": "Havana",
        "value": 5666
    },
    {
        "name": "Hecht",
        "value": 4264
    },
    {
        "name": "Hercules",
        "value": 3655
    },
    {
        "name": "Hero Electric",
        "value": 4224
    },
    {
        "name": "Hero Majestic",
        "value": 4158
    },
    {
        "name": "Hero Splendor",
        "value": 4365
    },
    {
        "name": "Hisun",
        "value": 2468
    },
    {
        "name": "Honda",
        "value": 28
    },
    {
        "name": "Hongda",
        "value": 3997
    },
    {
        "name": "Honling",
        "value": 2183
    },
    {
        "name": "Honor",
        "value": 2944
    },
    {
        "name": "Hornet",
        "value": 5542
    },
    {
        "name": "Hors",
        "value": 2000
    },
    {
        "name": "Horse",
        "value": 2424
    },
    {
        "name": "HP Power",
        "value": 3775
    },
    {
        "name": "Huanma",
        "value": 5689
    },
    {
        "name": "Huatian",
        "value": 1577
    },
    {
        "name": "Hubtex",
        "value": 3977
    },
    {
        "name": "Hunter",
        "value": 2384
    },
    {
        "name": "Huoniao",
        "value": 2683
    },
    {
        "name": "Hupper",
        "value": 3686
    },
    {
        "name": "Husaberg",
        "value": 2092
    },
    {
        "name": "Husqvarna",
        "value": 1085
    },
    {
        "name": "Hussar",
        "value": 2071
    },
    {
        "name": "Hyosung",
        "value": 1086
    },
    {
        "name": "IFA (ИФА)",
        "value": 1486
    },
    {
        "name": "Imperial",
        "value": 2081
    },
    {
        "name": "Indian",
        "value": 1087
    },
    {
        "name": "Infinum",
        "value": 4798
    },
    {
        "name": "Intrepid",
        "value": 4169
    },
    {
        "name": "Invacare",
        "value": 5414
    },
    {
        "name": "Irbis",
        "value": 3931
    },
    {
        "name": "Iron Motorcycles",
        "value": 5094
    },
    {
        "name": "Isuzu",
        "value": 30
    },
    {
        "name": "Italjet",
        "value": 1089
    },
    {
        "name": "Jawa",
        "value": 1487
    },
    {
        "name": "Jazz",
        "value": 3177
    },
    {
        "name": "JBW",
        "value": 2661
    },
    {
        "name": "Jeek",
        "value": 5831
    },
    {
        "name": "Jialing",
        "value": 2705
    },
    {
        "name": "Jianshe",
        "value": 1093
    },
    {
        "name": "Jieda",
        "value": 2870
    },
    {
        "name": "JimStar",
        "value": 2486
    },
    {
        "name": "JINCHENG",
        "value": 2675
    },
    {
        "name": "Jinding",
        "value": 3207
    },
    {
        "name": "Jinling",
        "value": 4044
    },
    {
        "name": "Jinlun",
        "value": 2799
    },
    {
        "name": "Jinyee",
        "value": 4100
    },
    {
        "name": "Jmstar",
        "value": 4146
    },
    {
        "name": "John Deere",
        "value": 1583
    },
    {
        "name": "Johnny Pag",
        "value": 4362
    },
    {
        "name": "Jonway",
        "value": 1574
    },
    {
        "name": "Joyner",
        "value": 2357
    },
    {
        "name": "Jumbo",
        "value": 1896
    },
    {
        "name": "Junak",
        "value": 4067
    },
    {
        "name": "Juneng",
        "value": 4772
    },
    {
        "name": "Kainuo",
        "value": 4411
    },
    {
        "name": "Kaitong",
        "value": 4794
    },
    {
        "name": "Kallio",
        "value": 5810
    },
    {
        "name": "Kaminah",
        "value": 3898
    },
    {
        "name": "Kangchao",
        "value": 3937
    },
    {
        "name": "Kangda",
        "value": 4383
    },
    {
        "name": "Kansas",
        "value": 4806
    },
    {
        "name": "Kanuni",
        "value": 1100
    },
    {
        "name": "Kavaki Motor",
        "value": 4724
    },
    {
        "name": "Kawasaki",
        "value": 176
    },
    {
        "name": "Kayo",
        "value": 2352
    },
    {
        "name": "Kazuma",
        "value": 2753
    },
    {
        "name": "Keeway",
        "value": 1101
    },
    {
        "name": "Keine",
        "value": 5005
    },
    {
        "name": "Kenrod",
        "value": 3474
    },
    {
        "name": "Kentoya",
        "value": 4728
    },
    {
        "name": "Kewesekl",
        "value": 1681
    },
    {
        "name": "Kindroad",
        "value": 5957
    },
    {
        "name": "Kinetik",
        "value": 4360
    },
    {
        "name": "KingSong",
        "value": 5638
    },
    {
        "name": "Kingway",
        "value": 3475
    },
    {
        "name": "Kinlon",
        "value": 3192
    },
    {
        "name": "Kinroad",
        "value": 1499
    },
    {
        "name": "Kioti",
        "value": 3429
    },
    {
        "name": "Kosmic",
        "value": 5021
    },
    {
        "name": "Kovi",
        "value": 5939
    },
    {
        "name": "Kreidler",
        "value": 4776
    },
    {
        "name": "Kross",
        "value": 2826
    },
    {
        "name": "KTM",
        "value": 1104
    },
    {
        "name": "Kv",
        "value": 3814
    },
    {
        "name": "KXD moto",
        "value": 4115
    },
    {
        "name": "Kymco",
        "value": 1105
    },
    {
        "name": "Kymera",
        "value": 3260
    },
    {
        "name": "Lambretta",
        "value": 1106
    },
    {
        "name": "Land Tamer",
        "value": 5171
    },
    {
        "name": "Lantana",
        "value": 2493
    },
    {
        "name": "Laverda",
        "value": 1985
    },
    {
        "name": "Leader",
        "value": 1628
    },
    {
        "name": "Leike",
        "value": 4625
    },
    {
        "name": "Leopard",
        "value": 2442
    },
    {
        "name": "Lepton",
        "value": 5971
    },
    {
        "name": "Lexmoto",
        "value": 4605
    },
    {
        "name": "Liberty GMG",
        "value": 4098
    },
    {
        "name": "Lifan",
        "value": 334
    },
    {
        "name": "Like.Bike",
        "value": 5167
    },
    {
        "name": "Lingben",
        "value": 4990
    },
    {
        "name": "Linhai",
        "value": 1109
    },
    {
        "name": "Lml",
        "value": 1110
    },
    {
        "name": "Loncin",
        "value": 2026
    },
    {
        "name": "Longjia",
        "value": 4826
    },
    {
        "name": "LZ",
        "value": 3923
    },
    {
        "name": "MadAss",
        "value": 3909
    },
    {
        "name": "Maja",
        "value": 5008
    },
    {
        "name": "Makc",
        "value": 2315
    },
    {
        "name": "Malaguti",
        "value": 1115
    },
    {
        "name": "Malanca",
        "value": 1116
    },
    {
        "name": "Mar-co",
        "value": 3989
    },
    {
        "name": "Marsun",
        "value": 1551
    },
    {
        "name": "Masai",
        "value": 4866
    },
    {
        "name": "Mash",
        "value": 5538
    },
    {
        "name": "Matador",
        "value": 4361
    },
    {
        "name": "Max Trailer",
        "value": 3987
    },
    {
        "name": "Maxxter",
        "value": 5488
    },
    {
        "name": "MBK",
        "value": 2223
    },
    {
        "name": "MegaStar",
        "value": 3783
    },
    {
        "name": "Megelli",
        "value": 2075
    },
    {
        "name": "Meiduo",
        "value": 4139
    },
    {
        "name": "Melex",
        "value": 2057
    },
    {
        "name": "Menila",
        "value": 2433
    },
    {
        "name": "Metrakit",
        "value": 3084
    },
    {
        "name": "Mikilon",
        "value": 3147
    },
    {
        "name": "Milan",
        "value": 5019
    },
    {
        "name": "MINI",
        "value": 147
    },
    {
        "name": "Miro",
        "value": 2496
    },
    {
        "name": "Mista",
        "value": 3996
    },
    {
        "name": "MKS",
        "value": 4759
    },
    {
        "name": "Montesa Honda",
        "value": 4615
    },
    {
        "name": "Moto Aupa",
        "value": 4566
    },
    {
        "name": "Moto Bellini",
        "value": 5036
    },
    {
        "name": "Moto Guzzi",
        "value": 3123
    },
    {
        "name": "MOTO MORINI",
        "value": 2590
    },
    {
        "name": "Moto-Leader",
        "value": 4250
    },
    {
        "name": "Motobecane",
        "value": 4217
    },
    {
        "name": "Motobi",
        "value": 2226
    },
    {
        "name": "Motoczysz",
        "value": 1132
    },
    {
        "name": "MotoJet",
        "value": 2254
    },
    {
        "name": "Motoland",
        "value": 4414
    },
    {
        "name": "Motom",
        "value": 1134
    },
    {
        "name": "Motorro",
        "value": 1506
    },
    {
        "name": "Motowell",
        "value": 4431
    },
    {
        "name": "Motron",
        "value": 4040
    },
    {
        "name": "MSKart",
        "value": 3611
    },
    {
        "name": "Musstang",
        "value": 1565
    },
    {
        "name": "Mustang",
        "value": 2979
    },
    {
        "name": "Mv agusta",
        "value": 1138
    },
    {
        "name": "MYBRO",
        "value": 5138
    },
    {
        "name": "MZ",
        "value": 1139
    },
    {
        "name": "NanFang",
        "value": 4152
    },
    {
        "name": "Navigator",
        "value": 1552
    },
    {
        "name": "New Holland",
        "value": 1696
    },
    {
        "name": "Nexus",
        "value": 4039
    },
    {
        "name": "Ninebot",
        "value": 5704
    },
    {
        "name": "Ninebot One",
        "value": 4419
    },
    {
        "name": "Nitro",
        "value": 2951
    },
    {
        "name": "NIU",
        "value": 5128
    },
    {
        "name": "Norco",
        "value": 3784
    },
    {
        "name": "NSU",
        "value": 2157
    },
    {
        "name": "Nzita",
        "value": 5987
    },
    {
        "name": "OlympMotors",
        "value": 6050
    },
    {
        "name": "Optima",
        "value": 4612
    },
    {
        "name": "Orion",
        "value": 3591
    },
    {
        "name": "Oset",
        "value": 4223
    },
    {
        "name": "Panda",
        "value": 3583
    },
    {
        "name": "Pannon",
        "value": 4054
    },
    {
        "name": "Pannonia",
        "value": 1149
    },
    {
        "name": "Patriot",
        "value": 3116
    },
    {
        "name": "Patron",
        "value": 2794
    },
    {
        "name": "Peda",
        "value": 1980
    },
    {
        "name": "Peg-Perego",
        "value": 3446
    },
    {
        "name": "Pegasus",
        "value": 3482
    },
    {
        "name": "PERAVES",
        "value": 4290
    },
    {
        "name": "Peripoli",
        "value": 5705
    },
    {
        "name": "Peugeot",
        "value": 58
    },
    {
        "name": "Pgo",
        "value": 1151
    },
    {
        "name": "Phoenix",
        "value": 2625
    },
    {
        "name": "Piaggio",
        "value": 313
    },
    {
        "name": "Pioneer",
        "value": 4626
    },
    {
        "name": "Pit bike",
        "value": 2789
    },
    {
        "name": "Pitbull",
        "value": 4147
    },
    {
        "name": "Piton",
        "value": 4654
    },
    {
        "name": "PitsterPro",
        "value": 4274
    },
    {
        "name": "Pocket bike",
        "value": 4738
    },
    {
        "name": "Polaris",
        "value": 1231
    },
    {
        "name": "Polini",
        "value": 4129
    },
    {
        "name": "Pony",
        "value": 3584
    },
    {
        "name": "Presto",
        "value": 5304
    },
    {
        "name": "Pride",
        "value": 5132
    },
    {
        "name": "Pronto",
        "value": 5896
    },
    {
        "name": "Puch",
        "value": 2591
    },
    {
        "name": "Pulse",
        "value": 5055
    },
    {
        "name": "Q-tek",
        "value": 3873
    },
    {
        "name": "Qianjiang",
        "value": 1939
    },
    {
        "name": "Qingqi",
        "value": 1157
    },
    {
        "name": "Qjiang",
        "value": 1754
    },
    {
        "name": "Quad Bike",
        "value": 2606
    },
    {
        "name": "Quadro",
        "value": 5584
    },
    {
        "name": "Quadzilla",
        "value": 3876
    },
    {
        "name": "Racer",
        "value": 3910
    },
    {
        "name": "Racing",
        "value": 3493
    },
    {
        "name": "Rage",
        "value": 3402
    },
    {
        "name": "Raketa-Futong",
        "value": 2106
    },
    {
        "name": "Ratas Moto",
        "value": 4801
    },
    {
        "name": "Rato",
        "value": 5888
    },
    {
        "name": "Razor",
        "value": 3409
    },
    {
        "name": "Reaper",
        "value": 2657
    },
    {
        "name": "Regal",
        "value": 1595
    },
    {
        "name": "Regal-Raptor",
        "value": 2009
    },
    {
        "name": "Rewaco",
        "value": 2869
    },
    {
        "name": "Rex",
        "value": 3832
    },
    {
        "name": "Rexon",
        "value": 2027
    },
    {
        "name": "Rialli",
        "value": 2829
    },
    {
        "name": "RiderKart",
        "value": 2634
    },
    {
        "name": "Rieju",
        "value": 2462
    },
    {
        "name": "Rivero",
        "value": 4227
    },
    {
        "name": "RM",
        "value": 4280
    },
    {
        "name": "Road Knight",
        "value": 4286
    },
    {
        "name": "Road Legal",
        "value": 2962
    },
    {
        "name": "Roadsign",
        "value": 5518
    },
    {
        "name": "Rokon",
        "value": 4005
    },
    {
        "name": "Rolektro",
        "value": 5119
    },
    {
        "name": "Romet",
        "value": 1693
    },
    {
        "name": "Rover",
        "value": 64
    },
    {
        "name": "Roxon",
        "value": 5843
    },
    {
        "name": "Royal Enfield",
        "value": 3443
    },
    {
        "name": "Runmaster Motor",
        "value": 5562
    },
    {
        "name": "Sabur",
        "value": 1556
    },
    {
        "name": "Sachs",
        "value": 1166
    },
    {
        "name": "Sagitta",
        "value": 4255
    },
    {
        "name": "Salardi",
        "value": 5551
    },
    {
        "name": "Samada",
        "value": 4388
    },
    {
        "name": "Sandi",
        "value": 5506
    },
    {
        "name": "Sanyou",
        "value": 4287
    },
    {
        "name": "Scandic",
        "value": 4070
    },
    {
        "name": "Scootmobiel",
        "value": 5928
    },
    {
        "name": "Scorpa",
        "value": 3261
    },
    {
        "name": "Scorpion",
        "value": 3582
    },
    {
        "name": "Screamin",
        "value": 3962
    },
    {
        "name": "SEEV",
        "value": 4629
    },
    {
        "name": "Segway",
        "value": 1557
    },
    {
        "name": "Senke",
        "value": 5272
    },
    {
        "name": "Sensor",
        "value": 2832
    },
    {
        "name": "SH",
        "value": 4795
    },
    {
        "name": "Shark",
        "value": 5025
    },
    {
        "name": "Shawoom",
        "value": 2085
    },
    {
        "name": "Sherco",
        "value": 3087
    },
    {
        "name": "Shineray",
        "value": 1572
    },
    {
        "name": "Shoprider",
        "value": 5909
    },
    {
        "name": "Sigma Line",
        "value": 3262
    },
    {
        "name": "Simson",
        "value": 1176
    },
    {
        "name": "Sinski",
        "value": 2815
    },
    {
        "name": "Skaut",
        "value": 5099
    },
    {
        "name": "Skeeter",
        "value": 3998
    },
    {
        "name": "SkyBike",
        "value": 4230
    },
    {
        "name": "Skygo",
        "value": 3112
    },
    {
        "name": "SkyMoto",
        "value": 1555
    },
    {
        "name": "SkyTeam",
        "value": 4874
    },
    {
        "name": "SM-MOTO",
        "value": 4520
    },
    {
        "name": "Smart",
        "value": 71
    },
    {
        "name": "SmartWay",
        "value": 4690
    },
    {
        "name": "SMC",
        "value": 2746
    },
    {
        "name": "Snow hawk",
        "value": 2567
    },
    {
        "name": "SNOWMAX",
        "value": 4766
    },
    {
        "name": "Sodikart",
        "value": 4176
    },
    {
        "name": "Sonik",
        "value": 3241
    },
    {
        "name": "Sontan",
        "value": 2366
    },
    {
        "name": "Soul",
        "value": 1853
    },
    {
        "name": "SP",
        "value": 3895
    },
    {
        "name": "Spark",
        "value": 1554
    },
    {
        "name": "Sparta",
        "value": 5935
    },
    {
        "name": "Sparta Pharos",
        "value": 4887
    },
    {
        "name": "Specialized",
        "value": 3787
    },
    {
        "name": "Speed Gear",
        "value": 1553
    },
    {
        "name": "Speed Shek",
        "value": 2186
    },
    {
        "name": "Spider",
        "value": 2473
    },
    {
        "name": "Spike",
        "value": 5984
    },
    {
        "name": "Spike ZZ",
        "value": 4107
    },
    {
        "name": "Sport Energy",
        "value": 2584
    },
    {
        "name": "Spy",
        "value": 5484
    },
    {
        "name": "Stalker",
        "value": 3266
    },
    {
        "name": "Stels",
        "value": 2213
    },
    {
        "name": "Sterling",
        "value": 2754
    },
    {
        "name": "Stinger",
        "value": 1563
    },
    {
        "name": "Stock",
        "value": 5609
    },
    {
        "name": "Storm",
        "value": 2060
    },
    {
        "name": "Stormbringer",
        "value": 4880
    },
    {
        "name": "Sukida",
        "value": 5497
    },
    {
        "name": "Sumoto",
        "value": 2798
    },
    {
        "name": "Sun City",
        "value": 4878
    },
    {
        "name": "Sunbeam",
        "value": 385
    },
    {
        "name": "Sunra",
        "value": 5570
    },
    {
        "name": "Sunrise Medical",
        "value": 5593
    },
    {
        "name": "Sur-Ron",
        "value": 5960
    },
    {
        "name": "Suzuki",
        "value": 76
    },
    {
        "name": "Swiss Hutless",
        "value": 2570
    },
    {
        "name": "SWM",
        "value": 5513
    },
    {
        "name": "Sym",
        "value": 2176
    },
    {
        "name": "T3 Motion",
        "value": 5548
    },
    {
        "name": "Tank Vision",
        "value": 5573
    },
    {
        "name": "Tante",
        "value": 4312
    },
    {
        "name": "Tauris",
        "value": 6041
    },
    {
        "name": "TCS",
        "value": 3979
    },
    {
        "name": "TDMC",
        "value": 3294
    },
    {
        "name": "Terrot",
        "value": 4444
    },
    {
        "name": "TGB",
        "value": 1775
    },
    {
        "name": "Thunder Mountain",
        "value": 5494
    },
    {
        "name": "Tiger",
        "value": 2050
    },
    {
        "name": "Tiras",
        "value": 3055
    },
    {
        "name": "Tisong",
        "value": 5257
    },
    {
        "name": "Titan",
        "value": 3186
    },
    {
        "name": "TM Racing",
        "value": 2409
    },
    {
        "name": "Tms",
        "value": 5905
    },
    {
        "name": "Tomos",
        "value": 2151
    },
    {
        "name": "Tontse",
        "value": 5866
    },
    {
        "name": "Tony Kart",
        "value": 2650
    },
    {
        "name": "Top-Kart",
        "value": 6099
    },
    {
        "name": "Tornado",
        "value": 2078
    },
    {
        "name": "Toros",
        "value": 5621
    },
    {
        "name": "Tourer",
        "value": 4799
    },
    {
        "name": "Triad",
        "value": 4453
    },
    {
        "name": "Trike",
        "value": 4797
    },
    {
        "name": "TRIKEtec",
        "value": 4894
    },
    {
        "name": "TriRod",
        "value": 4580
    },
    {
        "name": "Triton",
        "value": 3102
    },
    {
        "name": "Triumph",
        "value": 80
    },
    {
        "name": "Truva",
        "value": 2224
    },
    {
        "name": "TRX Scooter",
        "value": 3001
    },
    {
        "name": "UABike",
        "value": 5191
    },
    {
        "name": "UGBEST",
        "value": 4531
    },
    {
        "name": "United Motors",
        "value": 3384
    },
    {
        "name": "Unix",
        "value": 3837
    },
    {
        "name": "VACCI Bike",
        "value": 4979
    },
    {
        "name": "Valenti",
        "value": 4627
    },
    {
        "name": "Vanguard",
        "value": 3800
    },
    {
        "name": "Vapor",
        "value": 4562
    },
    {
        "name": "Varan",
        "value": 2291
    },
    {
        "name": "Vectrix",
        "value": 2750
    },
    {
        "name": "VEGA",
        "value": 1998
    },
    {
        "name": "Veken",
        "value": 3788
    },
    {
        "name": "Venom",
        "value": 2512
    },
    {
        "name": "Venta",
        "value": 2256
    },
    {
        "name": "Vento",
        "value": 4987
    },
    {
        "name": "Ventus",
        "value": 3951
    },
    {
        "name": "Veola",
        "value": 5871
    },
    {
        "name": "Vertemati",
        "value": 4384
    },
    {
        "name": "Verucci",
        "value": 2949
    },
    {
        "name": "Vespa",
        "value": 1199
    },
    {
        "name": "Victoria",
        "value": 2245
    },
    {
        "name": "Victory",
        "value": 2474
    },
    {
        "name": "Viking",
        "value": 2858
    },
    {
        "name": "Vimann",
        "value": 3959
    },
    {
        "name": "Viper",
        "value": 1201
    },
    {
        "name": "Volta",
        "value": 3793
    },
    {
        "name": "VZ Yachts",
        "value": 3990
    },
    {
        "name": "Vеola",
        "value": 5116
    },
    {
        "name": "Warrior",
        "value": 4133
    },
    {
        "name": "Wels",
        "value": 4142
    },
    {
        "name": "Wenling",
        "value": 2816
    },
    {
        "name": "Werya",
        "value": 2850
    },
    {
        "name": "Wexxtor",
        "value": 3154
    },
    {
        "name": "Wild Horses",
        "value": 4950
    },
    {
        "name": "Windtech",
        "value": 5683
    },
    {
        "name": "Winner",
        "value": 3539
    },
    {
        "name": "WK BIKES",
        "value": 4650
    },
    {
        "name": "Wmotion",
        "value": 5108
    },
    {
        "name": "WOQU",
        "value": 5691
    },
    {
        "name": "WSK",
        "value": 4292
    },
    {
        "name": "Wuyi ZhengLong",
        "value": 2121
    },
    {
        "name": "XGJAO",
        "value": 1814
    },
    {
        "name": "Xiamen",
        "value": 4985
    },
    {
        "name": "Xiaomi",
        "value": 5107
    },
    {
        "name": "Xingye",
        "value": 5164
    },
    {
        "name": "Xingyue",
        "value": 1762
    },
    {
        "name": "Xinling",
        "value": 2313
    },
    {
        "name": "XinYang",
        "value": 2636
    },
    {
        "name": "Xispa",
        "value": 1211
    },
    {
        "name": "Xmotos",
        "value": 1212
    },
    {
        "name": "XYKD",
        "value": 4437
    },
    {
        "name": "Yadea",
        "value": 5479
    },
    {
        "name": "Yamaha",
        "value": 179
    },
    {
        "name": "Yamasaki",
        "value": 1546
    },
    {
        "name": "Yamati",
        "value": 3540
    },
    {
        "name": "Yamoto",
        "value": 2290
    },
    {
        "name": "YCF",
        "value": 4563
    },
    {
        "name": "YiBen",
        "value": 2560
    },
    {
        "name": "Yinxiang",
        "value": 4313
    },
    {
        "name": "Yongkang",
        "value": 4338
    },
    {
        "name": "YUKI",
        "value": 4796
    },
    {
        "name": "Zabel",
        "value": 3798
    },
    {
        "name": "Zealsun Prince",
        "value": 2314
    },
    {
        "name": "Zemis",
        "value": 2911
    },
    {
        "name": "Zenith",
        "value": 3789
    },
    {
        "name": "Zero",
        "value": 4303
    },
    {
        "name": "Zhejiang",
        "value": 2288
    },
    {
        "name": "Zhongqi",
        "value": 5498
    },
    {
        "name": "Zhongyu",
        "value": 3567
    },
    {
        "name": "Zipp",
        "value": 4157
    },
    {
        "name": "Znen",
        "value": 2671
    },
    {
        "name": "Zonda",
        "value": 1439
    },
    {
        "name": "Zonder",
        "value": 1576
    },
    {
        "name": "Zongshen",
        "value": 1214
    },
    {
        "name": "Zontes",
        "value": 4272
    },
    {
        "name": "Zorro",
        "value": 4997
    },
    {
        "name": "Ztech",
        "value": 5934
    },
    {
        "name": "ZTR",
        "value": 5523
    },
    {
        "name": "Zubr",
        "value": 2426
    },
    {
        "name": "Zulrace",
        "value": 5910
    },
    {
        "name": "Zumico",
        "value": 4777
    },
    {
        "name": "Zundapp",
        "value": 1216
    },
    {
        "name": "АКУ",
        "value": 4324
    },
    {
        "name": "Алиса",
        "value": 5072
    },
    {
        "name": "Багги",
        "value": 3239
    },
    {
        "name": "Буран",
        "value": 2523
    },
    {
        "name": "Верховина",
        "value": 1755
    },
    {
        "name": "Восход",
        "value": 1204
    },
    {
        "name": "Вятка",
        "value": 2317
    },
    {
        "name": "ДАЗ",
        "value": 3097
    },
    {
        "name": "Днепр (КМЗ)",
        "value": 171
    },
    {
        "name": "Дорожник",
        "value": 5906
    },
    {
        "name": "ДТЗ",
        "value": 3351
    },
    {
        "name": "Заря",
        "value": 2052
    },
    {
        "name": "ЗиД",
        "value": 1535
    },
    {
        "name": "ЗИМ",
        "value": 1544
    },
    {
        "name": "ЗИФ",
        "value": 1959
    },
    {
        "name": "ИЖ",
        "value": 92
    },
    {
        "name": "ИМЗ",
        "value": 2370
    },
    {
        "name": "Карпаты",
        "value": 1854
    },
    {
        "name": "Кастом",
        "value": 2764
    },
    {
        "name": "Кельбаджары",
        "value": 4936
    },
    {
        "name": "Ковровец",
        "value": 3427
    },
    {
        "name": "Красный Октябрь",
        "value": 2244
    },
    {
        "name": "ЛВЗ",
        "value": 3305
    },
    {
        "name": "ЛМЗ",
        "value": 4649
    },
    {
        "name": "Махо",
        "value": 1999
    },
    {
        "name": "Минск",
        "value": 1125
    },
    {
        "name": "Москва",
        "value": 2194
    },
    {
        "name": "Муравей",
        "value": 1933
    },
    {
        "name": "Партнер",
        "value": 5073
    },
    {
        "name": "ПатриотМото",
        "value": 3445
    },
    {
        "name": "Полесье",
        "value": 4892
    },
    {
        "name": "Ракета-мото",
        "value": 3401
    },
    {
        "name": "Рига",
        "value": 2218
    },
    {
        "name": "РМЗ",
        "value": 3265
    },
    {
        "name": "Рысь",
        "value": 2563
    },
    {
        "name": "С-Мото",
        "value": 1537
    },
    {
        "name": "Самодельный",
        "value": 2863
    },
    {
        "name": "Тайга",
        "value": 1234
    },
    {
        "name": "ТИЗ",
        "value": 2010
    },
    {
        "name": "ТМЗ",
        "value": 1539
    },
    {
        "name": "Трайк",
        "value": 3494
    },
    {
        "name": "Тула",
        "value": 1579
    },
    {
        "name": "УКРмото",
        "value": 3003
    },
    {
        "name": "Урал",
        "value": 95
    }
];

// CONCATENATED MODULE: ./src/js/data/DataTrucksRia.ts
var trucks = [
    {
        "name": "AMCO-VEBA",
        "value": 3019
    },
    {
        "name": "Aro",
        "value": 101
    },
    {
        "name": "Ashok Leyland",
        "value": 2550
    },
    {
        "name": "Astra",
        "value": 2063
    },
    {
        "name": "Avia",
        "value": 2077
    },
    {
        "name": "Barkas",
        "value": 103
    },
    {
        "name": "Baw",
        "value": 1540
    },
    {
        "name": "Beifan",
        "value": 2229
    },
    {
        "name": "Bocheng",
        "value": 4810
    },
    {
        "name": "CAMC",
        "value": 2381
    },
    {
        "name": "Caterpillar",
        "value": 1589
    },
    {
        "name": "Chevrolet",
        "value": 13
    },
    {
        "name": "Citroen",
        "value": 15
    },
    {
        "name": "Csepel",
        "value": 3538
    },
    {
        "name": "Daewoo",
        "value": 18
    },
    {
        "name": "DAF",
        "value": 115
    },
    {
        "name": "Dayun",
        "value": 3473
    },
    {
        "name": "DFAC",
        "value": 3202
    },
    {
        "name": "DFSK",
        "value": 4077
    },
    {
        "name": "Dodge",
        "value": 118
    },
    {
        "name": "Dongfeng",
        "value": 308
    },
    {
        "name": "Eagle",
        "value": 120
    },
    {
        "name": "Egritech",
        "value": 5613
    },
    {
        "name": "ERF",
        "value": 1442
    },
    {
        "name": "Fargo Effedi",
        "value": 4596
    },
    {
        "name": "FAW",
        "value": 121
    },
    {
        "name": "Feber",
        "value": 2408
    },
    {
        "name": "Fiat",
        "value": 23
    },
    {
        "name": "Foden",
        "value": 3874
    },
    {
        "name": "Force",
        "value": 2203
    },
    {
        "name": "Ford",
        "value": 24
    },
    {
        "name": "Ford Trucks",
        "value": 6030
    },
    {
        "name": "Foton",
        "value": 187
    },
    {
        "name": "Freightliner",
        "value": 314
    },
    {
        "name": "Ginaf",
        "value": 2767
    },
    {
        "name": "GMC",
        "value": 123
    },
    {
        "name": "Great Wall",
        "value": 124
    },
    {
        "name": "Groz",
        "value": 1575
    },
    {
        "name": "HANIA",
        "value": 4251
    },
    {
        "name": "Hanomag",
        "value": 1784
    },
    {
        "name": "Hino",
        "value": 2230
    },
    {
        "name": "Hongda",
        "value": 3997
    },
    {
        "name": "Howo",
        "value": 379
    },
    {
        "name": "Hyundai",
        "value": 29
    },
    {
        "name": "IFA",
        "value": 1486
    },
    {
        "name": "International",
        "value": 306
    },
    {
        "name": "Isuzu",
        "value": 30
    },
    {
        "name": "Iveco",
        "value": 175
    },
    {
        "name": "JAC",
        "value": 317
    },
    {
        "name": "Jelcz",
        "value": 2499
    },
    {
        "name": "Jinbei",
        "value": 2231
    },
    {
        "name": "JMC",
        "value": 3018
    },
    {
        "name": "Kenworth",
        "value": 387
    },
    {
        "name": "Kia",
        "value": 33
    },
    {
        "name": "KingWoo",
        "value": 4606
    },
    {
        "name": "Land Rover",
        "value": 37
    },
    {
        "name": "LDV",
        "value": 134
    },
    {
        "name": "Lovol",
        "value": 4222
    },
    {
        "name": "Mack",
        "value": 1541
    },
    {
        "name": "Magirus-Deutz",
        "value": 4488
    },
    {
        "name": "MAN",
        "value": 177
    },
    {
        "name": "MAN-VW",
        "value": 3822
    },
    {
        "name": "Mazda",
        "value": 47
    },
    {
        "name": "Mercedes-Benz",
        "value": 48
    },
    {
        "name": "Mitsubishi",
        "value": 52
    },
    {
        "name": "MUDAN",
        "value": 2362
    },
    {
        "name": "Nissan",
        "value": 55
    },
    {
        "name": "Opel",
        "value": 56
    },
    {
        "name": "Peterbilt",
        "value": 346
    },
    {
        "name": "Peugeot",
        "value": 58
    },
    {
        "name": "Piaggio",
        "value": 313
    },
    {
        "name": "Praga",
        "value": 3040
    },
    {
        "name": "Renault",
        "value": 62
    },
    {
        "name": "Robur",
        "value": 1972
    },
    {
        "name": "Roman",
        "value": 3560
    },
    {
        "name": "Rover",
        "value": 64
    },
    {
        "name": "Runda",
        "value": 4815
    },
    {
        "name": "Samsung",
        "value": 325
    },
    {
        "name": "Scania",
        "value": 203
    },
    {
        "name": "Seddon Atkinsons",
        "value": 3575
    },
    {
        "name": "Shaanxi",
        "value": 2392
    },
    {
        "name": "Shacman",
        "value": 5254
    },
    {
        "name": "Simca",
        "value": 5541
    },
    {
        "name": "Sinotruk",
        "value": 3054
    },
    {
        "name": "Sisu",
        "value": 3457
    },
    {
        "name": "Skoda",
        "value": 70
    },
    {
        "name": "Star",
        "value": 214
    },
    {
        "name": "Sterling",
        "value": 2754
    },
    {
        "name": "Steyr",
        "value": 2476
    },
    {
        "name": "Studebaker",
        "value": 3228
    },
    {
        "name": "Suzuki",
        "value": 76
    },
    {
        "name": "TATA",
        "value": 78
    },
    {
        "name": "Tatra",
        "value": 204
    },
    {
        "name": "Terberg",
        "value": 3074
    },
    {
        "name": "Terex",
        "value": 2102
    },
    {
        "name": "TESAB",
        "value": 4019
    },
    {
        "name": "Tesla",
        "value": 2233
    },
    {
        "name": "Thwaites",
        "value": 5029
    },
    {
        "name": "Toyota",
        "value": 79
    },
    {
        "name": "Van Hool",
        "value": 206
    },
    {
        "name": "Volkswagen",
        "value": 84
    },
    {
        "name": "Volvo",
        "value": 85
    },
    {
        "name": "Western",
        "value": 2488
    },
    {
        "name": "Yuejin",
        "value": 333
    },
    {
        "name": "Zuk",
        "value": 3089
    },
    {
        "name": "Богдан",
        "value": 188
    },
    {
        "name": "ВАЗ",
        "value": 88
    },
    {
        "name": "ВЕПР",
        "value": 4804
    },
    {
        "name": "ГАЗ",
        "value": 91
    },
    {
        "name": "ЕРАЗ",
        "value": 170
    },
    {
        "name": "ЗИЛ",
        "value": 168
    },
    {
        "name": "ЗИС",
        "value": 186
    },
    {
        "name": "КАЗ",
        "value": 163
    },
    {
        "name": "КамАЗ",
        "value": 97
    },
    {
        "name": "КрАЗ",
        "value": 161
    },
    {
        "name": "ЛиАЗ",
        "value": 347
    },
    {
        "name": "МАЗ",
        "value": 159
    },
    {
        "name": "МАЗ-МАН",
        "value": 3067
    },
    {
        "name": "МЗКТ",
        "value": 2329
    },
    {
        "name": "МоАЗ",
        "value": 1773
    },
    {
        "name": "ПАЗ",
        "value": 156
    },
    {
        "name": "РАФ",
        "value": 327
    },
    {
        "name": "САЗ",
        "value": 2325
    },
    {
        "name": "СемАР",
        "value": 4199
    },
    {
        "name": "УАЗ",
        "value": 93
    },
    {
        "name": "Урал",
        "value": 95
    }
];

// CONCATENATED MODULE: ./src/js/data/DataBusesRia.ts
var buses = [
    {
        "name": "Ajokki",
        "value": 5552
    },
    {
        "name": "Ashok Leyland",
        "value": 2550
    },
    {
        "name": "Asia",
        "value": 4
    },
    {
        "name": "AsiaStar",
        "value": 5793
    },
    {
        "name": "Ataman",
        "value": 3981
    },
    {
        "name": "Autosan",
        "value": 340
    },
    {
        "name": "Avia",
        "value": 2077
    },
    {
        "name": "Ayats",
        "value": 3206
    },
    {
        "name": "Barkas",
        "value": 103
    },
    {
        "name": "Baw",
        "value": 1540
    },
    {
        "name": "Bedford",
        "value": 2622
    },
    {
        "name": "Beijing",
        "value": 105
    },
    {
        "name": "Berkof",
        "value": 3095
    },
    {
        "name": "Beulas",
        "value": 4088
    },
    {
        "name": "Blue Bird",
        "value": 2500
    },
    {
        "name": "BMC",
        "value": 3693
    },
    {
        "name": "BOVA",
        "value": 211
    },
    {
        "name": "Carrozzeria Barbi",
        "value": 3763
    },
    {
        "name": "Citroen",
        "value": 15
    },
    {
        "name": "DAB",
        "value": 4168
    },
    {
        "name": "Daewoo",
        "value": 18
    },
    {
        "name": "DAF",
        "value": 115
    },
    {
        "name": "Den Oudsten",
        "value": 4336
    },
    {
        "name": "Dennis",
        "value": 2482
    },
    {
        "name": "Dodge",
        "value": 118
    },
    {
        "name": "Drogmoller",
        "value": 3226
    },
    {
        "name": "EOS",
        "value": 3129
    },
    {
        "name": "Ernst Auwarter",
        "value": 1413
    },
    {
        "name": "FAN",
        "value": 4204
    },
    {
        "name": "Fiat",
        "value": 23
    },
    {
        "name": "Force",
        "value": 2203
    },
    {
        "name": "Ford",
        "value": 24
    },
    {
        "name": "Freightliner",
        "value": 314
    },
    {
        "name": "Golden Dragon",
        "value": 4456
    },
    {
        "name": "Groz",
        "value": 1575
    },
    {
        "name": "Heuliez",
        "value": 3568
    },
    {
        "name": "Higer",
        "value": 2278
    },
    {
        "name": "Hyundai",
        "value": 29
    },
    {
        "name": "International",
        "value": 306
    },
    {
        "name": "Irizar",
        "value": 3684
    },
    {
        "name": "Isuzu",
        "value": 30
    },
    {
        "name": "Iveco",
        "value": 175
    },
    {
        "name": "Iveco Irisbus",
        "value": 1426
    },
    {
        "name": "JAC",
        "value": 317
    },
    {
        "name": "Jelcz",
        "value": 2499
    },
    {
        "name": "Jonckheere",
        "value": 4170
    },
    {
        "name": "Kapena",
        "value": 4014
    },
    {
        "name": "Karosa",
        "value": 412
    },
    {
        "name": "Karsan",
        "value": 5168
    },
    {
        "name": "Kia",
        "value": 33
    },
    {
        "name": "King Long",
        "value": 2676
    },
    {
        "name": "Kutsenits",
        "value": 4770
    },
    {
        "name": "LDV",
        "value": 134
    },
    {
        "name": "Lifan",
        "value": 334
    },
    {
        "name": "MAN",
        "value": 177
    },
    {
        "name": "Marshell",
        "value": 4064
    },
    {
        "name": "Mazda",
        "value": 47
    },
    {
        "name": "MCV",
        "value": 3224
    },
    {
        "name": "MCW",
        "value": 2395
    },
    {
        "name": "Mercedes-Benz",
        "value": 48
    },
    {
        "name": "Mitsubishi",
        "value": 52
    },
    {
        "name": "MUDAN",
        "value": 2362
    },
    {
        "name": "NAW",
        "value": 3290
    },
    {
        "name": "Neoplan",
        "value": 378
    },
    {
        "name": "New Flyer",
        "value": 4370
    },
    {
        "name": "Nissan",
        "value": 55
    },
    {
        "name": "Noge",
        "value": 2326
    },
    {
        "name": "Oghab",
        "value": 4465
    },
    {
        "name": "Opel",
        "value": 56
    },
    {
        "name": "Otokar",
        "value": 2575
    },
    {
        "name": "Peugeot",
        "value": 58
    },
    {
        "name": "Prevost",
        "value": 2441
    },
    {
        "name": "Renault",
        "value": 62
    },
    {
        "name": "Robur",
        "value": 1972
    },
    {
        "name": "Scania",
        "value": 203
    },
    {
        "name": "Setra",
        "value": 384
    },
    {
        "name": "Shaolin",
        "value": 401
    },
    {
        "name": "Solaris",
        "value": 4514
    },
    {
        "name": "SOR",
        "value": 2796
    },
    {
        "name": "Ssang Yong",
        "value": 73
    },
    {
        "name": "TAM",
        "value": 2311
    },
    {
        "name": "TATA",
        "value": 78
    },
    {
        "name": "Temsa",
        "value": 403
    },
    {
        "name": "Thomas",
        "value": 2120
    },
    {
        "name": "Toyota",
        "value": 79
    },
    {
        "name": "Troliga",
        "value": 5503
    },
    {
        "name": "UNVI",
        "value": 5314
    },
    {
        "name": "Van Hool",
        "value": 206
    },
    {
        "name": "VDL",
        "value": 4922
    },
    {
        "name": "Viseon",
        "value": 5776
    },
    {
        "name": "Volat",
        "value": 6001
    },
    {
        "name": "Volkswagen",
        "value": 84
    },
    {
        "name": "Volteco",
        "value": 4368
    },
    {
        "name": "Volvo",
        "value": 85
    },
    {
        "name": "Youyi",
        "value": 405
    },
    {
        "name": "YUTONG",
        "value": 2003
    },
    {
        "name": "Zhong Tong",
        "value": 3580
    },
    {
        "name": "Zuk",
        "value": 3089
    },
    {
        "name": "БАЗ",
        "value": 326
    },
    {
        "name": "Бескид",
        "value": 3225
    },
    {
        "name": "БКМ",
        "value": 2358
    },
    {
        "name": "Богдан",
        "value": 188
    },
    {
        "name": "Волжанин",
        "value": 2806
    },
    {
        "name": "ГАЗ",
        "value": 91
    },
    {
        "name": "ГалАЗ",
        "value": 4060
    },
    {
        "name": "ГолАЗ",
        "value": 410
    },
    {
        "name": "ДАЗ",
        "value": 3097
    },
    {
        "name": "ЗАЗ",
        "value": 89
    },
    {
        "name": "ЗИЛ",
        "value": 168
    },
    {
        "name": "ЗЭЗТС",
        "value": 4163
    },
    {
        "name": "Икарус",
        "value": 167
    },
    {
        "name": "КАВЗ",
        "value": 164
    },
    {
        "name": "Круизер",
        "value": 4016
    },
    {
        "name": "Кубань",
        "value": 3146
    },
    {
        "name": "ЛАЗ",
        "value": 160
    },
    {
        "name": "ЛиАЗ",
        "value": 347
    },
    {
        "name": "МАЗ",
        "value": 159
    },
    {
        "name": "МАРЗ",
        "value": 2181
    },
    {
        "name": "Неман",
        "value": 1631
    },
    {
        "name": "Нефаз",
        "value": 2128
    },
    {
        "name": "ПАЗ",
        "value": 156
    },
    {
        "name": "РАФ",
        "value": 327
    },
    {
        "name": "РУТА",
        "value": 408
    },
    {
        "name": "Сварог",
        "value": 4002
    },
    {
        "name": "Скиф",
        "value": 1973
    },
    {
        "name": "Стрый Авто",
        "value": 4320
    },
    {
        "name": "Таджикистан",
        "value": 2054
    },
    {
        "name": "ТролЗа",
        "value": 4755
    },
    {
        "name": "ТУР",
        "value": 409
    },
    {
        "name": "УАЗ",
        "value": 93
    },
    {
        "name": "мрія",
        "value": 5309
    },
    {
        "name": "Укравтобуспром",
        "value": 4899
    },
    {
        "name": "ХАЗ",
        "value": 390
    },
    {
        "name": "ЧАЗ",
        "value": 1410
    },
    {
        "name": "ЧЗСА",
        "value": 3033
    },
    {
        "name": "ЧРЗ",
        "value": 4679
    }
];

// CONCATENATED MODULE: ./src/js/utils/UtilsRia.ts




var UtilsRia_UtilsRia = /** @class */ (function () {
    function UtilsRia() {
    }
    UtilsRia.generateUrlToGetModelValue = function (url, categoryValue, brandValue, key) {
        return url + "/categories/" + categoryValue + "/marks/" + brandValue + "/models?api_key=" + key;
    };
    UtilsRia.generateUrlToSearchAdsIds = function (url, categoryValue, brandValue, modelValue, make_year, key) {
        return url + "/search?api_key=" + key + "&category_id=" + categoryValue + "&marka_id[0]=" + brandValue + "&model_id[0]=" + modelValue + "&s_yers[0]=" + make_year + "&abroad=2&custom=1&countpage=10&with_photo=1";
    };
    UtilsRia.generateUrlToGetAdsContent = function (url, key, adsId) {
        return url + "/info?api_key=" + key + "&auto_id=" + adsId;
    };
    UtilsRia.detectCategory = function (category) {
        switch (category.toUpperCase().trim()) {
            case "ЛЕГКОВИЙ":
                return 1;
            case "МОПЕД":
                return 2;
            case "МОТОТРИЦИКЛ":
                return 2;
            case "МОТОЦИКЛ":
                return 2;
            case "ТРИЦИКЛ":
                return 2;
            case "КВАДРОЦИКЛ":
                return 2;
            case "ПРИЧІП":
                return 5;
            case "НАПІВПРИЧІП":
                return 5;
            case "ВАНТАЖНИЙ":
                return 6;
            case "АВТОБУС":
                return 7;
            default:
                return 0;
        }
    };
    UtilsRia.detectTypeByCategory = function (category) {
        switch (category) {
            case 1:
                return "Легковий";
            case 2:
                return "Мотоцикл";
            case 5:
                return "Причіп";
            case 6:
                return "Вантажний";
            case 7:
                return "Автобус";
            default:
                return "";
        }
    };
    UtilsRia.detectBrandMatrix = function (categoryValue) {
        switch (categoryValue) {
            case 1:
                return cars;
            case 2:
                return motos;
            case 6:
                return trucks;
            case 7:
                return buses;
            default:
                return [];
        }
    };
    UtilsRia.excludeModelFromBrand = function (brandValue, modelValue) {
        return brandValue !== modelValue ? brandValue.replace(modelValue, "").trim() : brandValue.trim();
    };
    UtilsRia.detectModelValue = function (brandArray, brand) {
        var result = brandArray.filter(function (i) { return i.name.toLowerCase() === brand.toLowerCase(); });
        return result.length > 0
            ? result[0].value
            : 0;
    };
    UtilsRia.detectBodyStyleByValue = function (brandArray, value) {
        var result = brandArray.filter(function (i) { return i.value === value; });
        return result.length > 0
            ? result[0].name
            : "";
    };
    return UtilsRia;
}());
/* harmony default export */ var utils_UtilsRia = __webpack_exports__["a"] = (UtilsRia_UtilsRia);


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;
var UtilsAsync = /** @class */ (function () {
    function UtilsAsync() {
    }
    /**
      * Function to play sound
      * Sound source:
      *      "https://notificationsounds.com/notification-sounds/sharp-592"
      */
    UtilsAsync.playNotification = function () {
        var audio_source = "audio/sharp.mp3";
        var audio = new Audio(audio_source);
        audio.play();
    };
    /**     gets default device
     */
    UtilsAsync.getVideoDevices = function () { return __awaiter(_this, void 0, Promise, function () {
        var deviceInfos;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, navigator.mediaDevices.enumerateDevices()];
                case 1:
                    deviceInfos = _a.sent();
                    return [2 /*return*/, deviceInfos.filter(function (d) { return d.kind == "videoinput"; })];
            }
        });
    }); };
    return UtilsAsync;
}());
/* harmony default export */ __webpack_exports__["a"] = (UtilsAsync);


/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/js/locale/en.ts
var lang = {
    searchInputPlaceholderText: "Enter plate or VIN",
    dashBoradTitle: "Cars UA",
    copyright: "Copyright © ",
    documentTitle: "Car plate UA",
    noResultMessage: "Sorry, there are no results",
    login: "Login",
    logout: "Logout",
    login_google: "Login with Google",
    login_facebook: "Login with Facebook",
    loggedInText: "You are logged in using",
    rowKey: "Car plate",
    brand: "Brand",
    model: "Model",
    modelBrand: "Brand",
    make_year: "Year",
    body: "Body",
    capacity: "Engine capacity",
    color: "Color",
    own_weight: "Own weight",
    total_weight: "Total weight",
    weight: "Own weight/Total weight",
    fuel: "Fuel",
    kind: "Type",
    purpose: "Car purpose",
    oper_code: "Vehicle registration code",
    oper_name: "Vehicle registration",
    person: "Owner",
    person_private: "Private entity",
    person_company: "Legal entity",
    d_reg: "Registration date",
    dep: "Police department",
    dep_code: "Police department code",
    reg_addr_koatuu: "KOATUU registration address",
    region: "Region",
    cameraActions: ["Take a picture", "Attach image"],
    imgRecognizingMessage: "Image is recognizing, please wait",
    details: "Details",
    race: "Race",
    gearbox: "Gearbox",
    phone: "Phone",
    messageChooseImage: "Please choose image file!",
    messageImageLimit: "File should be less then 5 MB!",
    messageTurnOnCamera: "Please turn on the camera or give access to use camera!",
    messageTurnOnFrontCamera: "Choose Camera",
    messageMaxFavsLimit: "You can follow 50 cars maximum!",
    url_search: "Search",
    url_favs: "Favorites",
    url_notifications: "Notifications",
    url_about: "About",
    url_profile: "Profile",
    url_lang: "Language",
    url_disqus: "Disqus",
    url_store: "Store",
    url_install: "Install App",
    card_settings: "Settings",
    card_addToFavs: "Add to Favorites",
    card_removeFromToFavs: "Remove from Favorites",
    card_share: "Share",
    card_showMore: "Show more",
    card_openOriginalAds: "Open original ads",
    card_openOriginalImage: "Open original image",
    card_openOriginalWebSite: "Open original web site",
    card_ResultImagesFrom: "Result images from",
    card_ImgDate: "Image date",
    about_1_app: "This app provides vehicle data since in January 2013.",
    about_2_mvd: "The information about the vehicles and their owners is taken from the single state open data portal https://data.gov.ua, managed by the Ministry of Internal Affairs of Ukraine.",
    about_3_kabMin: "The only state open data portal was created at the request of the Law of Ukraine “On Access to Public Information” and the Decree of the Cabinet of Ministers of Ukraine of October 21, 2015 No. 835 “On Approval of the Regulations on Data Sets to be Disclosed in the Form of Open Data”.",
    about_4_portal: "The portal is intended to provide access to public information in the form of open data and provides access to information by authorities with the possibility of its subsequent use.",
    about_5_sharing: "Anyone may freely copy, publish, distribute, use, including for commercial purposes, in combination with other information or by incorporating their own product, public information in the form of open data, with a mandatory link to the source of such information.",
    about_6_mit: "MIT License",
    about_7_mit_1: "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:",
    about_8_mit_2: "The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.",
    about_9_mit_3: "THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.",
};

// CONCATENATED MODULE: ./src/js/locale/ua.ts
var ua_lang = {
    searchInputPlaceholderText: "Введіть номер або VIN",
    dashBoradTitle: "Авто UA",
    copyright: "Авторські права © ",
    documentTitle: "Автівки України",
    noResultMessage: "Вибачте, результатів немає",
    login: "Увійти",
    logout: "Вийти",
    login_google: "Увійти через Google",
    login_facebook: "Увійти через Facebook",
    loggedInText: "Ви увійшли через",
    rowKey: "Номер автівки",
    brand: "Бренд",
    model: "Модель",
    modelBrand: "Бренд",
    make_year: "Рік",
    body: "Кузов",
    capacity: "Об'єм двигуна",
    color: "Колір",
    own_weight: "Власна вага",
    total_weight: "Загальна вага",
    weight: "Власна/Загальна вага",
    fuel: "Паливо",
    kind: "Тип автівки",
    purpose: "Призначення автівки",
    person: "Власник",
    person_private: "Приватна особа",
    person_company: "Юридична особа",
    d_reg: "Дата Реєстрації",
    dep: "Сервісний центр МВС",
    dep_code: "Сервісний центр МВС (код)",
    oper_code: "Реєстрація транспортного засобу (код)",
    oper_name: "Реєстрація транспортного засобу",
    reg_addr_koatuu: "Адреса реєстрації КОАТУУ",
    region: "Регіон",
    cameraActions: ["Сфотографувати", "Прикріпити зображення"],
    imgRecognizingMessage: "Зображення розпізнається, зачекайте",
    details: "Характеристики",
    race: "Пробіг",
    gearbox: "Коробка передач",
    phone: "Мобільний",
    messageChooseImage: "Виберіть зображення!",
    messageImageLimit: "Файл повинен бути менше 5 Мб!",
    messageTurnOnCamera: "Будь ласка, увімкніть камеру або надайте доступ для використання камери!",
    messageTurnOnFrontCamera: "Оберіть камеру",
    messageMaxFavsLimit: "Ви можете додати максимум 50 автівок!",
    url_search: "Пошук",
    url_favs: "Обране",
    url_notifications: "Сповіщення",
    url_about: "Про додаток",
    url_profile: "Профіль",
    url_lang: "Мова",
    url_disqus: "Обговорити",
    url_store: "Магазин",
    url_install: "Встановити додаток",
    card_settings: "Налаштування",
    card_addToFavs: "Додати до обраного",
    card_removeFromToFavs: "Видалити з обранного",
    card_share: "Поділитися",
    card_showMore: "Показати більше",
    card_openOriginalAds: "Відкрити оригінальні оголошення",
    card_openOriginalImage: "Відкрити оригінальне зображення",
    card_openOriginalWebSite: "Відкрити оригінальний сайт",
    card_ResultImagesFrom: "Зображення з ресурсу",
    card_ImgDate: "Дата світлини",
    about_1_app: "Цей додаток надає дані щодо транспортних засобів починаючі з січня 2013 року.",
    about_2_mvd: "Відомості про транспортні засоби та їх власників взяті з єдиного державного веб-порталу відкритих даних https://data.gov.ua, яким керує Міністерство внутрішніх справ України.",
    about_3_kabMin: "Єдиний державний веб-портал відкритих даних створено на вимогу Закону України «Про доступ до публічної інформації» та постанови Кабінету Міністрів України від 21 жовтня 2015 р. № 835 «Про затвердження Положення про набори даних, які підлягають оприлюдненню у формі відкритих даних».",
    about_4_portal: "Портал призначений для забезпечення надання доступу до публічної інформації у формі відкритих даних та передбачає доступ до інформації органів влади з можливістю її наступного використання.",
    about_5_sharing: "Будь-яка особа може вільно копіювати, публікувати, поширювати, використовувати, у тому числі в комерційних цілях, у поєднанні з іншою інформацією або шляхом включення до складу власного продукту, публічну інформацію у формі відкритих даних з обов’язковим посиланням на джерело отримання такої інформації.",
    about_6_mit: "Ліцензія MIT",
    about_7_mit_1: "Справжнім дозволяється, безоплатно, будь-якій особі, що отримала копію цього програмного забезпечення та супутньої документації (в подальшому 'Програмне забезпечення'), використовувати Програмне забезпечення без обмежень, зокрема без обмежень, прав на використання, копіювання, змінювання, доповнення, публікацію, поширення, субліцензування та / або продаж копій Програмного забезпечення, також як і особам, яким надається це Програмне забезпечення, за дотримання наступних умов:",
    about_8_mit_2: "Вищезгадані авторські права та ці умови мають бути включені в усі копії або значущі частини цього Програмного забезпечення.",
    about_9_mit_3: "ДІЙСНЕ ПРОГРАМНЕ ЗАБЕЗПЕЧЕННЯ НАДАЄТЬСЯ «ЯК Є», БЕЗ ГАРАНТІЙ БУДЬ-ЯКОГО ВИДУ, ПРЯМИХ АБО НЕПРЯМИХ, ВКЛЮЧАЮЧИ, АЛЕ НЕ ОБМЕЖУЮЧИСЬ, ГАРАНТІЯМИ КОМЕРЦІЙНОЇ ВИГОДИ, ВІДПОВІДНОСТІ ЙОГО КОНКРЕТНОМУ ПРИЗНАЧЕННЮ Й ВІДСУТНОСТІ ПОРУШЕННЯ ПРАВ. У ЖОДНОМУ РАЗІ АВТОРИ АБО ВЛАСНИКИ АВТОРСЬКИХ ПРАВ НЕ ВІДПОВІДАЮТЬ ЗА БУДЬ-ЯКИМИ СУДОВИМИ ПОЗОВАМИ, ЩОДО ЗБИТКІВ АБО ІНШИХ ПРЕТЕНЗІЙ, ЧИ ДІЙ ДОГОВОРУ, ЦИВІЛЬНОГО ПРАВОПОРУШЕННЯ АБО ІНШИХ, ЩО ВИНИКАЮТЬ ПОЗА, АБО У ЗВ'ЯЗКУ З ПРОГРАМНИМ ЗАБЕЗПЕЧЕННЯМ АБО ВИКОРИСТАННЯМ ЧИ ІНШИМИ ДІЯМИ ПРОГРАМНОГО ЗАБЕЗПЕЧЕННЯ.",
};

// CONCATENATED MODULE: ./src/js/locale/ru.ts
var ru_lang = {
    searchInputPlaceholderText: "Введите номер или VIN",
    dashBoradTitle: "Авто UA",
    copyright: "Авторские права © ",
    documentTitle: "Автомобили Украины",
    noResultMessage: "Сорян, результатов нет",
    login: "Войти",
    logout: "Выйти",
    login_google: "Войти через Google",
    login_facebook: "Войти через Facebook",
    loggedInText: "Вы зашли через",
    rowKey: "Номер авто",
    brand: "Бренд",
    model: "Модель",
    modelBrand: "Бренд",
    make_year: "Год",
    body: "Кузов",
    capacity: "Объем двигателя",
    color: "Цвет",
    own_weight: "Собственный вес",
    total_weight: "Общий вес",
    weight: "Собственный/Общий вес",
    fuel: "Топливо",
    kind: "Тип авто",
    purpose: "Назначение машины",
    person: "Собственник",
    person_private: "Приватное лицо",
    person_company: "Юридическое лицо",
    d_reg: "Дата Регистрации",
    dep: "Сервисный центр МВД",
    dep_code: "Сервисный центр МВД (код)",
    oper_code: "Регистрация транспортного средства (код)",
    oper_name: "Регистрация транспортного средства",
    reg_addr_koatuu: "Адрес регистрации КОАТУУ",
    region: "Регион",
    cameraActions: ["Сфотографировать", "Добавить фотографию"],
    imgRecognizingMessage: "Изображение распознается, подождите",
    messageTurnOnCamera: "Пожалуйста, включите камеру или предоставьте камере права!",
    messageTurnOnFrontCamera: "Выберите камеру",
    details: "Характеристики",
    race: "Пробег",
    gearbox: "Коробка передач",
    phone: "Мобильний",
    messageChooseImage: "Виберите изображение!",
    messageImageLimit: "Файл должен быть менше 5 Мб!",
    messageMaxFavsLimit: "Вы можете добавлять максимум 50 авто!",
    url_search: "Поиск",
    url_favs: "Избранное",
    url_notifications: "Уведомления",
    url_about: "Про приложение",
    url_profile: "Профиль",
    url_lang: "Язык",
    url_disqus: "Обсудить",
    url_store: "Магазин",
    url_install: "Установить",
    card_settings: "Настройки",
    card_addToFavs: "Добавить в избранное",
    card_removeFromToFavs: "Убрать из избранного",
    card_share: "Поделится",
    card_showMore: "Показать больше",
    card_openOriginalAds: "Открыть оригинальное объявление",
    card_openOriginalImage: "Открыть оригинальное изображение",
    card_openOriginalWebSite: "Открыть оригинальнвй сайт",
    card_ResultImagesFrom: "Изображение с ресурса",
    card_ImgDate: "Дата фотографии",
    about_1_app: "Это приложение предоставляет данные транспортных средств наичная с января 2013 года.",
    about_2_mvd: "Сведения о транспортных средствах и их собственников взяты из единого государственного веб-портала открытых данных https://data.gov.ua, которым руководит Министерство внутренних дел Украины.",
    about_3_kabMin: "Единый государственный веб-портал открытых данных создан по требованию Закона Украины «О доступе к публичной информации» и постановления Кабинета министров Украины от 21 октября 2015 года. № 835 «Об утверждении Положения о наборах данных, которые подлежат обнародованию в форме открытых данных».",
    about_4_portal: "Портал предназначен для Предоставление доступа к публичной информации в форме открытых данных и предполагает доступ к информации ОРГАНОВ власти с возможностью ее следующего использования.",
    about_5_sharing: "Любое лицо может свободно копировать, публиковать, распространять, использовать, в том числе в коммерческих целях, в сочетании с другой информацией или Путем включения в состав собственного продукта, публичной информации в форме открытых данных с обязательным ссылку на агентство источник Получение такой информации.",
    about_6_mit: "MIT лицензия",
    about_7_mit_1: "Данная лицензия разрешает лицам, получившим копию данного программного обеспечения и сопутствующей документации (в дальнейшем именуемыми «Программное обеспечение»), безвозмездно использовать Программное обеспечение без ограничений, включая неограниченное право на использование, копирование, изменение, слияние, публикацию, распространение, сублицензирование и/или продажу копий Программного обеспечения, а также лицам, которым предоставляется данное Программное обеспечение, при соблюдении следующих условий:",
    about_8_mit_2: "Указанное выше уведомление об авторском праве и данные условия должны быть включены во все копии или значимые части данного Программного обеспечения.",
    about_9_mit_3: "ДАННОЕ ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ ПРЕДОСТАВЛЯЕТСЯ «КАК ЕСТЬ», БЕЗ КАКИХ-ЛИБО ГАРАНТИЙ, ЯВНО ВЫРАЖЕННЫХ ИЛИ ПОДРАЗУМЕВАЕМЫХ, ВКЛЮЧАЯ ГАРАНТИИ ТОВАРНОЙ ПРИГОДНОСТИ, СООТВЕТСТВИЯ ПО ЕГО КОНКРЕТНОМУ НАЗНАЧЕНИЮ И ОТСУТСТВИЯ НАРУШЕНИЙ, НО НЕ ОГРАНИЧИВАЯСЬ ИМИ. НИ В КАКОМ СЛУЧАЕ АВТОРЫ ИЛИ ПРАВООБЛАДАТЕЛИ НЕ НЕСУТ ОТВЕТСТВЕННОСТИ ПО КАКИМ-ЛИБО ИСКАМ, ЗА УЩЕРБ ИЛИ ПО ИНЫМ ТРЕБОВАНИЯМ, В ТОМ ЧИСЛЕ, ПРИ ДЕЙСТВИИ КОНТРАКТА, ДЕЛИКТЕ ИЛИ ИНОЙ СИТУАЦИИ, ВОЗНИКШИМ ИЗ-ЗА ИСПОЛЬЗОВАНИЯ ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ ИЛИ ИНЫХ ДЕЙСТВИЙ С ПРОГРАММНЫМ ОБЕСПЕЧЕНИЕМ.",
};

// CONCATENATED MODULE: ./src/js/locale/index.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return locale_lang; });



function locale_lang(Storelang) {
    switch (Storelang) {
        case 0:
            return ua_lang;
        case 1:
            return ru_lang;
        case 2:
            return lang;
        default:
            return ua_lang;
    }
}
;


/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * Function to get Current Domain Url
     * Samples:
     *      "https://domain.sharepoint.com"
     */
    Utils.getAbsoluteDomainUrl = function (windowObj) {
        return windowObj.location.protocol + "//" + windowObj.location.host;
    };
    /**
      * The reduce() method executes a reducer function on each element of the array, resulting in a single output value
      */
    Utils.reducer = function (accumulator, currentValue) {
        return accumulator + currentValue;
    };
    /**
      * Function to check if value is Latin character in uppercase
      */
    Utils.latinRange = function (val) {
        var code = val.charCodeAt(0);
        return (code > 64 && code < 91) ? true : false;
    };
    /**
      * Function to remove spaces surrounded a value
      */
    Utils.trimData = function (val) {
        return val.replace(/ /g, '');
    };
    /**
      * Function to combine together converted symbols
      */
    Utils.combineConvertedSymbols = function (s, latinRange, latinToCyrillicMatrix, reducer) {
        return s.split("").map(function (i) {
            if (latinRange(i)) {
                return latinToCyrillicMatrix(i);
            }
            return i;
        }).reduce(reducer);
    };
    /**
      * Function to convert latin symbols to cyrillic, that looks similar: A,B,C,E,H,I,K,M,O,P,T,X
      */
    Utils.latinToCyrillicMatrix = function (i) {
        switch (i.charCodeAt(0)) {
            case 65:
                return String.fromCharCode(1040);
            case 66:
                return String.fromCharCode(1042);
            case 67:
                return String.fromCharCode(1057);
            case 69:
                return String.fromCharCode(1045);
            case 72:
                return String.fromCharCode(1053);
            case 73:
                return String.fromCharCode(1030);
            case 75:
                return String.fromCharCode(1050);
            case 77:
                return String.fromCharCode(1052);
            case 79:
                return String.fromCharCode(1054);
            case 80:
                return String.fromCharCode(1056);
            case 84:
                return String.fromCharCode(1058);
            case 88:
                return String.fromCharCode(1061);
            default:
                return i;
        }
    };
    /**
    * Function to check if value is Latin character in uppercase
    */
    Utils.cyrillicRange = function (val) {
        var code = val.charCodeAt(0);
        return (code > 1029 && code < 1062) ? true : false;
    };
    /**
    * Function to convert cyrillic symbols to latin, that looks similar: A,B,C,E,H,I,K,M,O,P,T,X
    */
    Utils.cyrillicToLatinToMatrix = function (i) {
        switch (i.charCodeAt(0)) {
            case 1040:
                return String.fromCharCode(65);
            case 1042:
                return String.fromCharCode(66);
            case 1057:
                return String.fromCharCode(67);
            case 1045:
                return String.fromCharCode(69);
            case 1053:
                return String.fromCharCode(72);
            case 1030:
                return String.fromCharCode(73);
            case 1050:
                return String.fromCharCode(75);
            case 1052:
                return String.fromCharCode(77);
            case 1054:
                return String.fromCharCode(79);
            case 1056:
                return String.fromCharCode(80);
            case 1058:
                return String.fromCharCode(84);
            case 1061:
                return String.fromCharCode(88);
            default:
                return i;
        }
    };
    /**
      * Function to prepare the url to connect to azure table storage to get car plate data by row key and partition key
      */
    Utils.shapeUrlPlate = function (url, rowKey, partitionKey) {
        return url + "&$filter=RowKey eq '" + rowKey + "' and PartitionKey eq '" + partitionKey + "'";
    };
    /**
      * Function to prepare the url to connect to external service to get car vin number
      * Source:
      *       https://vpic.nhtsa.dot.gov
      */
    Utils.shapeUrlVin = function (url, value) {
        return url + "/" + value + "?format=json";
    };
    /**
      * Function to exctract the first two characters from provided value
      */
    Utils.extractPartitionKey = function (val) {
        return val.substr(0, 2);
    };
    /**
      * Function to replace the "1" to "I".
      * The image car plate recognizer external service doesn't work with "I" symbol.
      * It detects "I" as "1" and service returns the "1".
      * Source:
      *       https://api.platerecognizer.com/v1/plate-reader/
      */
    Utils.changeSymbols1toI = function (val) {
        return val.substr(0, 2).replace(/1/g, 'I') + val.substr(2, 4) + val.substr(val.length - 2).replace(/1/g, 'I');
    };
    /**
      * Function to check if the value is undefined or null
      */
    Utils.checkIsUndefinedOrNull = function (value) {
        if (value === undefined || value === null) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
      * Function to generate the url for external service to get the car images by providing the car plate
      * Source:
      *       http://avto-nomer.ru/mobile/api_photo_test.php?nomer=a001aa22
      */
    Utils.generateUrlforPlatesmania = function (url, key, itemRequest) {
        //const shapedInputRequest = 'a001aa22';
        return url + "?key=" + key + "&gal=2&nomer=" + itemRequest;
    };
    /**
      * Function to replace https with https protocols in url
      */
    Utils.replaceHttpWithHttps = function (url) {
        return url.replace("http", "https");
    };
    /**
      * Function to detect if the item is already added to provided array
      */
    Utils.isItemAlreadyAdded = function (items, rowNumber) {
        return items.filter(function (i) { return i.n_reg_new === rowNumber; }).length > 0
            ? true
            : false;
    };
    /**
      * Function to detect color and return appropriate color
      */
    Utils.detectColor = function (color, classes) {
        switch (color.toUpperCase()) {
            case 'БЕЖЕВИЙ':
                return classes.avatarBeige;
            case 'БІЛИЙ':
                return classes.avatarWhite;
            case 'ЖОВТИЙ':
                return classes.avatarYellow;
            case 'ЗЕЛЕНИЙ':
                return classes.avatarGreen;
            case 'КОРИЧНЕВИЙ':
                return classes.avatarBrown;
            case 'ОРАНЖЕВИЙ':
                return classes.avatarOrange;
            case 'СИНІЙ':
                return classes.avatarBlue;
            case 'СІРИЙ':
                return classes.avatarGrey;
            case 'ФІОЛЕТОВИЙ':
                return classes.avatarPurple;
            case 'ЧЕРВОНИЙ':
                return classes.avatarRed;
            case 'ЧОРНИЙ':
                return classes.avatarBlack;
            default:
                return classes.avatarBlue;
        }
    };
    /**
      * Function to generate current date string
      */
    Utils.generateCurrentDate = function () {
        var date = new Date;
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        return year + "/" + month + "/" + day;
    };
    /**
      * Function to check is user was Authenticated
      */
    Utils.isUserAuthenticated = function (vendor) {
        return vendor > 0
            ? true
            : false;
    };
    /**
      * Function to generate the RowKey & PartitionKey to azure service to get user's data
      */
    Utils.generateRowKeyAndPartitionKey = function (email) {
        return Utils.checkIsUndefinedOrNull(email) === true
            ? {
                "PartitionKey": "",
                "RowKey": ""
            }
            : {
                "PartitionKey": email,
                "RowKey": email.split("@")[1]
            };
    };
    /**
      * Function to generate the url to azure service to update user's data
      */
    Utils.generateUrlToUpdateUser = function (url, query, PartitionKey, RowKey) {
        return url + "(PartitionKey='" + PartitionKey + "', RowKey='" + RowKey + "')" + query;
    };
    /**
      * Function to remove duplicate objects from array and leave unique values only
      */
    Utils.removeDuplicateObjectsFromArray = function (items) {
        return items.filter(function (thing, index) {
            var _thing = JSON.stringify(thing);
            return index === items.findIndex(function (obj) {
                return JSON.stringify(obj) === _thing;
            });
        });
    };
    /**
      * Function to remove object from array
      */
    Utils.removeObjectFromArray = function (itemsArray, itemToRemove) {
        return itemsArray.filter(function (i) { return i["RowKey"] !== itemToRemove["RowKey"]; });
    };
    /**
      * Function to merge the Item's arrays: from local storage and from cloud
      */
    Utils.mergeItems = function (data, favorites, item, addRemoveItem) {
        if (data.length > 0) {
            var cloudData = JSON.parse(data[0].Favorites);
            var localStorageData = favorites;
            var combinedItemsDuplicates = localStorageData.concat(cloudData);
            if (item === null) {
                return Utils.removeDuplicateObjectsFromArray(combinedItemsDuplicates);
            }
            if (addRemoveItem === true) {
                var combinedItems = [item].concat(combinedItemsDuplicates);
                return Utils.removeDuplicateObjectsFromArray(combinedItems);
            }
            if (addRemoveItem === false) {
                var combinedItemsUnique = Utils.removeDuplicateObjectsFromArray(combinedItemsDuplicates);
                return Utils.removeObjectFromArray(combinedItemsUnique, item);
            }
        }
        else {
            if (item === null) {
                return favorites;
            }
            if (addRemoveItem === true) {
                return [item].concat(favorites);
            }
            if (addRemoveItem === false) {
                return Utils.removeObjectFromArray(favorites, item);
            }
        }
    };
    /**
      * Function to generate the body for updateUser service
      */
    Utils.generateBodyForUpdateUser = function (items) {
        var body = {
            "Favorites": JSON.stringify(items)
        };
        return JSON.stringify(body);
    };
    /**
      * Function to check if the limit is exceeded
      */
    Utils.isLimitExceeded = function (count, limit) {
        return count >= limit
            ? true
            : false;
    };
    /**
      * Function to check the image file type of the provided blob file
      */
    Utils.checkFileType = function (type) {
        if (type.indexOf("image") === -1) {
            return false;
        }
        else {
            return true;
        }
    };
    /**
    * Function to check is the size of blob file more than 5MB
    */
    Utils.checkImageSize = function (size) {
        if (size > 5000000) {
            return false;
        }
        else {
            return true;
        }
    };
    return Utils;
}());
/* harmony default export */ __webpack_exports__["a"] = (Utils);


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return itemSearching; });
/* unused harmony export Auth */
var Lang;
(function (Lang) {
    Lang[Lang["ua"] = 0] = "ua";
    Lang[Lang["ru"] = 1] = "ru";
    Lang[Lang["en"] = 2] = "en";
})(Lang || (Lang = {}));
var itemSearching;
(function (itemSearching) {
    itemSearching[itemSearching["plate"] = 0] = "plate";
    itemSearching[itemSearching["vin"] = 1] = "vin";
    itemSearching[itemSearching["insurance"] = 2] = "insurance";
    itemSearching[itemSearching["imageAttach"] = 3] = "imageAttach";
    itemSearching[itemSearching["imageTake"] = 4] = "imageTake";
})(itemSearching || (itemSearching = {}));
var Auth;
(function (Auth) {
    Auth[Auth["none"] = 0] = "none";
    Auth[Auth["facebook"] = 1] = "facebook";
    Auth[Auth["google"] = 2] = "google";
    Auth[Auth["twitter"] = 3] = "twitter";
    Auth[Auth["github"] = 4] = "github";
    Auth[Auth["email"] = 5] = "email";
    Auth[Auth["phone"] = 6] = "phone";
})(Auth || (Auth = {}));


/***/ })

},[[207,1,2]]]);