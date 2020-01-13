import React from "react";
import App from "../components/App";
import { domElements, initialData } from "../data/Data";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "../redux";
import { render } from "@testing-library/react";

function renderWithRedux(
    ui: any,
    {store = createStore(rootReducer, {
        Item: {
          ...initialData,
        },
      })} = {},
  ) {
    return {
      ...render(<Provider store={store}>{ui}</Provider>),
      store,
    };
  }

test("Detect Search Component", () => {
    const { getByTestId } = renderWithRedux(<App />);
    const searchComponent = getByTestId(domElements.searchComponent);
    expect(searchComponent).toBe("");
});
