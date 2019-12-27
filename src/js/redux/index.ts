import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import UtilsStorage from "../utils/UtilsStorage";
import { initialData } from "../data/Data";
import { getReducer } from "./reducers";

const persistedState = UtilsStorage.loadState();

export const rootReducer = combineReducers({
  Item: getReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const configureStore = () => {
  const middlewares = [thunkMiddleware];
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

  return store;
};
