import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'

import SocialFollow from './SocialFollow'

beforeEach(() => render(<SocialFollow />));

describe('Test for Social follow', () => {
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
    });
    test('must render a href facebook', () => {
        const facebook = screen.getByRole("link", {name: "facebook"})
        fireEvent.click(facebook);
        expect(screen.getByRole("link", {name: "facebook"})).toHaveAttribute('href', 'https://www.facebook.com/DigitalBooking.Lat/')
    });
    test('must render a href linkedin', () => {
        const linkedin = screen.getByRole("link", {name: "linkedin"})
        fireEvent.click(linkedin);
        expect(screen.getByRole("link", {name: "linkedin"})).toHaveAttribute('href', 'https://www.linkedin.com')
    });
    test('must render a href twitter', () => {
        const twitter = screen.getByRole("link", {name: "twitter"})
        fireEvent.click(twitter);
        expect(screen.getByRole("link", {name: "twitter"})).toHaveAttribute('href', 'https://twitter.com/DigitalBooking')
    });
    test('must render a href instagram', () => {
        const instagram = screen.getByRole("link", {name: "instagram"})
        fireEvent.click(instagram);
        expect(screen.getByRole("link", {name: "instagram"})).toHaveAttribute('href', 'https://www.instagram.com/digital.booking/')
    });
});