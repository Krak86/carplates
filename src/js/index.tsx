import "react-app-polyfill/ie11";
import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { configureStore } from "./redux";
import * as serviceWorker from "./registerServiceWorker";
import { HashRouter } from "react-router-dom";

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <HashRouter >
      <App />
    </HashRouter >
  </Provider>
);

render(<Root />, document.getElementById("root"));

serviceWorker.register();
