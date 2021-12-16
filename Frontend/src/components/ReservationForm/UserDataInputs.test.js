import React from 'react'
import {render, screen} from '@testing-library/react'
import UserDataInputs from './UserDataForm'

beforeEach(() => render(<UserDataInputs />));

describe('Test for Reservation form', () => {
    test('must render heading complete data"', () => {
        const completeData = screen.getAllByRole("heading", {
            name: "Completa tus datos",
        })
        expect(completeData.length).toBe(1)
    });
    test('must render all textbox"', () => {
        const textbox = screen.getAllByRole("textbox")
        expect(textbox.length).toBe(4)
    });
    test('must render name textbox"', () => {
        const nameTextbox = screen.getAllByRole("textbox", {
            name: "Nombre",
        })
        expect(nameTextbox.length).toBe(1)
    });
    test('must render last name textbox"', () => {
        const lastNameTextbox = screen.getAllByRole("textbox", {
            name: "Apellido",
        })
        expect(lastNameTextbox.length).toBe(1)
    });
    test('must render email textbox"', () => {
        const emailTextbox = screen.getAllByRole("textbox", {
            name: "Correo electrónico",
        })
        expect(emailTextbox.length).toBe(1)
    });
    test('must render city textbox"', () => {
        const cityTextbox = screen.getAllByRole("textbox", {
            name: "Ciudad",
        })
        expect(cityTextbox.length).toBe(1)
    });
    test('must render radio button"', () => {
        const radio = screen.getAllByRole("radio")
        expect(radio.length).toBe(2)
    });
});
