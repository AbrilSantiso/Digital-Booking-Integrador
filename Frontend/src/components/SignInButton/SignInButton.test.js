import React from 'react'
import { render, screen } from '@testing-library/react'
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16"

import SignInButton from './SignInButton'

const { shallow } = Enzyme;

Enzyme.configure({ adapter: new Adapter() })

beforeEach(() => render(<SignInButton />));

describe('Test for RatingStars', () => {
    test('must display a login text', () => {
        expect(screen.getByText('Ingresar')).toBeInTheDocument();
    });
    test("renders correctly", () => {
        shallow(<SignInButton />);
    });
    test('must render sign in', () => {
        const nextButton = screen.getAllByRole("button", {
            name:"sign-in"
        })
        expect(nextButton.length).toBe(1)
    });
});