import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
import BottomMenuSignUp from './bottom-menu-sign-up';
import { createMemoryHistory } from 'history';

describe('BottomMenuHome Login', () => {
  test('must change route to login', () => {
    const history = createMemoryHistory({ initialEntries: ['/home'] });
    const { getByText } = render(
      <Router history={history}>
        <BottomMenuSignUp />
      </Router>
    );
    expect(history.location.pathname).toBe('/home');
    fireEvent.click(getByText('Iniciar sesión'));
    expect(history.location.pathname).toBe('/ingresar');
  });
});