import React from 'react'
import {render} from '@testing-library/react'
import Enzyme from "enzyme";
import App from './App'

import Adapter from "enzyme-adapter-react-16"

const { shallow } = Enzyme;

Enzyme.configure({ adapter: new Adapter() })

beforeEach(() => render(<App />));

describe('Test for App', () => {
    test("renders correctly", () => {
        shallow(<App />);
    });
});