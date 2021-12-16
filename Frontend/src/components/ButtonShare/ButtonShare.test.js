import React from 'react'
import {render, screen} from '@testing-library/react'
import ButtonShare from './ButtonShare'

beforeEach(() => render(<ButtonShare />));

describe('Test for Button Share', () => {
    test('must render button share"', () => {
        const shareButton = screen.getAllByRole("button", {
            name: "share",
        })
        expect(shareButton.length).toBe(1)
    });
});
