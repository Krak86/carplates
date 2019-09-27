import React from 'react';
import { render } from 'react-dom';
import Dashboard from './components/Dashboard';
import { Provider } from "react-redux";
import { configureStore } from "./store";
import * as serviceWorker from './registerServiceWorker';
import { BrowserRouter, HashRouter  } from "react-router-dom";

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <HashRouter >
      <Dashboard />
    </HashRouter >
  </Provider>
);

render(<Root />, document.getElementById("root"));

serviceWorker.register();