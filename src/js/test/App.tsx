import React from "react";
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux'
import { SearchField } from "../components/search/SearchField";
import { configureStore } from "../redux";

import { createMount } from '@material-ui/core/test-utils';
import { createShallow } from '@material-ui/core/test-utils';

import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import { DialogVideoWindow } from "../components/video/DialogVideoWindow";

enzyme.configure({ adapter: new Adapter() });

describe('<SearchField />', () => {
    const store = configureStore();
    const element = <Provider store={store}><SearchField /></Provider>;
    let shallow;
  
    beforeAll(() => {
      shallow = createShallow();
    });
    it('should work', () => {
      const container = shallow(element);
    });
  });
/*
describe("<SearchField/> with no props>", () => {
    const store = configureStore();
    const container = enzyme.shallow(<Provider store={store}><SearchField /></Provider>);
    it("should match the snapshot", () => {
        expect(container.html()).toMatchSnapshot();
    });
    it('should have 1 <Paper />', () => {
        expect(container.find(<Paper />).length).toBe(1);
    });
    it('should have 1 <DialogVideoWindow />', () => {
        expect(container.find(<DialogVideoWindow 
            title="test"
            openDialog={false}
            handleClickCloseDialog={() => {}} />).length).toBe(1);
    });
    it('should have 1 text field', () => {
        expect(container.find('input[type="text"]').length).toEqual(1);
    });
    it('should have 1 hidden image field', () => {
        const element = container.find('input[type="file"]');
        expect(element.length).toEqual(1);
        expect(element.get(0).props.containerStyle).toHaveProperty('display', 'none');
    });
});*/
