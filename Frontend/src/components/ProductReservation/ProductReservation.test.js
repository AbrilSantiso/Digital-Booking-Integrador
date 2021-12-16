import React from 'react'
import Enzyme from "enzyme";
import { screen, render } from '@testing-library/react'
import { Router } from 'react-router-dom';
import ProductReservation from './ProductReservation'
import Adapter from "enzyme-adapter-react-16"
import { createMemoryHistory } from 'history';

const { shallow } = Enzyme; 
Enzyme.configure({ adapter: new Adapter() })


describe('Test for login in form', () => {
    test("renders correctly", () => {
        const history = createMemoryHistory({ initialEntries: ['/registrarse'] });
        shallow(
        <Router history={history}>
            <ProductReservation/>
        </Router>
        );
    });
});