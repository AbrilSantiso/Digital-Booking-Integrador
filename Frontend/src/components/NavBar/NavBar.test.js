import React from 'react'
import {render, screen} from '@testing-library/react'
import NavBar from './NavBar'

beforeEach(() => render(<NavBar />));

describe('Test for NavBar', () => {
    test('must render nav bar"', () => {
        const navBar = screen.getAllByRole("button", {
            name: "",
        })
        expect(navBar.length).toBe(1)
    });
});