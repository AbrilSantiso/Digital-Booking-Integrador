import React from 'react'
import {render, screen} from '@testing-library/react'
import Enzyme, { configure } from "enzyme";
import LoadingCard from './LoadingCard'

import Adapter from "enzyme-adapter-react-16"

const { shallow } = Enzyme;

Enzyme.configure({ adapter: new Adapter() })

beforeEach(() => render(<LoadingCard />));

describe('Test for Loading Card', () => {
    it("renders correctly", () => {
        shallow(<LoadingCard />);
    });
});