import React from 'react'
import {render} from '@testing-library/react'
import Enzyme from "enzyme";
import ButtonShareModal from './ButtonShareModal'

import Adapter from "enzyme-adapter-react-16"

const { shallow } = Enzyme;

Enzyme.configure({ adapter: new Adapter() })

beforeEach(() => render(<ButtonShareModal />));

describe('Test for ButtonShareModal', () => {
    test("renders correctly", () => {
        shallow(<ButtonShareModal />);
    });
});