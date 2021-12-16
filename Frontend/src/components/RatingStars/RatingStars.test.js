import React from 'react'
import {render} from '@testing-library/react'
import Enzyme from "enzyme";
import RatingStars from './RatingStars'

import Adapter from "enzyme-adapter-react-16"

const { shallow } = Enzyme;

Enzyme.configure({ adapter: new Adapter() })

beforeEach(() => render(<RatingStars />));

describe('Test for RatingStars', () => {
    test("renders correctly", () => {
        shallow(<RatingStars />);
    });
});