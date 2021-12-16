import React from 'react'
import {render, screen} from '@testing-library/react'

import CheckInHourSelect from './CheckInHourSelect'

beforeEach(() => render(<CheckInHourSelect />));

describe('Test for check in hour select', () => {
    test('must display title check in hour', () => {
        expect(screen.getByText('Tu horario de llegada')).toBeInTheDocument();
    })
    test('must display check-in-hour-select-text', () => {
        expect(screen.getByText('Tu habitación estará lista para el check-in entre las 10:00 AM y las 11:00 PM')).toBeInTheDocument();
    })
    test('must display check-in-hour-label', () => {
        expect(screen.getByText('Indica tu horario estimado de llegada')).toBeInTheDocument();
    })
    test('must render all options"', () => {
        const options = screen.getAllByRole("option")
        expect(options.length).toBe(14)
    });
})