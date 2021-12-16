import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
import SignUpButton from './SignUpButton';
import { createMemoryHistory } from 'history';

describe('Test for SignInButton', () => {
  test('must not change route to login', () => {
    const history = createMemoryHistory({ initialEntries: ['/home'] });
    const { getByText } = render(
      <Router history={history}>
        <SignUpButton />
      </Router>
    );
    expect(history.location.pathname).toBe('/home');
    fireEvent.click(getByText('Crear cuenta'));
    expect(history.location.pathname).toBe('/home');
  });
})