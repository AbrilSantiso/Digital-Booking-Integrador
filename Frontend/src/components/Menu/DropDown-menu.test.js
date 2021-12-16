import React from 'react'
import {render} from '@testing-library/react'

import Menu from './DropDown-menu'

test('must display a footer text', () => {
    const component = render(<Menu />);
    component.getByText('MENÚ')
})