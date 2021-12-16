import React from 'react'
import {render} from '@testing-library/react'
import Enzyme from "enzyme";
import ProductLabel from './ProductLabel'

import Adapter from "enzyme-adapter-react-16"
import {Route, MemoryRouter} from 'react-router-dom';
const { shallow } = Enzyme;

Enzyme.configure({ adapter: new Adapter() })

describe('Test for Product Label', () => {
    test("renders correctly", () => {
        const renderWithRouter = ({children}) => (
            render(
              <MemoryRouter initialEntries={['/producto/1']}>
                <Route path='/producto/:id'>
                    shallow(<ProductLabel />)
                </Route>
              </MemoryRouter>
            )
          )
    });
})
