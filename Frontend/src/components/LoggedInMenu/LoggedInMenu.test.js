import React from 'react'
import {render, screen} from '@testing-library/react'
import Enzyme from "enzyme";
import LoggedInMenu from './LoggedInMenu'

import Adapter from "enzyme-adapter-react-16"

const { shallow } = Enzyme;

Enzyme.configure({ adapter: new Adapter() })

describe('Test for LoggedInMenu storage', () => {
    test("renders correctly", () => {
        const nameChar = "DR"
        const wrapper = shallow(<LoggedInMenu setName={nameChar}/>);
        expect(wrapper.find("p").length).toEqual(2);
    });
});
