import React from 'react'
import {render, screen} from '@testing-library/react'
import ButtonProductCreate from './ButtonProductCreate'

beforeEach(() => render(<ButtonProductCreate />));

describe('Test for ButtonProductCreate', () => {
    test('must display text for button create', () => {
        expect(screen.getByText('Crear')).toBeInTheDocument();
    })
    test('must count render button create"', () => {
        const createButton = screen.getAllByRole("button", {
            name: "Crear",
        })
        expect(createButton.length).toBe(1)
    });
});