import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
import Header from './Header';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16"
import { createMemoryHistory } from 'history';
const { shallow } = Enzyme; 

Enzyme.configure({ adapter: new Adapter() })

describe('Header', () => {
  test('must change route to login', () => {
    const history = createMemoryHistory({ initialEntries: ['/home'] });
    const { getByText } = render(
      <Router history={history}>
        <Header />
      </Router>
    );
    expect(history.location.pathname).toBe('/home');
    fireEvent.click(getByText('El confort que mereces'));
    expect(history.location.pathname).toBe('/');
  });
  test("renders correctly", () => {
    shallow(<Header />);
  });
});