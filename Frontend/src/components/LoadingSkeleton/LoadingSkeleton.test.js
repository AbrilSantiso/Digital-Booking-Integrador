import React from 'react'
import {render} from '@testing-library/react'
import Enzyme from "enzyme";
import LoadingSkeleton from './LoadingSkeleton'

import Adapter from "enzyme-adapter-react-16"

const { shallow } = Enzyme;

Enzyme.configure({ adapter: new Adapter() })

beforeEach(() => render(<LoadingSkeleton />));

describe('Test for Loading Card', () => {
    test("renders correctly", () => {
        shallow(<LoadingSkeleton />);
    });
    test("includes loader-container-product-detail", () => {
        const wrapper = shallow(<LoadingSkeleton isProductDetail/>);
        expect(wrapper.find(".loader-container-product-detail").length).toEqual(1);
    });
});

