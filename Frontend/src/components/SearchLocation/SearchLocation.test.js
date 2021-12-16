import React from 'react'
import Enzyme from "enzyme";
import {render, screen} from '@testing-library/react'
import Adapter from "enzyme-adapter-react-16"
import SearchLocation from './SearchLocation'

const { shallow } = Enzyme; 

Enzyme.configure({ adapter: new Adapter() })

beforeEach(() => render(<SearchLocation />));

describe('Test for SearchLocation', () => {
  
  test("must display default text in select", () => {
    expect(screen.getByText("¿A dónde vamos?")).toBeInTheDocument();
    });
  test("renders correctly", () => {
    const wrapper = shallow(<SearchLocation/>);
    expect(wrapper.find("option").length).toEqual(1);
  });
});