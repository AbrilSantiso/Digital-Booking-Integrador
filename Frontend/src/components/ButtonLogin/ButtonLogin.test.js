import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
import ButtonLogin from './ButtonLogin';
import { createMemoryHistory } from 'history';

describe('ButtonLogin', () => {
  test('must change route to login', () => {
    const history = createMemoryHistory({ initialEntries: ['/home'] });
    const { getByText } = render(
      <Router history={history}>
        <ButtonLogin />
      </Router>
    );
    expect(history.location.pathname).toBe('/home');
    fireEvent.click(getByText('Iniciar sesión'));
    expect(history.location.pathname).toBe('/ingresar');
  });
});