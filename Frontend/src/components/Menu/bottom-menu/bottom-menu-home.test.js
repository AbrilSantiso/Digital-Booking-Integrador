import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
import BottomMenuHome from './bottom-menu-home'
import { createMemoryHistory } from 'history';

describe('BottomMenuHome Sign in', () => {
  test('must change route to sign-in', () => {
    const history = createMemoryHistory({ initialEntries: ['/home'] });
    const { getByText } = render(
      <Router history={history}>
        <BottomMenuHome />
      </Router>
    );
    expect(history.location.pathname).toBe('/home');
    fireEvent.click(getByText('Crear cuenta'));
    expect(history.location.pathname).toBe('/registrarse');
  });
});

describe('BottomMenuHome Login', () => {
  test('must change route to login', () => {
    const history = createMemoryHistory({ initialEntries: ['/home'] });
    const { getByText } = render(
      <Router history={history}>
        <BottomMenuHome />
      </Router>
    );
    expect(history.location.pathname).toBe('/home');
    fireEvent.click(getByText('Iniciar sesión'));
    expect(history.location.pathname).toBe('/ingresar');
  });
});