import React from "react";
import * as enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import { SearchField } from "../components/search/SearchField";
import { configureStore } from "../redux";
import { createMount } from "@material-ui/core/test-utils";
import { createShallow } from "@material-ui/core/test-utils";
import Paper from "@material-ui/core/Paper";
import Snackbar from "@material-ui/core/Snackbar";
import { DialogVideoWindow } from "../components/video/DialogVideoWindow";

enzyme.configure({ adapter: new Adapter() });

describe("<SearchField />", () => {
    const store = configureStore();
    const element = <Provider store={store}><SearchField /></Provider>;
    let shallow;
    beforeAll(() => {
      shallow = createShallow();
    });
});
