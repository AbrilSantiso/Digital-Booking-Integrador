import React from 'react'
import {render} from '@testing-library/react'
import Enzyme from "enzyme";
import BottomMenuHomeLogged from './bottom-menu-home-logged'

import Adapter from "enzyme-adapter-react-16"

const { shallow } = Enzyme;

Enzyme.configure({ adapter: new Adapter() })

//beforeEach(() => render(<BottomMenuHomeLogged />));

describe('Test for BottomMenuHomeLogged', () => {
    it("renders correctly", () => {
        shallow(<BottomMenuHomeLogged />);
    });
    it("includes one paragraph", () => {
        const wrapper = shallow(<BottomMenuHomeLogged />);
        expect(wrapper.find("p").length).toEqual(1);
    });
});