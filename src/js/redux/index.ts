import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import UtilsStorage from "../utils/UtilsStorage";
import { initialData } from "../data/Data";
import { getReducer } from "./reducers";
import { rootSaga } from "../sagas";
/* tslint:disable no-commented-code */
// needed for thunk
// import thunkMiddleware from "redux-thunk";

const persistedState = UtilsStorage.loadState();

export const rootReducer = combineReducers({
  Item: getReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export const configureStore = () => {
  /* tslint:disable no-commented-code */
  // needed for saga
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [/*thunkMiddleware*/sagaMiddleware];
  const middleWareEnhancer =  applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    {
      Item: {
        ...initialData,
        ...persistedState,
      },
    },
    composeWithDevTools(middleWareEnhancer),
  );
  store.subscribe(() => {
    UtilsStorage.saveState({
      favorites: store.getState().Item.favorites,
      lang: store.getState().Item.lang,
      itemsList: store.getState().Item.itemsList,
      loggedIn: store.getState().Item.loggedIn,
    });
  });
  /* tslint:disable no-commented-code */
  // needed for saga
  sagaMiddleware.run(rootSaga);
  return store;
};
