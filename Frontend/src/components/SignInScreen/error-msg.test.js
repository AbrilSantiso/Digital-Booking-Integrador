import React from 'react'
import {render} from '@testing-library/react'
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16"
import ErrorMsg from './error-msg'

const { shallow } = Enzyme;

Enzyme.configure({ adapter: new Adapter() })

describe('Test for Error Message', () => {
    test("renders correctly", () => {
        shallow(<ErrorMsg />);
    });
    test("includes one paragraph", () => {
        const wrapper = shallow(<ErrorMsg />);
        expect(wrapper.find("p").length).toEqual(1);
    });
});