import React from 'react'
import {render} from '@testing-library/react'
import Enzyme from "enzyme";
import MapButtonHome from './MapButtonHome'

import Adapter from "enzyme-adapter-react-16"

const { shallow } = Enzyme;

Enzyme.configure({ adapter: new Adapter() })

describe('Test for MapButtonHome', () => {
    test("renders correctly", () => {
        shallow(<MapButtonHome />);
    });
});