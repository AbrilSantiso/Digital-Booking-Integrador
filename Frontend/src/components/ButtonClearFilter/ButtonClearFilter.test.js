import React from 'react'
import {render, screen} from '@testing-library/react'
import ButtonClearFilter from './ButtonClearFilter'

beforeEach(() => render(<ButtonClearFilter />));

describe('Test for ButtonClearFilter', () => {
    test('must display text for button clear', () => {
        expect(screen.getByText('Borrar filtros')).toBeInTheDocument();
    })
    test('must count render button clear"', () => {
        const clearButton = screen.getAllByRole("button", {
            name: "clear",
        })
        expect(clearButton.length).toBe(1)
    });
});