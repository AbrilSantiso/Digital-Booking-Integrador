import React from 'react'
import {render, screen} from '@testing-library/react'
import Adapter from "enzyme-adapter-react-16"
import Enzyme from "enzyme";
import Footer from './Footer'
const { shallow } = Enzyme; 

Enzyme.configure({ adapter: new Adapter() })

//beforeEach(() => render(<Footer />));

describe('Test for Footer', () => {
    test("renders correctly", () => {
        shallow(<Footer/>);
      });
    /*
    test('must display a footer text', () => {
        expect(screen.getByText('©2021 Digital Booking')).toBeInTheDocument();
    })
    test('must count render facebook icon"', () => {
        const list = screen.getAllByRole("link", {
            name: "facebook",
        })
        expect(list.length).toBe(1)
    });
    test('must count render instagram icon"', () => {
        const list = screen.getAllByRole("link", {
            name: "instagram",
        })
        expect(list.length).toBe(1)
    });
    test('must count render linkedin icon"', () => {
        const list = screen.getAllByRole("link", {
            name: "linkedin",
        })
        expect(list.length).toBe(1)
    });
    test('must count render twitter icon"', () => {
        const list = screen.getAllByRole("link", {
            name: "twitter",
        })
        expect(list.length).toBe(1)
    });*/
})