import React from 'react'
import {render, screen} from '@testing-library/react'
import Calendar from './Calendar'

beforeEach(() => render(<Calendar />));

describe('Test for Calendar', () => {
    test('must render button apply', () => {
        const textbox = screen.getAllByRole("textbox", {
            name: "",
        })
        expect(textbox.length).toBe(1)
    });
    test('must render placeholder', () => {
        expect(screen.getByPlaceholderText('Check In - Check Out')).toBeInTheDocument();
    })
});
