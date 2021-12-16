import React from 'react'
import {render, screen} from '@testing-library/react'

import SearchBar from './SearchBar'

beforeEach(() => render(<SearchBar />));

describe('Test for Search Bar', () => {
    test('must display a search text', () => {
        expect(screen.getByText('Buscar')).toBeInTheDocument();
    })
    test('must display a title', () => {
        expect(screen.getByText('Busca ofertas en hoteles, casas y mucho más')).toBeInTheDocument();
    })
    test('must render form"', () => {
        const section = screen.getAllByRole("region", {
            name: "search",
        })
        expect(section.length).toBe(1)
    });
    test('must render button search"', () => {
        const buttonSearch = screen.getAllByRole("button", {
            name: "search button",
        })
        expect(buttonSearch.length).toBe(1)
    });
})