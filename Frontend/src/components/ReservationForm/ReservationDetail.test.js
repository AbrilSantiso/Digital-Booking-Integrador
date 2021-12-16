import React from 'react'
import Enzyme, { mount } from "enzyme";
import { screen, render } from '@testing-library/react'
import { Router } from 'react-router-dom';
import ReservationDetail from './ReservationDetail'
import Adapter from "enzyme-adapter-react-16"

const { shallow } = Enzyme; 
Enzyme.configure({ adapter: new Adapter() })


describe('Test for login in form', () => {
    test("renders correctly", () => {
          jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
            useParams: () => ({
              id: 1,
            }),
            useRouteMatch: () => ({ url: '/company/company-id1/team/team-id1' }),
          }));
    });
});