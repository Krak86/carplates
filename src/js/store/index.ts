import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { getReducer } from "./reducers";

export const rootReducer = combineReducers({
  Item: getReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const configureStore = () => {
  const middleware = [thunk];
  const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
  const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(...middleware))
  );
  return store;
}
//https://codesandbox.io/s/redux-typescript-example-5bw4y