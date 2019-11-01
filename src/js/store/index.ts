import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import Utils from "../utils/Utils";
import { initialData } from "../data/Data";
import { getReducer } from "./reducers";

const persistedState = Utils.loadState();

export const rootReducer = combineReducers({
  Item: getReducer
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
        ...persistedState
      }
    },
    composeWithDevTools(middleWareEnhancer)
  );
  store.subscribe(() => {
    Utils.saveState({
      favorites: store.getState().Item.favorites,
      lang: store.getState().Item.lang
    })
  });

  return store;
}
//https://codesandbox.io/s/redux-typescript-example-5bw4y