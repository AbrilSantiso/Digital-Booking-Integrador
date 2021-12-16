import React from 'react'
import {render, screen} from '@testing-library/react'
import Adapter from "enzyme-adapter-react-16"
import Enzyme from "enzyme";

import ProductPolicies from './ProductPolicies'

const { shallow } = Enzyme;

Enzyme.configure({ adapter: new Adapter() })


beforeEach(() => render(<ProductPolicies />));

describe('Test for policies of products', () => {
    test('must display title detail product', () => {
        expect(screen.getByText('¿Qué tienes que saber?')).toBeInTheDocument();
    })
    test('must display rules title', () => {
        expect(screen.getByText('Normas de la casa')).toBeInTheDocument();
    })
    test('must display rules title II', () => {
        expect(screen.getByText('Salud y seguridad')).toBeInTheDocument();
    })
    test('must display rules title III', () => {
        expect(screen.getByText('Política de cancelación')).toBeInTheDocument();
    })
    test("includes seven paragraphs", () => {
        const wrapper = shallow(<ProductPolicies />);
        expect(wrapper.find("p").length).toEqual(7);
    });
    test("includes two h2", () => {
        const wrapper = shallow(<ProductPolicies />);
        expect(wrapper.find("h2").length).toEqual(1);
    });
    test("includes one section", () => {
        const wrapper = shallow(<ProductPolicies />);
        expect(wrapper.find("section").length).toEqual(1);
    });
    test("includes one s", () => {
        const wrapper = shallow(<ProductPolicies />);
        expect(wrapper.find(".product-rules-container").length).toEqual(3);
    });
})

