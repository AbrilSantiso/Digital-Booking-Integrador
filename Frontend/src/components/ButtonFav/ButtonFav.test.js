import React from 'react'
import {render, screen} from '@testing-library/react'
import Enzyme from "enzyme";
import ButtonFav from './ButtonFav'

import Adapter from "enzyme-adapter-react-16"

const { shallow } = Enzyme;

Enzyme.configure({ adapter: new Adapter() })

beforeEach(() => render(<ButtonFav />));

describe('Test for ButtonFav', () => {
    test('must render button fav"', () => {
        const wrapper = shallow(<ButtonFav />);
        expect(wrapper.find(".heart-icon").length).toEqual(1);
    });
    test("renders correctly", () => {
        shallow(<ButtonFav />);
    });
});