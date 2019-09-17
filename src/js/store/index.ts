import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { getReducer } from "./reducers";

export const rootReducer = combineReducers({
  Item: getReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const configureStore = () => {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer =  applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
//https://codesandbox.io/s/redux-typescript-example-5bw4y