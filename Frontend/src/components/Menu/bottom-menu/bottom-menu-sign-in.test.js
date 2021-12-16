import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
import BottomMenuSignIn from './bottom-menu-sign-in';
import { createMemoryHistory } from 'history';

describe('BottomMenuHome Sing in', () => {
    test('must change route to sign in', () => {
      const history = createMemoryHistory({ initialEntries: ['/home'] });
      const { getByText } = render(
        <Router history={history}>
          <BottomMenuSignIn />
        </Router>
      );
      expect(history.location.pathname).toBe('/home');
      fireEvent.click(getByText('Crear Cuenta'));
      expect(history.location.pathname).toBe('/registrarse');
    });
  });
