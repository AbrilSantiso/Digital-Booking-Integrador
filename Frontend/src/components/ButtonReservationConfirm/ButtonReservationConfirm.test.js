import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import ButtonReservation from './ButtonReservationConfirm'
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

describe('Test for Button Reservation', () => {
  test('must change route to click confirm', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    const { getByText } = render(
      <Router history={history}>
        <ButtonReservation />
      </Router>
    );
    expect(history.location.pathname).toBe('/');
    fireEvent.click(getByText('Confirmar reserva'));
    expect(history.location.pathname).toBe('/');
  });
});