import React from 'react'
import {render, screen} from '@testing-library/react'
import SearchCalendar from './SearchCalendar'
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16"

const { shallow } = Enzyme;

Enzyme.configure({ adapter: new Adapter() })

beforeEach(() => render(<SearchCalendar />));

describe('Test for SearchCalendar', () => {
    test('must render button apply', () => {
        const textbox = screen.getAllByRole("textbox", {
            name: "",
        })
        expect(textbox.length).toBe(1)
    });
    test('must render placeholder', () => {
        expect(screen.getByPlaceholderText('Check In - Check Out')).toBeInTheDocument();
    });
    test("renders correctly", () => {
        shallow(<SearchCalendar />);
    });
});