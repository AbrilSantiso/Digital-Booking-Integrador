import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
import ButtonRegister from './ButtonRegister';
import { createMemoryHistory } from 'history';

describe('Test for ButtonRegister', () => {
  test('must change route to sign-in', () => {
    const history = createMemoryHistory({ initialEntries: ['/home'] });
    const { getByText } = render(
      <Router history={history}>
        <ButtonRegister />
      </Router>
    );
    expect(history.location.pathname).toBe('/home');
    fireEvent.click(getByText('Crear cuenta'));
    expect(history.location.pathname).toBe('/registrarse');
  });
});