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
        favorites: persistedState
      }
    },
    composeWithDevTools(middleWareEnhancer)
  );
  store.subscribe(() => {
    Utils.saveState(store.getState().Item.favorites)
  });

  return store;
}
//https://codesandbox.io/s/redux-typescript-example-5bw4y