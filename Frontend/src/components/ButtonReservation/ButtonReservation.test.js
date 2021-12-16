import React from 'react'
import {render, screen} from '@testing-library/react'
import StartReservationButton from './ButtonReservation'

beforeEach(() => render(<StartReservationButton />));

describe('Test for ButtonReservation', () => {
    test('must count render button reservation"', () => {
        const reservationButton = screen.getAllByRole("button", {
            name: "Iniciar Reserva",
        })
        expect(reservationButton.length).toBe(1)
    });
});